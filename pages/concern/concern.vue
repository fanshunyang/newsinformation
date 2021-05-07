<template>
	<view class="concern">
	<view class="status_bar">
	        <!-- 这里是状态栏 -->
	    </view>
		<view class="concern-header">
			<view class="concern_icon el-icon-arrow-left" @click="back">
				
			</view>
			<view class="concern_classify" :class="{'exhibition':currIndex===index}" @click="concernTable(index)" v-for="(item,index) in concern_classify" :key='index'>
			{{item.text}}
			</view>
		</view>
		<swiper style="height: 100%;"  :current="currIndex" @change="changItem">
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;" >
				<view class="concern_search">
				 <view class="concern_search_icon el-icon-search">
				 
				 </view>
				<input v-model="textvalue"  @input="search_site" class="text" type="text" placeholder="输入昵称搜索" focus >
				<view class="concern_search_icon el-icon-close" v-if="close" @click="search_close">
				
				</view>
				</view>
			
				<view class="concern_list">
					<view class="ul">
						<view class="li" v-for="(item,index) in list" :key='index' @click="concern_list_item(index)">
							<view class="li_kind">
								<image class="imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="li_kind_text">
								{{item.text}}
								</view>
							</view>
							<view class="li_close">
								+ 关注
							</view>
							
						</view>
						
					</view>
				</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;" >
				<view class="concern_search">
				 <view class="concern_search_icon el-icon-search">
				 
				 </view>
				<input v-model="textvalue"  @input="search_site" class="text" type="text" placeholder="输入昵称搜索" focus >
				<view class="concern_search_icon el-icon-close" v-if="close" @click="search_close">
				
				</view>
				</view>
							
				<view class="concern_list">
					<view class="ul">
						<view class="li" v-for="(item,index) in list" :key='index' @click="concern_list_item(index)">
							<view class="li_kind">
								<image class="imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="li_kind_text">
								{{item.text}}
								</view>
							</view>
						
							
						</view>
						
					</view>
				</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	
	export default {
		components: {
		
		},
		data() {
			return {
				currIndex:0,
				close:false,
				textvalue:'',
				concern_classify:[
					{id:1,text:'关注'},
					{id:2,text:'粉丝'}
				],
				concern_list:[
					{id:1,text:'宝哥'},
					{id:2,text:'死神'},
					{id:3,text:'死亡'},
					{id:4,text:'宝哥他媳妇'},
					{id:5,text:'思思'},
					{id:6,text:'战神'}
				],
				list:[
					{id:1,text:'宝哥'},
					{id:2,text:'死神'},
					{id:3,text:'死亡'},
					{id:4,text:'宝哥他媳妇'},
					{id:5,text:'思思'},
					{id:6,text:'战神'}
				]
			}
		},
		onLoad(va) {
			if (va.data==='1') {
				this.currIndex=1
			}
			
		},
		methods: {
			//返回上一级页面
			back () {
			  uni.navigateBack()
			},
			
			concernTable (va) {
			  this.currIndex = va
			},
			changItem (va) {
			
				this.currIndex = va.detail.current
			},
			search_close () {
				this.list = []
				this.textvalue = ''
				this.close = false
			},
			concern_list_item () {
				uni.navigateTo({
					url:'../homepage/homepage'
				})
			},
			search_site (va) {
				
				let val = va.detail.value;
				console.log(val)
				let {concern_list} = this
				let arr = [];
				for (let i = 0; i < concern_list.length; i++) {
				
					if (concern_list[i].text.indexOf(val) !==-1) {
					
						arr.push(concern_list[i]);
						
					}
				}
				console.log(arr)
				if (!val) {
					this.list = arr
					this.close = false
				} else {
					this.list = arr;
					this.close = true
				}
			},
			
		}
	}
</script>

<style lang="scss">
	page, .concern{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		
	
	 }
 .concern {
	  .concern-header {
		  margin-left: 30upx;
		  margin-right: 30upx;
		 display: flex;
		 .concern_icon {
			margin-right: 229upx;
			font-size: 36upx;
		 }
		 .exhibition {
			 border-bottom: 2px solid #046AFF;
			  color:#333 !important;
			  font-weight: 700 !important;
		 }
		 .concern_classify {
			 height: 46upx;
			 font-size: 26upx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #999999;
			 line-height: 34upx;
			 margin-right: 80upx;
			 letter-spacing: 2px;
		 }
	 }
	 .concern_search {
		 display: flex;
		 height: 60upx;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-top: 24upx;
		 background-color: #f3f3f3;
		 .concern_search_icon {
			 margin-right: 20upx;
			 margin-top: 16upx;
			 margin-left: 20upx;
		 }
		 .text {
			 font-size: 26upx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #CCCCCC;
			 flex: 1;
			 line-height: 34upx;
			 margin-top: 12upx;
			 letter-spacing: 1px;
		 }
	 }
	 .concern_list {
	
		 margin-top: 66upx;
		 margin-left: 30upx;
		 margin-right: 30upx;
		 
		 .ul {
			 background-color: #fff;
			  .li {
				 display: flex;
				 border-bottom: 1px solid #F2F2F2;
				margin-bottom: 24upx;
				 .li_kind {
				 	display: flex;
					flex: 1;
					margin-bottom: 24upx;
					 .imgs {
						width: 82upx;
						height: 82upx;
						border-radius: 50%;
						
					 }
					 .li_kind_text {
					
						font-size: 28upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #404040;
						line-height: 43upx;
						margin-top: 18upx;
						margin-left: 24upx;
						letter-spacing: 1px;
					}
				} 
				 .li_close {
					width: 128upx;
					height: 52upx;
					margin-top: 16upx;
					background: #1482FF;
					border-radius: 4px;
					text-align: center;
					color: #fff;
					font-family: Microsoft YaHei;
					font-weight: 400;
					line-height: 52upx;
				}
			 }
		 }
	 }
 }
</style>
