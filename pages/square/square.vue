<template>
	<view class="square">
	<view class="status_bar">
	         <!-- 这里是状态栏 -->
				
					
	  </view>
	  	<!-- 全局顶部选项卡 -->
	 			<view class="nav-bat">
	 			
	 					<view class="nav-bat-left">
	 					
	 							<view 
	 								v-for="(item,index) in statustext" :key="item.id"
	 								class="nas-items"
	 								:class="{currents: index === tabCurrentIndex}"
	 							
	 								@click="clickTabs(index)"
	 							>{{item.desc}}</view>
	 						
	 					</view>
	 			
	 		
	 			
	 				<view class="nav-bat-right">
	 				
	 				 <view class="nav-search el-icon-search" @click="search">
	 				 	
	 				 </view>
	 				 
	 				 <view class="nav-word el-icon-message" @click="squaremessage">
	 				 
	 				 </view>
	 				 
	 				 
	 				</view>
	 				
	 		
	 
	 			</view>
	  
	  
	  <swiper  
	  	id="swiper"
	  class="swiper-boxt"
	  :duration="300"
	  :current="tabCurrentIndex   " 
	  				
	  @change="changeTab "
	  >
	  	<swiper-item class="swiper-example"  >
			<scroll-view scroll-y="true" style="height: 1260upx;">
				<view class="swiper-example-topic">
					
						<view class="example-topic-header">
							<view class="example-topic-header-title">
								游讯话题
							</view>
							<view class="example-topic-header-time">
								12分钟前 >
							</view>
							
							
							
						</view>
						<view class="example-topic-small">
							<view class="ul">
								<view class="li" v-for="(item,index) in travelList" @tap='travel(item)'>
									<view class="li-topic" >
								 #  {{ item.gambit_name }} #
									</view>  
									<view class="li-hot">
										<image v-if=" parseInt(item.is_hot) "    class="imgs" src="../../images/hot.png" mode=""></image>
									</view>
									
								</view>
								
								
							</view>
						</view>
				   </view>
				   <view class="hotpost">
					  
					   <view class="hotpost-desc-all">
						   <view class="hotpost-title">
						   	游讯热帖
						   </view>
						   <view class="hotpost-time">
						   	21分钟前
						   </view>
					   </view>
					<z-paging ref="paging" @query="queryList" :list.sync="torridList">
					    <view class="ul" style="height: 100%;">
					    
					    	<view class="li" v-for="(item,index) in torridList" @tap='torrid(item)'>
					    		<view class="li-desc">
					    		{{item.new_title}}
					    		</view>
					    		
					    		<image class="imgs" :src="item.news_img" mode=""></image>
					    	</view>
					    	
					    </view>
					  </z-paging>
						
				   </view>
			</scroll-view>
	  
	  	</swiper-item>
		
	  	<swiper-item class="swiper-item">
	  
	  		<scroll-view 
	  		class="panel-scroll-box"
	  		style="height: 100%;"
	  		:scroll-y="true" 
	  		
	  		>
	  		<view class="recommend">
	  			<view class="recommend-img">  

					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<swiper-item @tap='plaza(item)' v-for="(item,index) in swiperbanner" :key='index'>
						<image class="imgs" :src="item.img" mode=""></image>
						</swiper-item>
						
					</swiper>
	  			</view>
	  			<view class="recommend-scrrol">
	  				<scroll-view scroll-x>
	  					<view class="recommend-ul">
	  						<view class="recommend-li" @tap='recommendRegard(item)' v-for="(item,index) in recommend_scroll " :key='index'>
	  							<image class="recommend-li-imgs" :src=" 'http://appyouxun.hundredzy.com/' + item.special_head_url" mode=""></image>
	  							<view class="recommend-li-text">{{item.special_cat_name}}</view>
	  						</view>
	  						
	  					</view>
	  					
	  				</scroll-view>
	  			</view>
	  			<view class="recommend-list">
	  				<view class="recommend-list-ul">
	  					<view class="recommend-list-li" @tap='maidan(item)' v-for="(item,index) in maidanList">
	  						<view class="recommend-list-li-top" >
	  						<view class="recommend-list-li-desc" style="display: flex; flex: 1;">
	  						
								<image v-if="item.news_detail_title==='1'" class="recommend-list-li-imgs" :src=" 'http://appyouxun.hundredzy.com/' + item.new_author_head_url" mode=""></image>
									<image v-else class="recommend-list-li-imgs" :src="item.new_author_head_url" mode=""></image>
	  							<view class="recommend-list-li-label">
	  								<view class="recommend-list-li-label-top">
	  								{{item.new_author}}
	  								</view>
	  								<view class="recommend-list-li-label-bottom">
	  								{{item.news_add_time}}
	  								</view>
	  							</view>
	  						  </view>
	  							<view class="recommend-list-li-area">
	  								<view class="recommend-list-li-area-left">
	  									<!-- <view class="recommend-list-li-area-icon-left el-icon-thumb ">
	  										
	  									</view> -->
										<image class="imgs" src="../../images/zan.png" mode=""></image>
	  									<view class="recommend-list-li-area-number-left">
	  										{{item.numsArray.dianzan_num}}
	  									</view>
	  								</view>
	  								<view class="recommend-list-li-area-right">
										<image class="imgs" src="../../images/shouc.png" mode=""></image>
	  									<!-- <view class="recommend-list-li-area-icon-right el-icon-chat-dot-square">
	  										
	  									</view> -->
	  									<view class="recommend-list-li-area-number-right">
	  									{{item.numsArray.collect_num}}
	  									</view>
	  								</view>
	  													
	  													
	  							</view>
	  						</view>
	  						
	  						<view class="recommend-list-li-bottom">
	  							<view class="recommend-list-li-bottom-text-top">
	  								{{item.new_title}}
	  							</view>
	  							<!-- <view class="recommend-list-li-bottom-text-bottom">
	  							{{item.news_detail_title}}
	  							</view> -->
	  							
	  							<view class="recommend-list-li-bottom-img-ul">
	  								<view class="recommend-list-li-bottom-img-li">
										<image v-if="item.news_detail_title==='1'" class="imgs" :src=" 'http://appyouxun.hundredzy.com/' + item.news_img" mode=""></image>
	  									<image v-else class="imgs" :src="item.news_img" mode=""></image>
	  								</view>
	  								
	  							</view>
	  							
	  						</view>
	  					</view>
	  				
	  				</view>
	  			
	  			</view>
	  			
	  			
	  		</view>
	  		
	  		</scroll-view>
	  		

	  	</swiper-item>
		<swiper-item>
			<scroll-view scroll-y="true" style="height: 100%;">
			<view class="swiper-recommendation" >
				<view class="recommendation-edit-community">
					<view class="recommendation-edit-community-title">
						我的社区
					</view>
					<view class="recommendation-edit" @tap="formula" v-if="hide===0">
						编辑 
					</view>
					<view class="recommendation-edit" @tap="achieve" v-if="hide===1">
						完成
					</view>
				</view>
				<view class="recommendation-content">
					<view class="recommendation-content-text" @tap='clickCotent' v-if="content_hide">
							点击'编辑'添加自己的社区
					</view>
					<view class="recommendation-content-text"  v-if="addinferior" @tap='addinFerior' >
							选择下方卡片添加社区
					</view>
				<scroll-view :scroll-x="true" style="width: 100%;">
				<view class="ul">
					<view class="li"  v-for=" (item,index) in classtype" :key='index' v-show="content_motif" >
						<image class="imgs" @tap='classtypeClick(item)' :src="item.gm_img" mode=""></image>
						<view class="li-desc">
							{{item.gm_name}}
						</view>
						<view  v-if="icon_hide" class="li-icon el-icon-remove-outline" @tap='tabslice(index,item)'>
							
						</view>
					</view>
				</view>
				</scroll-view>
					
				</view>
				<view class="recommendation-search">
				<view class="concern_search"> 
				 <view class="concern_search_icon el-icon-search ">
				
				 </view>
				<input v-model="textvalue"  @input="search_site" class="text"  type="text" placeholder="搜索社区名称"  >
				 
				</view>
				</view>
				<view class="recommendation-classify">
				
					<scroll-view :scroll-x="true" style="width: 100%;">
						<view class="classify-ul">
							<view class="classify-li" @tap='classifyitem(index,item)' :class="{'classfy-item':classfilyIndex===index}" v-for="(item,index) in classify" :key='index'>
								{{item.name}} 
							</view>
						</view>
					</scroll-view>
					
					<swiper @change="classfilyTable" :current="classfilyIndex" style="height: 410px;">
						<swiper-item v-for="(item,index) in classify" :key='index'>
							<view class="classfily-every-ul">
								<view class="classfily-every-li"  v-for="(item,index) in  list" :key='index'>
									<image class="imgs" :src="item.gm_img" mode=""></image>
									<view class="radio" >
									 <radio-group @change="radioChange($event,index,item)" v-if="radiohide">
									  
									      <radio  :value="item.gm_name " :checked="item.is_checked==='0'?false:'1'"  />
									  
									  </radio-group>
									</view>
									<view class="classfily-every-text">
										{{item.gm_name}}
									</view>
								</view>
							
								
							</view>
						</swiper-item>
						
					</swiper>
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
				 dataList: [],
				//编辑radio下标
				currentIndex:'',
				statustext:[{ id:1, desc:'榜单'}, {id:2, desc:'广场'},{id:3, desc:'推荐'}],
				
				//广场轮播banner
				swiperbanner:[],
				//下拉加载
				// loadMoreStatus:0,
				//切换轮播的id
				tabCurrentIndex:1,
				//推荐列表
				tabBars: [],
				//滑动scroll
				recommend_scroll:[
					
				],
				//推荐分类下标
				classfilyIndex:0,
				//推荐分类
				classify : [
				
				
				],
				//编辑
				hide:0,
				//点击编辑隐藏
				content_hide:true,
				//radio隐藏
				radiohide:false,
				//内容主体
				content_motif:false,
				//添加下方
				addinferior:false,
				//点击编辑字体图标
				icon_hide:false,
				//分类每一项
				classify_item:[
					
				],
				list:[
				
				],
				//资讯话题
				travelList:[
				
				],
				//游讯热帖
				torridList:[
				
				],
				//广场热帖
				maidanList:[
				
				],
				//搜索的值
				textvalue:'',
				classtype:[],
				clasfilyID:1, 
			}
		},
		onLoad() {
		
		},
		mounted() {
			this.getSquareAdBanner()
			this.getSquareSpecial()
			this.getSquareNews()
			this.getGambit()
			this.getTopSquareNews()
			this.getAllCommunity()
			this.getMyCommunity()
			this.getAllCommunityCat()
		},
		methods: {
			//榜单话题
			async getGambit () {
				 let data = await this.$http.post('/api/getGambit',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
			
					   this.travelList = DATA
					   	console.log(this.travelList)
					
					}
			},
			//榜单热帖
			async getTopSquareNews () {
				 let data = await this.$http.post('/api/getTopSquareNews',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
			
					   this.torridList = DATA
					   	console.log(  this.torridList)
					
					}
			},
			//广场轮播banner
			async getSquareAdBanner () {
				 let data = await this.$http.post('/api/getSquareAdBanner',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					
				 });
			
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {

					   this.swiperbanner = DATA
					   	console.log( this.swiperbanner)
					
					}
			},
			
			//广场推荐专题
			async getSquareSpecial () {
				 let data = await this.$http.post('/api/getSquareSpecial',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					   this.recommend_scroll = DATA
					   	console.log( this.recommend_scroll)
					
					}
			},
			
			//广场最新发布讯息
			async getSquareNews () {
				 let data = await this.$http.post('/api/getSquareNews',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
			
					   this.maidanList = DATA
					   	console.log( this.maidanList)
					
					}
			},
			//我的社区
			async getMyCommunity () {
					const user_id = uni.getStorageSync('user_id')
				 let data = await this.$http.post('/api/getMyCommunity',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					  user_id:user_id,
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					   this.classtype = DATA
				
					}
			},
			//获取游戏社区
			async getAllCommunity () {
					const user_id = uni.getStorageSync('user_id')
				 let data = await this.$http.post('/api/getAllCommunity',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					 user_id:user_id,
					gm_c_id:this.clasfilyID,
					search_value:''
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
			
					   // this.maidanList = DATA
					  
					   this.classify_item = DATA
					   this.list = DATA
					    	console.log(   this.list )
					}
			},
			
			//推荐分类
			async getAllCommunityCat () {
					const user_id = uni.getStorageSync('user_id')
				 let data = await this.$http.post('/api/getAllCommunityCat',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					 user_id:user_id,
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					   this.classify = DATA
					   console.log(   this.classify  )
					}
			},
			
			  queryList(pageNo, pageSize) {
			       console.log(pageNo,pageSize) 
				// this.$refs.paging.complete(this.torridList);
			   },
			     
			changeTab (va) {
				
				this.tabCurrentIndex = va.detail.current
				console.log(this.tabCurrentIndex)
			    if (this.tabCurrentIndex===2 ) {
			    	const user_id = uni.getStorageSync('user_id')
			    	if (user_id==='') {
			    		this.tabCurrentIndex = 1
						
			    	    uni.showModal({
			    	    	content:'您当前没有登录，请先登录哦。',
			    			success:(res)=> {
			    			   if (res.confirm) {
			    				   uni.navigateTo({
			    				   	url:'../login/login'
			    				   })
			    			   }
			    			},
			    	    })
			    	}
			    }
			},
			clickTabs (va) {
			
				this.tabCurrentIndex = va
				if (va===2 ) {
					this.getAllCommunity()
					this.getMyCommunity()
					this.getAllCommunityCat()
					const user_id = uni.getStorageSync('user_id')
					if (user_id==='') {
						this.tabCurrentIndex = 1
					    uni.showModal({
					    	content:'您当前没有登录，请先登录哦。',
							success:(res)=> {
							   if (res.confirm) {
								   uni.navigateTo({
								   	url:'../login/login'
								   })
								 
							   }
							},
					    })
					}
				}
				
			},
	
			plaza (va) {
				uni.navigateTo({
					url:`../webview/webview?items=${ encodeURIComponent(va.account) }`
				})
			},
			//游讯话题
			travel (va) {
				
				uni.navigateTo({
					url:`../themet/themet?item=${encodeURIComponent (JSON.stringify(va))}`
				})
			},
			//游讯热帖
			torrid (va) {
				const id = va.id
				uni.navigateTo({
					url:`../details/details?item=${id}`
				})
			},
			//广场跳转帖子详情
			maidan (va) {
				const id = va.id   
				  
				uni.navigateTo({
					url:`../details/details?item=${encodeURIComponent (JSON.stringify(id))}`
				})
			},
			//广场首推
			recommendRegard (va) {
				let id = va.id
				console.log(id)
				uni.navigateTo({
					url:`../homebranch/homebranch?item=${1}&items=${id}`
				})
			
			},
			//推荐搜索
			search_site (va) {
				
				let val = va.detail.value;
				console.log(val)
				let {classify_item} = this
				let arr = [];
				for (let i = 0; i < classify_item.length; i++) {
				
					if (classify_item[i].gm_name.indexOf(val) !==-1) {
					
						arr.push(classify_item[i]);
						
					}
				}
				console.log(arr)
				if (!val) {
					this.list = arr
				
				} else {
					this.list = arr;
				
				}
			},
			//编辑
			formula () {
				this.hide = 1	
				this.content_hide = false
				this.content_motif = true
				this.radiohide = true
				this.icon_hide = true
				// this.addinferior = true
				this.getAllCommunity()
					if (this.classtype.length===0) {
					  this.content_hide = false
					  this.addinferior = true
					}
				// this.classtype.filter((item)=>{
				//  return  item.chekeds='1'
				// })
				console.log(this.classtype)
			},
			//完成
			achieve () {
				this.hide = 0
				this.radiohide = false
				this.icon_hide = false 
				this.content_hide = false
				this.addinferior = false
			
				if (this.classtype.length===0) {
				  this.content_hide = true
				}
			
			},
			//点击内容编辑加入对应的信息
			clickCotent () {
				this.hide = 1
				this.content_hide = false
				this.content_motif = true
				this.radiohide = true
				this.icon_hide = true
				this.addinferior = true
			
			if (this.classtype) {
			  this.content_hide = false
			  this.addinferior = false
			}  
			if (this.classtype.length===0) {
					this.addinferior = true
			}
			},
			//选择下方社区
			addinFerior () {
				this.content_hide = false
				// if (this.classtype.length==0) {
				// 	console.log(1)
				// }
			
			},
			//点击编辑筛选
		  async	tabslice (va,item) {
			
				console.log(item)
						const user_id = uni.getStorageSync('user_id')
					 let data = await this.$http.post('/api/delCommunity',{
						 token:'d6a2fa16e60777e390256ec85cc2f42e',
						 user_id:user_id,
						com_id:item.id
					 });
					    console.log(data);
						const {DATA,CODE} = data
						if (CODE==='200') {
							
							 this.getMyCommunity()  && this.getAllCommunity()
					
					    	 
						}
				
					console.log(this.classtype)
			
		  //    tailor.forEach((item)=>{
			 // item.is_checked==='0'
		  //     })
					
				
			  if ( this.classtype.length===0) {
				
				this.addinferior = true
			
			 }
		
			},
			//分类
			classfilyTable (va) {
			this.classfilyIndex =  va.detail.current
			},
			classifyitem (va,item) {
				this.clasfilyID = item.id
			 this.classfilyIndex = va
			 this.getAllCommunity()
			},
			
			//单选按钮
		async radioChange (va,index,item) {
			console.log(item)
					const user_id = uni.getStorageSync('user_id')
					 let data = await this.$http.post('/api/addCommunity',{
						 token:'d6a2fa16e60777e390256ec85cc2f42e',
						 user_id:user_id,
						com_id:item.gm_id
					 });
					    // console.log(data);
						const {DATA} = data
						if (data.CODE==='200') {
				
						   // this.maidanList = DATA
						  this.getMyCommunity()
						
						  
						}
			
				this.addinferior = false
			
								
				// this.list.forEach((item,index)=>{
				// 	if (item.gm_name === va.detail.value) {
				// 	    this.current = index;
				//         this.classtype.push(item)
						
				// 	}
				// })
				// console.log( this.classtype)
				if (this.classtype.length!==0) {
						this.content_hide = false
				}
			
			},
		
		
			//点击我的社区跳转
			classtypeClick (va) {
				const id = va.gm_id
				uni.navigateTo({
					url:`../homebranch/homebranch?item=${1}&items=${id}`
				})
			},
			search () {
				// uni.navigateTo({
				// 	url:'../search/search'
				// })
				uni.showToast({
				  title:'该功能暂未开放 敬请期待!',
				  icon:'none',
				  duration:2000
				})
			},
			squaremessage () {
				uni.showToast({
				  title:'该功能暂未开放 敬请期待!',
				  icon:'none',
				  duration:2000
				})
			},
		}
	}
