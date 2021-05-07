<template>
	<view class="management">
	
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
	</view>
</template>

<script>
	
	export default {
	
		components:{
		
		},
		props: {
		
		},
		data() {
			return {
				
			}
		},
		mounted() {
		
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
 .management {
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
</style>
