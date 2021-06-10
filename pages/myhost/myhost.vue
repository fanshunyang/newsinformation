<template>
	<view class="myinvitation">
		<view class="status_bar">
		   <!-- 这里是状态栏 -->
		 </view>
		 <view class="nav-bat">
		 
		 		<view class="nav-bat-left">
		 			<view class="nav-bat-left-iocn el-icon-arrow-left" @click="upleave">
		 				
		 			</view>
		 		
		 			
		 		</view>
		 
		 			<view class="nav-bat-center">
		 				我的贴子
		 			</view>
		 
		 	<view class="nav-bat-right" @tap="examine">
		 		<view class="nav-bat-right-icon el-icon-more">
		 			
		 		</view>
		 	 
		 	</view>
		 	
		 </view>
		<scroll-view scroll-y="true" style="height: 100%;" >
		<view class="homepage-bottom-list">
			<view class="homepage-bottom-list-ul">
				<view class="homepage-bottom-list-li" @tap='myinlistclick(item)' v-for="(item,index) in myinviList ">
					<view class="homepage-bottom-list-li-type-top">
						<view class="homepage-bottom-list-li-left">
							<image class="imgs" :src=" item.new_author_head_url" mode=""></image>
							<view class="homepage-bottom-list-li-left-maddle">
								<view class="homepage-bottom-list-li-left-desc">
									{{item.new_author}}
								</view>
								<view class="homepage-bottom-list-li-left-text">
								{{item.news_add_time}}
								</view>
							</view>
							
						</view>
						<view class="homepage-bottom-list-li-right">
							<view class="homepage-bottom-list-li-right-li">
								<view class="homepage-bottom-list-li-right-icon ">
									<image class="imgs" src="../../images/zan.png" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-right-number">
									1
								</view>
								<view class="homepage-bottom-list-li-right-label-icon el-icon-chat-dot-square">
									
								</view>
								<view class="homepage-bottom-list-li-right-label-number">
									34
								</view>
							</view>
							
						
						</view>
					</view>
					<view class="homepage-bottom-list-li-type-bottom">
						<view class="homepage-bottom-list-li-bottom">
							<view class="homepage-bottom-list-li-bottom-desc">
							{{item.new_title}}
							</view>
							<!-- <view class="homepage-bottom-list-li-bottom-text">
								兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
							</view> -->
						</view>
						<view class="homepage-bottom-list-li-bottom-list-img">
							<view class="homepage-bottom-list-li-bottom-list-img-li">
								<image class="imgs" :src="  item.news_img" mode=""></image>
							</view>
							<!-- <view class="homepage-bottom-list-li-bottom-list-img-li">
								<image class="imgs" src="../../images/zb.jpg" mode=""></image>
							</view>
							<view class="homepage-bottom-list-li-bottom-list-img-li">
								<image class="imgs" src="../../images/zb.jpg" mode=""></image>
							</view> -->
							
						</view>
						
					</view>
					
					
					
				</view>
				
				
				
			</view>
			
		
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recom_user_id:"", 
				myinviList:[],
			}
		},
		onLoad(va) {
		  // this.recom_user_id =  va.recom_user_id
		  this.squareList()
		},
		methods: {
			//首页用户发过的帖子
			async squareList () {
				const user_id = uni.getStorageSync('user_id')
				const data = await this.$http.post('/api/mySquare',{
				token:'d6a2fa16e60777e390256ec85cc2f42e',
				user_id:user_id		
				});
			
				const {CODE,DATA} = data
				if (CODE==='200') {
				
					this.myinviList = DATA
					console.log(	DATA)
				}
			},
			myinlistclick (va) {
			     const id = va.id
				uni.navigateTo({
					url:`../details/details?item=${id}`
				})
			},
			//返回上一级
			upleave () {
				uni.navigateBack()
			},
			//举报和拉黑
			examine () {
			 this.$refs.popup.open()
			},
			//取消
			call () {
			 this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss">
	page, .myinvitation{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		
	}	
.myinvitation {
	.nav-bat {
			  display: flex;
			 flex-direction: row;
			z-index: 2222;
		padding: 0 30upx;
		margin-bottom: 20upx;
		align-items: center;
		  background-color: #fff;
		  .nav-bat-left {
				display: flex;
			flex-direction: row;
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
		
		 }
		  .nav-bat-right {
		  
				// margin-top: 20upx;
			
			 .nav-bat-right-icon {
					font-size: 40upx;
				  }
		   }  
	 }
	.homepage-bottom-list {
			   background-color: #F1F1F1;
			   // height: 870px;
			   padding-bottom: 10upx;
			   .homepage-bottom-list-ul {
				
				   // padding-top: 10upx;
				 
				   .homepage-bottom-list-li {
					     padding-left: 30upx;
						 padding-right: 29upx;
					   padding-top: 32upx;
					 background-color: #fff;
					 border-bottom: 1px solid #F5F5F5;
					 // margin-bottom: 32upx;
					 .homepage-bottom-list-li-type-top {
						  display: flex;
						  margin-bottom: 20upx;
						 .homepage-bottom-list-li-left {
							 display: flex;
							 margin-right: 220upx;
							 .imgs {
								 width: 72upx;
								 height: 72upx;
								 border-radius: 50%;
							 }
							 .homepage-bottom-list-li-left-maddle {
								 display: flex;
								 flex-direction: column;
								 margin-left: 25upx;
								.homepage-bottom-list-li-left-desc {
									width: 183upx;
									// height: 28upx;
									font-size: 28upx;
									font-family: Microsoft YaHei;
									font-weight: bold;
									color: #404040;
									line-height: 43upx;		
									letter-spacing: 1px;
								}
								.homepage-bottom-list-li-left-text {
									// width: 190upx;
									// height: 23upx;
									font-size: 22upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #999999;
									line-height: 43upx;	
								    letter-spacing: 1px;
								} 
							 }
							
						 }
						 .homepage-bottom-list-li-right {
							 .homepage-bottom-list-li-right-li {
								 display: flex;
								 .homepage-bottom-list-li-right-icon {
									 margin-right: 10upx;
									 // margin-top: 6upx;
									 .imgs {
										 width: 26upx;
										 height: 26upx;
									 }
								 }
								 .homepage-bottom-list-li-right-number {
									 margin-right: 20upx;
								 }
								 .homepage-bottom-list-li-right-label-icon {
									 	 margin-right: 10upx;
										  margin-top: 6upx;
								 }
								 .homepage-bottom-list-li-right-label-number {
									 
								 }
							 }
						 }
					 }
					 .homepage-bottom-list-li-type-bottom {
						 .homepage-bottom-list-li-bottom {
							 .homepage-bottom-list-li-bottom-desc {
								 // width: 337upx;
								 // height: 27upx;
								 font-size: 26upx;
								 font-family: Microsoft YaHei;
								 font-weight: bold;
								 color: #404040;
								 line-height: 43upx;
								 letter-spacing: 1px;
								 margin-bottom: 18upx;
							 }
							 .homepage-bottom-list-li-bottom-text {
								 // width: 687upx;
								 // height: 67upx;
								 font-size: 26upx;
								 font-family: Microsoft YaHei;
								 font-weight: 400;
								 color: #666666;
								 line-height: 41upx;
								 letter-spacing: 1px;
								 margin-bottom: 23upx;
							 }
						 }
						 .homepage-bottom-list-li-bottom-list-img {
							 margin-bottom: 32upx;
							 display: flex;
							 .homepage-bottom-list-li-bottom-list-img-li {
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