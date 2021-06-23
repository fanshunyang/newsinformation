<template>
	<view class="search">
		<view class="status_bar">
		   <!-- 这里是状态栏 -->
		 </view>
		 <view class="search-box-header">
		 		<mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword" @search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" v-model="keyword" ></mSearch>
		 </view>
		 
		 					
			<scroll-view :scroll-y="true" style="height: 100%;" >
				
			<view class="contentsy" style="height: 800px;">
				<view class="search-box">

					<!-- mSearch组件 如果使用原样式，删除组件元素-->
					<!-- <mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword" @search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" v-model="keyword"></mSearch> -->
					<!-- 原样式 如果使用原样式，恢复下方注销代码 -->
					<!-- 						
					<view class="input-box">
						<input type="text" :adjust-position="true" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword" @confirm="doSearch(false)"
						 placeholder-class="placeholder-class" confirm-type="search">
					</view>
					<view class="search-btn" @tap="doSearch(false)">搜索</view> 
					 -->
					<!-- 原样式 end -->
				</view>
			
					
				<view class="search-keyword" >
					<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
						<block v-for="(row,index) in keywordList" :key="index">	
							<view class="keyword-entry" hover-class="keyword-entry-tap" >
								
								<view class="keyword-text" @tap.stop="doSearch(keywordList[index].keyword)">
								
									<rich-text :nodes="row.htmlStr"></rich-text>
								</view>
								<view class="keyword-img" @tap.stop="setKeyword(keywordList[index].keyword)">
									<image src="/static/HM-search/back.png"></image>
								</view>
							</view>
						</block>
					</scroll-view>
				
					<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
						<view class="keyword-block" v-if="oldKeywordList.length>0">
							<view class="keyword-list-header">
								<view>历史搜索</view>
								<view>
									<image @tap="oldDelete" src="/static/HM-search/delete.png"></image>
								</view>
							</view>
							<view class="keyword">
							
								<view class="keyword-views" v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
							</view>
						</view>
						<view class="keyword-block">
							<view class="keyword-list-header">
								<view>热门资讯</view>
								<view>
									<image @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'"></image>
								</view>
							</view>
							<view class="keyword" v-if="forbid==''">
								<view class="keyword-view">
									<view class="keyword-view-ul">
										
									</view>
									<view class="keyword-view-li" >
										<view class="keyword-view-li-left" v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">
											<view class="keyword-view-li-left-text">
												 {{keyword}}
												
											</view>
										
											
										</view>
									
										
										
									</view>
									
									
									
									
								</view>
							<!-- 	<view class="keyword-view" v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view> -->
							</view>
							<view class="hide-hot-tis" v-else>
								<view>当前搜热门搜索已隐藏</view>
							</view>
						</view>
						<view class="search-heated">
							<view class="search-heated-hearder">
							
								热议中 
							</view>
						
							<view class="search-heated-ul">
								<view class="search-heated-li" v-for="(item,index) in heatedlist" :key='index' @tap='doSearchs(item)'>
									<text class="search-heated-li-text">{{item}}<text class="search-item-text">热</text></text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			
			</view>
			</scroll-view>
	</view>
</template>

