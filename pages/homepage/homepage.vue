<template>
	<view class="homepage">
		<view class="status_bar">
		   <!-- 这里是状态栏 -->
		 </view>
		
				<view class="nav-bat">
				
						<view class="nav-bat-left">
							<view class="nav-bat-left-iocn el-icon-arrow-left" @click="upleave">
								
							</view>
						
							
						</view>
				
			
				
					<view class="nav-bat-right" @tap="examine">
						<view class="nav-bat-right-icon el-icon-more">
							
						</view>
					 
					</view>
					
				</view>
		<scroll-view :scroll-y="true" style="height: 100%;">
			<view class="homepage-top">
				<view class="homepage-top-headline ">
					<view class="homepage-top-headline-left">
						<view class="homepage-top-headline-img">
							<image class="imgs" src="../../images/ac.jpg" mode=""></image>
						</view>
						<view class="homepage-top-headline-title">
							<view class="homepage-top-headline-title-top">
								王者荣耀Bot
							</view>
							<view class="homepage-top-headline-title-bottom">
								TA还没有设置个性签名
							</view>
							
						</view>
					</view>
					<view class="homepage-top-headline-attention">
					  +	关注
					</view>
				</view>
				 <view class="homepage-top-headline-bottom-area ">
					 <view class="homepage-top-headline-bottom-area-ul">
					 	<view class="homepage-top-headline-bottom-area-li" v-for="(item,index) in homepage_title" :key='index' @click="description(index,$event)">
							<view class="homepage-top-headline-bottom-area-li-number">
								{{item.numbers }}
							</view>
						
							<view class="homepage-top-headline-bottom-area-li-desc">
								{{item.desc}}
							</view>
					 	
					 	</view>
						
					 </view>
				 	
					
				 </view>
				
			</view>
			<view class="homepage-bottom-list">
				<view class="homepage-bottom-list-ul">
					<view class="homepage-bottom-list-li">
						<view class="homepage-bottom-list-li-type-top">
							<view class="homepage-bottom-list-li-left">
								<image class="imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="homepage-bottom-list-li-left-maddle">
									<view class="homepage-bottom-list-li-left-desc">
										王者荣耀Bot
									</view>
									<view class="homepage-bottom-list-li-left-text">
									6分钟前·王者荣耀
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
									兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了
								</view>
								<view class="homepage-bottom-list-li-bottom-text">
									兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
								</view>
							</view>
							<view class="homepage-bottom-list-li-bottom-list-img">
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								
							</view>
							
						</view>
						
						
						
					</view>
					
					
					<view class="homepage-bottom-list-li">
						<view class="homepage-bottom-list-li-type-top">
							<view class="homepage-bottom-list-li-left">
								<image class="imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="homepage-bottom-list-li-left-maddle">
									<view class="homepage-bottom-list-li-left-desc">
										王者荣耀Bot
									</view>
									<view class="homepage-bottom-list-li-left-text">
									6分钟前·王者荣耀
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
									兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了
								</view>
								<view class="homepage-bottom-list-li-bottom-text">
									兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
								</view>
							</view>
							<view class="homepage-bottom-list-li-bottom-list-img">
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								
							</view>
							
						</view>
						
						
						
					</view>
					
					<view class="homepage-bottom-list-li">
						<view class="homepage-bottom-list-li-type-top">
							<view class="homepage-bottom-list-li-left">
								<image class="imgs" src="../../images/cj.jpg" mode=""></image>
								<view class="homepage-bottom-list-li-left-maddle">
									<view class="homepage-bottom-list-li-left-desc">
										王者荣耀Bot
									</view>
									<view class="homepage-bottom-list-li-left-text">
									6分钟前·王者荣耀
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
									兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了兄弟们，死亡细胞打折了
								</view>
								<view class="homepage-bottom-list-li-bottom-text">
									兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
								</view>
							</view>
							<view class="homepage-bottom-list-li-bottom-list-img">
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" src="../../images/zb.jpg" mode=""></image>
								</view>
								
							</view>
							
						</view>
						
						
						
					</view>
					
				</view>
				
			
			</view>
			
			
		</scroll-view>
		<!-- <view class="fixed-coment" >
		<view class="fixed-coment-button-left">
			<view class="fixed-coment-button-left-icon el-icon-chat-line-round">
			
			</view>
				私信
			
		</view>
		<view class="fixed-coment-button-right">
			<view class="fixed-coment-button-right-icon">
				
			</view>
			+ 关注
			
		</view>
		</view> -->
		<popup ref="popup" type="bottom">
			<view class="examine" >
				<view class="examine-item">
					举报
				</view>
				<view class="examine-item">
					拉黑
				</view>
			</view>
			<view class="examine_bottom" @tap='call' >
				取消
			</view>
		</popup>
		
	</view>
</template>