</script>

<style lang="scss">
	page, .square{
			background-color: #FFFFFF;
			height: 100%;
			overflow: hidden;
			 
		}
		.status_bar {
		     height: var(--status-bar-height);
		     width: 100%; 	  
		 }
  .square {
	  .nav-bat {
		  display: flex;
	  		 flex-direction: row;
			 justify-content: center;
			 align-items: center;
	  		z-index: 2222;
	  	padding: 0 30upx;
		margin-bottom: 42upx;
	  	  background-color: #fff;
	  	  .nav-bat-left {
			display: flex;
	  		flex-direction: row;
		
			flex: 1;
	  		margin-top: 20upx;
			color: #999999;
	  		.currents {
	  	      color: black;
	  		font-weight: 700;
	  				
	  		}
	  		.nas-items {
	  		/* color: #999999; */
	  		margin-right: 30upx;
	  				
	  	  }
	  		
	  	  }
	  	  .nav-bat-right {
	  	  	flex-direction: row;  
	  			margin-top: 20upx;
	  			// margin-left: 421upx;
	  			.nav-search {
	  				margin-right: 40upx;
	  				font-size: 32upx;
	  				margin-top: 6upx;
	  			}
	  			.nav-word {
	  				width: 38upx;
	  				height: 30upx;
	  				font-size: 38upx;
	  				margin-top: 4upx;
	  			}
	  	    }
		  
	    }
		
		
	.swiper-boxt {
		height: 100%;
		.swiper-example {
				background-color: #f1f1f1;
			.swiper-example-topic {
				padding-left: 30upx;
				padding-right: 30upx;
				background-color: #ffff;
				margin-top: 10upx;
				margin-bottom: 10upx;
				padding-top: 32upx;
					.example-topic-header {
						display: flex;
						margin-bottom: 32upx;
						.example-topic-header-title {
							font-size: 32upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
							letter-spacing: 1px;
							flex: 1;
						}
						.example-topic-header-time {
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #999999;
							line-height: 34upx;
						}
					
					}
					.example-topic-small {
						.ul {
							display: flex;
							justify-content: space-between;
							flex-wrap: wrap;
							.li {
								display: flex;
								align-items: center;
							
								margin-bottom: 32upx;
								.li-topic {
									width: 238upx;
									font-size: 24upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #333333;
									line-height: 34upx;
									letter-spacing: 1px;
									margin-right: 19upx;
								
								}
								.li-hot {
									.imgs {
										width: 24upx;
										height: 24upx;
									}
								}
							}
						}
					}
			  }
			.hotpost {
				background-color: #fff;
				padding-left: 30upx;
				padding-right: 30upx;
				.hotpost-desc-all {
					display: flex;
					margin-bottom: 50upx;
				    padding-top: 32upx;
					.hotpost-title {
						flex: 1;
						font-size: 32upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						line-height: 34upx;
						letter-spacing: 1px;
					}
					.hotpost-time {
						font-size: 22upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #999999;
						line-height: 34upx;
					}
				}
				.ul {
					
					.li {
						
						display: flex;
						margin-bottom: 48upx;
						border-bottom: 1px solid #F7F7F7;
						
						.li-desc {
							flex: 1;
						
							// height: 65upx;
							margin-bottom: 48upx;
							margin-right: 30upx;
							font-size: 26upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #333333;
							line-height: 42upx;
							
						}
					
						.imgs {
							width: 148upx;
							height: 98upx;
							border-radius: 8px;
						}
						
					}
				}
			}
		}
		.swiper-item {
			
			.recommend {
				margin-top: 30upx;
				.recommend-img {
					margin-bottom: 32upx;
					.imgs {
						width: 750upx;
						height: 300upx;
					}
				}
				.recommend-scrrol {
					.recommend-ul {
						display: flex;
						margin-bottom: 41upx;
						.recommend-li {
							margin-right: 22upx;
							&:first-child {
							  margin-left: 23upx;
							}
							.recommend-li-imgs {
								display: block;
								margin:  0 auto;
								width: 86upx;
								height: 86upx;
								border-radius: 10upx;
								margin-bottom: 20upx;
								
							}
							.recommend-li-text {
								width: 160upx;
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #333333;
								line-height: 34upx;
								letter-spacing: 1px;
								text-align: center;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
						}
					}
				}
				.recommend-list {
					.recommend-list-ul {
						.recommend-list-li {
							padding: 0 30upx;
							margin-top: 32upx;
							margin-bottom: 32upx;
							border-bottom: 1px solid #F5F5F5;
							.recommend-list-li-top {
								display: flex;
								.recommend-list-li-imgs {
									
									width: 72upx;
									height: 72upx;
									border-radius: 50%;
									margin-right: 24upx;
								  }
								.recommend-list-li-label {
									.recommend-list-li-label-top {
										// width: 152upx;
										// height: 26px;
										font-size: 26upx;
										font-family: Microsoft YaHei;
										font-weight: bold;
										color: #404040;
										line-height: 43upx;
										letter-spacing: 1px;
									}
									.recommend-list-li-label-bottom {
										// width: 205upx;
										// height: 23upx;
										font-size: 22upx;
										font-family: Microsoft YaHei;
										font-weight: 400;
										color: #999999;
										line-height: 43upx;
										letter-spacing: 1px;
									}
								}
								.recommend-list-li-area {
									display: flex;
									// margin-left: 210upx;
								
									.recommend-list-li-area-left {
											display: flex;
											
											.imgs {
												width: 32upx;
												height: 32upx;
												margin-right: 10upx;
												margin-top: 2px;
											}
											 margin-right: 20upx;
										.recommend-list-li-area-icon-left {
										  margin-top: 4upx;
										  margin-right: 10upx;
										}
										.recommend-list-li-area-number-left {
											// width: 27upx;
											// height: 21upx;
											font-size: 26upx;
											font-family: Microsoft YaHei;
											font-weight: 400;
											color: #CCCCCC;
											line-height: 43upx;
										}
									}
									.recommend-list-li-area-right {
										display: flex;
										.imgs {
											width: 37upx;
											height: 36upx;
										}
										.recommend-list-li-area-icon-right {
										 margin-top: 4upx;
										 margin-right: 10upx;
										}
										.recommend-list-li-area-number-right {
											// width: 27upx;
											height: 21upx;
											font-size: 26upx;
											font-family: Microsoft YaHei;
											font-weight: 400;
											color: #CCCCCC;
											line-height: 43upx;
											margin-left: 10upx;
										}
									}
									
									
								}
							}
							.recommend-list-li-bottom {
								margin-top: 30upx;
								.recommend-list-li-bottom-text-top {
									// width: 337upx;
									// height: 27upx;
									font-size: 26upx;
									font-family: Microsoft YaHei;
									font-weight: bold;
									color: #404040;
									line-height: 43upx;
									margin-bottom: 23upx;
									letter-spacing: 1px;
								}
								.recommend-list-li-bottom-text-bottom {
									// width: 687px;
									// height: 67px;
									font-size: 26upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #666666;
									line-height: 41upx;
									margin-bottom: 32upx;
								}
								.recommend-list-li-bottom-img-ul {
									display: flex;
									margin-bottom: 32upx;
									.recommend-list-li-bottom-img-li {
										margin-right: 18upx;
										.imgs {
											width: 218upx;
											height: 152upx;
											border-radius: 8upx;
										}
									}
								}
							}
							
						}
					}
				}
			}
		}
		.swiper-recommendation {
			padding-left: 30upx;
			padding-right: 30upx;
			.recommendation-edit-community {
				display: flex;
				.recommendation-edit-community-title {
					flex: 1;
					font-size: 32upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #333333;
					line-height: 34upx;
					letter-spacing: 1px;
				}
				.recommendation-edit {
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #666666;
					line-height: 34upx;
					letter-spacing: 1px;
				}
			}
			.recommendation-content {
				height: 210upx;
				margin-top: 52upx;
				.ul {
					display: flex;
					.li {
						position: relative;
						margin-right: 33upx;
						.imgs {
							width: 148upx;
							height: 148upx;
							border-radius: 8px;
							margin-bottom: 16upx;
						}
						.li-desc {
								width: 150upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							text-align: center;
							line-height: 34upx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.li-icon {
							position: absolute;
							top: 0px;
							right: 0px;
					
						}
					}
				}
				.recommendation-content-text {
				
					font-size: 22upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #CCCCCC;
					line-height: 34upx;
					
					// margin-bottom: 60upx;
					text-align: center;
					letter-spacing: 1px;
					line-height: 196upx;
				}
			}
			.recommendation-search {
				margin-bottom: 41upx;
				.concern_search {
						 display: flex;
						 height: 60upx;
					
						margin-top: 24upx;
						 background-color: #f3f3f3;
						 .concern_search_icon {
							 margin-right: 20upx;
							 margin-top: 20upx;
							 margin-left: 20upx;
							 font-size: 26upx;
							 height: 30px;
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
							padding-top: 10upx;
						 }
				}
			}
			.recommendation-classify {
				.classify-ul {
					display: flex;
					display: -webkit-box;
					.classfy-item {
						font-size: 28upx !important;
						font-family: Microsoft YaHei;
						font-weight: bold !important;
						color: #333333 !important;
						line-height: 34upx !important;
					}
					.classify-li {
						// width: 100px;
						margin-right: 42upx;
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #999999;
						line-height: 34upx;
						margin-bottom: 49upx;
					}
				}
				.classfily-every-ul {
					width: 100%;
					display: flex;
					margin-left:20upx;
					// justify-content: space-between;
					flex-wrap: wrap;
					.classfily-every-li {
						position: relative;
							margin-bottom: 40upx;
							margin-right: 23upx;
						
						.imgs {
							width: 148upx;
							height: 148upx;
							border-radius: 8px;
						}
						.classfily-every-text {
							width: 150upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
							text-align: center;
							margin-top: 16upx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.radio {
							
							position: absolute;
							top: 0;
							right: 0px;
							
						}
					}
				}
			}
		}
	}
}
</style>
