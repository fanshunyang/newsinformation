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
	 				 
	 				 <view class="nav-word el-icon-message">
	 				 
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
	  	<swiper-item class="swiper-item">
	  	<mix-pulldown-refresh ref="mixPulldownRefreshs" class="panel-content" :top="90" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
	  		<scroll-view 
	  		class="panel-scroll-box"
			style="height: 100%;"
	  		:scroll-y="true" 
	  		@scrolltolower="loadMore"
	  		>
			<view class="recommend">
				<view class="recommend-img">  
					<image class="imgs" src="../../images/ac.jpg" mode=""></image>
				</view>
				<view class="recommend-scrrol">
					<scroll-view scroll-x>
						<view class="recommend-ul">
							<view class="recommend-li" v-for="(item,index) in recommend_scroll " :key='index'>
								<image class="recommend-li-imgs" src="../../images/ak.jpg" mode=""></image>
								<view class="recommend-li-text">{{item.text}}</view>
							</view>
							
						</view>
						
					</scroll-view>
				</view>
				<view class="recommend-list">
					<view class="recommend-list-ul">
						<view class="recommend-list-li">
							<view class="recommend-list-li-top" >
								<image class="recommend-list-li-imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="recommend-list-li-label">
									<view class="recommend-list-li-label-top">
										大胡子-HX
									</view>
									<view class="recommend-list-li-label-bottom">
									6分钟前·盒友杂谈
									</view>
								</view>
								<view class="recommend-list-li-area">
									<view class="recommend-list-li-area-left">
										<view class="recommend-list-li-area-icon-left el-icon-thumb ">
											
										</view>
										<view class="recommend-list-li-area-number-left">
											11
										</view>
									</view>
									<view class="recommend-list-li-area-right">
										<view class="recommend-list-li-area-icon-right el-icon-chat-dot-square">
											
										</view>
										<view class="recommend-list-li-area-number-right">
											221
										</view>
									</view>
														
														
								</view>
							</view>
							
							<view class="recommend-list-li-bottom">
								<view class="recommend-list-li-bottom-text-top">
									兄弟们，死亡细胞打折了
								</view>
								<view class="recommend-list-li-bottom-text-bottom">
									兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没
									打通关，这个我还买不买啊
								</view>
								
								<view class="recommend-list-li-bottom-img-ul">
									<view class="recommend-list-li-bottom-img-li">
										<image class="imgs" src="../../images/cja.jpg" mode=""></image>
									</view>
									<view class="recommend-list-li-bottom-img-li">
										<image class="imgs" src="../../images/cja.jpg" mode=""></image>
									</view>
									<view class="recommend-list-li-bottom-img-li">
										<image class="imgs" src="../../images/cja.jpg" mode=""></image>
									</view>
								</view>
								
							</view>
						</view>
						<view class="recommend-list-li">
							<view class="recommend-list-li-top" >
								<image class="recommend-list-li-imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="recommend-list-li-label">
									<view class="recommend-list-li-label-top">
										大胡子-HX
									</view>
									<view class="recommend-list-li-label-bottom">
									6分钟前·盒友杂谈
									</view>
								</view>
								<view class="recommend-list-li-area">
									<view class="recommend-list-li-area-left">
										<view class="recommend-list-li-area-icon-left el-icon-thumb ">
											
										</view>
										<view class="recommend-list-li-area-number-left">
											11
										</view>
									</view>
									<view class="recommend-list-li-area-right">
										<view class="recommend-list-li-area-icon-right el-icon-chat-dot-square">
											
										</view>
										<view class="recommend-list-li-area-number-right">
											221
										</view>
									</view>
														
														
								</view>
							</view>
							
							<view class="recommend-list-li-bottom">
								<view class="recommend-list-li-bottom-text-top">
									兄弟们，死亡细胞打折了
								</view>
								<view class="recommend-list-li-bottom-text-bottom">
									兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没
									打通关，这个我还买不买啊
								</view>
								
								<view class="recommend-list-li-bottom-img-ul">
									<view class="recommend-list-li-bottom-img-li">
										<image class="imgs" src="../../images/cja.jpg" mode=""></image>
									</view>
									<view class="recommend-list-li-bottom-img-li">
										<image class="imgs" src="../../images/cja.jpg" mode=""></image>
									</view>
									<view class="recommend-list-li-bottom-img-li">
										<image class="imgs" src="../../images/cja.jpg" mode=""></image>
									</view>
								</view>
								
							</view>
						</view>
					</view>
				
				</view>
				
				
			</view>
	  		<mix-load-more :status="loadMoreStatus"></mix-load-more>
	  		</scroll-view>
	  		
	  	</mix-pulldown-refresh>
	  	</swiper-item>
	  	<swiper-item>
	  		<view class="swiper-item-two">2</view>
	  	</swiper-item>
	  </swiper>
	</view>
