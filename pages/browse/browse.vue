<template>
	<view class="browse">
		<view class="status_bar">
		        <!-- 这里是状态栏 -->
		    </view>
			<view class="nav-bat">
			
					<view class="nav-bat-left">
						<view class="nav-bat-left-iocn el-icon-arrow-left" @click="upleave">
							
						</view>
					
						
					</view>
			
						<view class="nav-bat-center">
						浏览记录
							
						</view>
			
				<view class="nav-bat-right" @tap="delate">
					<view class="nav-bat-right-icon el-icon-delete">
						
					</view>
				 
				</view>
				
			</view>
			<view class="borwer_ul">
				<view class="li" :class="{'li_item' :item.id===currIndex }" @tap='tabclick(item)' v-for=" (item,index) in  tablist" :key='index'>
				{{item.title}}
				</view>
			
			</view>
		
				<swiper style="height: 100%;" :current="currIndex" @change="tabchange">
					<swiper-item v-for="(item,index) in 2" style="height: 100%;">
						<scroll-view scroll-y="true" style="height: 100%;">
						<view class="recommend-list">
							<view class="recommend-list-ul">
								<view class="recommend-list-li" @tap='maidan(item)' v-for="(item,index) in browseList">
									<view class="recommend-list-li-top" >
									<view class="recommend-list-li-desc" style="display: flex; flex: 1;">
										<image class="recommend-list-li-imgs" v-if="currIndex===1" :src="item.new_author_head_url" mode=""></image>
										<view class="recommend-list-li-label">
											<view class="recommend-list-li-label-top">
											{{item.re_news_title || item.new_author }}
											</view>
											<view class="recommend-list-li-label-bottom">
											{{item.re_news_intro || item.new_title }}
											</view>
										</view>
									  </view>
										<view class="recommend-list-li-area">
											<view class="recommend-list-li-area-left">
												<!-- <view class="recommend-list-li-area-icon-left el-icon-thumb ">
													
												</view> -->
												<!-- <image class="imgs" src="../../images/zanxuan.png" mode=""></image> -->
												<!-- <view class="recommend-list-li-area-number-left">
													11
												</view> -->
											</view>
											<view class="recommend-list-li-area-right">
												<!-- <image class="imgs" v-if="currIndex===1" src="../../images/shouxuan.png" mode=""></image> -->
												<!-- <view class="recommend-list-li-area-icon-right el-icon-chat-dot-square">
													
												</view> -->
											<!-- 	<view class="recommend-list-li-area-number-right">
													221
												</view> -->
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
												<image class="imgs" :src="item.re_news_img_url || item.news_img" mode=""></image>
											</view>
											
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
		data() {
			return {
				browseList:[
				
				],
				tablist:[
					{id:0,title:'资讯'},
					{id:1,title:'热帖'}
				],
				currIndex:0,
			}
		},
		mounted() {
			this.myViewsRecord()
		},
		methods: {
			//浏览记录
			async myViewsRecord () {
					const user_id = uni.getStorageSync('user_id')
				     let prams = this.currIndex===0?'news':'topic'
					
					let data = await this.$http.post('/api/myViewsRecord',{	
					token:'d6a2fa16e60777e390256ec85cc2f42e',
			        user_id:user_id,
				    place_param:prams
					});
					// console.log(data)
					const {CODE,DATA} = data
					if (CODE==='200') {
						this.browseList = DATA
					
					}
				},
				maidan (va) {
				    let id = va.id
					if (this.currIndex===0) {
						uni.navigateTo({
							url:`../qualification/qualification?item=${id}`
						})
					} else if (this.currIndex===1) {
						uni.navigateTo({
							url:`../details/details?item=${id}`
						})
					}
				},
				tabclick (va) {
					this.currIndex = va.id
					this.myViewsRecord()
				},
				tabchange (va) {
				this.currIndex = va.detail.current
				this.myViewsRecord()
				},
			//返回上一级
			upleave () {
			   uni.navigateBack()
			},
			//清空记录
			 delate () {
			uni.showModal({
				title:'您确定要清除吗？',
				success: async (res)=>{
					if (res.confirm) {
						const user_id = uni.getStorageSync('user_id')
						let data = await this.$http.post('/api/deleteMyViewsRecord',{	
						token:'d6a2fa16e60777e390256ec85cc2f42e',
						user_id:user_id,
						});
						const {CODE} = data
						if (CODE==='200') {
							this.myViewsRecord()
						}
					}
				}
			})
			
		
			
			},
		}
	}
</script>

<style lang="scss">
	page, .browse{
		
		background-color:#ffff !important;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%; 
		
	 }
	.browse {
	 .nav-bat {
	 		  display: flex;
	 		 flex-direction: row;
	 		z-index: 2222;
	 	padding: 0 30upx;
		margin-bottom: 20upx;
	 	  background-color: #fff;
	 	  .nav-bat-left {
	 			display: flex;
	 		flex-direction: row;
			align-items: center;
	 		// margin-top: 20upx;
	 		.nav-bat-left-iocn {
	 				// width: 16px;
	 				// height: 30upx;
	 				font-size: 40upx; 
	 			}
	 		
	 	  }
		  .nav-bat-center {
			  flex: 1;
			  text-align: center;
			  font-size: 32upx;
			  font-family: Microsoft YaHei;
			  font-weight: bold;
			  color: #333333;
			  
			  // line-height: 34upx;
		  }
	 	  .nav-bat-right {
	 	  
	 			// margin-top: 20upx;
	 		
	 		 .nav-bat-right-icon {
	 				font-size: 40upx;
	 			  }
	 	   }  
	  }
	  .borwer_ul {
		   display: flex;
		    justify-content: center;
		    margin-left: 20px;
			.li_item {
				color: #007AFF !important;
				border-bottom: 2px solid #007AFF;
			}
		  .li {
				margin-right: 30px;
				height: 23px;
			    font-size: 13px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #999999;
			    line-height: 17px;
				margin-right: 40px;
				letter-spacing: 2px;
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
							margin-bottom: 20upx;
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
</style>