<script>
	import popup from '../../components/uni-popup/uni-popup.vue'
	export default {
		components: {
			popup
		},
		data() {
			return {
				
				homepage_title:[
					{id:1, numbers:222,desc:'关注'},
					{id:2,numbers:12,desc:'粉丝'},
					{id:3,numbers:54,desc:'帖子'},
					{id:4,numbers:'****',desc:'收藏'},
				],
			}
		},
		onLoad() {
		
		},
		methods: {
			//返回上一级
			upleave () {
				uni.navigateBack()
			},
			//点击跳转对应的分类
			description (va,e) {
				if (va===0) {
					uni.navigateTo({
						url:'../concern/concern'
					})
				} else if (va===1) {
					uni.navigateTo({
						url:`../concern/concern?data=${JSON.stringify(va)}`
					})
				} else if (va===2) {
		
				}
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
	page, .homepage{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		
	}	
  .homepage {
	  // height: auto!important;
	  // padding-bottom: 260upx;
	  .fixed-coment {
		  position: fixed;
		  bottom: 0;
		  // z-index: 2222229;
		  padding: 0 30upx;
		  display: flex;
		  background-color: #fff;
		  .fixed-coment-button-left {
			  width: 332upx;
			  height: 72upx;
			  border: 1px solid #D9D9D9;
			  border-radius: 2px;
			  margin-right: 26upx;
			  text-align: center;
			  line-height: 72upx;
			  background-color: #fff;
			  margin-top: 13upx;
			  margin-bottom: 13upx;
			  letter-spacing: 1px;
			  font-family: Microsoft YaHei;
			  color: #999;
			  .fixed-coment-button-left-icon {
				  margin-right: 12upx;
			  }
		  }
		  .fixed-coment-button-right {
			  width: 332upx;
			  height: 72upx;
			  border: 1px solid #8C8C8C;
			  border-radius: 2px;
			  text-align: center;
			  line-height: 72upx;
			  background-color: #1482FF;
			  font-family: Microsoft YaHei;
			  margin-top: 13upx;
			  margin-bottom: 13upx;
			  color: #fff;
			  letter-spacing: 1px;
		  }
	  }
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
	  		.nav-bat-left-iocn {
				// width: 16px;
				// height: 30upx;
				font-size: 40upx; 
			}
	  		
	  	  }
	  	  .nav-bat-right {
	  	  
	  			margin-top: 20upx;
	  			margin-left: 611upx;
	  		 .nav-bat-right-icon {
				font-size: 40upx;
			  }
	  	   }  
	   }
	   .homepage-top {
		   margin-top: 30upx;
		   .homepage-top-headline {
			   padding-left: 30upx;
			   display: flex;
			   
			   .homepage-top-headline-attention {
				   width: 116upx;
				   height: 52upx;
				   background: #1482FF;
				   border-radius: 4px;
				margin-right: 31upx;
				text-align: center;
				letter-spacing: 1px;
				font-size: 28upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #fff;
				line-height: 52upx;
			   }
			   .homepage-top-headline-left {
				   display: flex;
				   flex: 1;
				   .homepage-top-headline-img {
				   				   .imgs {
				   					   width: 92upx;
				   					   height: 91upx;
				   					   border-radius: 50%;
				   				   }
				   }
				   .homepage-top-headline-title {
				   				   margin-left: 24upx;
				   				   .homepage-top-headline-title-top {
				   					   // width: 183px;
				   					   // height: 28px;
				   					   font-size: 28upx;
				   					   font-family: Microsoft YaHei;
				   					   font-weight: bold;
				   					   color: #404040;
				   					   line-height: 43upx;
				   					   letter-spacing: 1px;
				   					 
				   				   }
				   				   .homepage-top-headline-title-bottom {
				   					   // width: 270px;
				   					   // height: 24px;
				   					   font-size: 24upx;
				   					   font-family: Microsoft YaHei;
				   					   font-weight: 400;
				   					   color: #999999;
				   					   line-height: 46upx;
				   					   letter-spacing: 1px;
				   				   }
				   }
			   }
			
		   }
		   .homepage-top-headline-bottom-area {
			   margin-top: 34upx;
			   margin-bottom: 33upx;
			   .homepage-top-headline-bottom-area-ul {
				   display: flex;
				   .homepage-top-headline-bottom-area-li {
							margin-right: 144upx;
							text-align: center;
							&:first-child {
								padding:  0 0 0 58upx;
							}
							&:last-child {
								padding:  0 58upx 0 0 ;
							}
						
					   .homepage-top-headline-bottom-area-li-number {
						   // width: 16upx;
						   // height: 24upx;
						   font-size: 30upx;
						   font-family: Microsoft YaHei;
						   font-weight: 400;
						   color: #333333;
						   line-height: 34upx;
						 
					   }
					   .homepage-top-headline-bottom-area-li-desc {
						   width: 52upx;
						   letter-spacing: 1px;
						   // height: 24upx;
						   font-size: 24upx;
						   font-family: Microsoft YaHei;
						   font-weight: 400;
						   color: #999999;
						   line-height: 43upx;
					   }
				   }
			   }
		   }
	   }
	   .homepage-bottom-list {
		   background-color: #F1F1F1;
		   // height: 870px;
		   padding-bottom: 110upx;
		   .homepage-bottom-list-ul {
			
			   padding-top: 10upx;
			 
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
	   .examine {
		   height:220upx; 
		   background-color: #fff;
		   border-radius: 20upx;
		   margin-left: 10upx;
		   margin-right: 10upx;
		   .examine-item {
			   border-bottom: 1px solid #EBEBEB;
			   text-align: center;
			   height: 110upx;
			   line-height: 110upx;
			   font-size: 30upx;
			   font-family: Microsoft YaHei;
			   font-weight: 400;
			   color: #5E95F2;
			   letter-spacing: 2px;
			   &:last-child {
				 border-bottom:0; 
			   }
		   }
	   }
	   .examine_bottom {
		   margin-top: 16upx;
		   height: 98upx;
		   margin-left: 10upx;
		   margin-right: 10upx;
		   background-color: #fff;
		   text-align: center;
		   line-height: 98upx;
		   font-size: 32upx;
		   font-family: Microsoft YaHei;
		   font-weight: bold;
		   color: #5E95F2;
		   letter-spacing: 2px;
		    border-radius: 20upx;
	   }
  }
</style>
