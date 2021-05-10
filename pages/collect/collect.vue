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
			<swiper-item  v-for="(item,index) in 2" :key='index'>
				<scroll-view scroll-y="true" style="height: 100%;" >
			<view class="recommend-list">
				<view class="recommend-list-ul">
					<view class="recommend-list-li" @tap='maidan(item)' v-for="(item,index) in maidanList">
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
									<image class="imgs" src="../../images/zanxuan.png" mode=""></image>
									<!-- <view class="recommend-list-li-area-number-left">
										11
									</view> -->
								</view>
								<view class="recommend-list-li-area-right" v-if="currIndex===1">
									<image class="imgs" src="../../images/shouxuan.png" mode=""></image>
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
		components: {
		
		},
		data() {
			return {
				currIndex:0,
				concern_classify:[
					{id:1,text:'资讯'},
					{id:2,text:'帖子'},
				],
				maidanList:[
					
				]
			}
		},
	    onLoad(va) {

			
		},
	     mounted() {
		 this.myCollect()
		},
		
		methods: {
		async myCollect () {
				const user_id = uni.getStorageSync('user_id')
			     let prams = this.currIndex===0?'news':'topic'
				
				let data = await this.$http.post('/api/myCollect',{	
				token:'d6a2fa16e60777e390256ec85cc2f42e',
		        user_id:user_id,
			    place_param:prams
				});
				// console.log(data)
				const {CODE,DATA} = data
				if (CODE==='200') {
					this.maidanList = DATA
				
				}
			},
		
			//返回上一级页面
			back () {
			  uni.navigateBack()
			},
			
			concernTable (va) {
				
			
			  this.currIndex = va
			  console.log(this.currIndex)
			  this.myCollect()
			},
			changItem (va) {
			
				this.currIndex = va.detail.current
				this.myCollect()
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
					background: #CCCCCC;
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
