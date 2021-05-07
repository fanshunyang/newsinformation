<template>
	<view class="journalism">
	    <view class="status_bar">
	        <!-- 这里是状态栏 -->
	    </view>
		<view class="homepage-header">
			<view class="homepage-header-icon el-icon-arrow-left" @click="back" >
				
			</view>
			<view class="homepage-header-title">
			绝地求生
			</view>
			<view class="homepage-header-right">
				<view class="homepage-header-right-search el-icon-search" @click="search">
					
				</view>
				<view class="homepage-header-right-box el-icon-message">
					
				</view>
				
				
			</view>
			
			
			
		</view>
		
		<view class="journalism-part">
			<scroll-view scroll-y="true" style="height: 100%;" >
			<view class="journalism-part-img" >
				<image class="imgs" src="../../images/cjb.jpg" mode=""></image>
			</view>
			
			<view class="main">
				<view class="main-ul">
				
					<view class="main-li">
						<view class="main-li-left">
							<view class="main-li-left-top">
								<view class="main-li-left-number">
									
								</view>
								<view class="main-li-left-desc">
									笔记本电脑清灰换硅脂需要
									什么工具
								</view>
							</view>
							<view class="main-li-left-bottom">
							
								<view class="main-li-left-title">
									20分钟前 . 绝地求生
								</view>
								<view class="main-li-left-leave">
									<view class="main-li-left-leave-icon el-icon-view">
										
									</view>
									<view class="main-li-left-leave-number">
										22
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
									
								</view>
								<view class="main-li-left-desc">
									笔记本电脑清灰换硅脂需要
									什么工具
								</view>
							</view>
							<view class="main-li-left-bottom">
							
								<view class="main-li-left-title">
									1小时前 . 绝地求生
								</view>
								<view class="main-li-left-leave">
									<view class="main-li-left-leave-icon el-icon-view">
										
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//返回上一级
			back () {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
page, .journalism{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%; 
	 }
	 .journalism {
		 .homepage-header {
		 	display: flex;	
		 	padding-left: 31upx;
		 	padding-right: 28upx;
			justify-content: center;
			align-items: center;
		 	 .homepage-header-icon {
		 		 width: 16upx;
		 		 // height: 30upx;
		 		font-size: 40upx;
				
		 	 }
		 	.homepage-header-title {
		 		flex: 1;
		 		text-align: center;
		 	} 
		 	.homepage-header-right {
		 		width: 100upx;
		 		.homepage-header-right-search {
		 			margin-right: 30upx;
		 		}
		 		.homepage-header-right-box {
		 			
		 		}
		 	}
		 }
		 .journalism-part {
			 height: 100%;
			 .journalism-part-img {
				 margin-top: 20upx;
				 .imgs {
					 width: 100%;
					 height: 238upx;
				 }
			 }
			 .main {
			 				.main-ul {
			 					margin-top: 33upx;
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
			 								flex: 1;
			 								// width: 101upx;
			 								// height: 22px;
			 								font-size: 22upx;
			 								font-family: Microsoft YaHei;
			 								font-weight: 400;
			 								color: #999999;
			 								line-height: 36upx;
			 								margin-left: 40upx;
			 								// margin-right: 242upx;
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
	 }
</style>
