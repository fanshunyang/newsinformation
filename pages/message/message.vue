<template>
	<view class="message">
		<view class="status_bar">
		         <!-- 这里是状态栏 -->
					
						
		  </view>
	<!-- 全局顶部选项卡 -->
			<view class="nav-bat">
			
				<view class="nav-bat-top">
					<view class="nav-bat-left">
						
							<view class="nav-bat-left-input">
								<view class="nav-bat-left-input-icon el-icon-search">
									
								</view>
								<view class="nav-bat-left-input-placehodder">
									王者荣耀月活量突破
								</view>
							</view>
							
						</view>
								
							
								
					<view class="nav-bat-right">
					<view class="nav-bat-right-top el-icon-circle-plus">
						
					</view>
					<view class="nav-bat-right-bottom">
					发布
					</view>
								
								
					 
					 
					</view>
				</view>
				<view class="nav-bat-bottom">
					<view class="nav-bat-bottom-ul">
						<view class="nav-bat-bottom-li" :class="{'click':currindex===index}" v-for="(item,index) in messagetable" :key='index' @click="clicktable(index)">
							<view class="nav-bat-bottom-li-text">
								{{item.text}}
							</view>
						</view>
					
					</view>
					 
					
				</view>
				
			</view>
			<scroll-view :scroll-y="true"  	style="height: 100%;" >
			<mix-pulldown-refresh ref="mixPulldownRefreshs" class="panel-content" :top="90" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
				<scroll-view 
				class="panel-scroll-box"
				style="height: 100%;"
				:scroll-y="true" 
			
				>
				<view class="main">
					<view class="main-ul">
						<view class="main-li">
							<view class="main-li-left">
								<view class="main-li-left-top">
									<view class="main-li-left-number">
										1
									</view>
									<view class="main-li-left-desc">
										笔记本电脑清灰换硅脂需要
										什么工具
									</view>
								</view>
								<view class="main-li-left-bottom">
									<view class="main-li-left-title">
										绝地求生
									</view>
									<view class="main-li-left-leave">
										<view class="main-li-left-leave-icon el-icon-chat-dot-square">
											
										</view>
										<view class="main-li-left-leave-number">
											222
										</view>
									
									
									</view>
								</view>
							
							</view>
							
						  <view class="main-li-right">
							<image class="imgs" src="../../images/cjb.jpg" mode=""></image>
						 </view>
						</view>
						<view class="main-li">
							<view class="main-li-left">
								<view class="main-li-left-top">
									<view class="main-li-left-number">
										1
									</view>
									<view class="main-li-left-desc">
										笔记本电脑清灰换硅脂需要
										什么工具
									</view>
								</view>
								<view class="main-li-left-bottom">
									<view class="main-li-left-title">
										绝地求生
									</view>
									<view class="main-li-left-leave">
										<view class="main-li-left-leave-icon el-icon-chat-dot-square">
											
										</view>
										<view class="main-li-left-leave-number">
											222
										</view>
									
									
									</view>
								</view>
							
							</view>
							
						  <view class="main-li-right">
							<image class="imgs" src="../../images/cjb.jpg" mode=""></image>
						 </view>
						</view>
						
					
					</view>
				</view>
				
				</scroll-view>
				
			</mix-pulldown-refresh>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//tab索引
				currindex:0,
				//切换tab数据
				messagetable:[
					{id:1,text:'热帖'},
					{id:2,text:'社群'},
					{id:3,text:'话题'},
					{id:4,text:'百科'}
				],
				
			}
		},
		methods: {
			clicktable (va) {
				this.currindex = va	
			
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
		}
	}
</script>