<script>
	//引用mSearch组件，如不需要删除即可
	import mSearch from '../../components/mehaotian-search-revision/mehaotian-search-revision.vue';
	export default {
		data() {
			return {
				defaultKeyword: "",
				keyword: "",
				//历史搜索
				oldKeywordList: [],
				//热门资讯
				hotKeywordList: [],
				//热议中
				heatedlist:[
					'#游戏推荐#','#支付宝集五福#','#周末玩什么#','#玩家热议#'
				],
				//搜索接口
				keywordList: [],
				forbid: '',
				isShowKeywordList: false
			}
		},
		onLoad() {
			this.init();
		},
		components: {
			//引用mSearch组件，如不需要删除即可
			mSearch
		},
		methods: {
			init() {
				this.loadDefaultKeyword();
				this.loadOldKeyword();
				this.loadHotKeyword();
			},
			blur(){
				uni.hideKeyboard()
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "输入搜索内容";
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
					
						let OldKeys = JSON.parse(res.data);
				
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			loadHotKeyword() {
				//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
				this.hotKeywordList = [
				'绝地求生', 'lol', 'cf', '逆战', '逆水寒', '一梦江湖', '王者荣耀', '三国志.战略', 
	
				];
			}, 
			
			//监听输入
			inputChange(event) {
				//兼容引入组件时传入参数情况
				let keyword = event.detail?event.detail.value:event;
			
				if (!keyword) {
					this.keywordList = [];
					this.isShowKeywordList = false				
					return;
				}
				this.isShowKeywordList = true;
				//以下示例截取淘宝的关键字，请替换成你的接口
				uni.request({
					url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + keyword, //仅为示例
					success: (res) => {
						console.log(res)
						this.keywordList = [];
						this.keywordList = this.drawCorrelativeKeyword(res.data.result, keyword);
						console.log(this.keywordList)
					}
				});
			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				var len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					
					//定义高亮#9f9f9f
					var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row[0],
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			//顶置关键字
			setKeyword(index) {
				this.keyword = this.keywordList[index].keyword;
			
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(keyword) {
			
				console.log(keyword)
				keyword = keyword===false?this.keyword:keyword;
				this.keyword = keyword;
				this.saveKeyword(keyword); //保存为历史 
				uni.showToast({
					title: keyword, 
					icon: 'none',
					duration: 2000
				});
				//以下是示例跳转淘宝搜索，可自己实现搜索逻辑
				/*
				//#ifdef APP-PLUS
				plus.runtime.openURL(encodeURI('taobao://s.taobao.com/search?q=' + keyword));
				//#endif
				//#ifdef H5
				window.location.href = 'taobao://s.taobao.com/search?q=' + keyword
				//#endif
				*/
			},
			doSearchs (keyword) {
				uni.navigateTo({
					url:'../themet/themet'
				})
				// console.log(keyword)
				// keyword = keyword===false?this.keyword:keyword;
				// this.keyword = keyword;
				// this.saveKeyword(keyword); //保存为历史 
				// uni.showToast({
				// 	title: keyword, 
				// 	icon: 'none',
				// 	duration: 2000
				// });
			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
			
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						console.log(OldKeys)
						var findIndex = OldKeys.indexOf(keyword);
						console.log(findIndex)
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
					
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						console.log(keyword)
						uni.setStorage({
							key: 'OldKeys', 
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			}
		}
	}
</script>

<style lang="scss">
 page, .search{
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
 .status_bar {

      height: var(--status-bar-height);
      width: 100%; 
	 background-color: #fff;
	 
  }
  .search {
	  .search-box-header {
		  width: 720upx;
	margin-left: 30upx;
	  }
	  .search-heated {
		padding-left: 30upx;
		.search-heated-hearder {
			width: 106upx;
			height: 32upx;
			font-size: 32upx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color: #333333;
			line-height: 34upx;
			letter-spacing: 1px;
			margin-bottom: 44upx;
			
		}
		.search-heated-ul {
				display: flex;
				// justify-content: space-between;
			
				flex-direction: row;
				flex-wrap: wrap;
			.search-heated-li {
				margin-right: 80upx;
				margin-bottom: 40upx;
				.search-heated-li-text {
					width: 140px;
					letter-spacing: 1px;
					display: block;
					font-size: 28upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #333333;
					line-height: 34upx;
					.search-item-text {
						width: 24upx;
						// height: 24upx;
						background: #EA5044;
						border-radius: 4upx;
						margin-left: 16upx;
						color: #fff;
						padding-left: 4upx;
					}
				}
			}
		}
	  }
  }

  .search-box {width:100%;  background-color:#fff;padding:15upx 2.5%;display:flex;justify-content:space-between;position:sticky;top: 0;}
  .search-box .mSearch-input-box{width: 100%;}
  .search-box .input-box {width:85%;flex-shrink:1;display:flex;justify-content:center;align-items:center;}
  .search-box .search-btn {width:15%;margin:0 0 0 2%;display:flex;justify-content:center;align-items:center;flex-shrink:0;font-size:28upx;color:#fff;background:linear-gradient(to right,#ff9801,#ff570a);border-radius:60upx;}
  .search-box .input-box>input {width:100%;height:60upx;font-size:32upx;border:0;border-radius:60upx;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 3%;margin:0;background-color:#ffffff;}
  .placeholder-class {color:#9e9e9e;}
 
  .search-keyword {width:100%;background-color:rgb(242,242,242);}
  .keyword-list-box {height:calc(100vh - 110upx);padding-top:10upx;border-radius:20upx 20upx 0 0;background-color:#fff;}
  .keyword-entry-tap {background-color:#eee;}
  .keyword-entry {width:94%;height:80upx;margin:0 3%;font-size:30upx;color:#333;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1upx #e7e7e7;}
  .keyword-entry image {width:60upx;height:60upx;}
  .keyword-entry .keyword-text,.keyword-entry .keyword-img {height:80upx;display:flex;align-items:center;}
  .keyword-entry .keyword-text {width:90%;}
  .keyword-entry .keyword-img {width:10%;justify-content:center;}
  .keyword-box {height:calc(100vh - 110upx);border-radius:20upx 20upx 0 0;background-color:#fff;}
  .keyword-box .keyword-block {padding:10upx 0;}
  .keyword-box .keyword-block .keyword-list-header {width:100%;padding:10upx 30upx; font-family: Microsoft YaHei;font-size:32upx; margin-bottom: 21upx; color:#333;display:flex;justify-content:space-between;}
  .keyword-box .keyword-block .keyword-list-header image {width:40upx;height:40upx;}
  .keyword-box .keyword-block .keyword  {width:100%;padding:3px 30upx;display:flex;flex-flow:wrap;justify-content:flex-start;}
  .keyword-box .keyword-block .keyword .keyword-views {display:flex;justify-content:center;align-items:center;border-radius:60upx;padding:0 20upx;margin:10upx 20upx 10upx 0;height:60upx;font-size:28upx;background-color:rgb(242,242,242);color:#6b6b6b;}
  .keyword-box .keyword-block .hide-hot-tis {display:flex;justify-content:center;font-size:28upx;color:#6b6b6b;}
  .keyword-box .keyword-block .keyword .keyword-view {
	 //  display:flex;
	 
	 //  justify-content:center;
	 //  align-items:center;
	 //  border-radius:60upx;
	 //  padding:0 20upx;
	 //  margin:10upx 20upx 10upx 0;
	 //  height:60upx;
	 //  font-size:28upx;
	 //  background-color:rgb(242,242,242);
	 //  color:#333;
	 //  letter-spacing: 1px;
	 //  font-family: Microsoft YaHei;
	 //  font-weight: 400;
	// margin-left: 30upx;
	    
}
.keyword-box .keyword-block .keyword .keyword-view .keyword-view-ul {

}
.keyword-box .keyword-block .keyword .keyword-view .keyword-view-li {
	
	  display:flex;
	  justify-content: space-between;
	  flex-direction: row;
	  flex-wrap: wrap;
	
}

.keyword-box .keyword-block .keyword .keyword-view .keyword-view-li .keyword-view-li-left {
	  display:flex;
	  flex-direction: column;
	 width: 172px;
	 
	
}
.keyword-box .keyword-block .keyword .keyword-view .keyword-view-li .keyword-view-li-left .keyword-view-li-left-text {
	width: 273upx;
	height: 28upx;
	font-size: 28upx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #333333;
	line-height: 34upx;
	// margin-right: 345upx;

	 // margin-top: 40upx;
	 margin-bottom: 40upx;
	 letter-spacing: 1px;
	 // text-align: center;
	
}

// .keyword-box .keyword-block .keyword .keyword-view .keyword-view-li .keyword-view-li-right {
// 	width: 155upx;
// 	height: 28upx;
// 	font-size: 28upx;
// 	font-family: Microsoft YaHei;
// 	font-weight: 400;
// 	color: #333333;
// 	line-height: 34upx;
// 	 margin-bottom: 40upx;
// 	  letter-spacing: 1px;
	 
// 	 // margin-top: 40upx;
// }
</style>