</template>

<script>
	import json from '../../json.js'
	
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	let windowWidth = 0, scrollTimer = false, tabBar;
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
			
		},
		data() {
			return {
				statustext:[{ id:1, desc:'推荐'}, {id:2, desc:'广场'}],
				//下拉加载
				loadMoreStatus:0,
				//切换轮播的id
				tabCurrentIndex:0,
				//推荐列表
				tabBars: [],
				//滑动scroll
				recommend_scroll:[
					{id:1,text:'明日方舟'},
					{id:2,text:'明日方舟'},
					{id:3,text:'明日方舟'},
					{id:4,text:'明日方舟'},
					{id:5,text:'明日方舟'},
					{id:6,text:'明日方舟'},
					{id:7,text:'明日方舟'}
				]
			}
		},
		onLoad() {
			console.log(json)
		},
		methods: {
			changeTab (va) {
				this.tabCurrentIndex = va.detail.current
			},
			clickTabs (va) {
				this.tabCurrentIndex = va
			},
		loadData(type){
			// if(type === 'add'){
			// 	this.loadMoreStatus = 1;
			
			// }
			if(type === 'add'){
				if(this.loadMoreStatus === 2){
					return;
				}
				this.loadMoreStatus = 1; 
			}
			// #ifdef APP-PLUS
			else if(type === 'refresh'){
				this.refreshing = true;
			}
			// #endif
			setTimeout(()=>{
				if(type === 'refresh'){
					this.list = [];
				}
				
				
				
				if(type === 'add'){
						this.loadMoreStatus = this.tabBars.length > 50 ? 2: 0;
					
				
				}
				if(type === 'refresh'){
				
				this.$refs.mixPulldownRefreshs && this.$refs.mixPulldownRefreshs.endPulldownRefresh();
					// #ifdef APP-PLUS
					this.refreshing = false;
					// #endif
					this.loadMoreStatus = 0;
				
				}
			}, 600)
			
		},
			//上滑加载
			loadMore(){
				this.loadData('add');
			},
			//下拉刷新
			onPulldownReresh(){
				this.loadData('refresh');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable){
				if(this.enableScroll !== enable){
					this.enableScroll = enable;
				}
			},
			search () {
				uni.navigateTo({
					url:'../search/search'
				})
			}
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
	  		z-index: 2222;
	  	padding: 0 30upx;
	  	  background-color: #fff;
	  	  .nav-bat-left {
			display: flex;
	  		flex-direction: row;
	  		margin-top: 20upx;
	  		.currents {
	  	      color: black;
	  		font-weight: 700;
	  				
	  		}
	  		.nas-items {
	  		/* color: #999999; */
	  		margin-right: 16upx;
	  				
	  	  }
	  		
	  	  }
	  	  .nav-bat-right {
	  	  	flex-direction: row;  
	  			margin-top: 20upx;
	  			margin-left: 421upx;
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
		.swiper-item {
			.recommend {
				margin-top: 30upx;
				.recommend-img {
					margin-bottom: 32upx;
					.imgs {
						width: 750upx;
						height: 200upx;
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
								width: 130upx;
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #333333;
								line-height: 34upx;
								letter-spacing: 1px;
								text-align: center;
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
									margin-left: 210upx;
									.recommend-list-li-area-left {
											display: flex;
											 margin-right: 20upx;
										.recommend-list-li-area-icon-left {
										  margin-top: 4upx;
										  margin-right: 10upx;
										}
										.recommend-list-li-area-number-left {
											width: 27upx;
											height: 21upx;
											font-size: 26upx;
											font-family: Microsoft YaHei;
											font-weight: 400;
											color: #CCCCCC;
											line-height: 43upx;
										}
									}
									.recommend-list-li-area-right {
										display: flex;
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
	}
}
</style>