<style lang="scss">
	page, .message{
			background-color: #FFFFFF;
			height: 100%;
			overflow: hidden;
			
		}
		.status_bar {
		     height: var(--status-bar-height);
		     width: 100%; 	  
		 }
	
	  .message {
		  .nav-bat {
		  	z-index: 2222;
		  	padding: 0  20upx 0 30upx;
		
		  	  background-color: #fff;
			  .nav-bat-top {
				  display: flex;
				  .nav-bat-left {
				  		  		
				  	margin-top: 20upx;
				  	.nav-bat-left-input {
				  	display: flex;
				  	width: 620upx;
				  	height: 62upx;
				  	background: #F7F7F7;
				  	border-radius: 31upx;
				  	.nav-bat-left-input-icon {
				  	margin-top: 17upx;
				  	margin-left: 24upx;
				  	}
				  	.nav-bat-left-input-placehodder {
				  	// width: 257px;
				  	// height: 26px;
				  	font-size: 26upx;
				  	font-family: Microsoft YaHei;
				  	font-weight: 400;
				  	color: #999999;
				  	line-height: 34upx;
				  	margin-top: 15upx;
				  	margin-left: 24upx;
				    }
				   }
				  		  		
				 }
				  .nav-bat-right {
				  	  
				  	margin-top: 20upx;
				  	margin-left: 20upx;
				  	 .nav-bat-right-top {
				  				
				  	width: 36upx;
				  	height: 36upx;
				  	font-size:36upx;
				  	margin-left: 8upx;
				  	color: #1482FF;
				  	}
				  	 .nav-bat-right-bottom {
				  	 // width: 50upx;
				  	// height: 22upx;
				  	 font-size: 22upx;
				  	font-family: Microsoft YaHei;
				  	font-weight: 400;
				  	color: #1482FF;
				  	letter-spacing: 1px;
				  	line-height: 34upx;
				    text-align: center;
				  }
				  				  
				} 
			  }
		  
				 .nav-bat-bottom {
					 margin-top: 25upx;
					.nav-bat-bottom-ul {
						.click {
							background-color: #fff;
						}
						background-color: #F7F7F7;
						display: flex;
						.nav-bat-bottom-li {
							margin: 8upx 0px 8upx 0upx;
							width: 174upx;
							height: 52upx;
							// background: #ffff;
							border-radius: 2px;
							border-right: 1px solid #ccc;
							&:first-child {
							 border-right: 0;
							 	margin: 8upx 0px 8upx 8upx;
							}
							&:last-child {
							 border-right: 0;
							 margin: 8upx 8upx 8upx 0upx;
							}
							.nav-bat-bottom-li-text {
								// width: 62px;
								// height: 29px;
								font-size: 28upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #333333;
								line-height: 46upx;
								letter-spacing: 1px;
								text-align: center;
							}
						}
					}
					
				 }
		    }
		    .main {
				.main-ul {
					margin-top: 61upx;
					.main-li {
						display: flex;
						border-bottom: 1px solid #F7F7F7;
						margin-bottom: 32upx;
					  .main-li-left {
						    // display: flex;
						  .main-li-left-top {
							    display: flex;
							  .main-li-left-number {
								  // width: 9px;
								  // height: 23upx;
								  font-size: 28upx;
								  font-family: Microsoft YaHei;
								  font-weight: bold;
								  color: #EB9238;
								  // line-height: 34px;
							  	margin-left: 30upx;
								margin-right: 17upx;
							  }
							  .main-li-left-desc {
							  	width: 416upx;
							  	height: 66upx;
							  	font-size: 28upx;
							  	font-family: Microsoft YaHei;
							  	font-weight: bold;
							  	color: #333333;
							  	line-height: 37upx;
								letter-spacing: 1px;
							  }
						  }
						.main-li-left-bottom {
							display: flex;
							margin-top: 29upx;
							.main-li-left-title {
								// width: 101upx;
								// height: 22px;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 36upx;
								margin-left: 61upx;
								margin-right: 242upx;
							}
							.main-li-left-leave {
								display: flex;
								.main-li-left-leave-icon {
									margin-top: 8upx;
									margin-right: 12upx;
								}
								.main-li-left-leave-number {
									// width: 36upx;
									// height: 18upx;
									font-size: 22upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #999999;
									line-height: 36upx;
									margin-bottom: 32upx;
									margin-top: 4upx;
								}
							}
						}
						
						
					  }
						.main-li-right {
							margin-left: 83upx;
							margin-right: 20upx;
							.imgs {
								width: 160upx;
								height: 116upx;
							}
						}
					}
					
				}
			}
	  }
</style>
