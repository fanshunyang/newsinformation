<template>
	<view class="themet">
		<view class="status_bar">
		         <!-- 这里是状态栏 --> 
					
						
		  </view>
		  <view class="themet-header">
		  
		  </view>
		  <view class="themet-left-icon el-icon-arrow-left" @click="back">
		  	
		  </view>
		  <view class="themet-son">
		  	<view class="themet-son-left">
		  	  <image class="imgs" src="../../images/cja.jpg" mode=""></image>
		  	</view>
		  	<view class="themet-son-right">
		  		<view class="themet-son-right-text">
		  			#王者荣耀#
		  		</view>
		  		<view class="themet-son-right-text">
		  			5排崛起！
		  		</view>
		  		<view class="themet-son-right-text">
		  			488人讨论
		  		</view>
		  	</view>
		  	
		  	
		  
		  </view>
			<view class="themet-nav">
				<view class="ul">
					<view class="li" :class="{'li-item':index===crrindex}" @click="tabBar(index)" v-for="(item,index) in navbar" :key='index'>
						{{item.text}}
					</view>
				</view>
			</view>
		  <swiper style="height: 100%;" :current="crrindex" @change="changeTable">
		  	<swiper-item style="1000upx" >
		  	<scroll-view scroll-y="true" style="height: 1000upx;" >
		  		<view class="swiper-item"  >
					<view class="box-firend-ul">
						<view class="box-firend-li" v-for="(item,index) in dynamicallyList" @click="dynamically">
						<view class="box-firend-li-header">
							<view class="box-firend-li-item-madile">
								<view class="box-firend-li-item-madile-img">
									<image class="box-firend-li-item-madile-item-imgs" src="../../images/gg.jpg" mode=""></image>
								</view>
								<view class="box-firend-li-item-madile-text">
									<text class="box-firend-li-item-madile-text-one">联盟资讯BOT</text>
									<text class="box-firend-li-item-madile-text-two">6分钟前·盒友杂谈</text>
								</view>
							
							</view>
							<view class="box-firend-li-item-letter">
								<view class="box-firend-li-item-letter-left">
									<view class="  box-firend-li-item-letter-left-praise">
										赞
									</view>
									<view class="box-firend-li-item-letter-left-number">
										5
									</view>
								</view>
								<view class="box-firend-li-item-letter-right">
									<view class="box-firend-li-item-letter-right-message el-icon-chat-dot-square">
										
									</view>
									<view class="box-firend-li-item-letter-right-number">
										11
									</view>
								</view>
							
							
							</view>			
						</view>
						<view class="box-firend-li-content">
							<view class="box-firend-li-content-title">
								《英雄联盟》山海绘卷概念设计图公布
							</view>
							<view class="box-firend-li-content-text">
							兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
							</view>
							<view class="box-firend-li-content-img">
								<view class="box-firend-li-content-img-ul">
									<view class="box-firend-li-content-img-li" v-for="(item,index) in  boxfirendimg" :key='index'>
										<image class="box-firend-li-content-img-li-imgs" src="../../images/yl.jpg" mode=""></image>
									</view>
								</view>
							
							
							</view>
						
						
						</view>
						
						
						</view>
						
						
					
					
						
					<!-- 第一个列表 -->
						
						
						
					</view>
				</view>
		  	</scroll-view>
		  	</swiper-item>
		  	<swiper-item>
		  	<scroll-view scroll-y="true" style="height: 100%;" >
		  		<view class="swiper-items">
		  			2
		  		</view>
		  	</scroll-view>
		  	</swiper-item>
		  </swiper>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navbar:[{id:1,text:'全部'},{id:2,text:'最新'}],
				crrindex:0,
				//盒有动态
				boxfirendimg:[
					{id:1,img:''},
					{id:2,img:''},
					{id:3,img:''}
				],
				//全部热帖
				dynamicallyList:[
					{id:1,},
					{id:2,},
					{id:3,},
					{id:4,}
				],
			}
		},
		methods: {
			//返回上一级
			back () {
				uni.navigateBack()
			},
			tabBar (va) {
				this.crrindex = va
			},
			changeTable (va) {
				this.crrindex = va.detail.current
			},
			//跳转帖子详情
			dynamically () {
				uni.navigateTo({
					url:'../details/details'
				})
			},
		}
	}
</script>

<style lang="scss">
	page, .themet{
			
			background-color: #ffff;
			height: 100%;
			overflow: hidden;
		}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		 background-color: #fff;
		
	 }
.themet {
	position: relative;
	.themet-header {
	-webkit-filter: contrast(100%) brightness(50%) blur(1px);  /* Chrome, Safari, Opera */
	    filter:  contrast(100%) brightness(50%) blur(1px);
	
		height: 288upx;
	   background: url(../../images/cja.jpg) no-repeat ;
		
		
	}
	.themet-left-icon {
		position: absolute;
		top: 0px;
		padding-left: 30upx;
		padding-right: 30upx;
		font-size: 20px;
		margin-bottom: 49upx;
	// margin-top: 20px;
	}
	.themet-son {
		position: absolute;
		top: 50px;
		display: flex;
		padding-left: 30upx;
		padding-right: 30upx;
		.themet-son-left {
			.imgs {
				width: 108upx;
				height: 108upx;
				border-radius: 8px;
				vertical-align: middle;
			}
		}
		.themet-son-right {
			margin-left: 24upx;
			.themet-son-right-text {
				&:nth-child(1) {
					font-size: 26upx;
					height: 40upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #fff;
					line-height: 34upx;
				}
				font-size: 22upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
					color: #fff;
				line-height: 34upx;
			}
		}
	}
	.themet-nav {
		padding-left: 30upx;
		margin-top: 32upx;
		.ul {
			display: flex;
			.li-item {
			font-size: 20upx !important;
			font-family: Microsoft YaHei;
			font-weight: 700 !important;
			color: #333333 !important;
			border-bottom: 1px solid #333;
			}
			.li {
				
				margin-right: 32upx;
				font-size: 24upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #999999;
				letter-spacing: 1px;
				line-height: 34upx;
			}
		}
	}
	.swiper-item {
		// padding-left: 30upx;
		// padding-right: 30upx;
		// height: 100%;
		margin-top: 32upx;
		.box-firend-ul {
		
			.box-firend-li {
					border-bottom: 1px solid #F5F5F5;
					// height: 430upx;
					margin-bottom: 32upx;
				.box-firend-li-content {
					margin-left: 30upx;
					margin-right: 30upx;
					.box-firend-li-content-title {
						width: 513upx;
						// height: 26upx;
						font-size: 30upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #404040;
						// line-height: 43upx;
						margin-top: 30upx;
						margin-bottom: 24upx;
					}
					.box-firend-li-content-text {
						width: 685upx;
						// height: 67upx;
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #666666;
						line-height: 41upx;
						// margin-bottom: 23upx;
					}
					.box-firend-li-content-img {
						.box-firend-li-content-img-ul {
							display: flex;
							flex-direction: row;
							margin-bottom: 32upx;
							.box-firend-li-content-img-li {
								margin-top: 25upx;
								margin-right: 18upx;
								.box-firend-li-content-img-li-imgs {
									width: 218upx; 
									height: 152upx;
									border-radius: 8upx;
								}
							}
						}
					}
				}
				.box-firend-li-header {
					margin: 0 30upx;
					display: flex;
					flex-direction: row;
					.box-firend-li-item-madile {
						display: flex;
						flex-direction: row;
						
					
						.box-firend-li-item-madile-img {
							.box-firend-li-item-madile-item-imgs {
								width: 72upx;
								height: 72upx;
							    border-radius: 50%;
								margin-top: 4upx;
							}
						}
						.box-firend-li-item-madile-text {
							display: flex;
							flex-direction: column;
							margin-left: 24upx;
							.box-firend-li-item-madile-text-one {
								width: 180upx;
								height: 26upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #404040;
								line-height: 43upx;
								margin-bottom: 17upx;
							}
							.box-firend-li-item-madile-text-two {
								width: 190upx;
								height: 22upx;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 43upx;
							}
						}
					}
					.box-firend-li-item-letter {
						margin-left: 240upx;
						display: flex;
						flex-direction: row;
						.box-firend-li-item-letter-left {
							display: flex;
							flex-direction: row;
							
							.box-firend-li-item-letter-left-praise {
								width: 26upx;
								height: 26upx;
								margin-right: 10upx;
							}
							.box-firend-li-item-letter-left-number {
								width: 13upx;
								height: 21upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #CCCCCC;
								line-height: 43upx;
							}
						}
						.box-firend-li-item-letter-right {
							display: flex;
							flex-direction: row;
							.box-firend-li-item-letter-right-message {
								margin-left: 30upx;
								margin-right: 10upx;
								width: 27upx;
								height: 24upx;
								margin-top: 6upx;
							}
							.box-firend-li-item-letter-right-number {
								width: 28upx;
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
				
			}
		}
	}
	.swiper-items {
		padding-left: 30upx;
		padding-right: 30upx;
		margin-top: 32upx;
	}
}
</style>
