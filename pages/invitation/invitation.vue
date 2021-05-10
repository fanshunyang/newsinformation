<template>
	<view class="invitation" >
		<view class="status_bar">
		         <!-- 这里是状态栏 --> 
					
						
		  </view>
		
		  <view class="invitation-header">
			  <view class="invitation-header-left" @click="back">
			  	返回
			  </view>
			  <view class="invitation-header-center">
			  	帖子/动态
			  </view>
			  <view class="invitation-header-right">
				  <view class="invitation-header-right-draft">
				  	草稿（0）
				  </view>
				  <view class="invitation-header-right-send">
				  	发送
				  </view>
			  	
				
			  </view>
		  	
			
			
		  </view>
		  <view class="invitation-main">
			  <view class="invitation-main-input-top">
			  	<input class="input" @blur="blur" @focus="focus"  type="text" value="" placeholder="标题" />
				<view class="invitation-main-input-title">
					如何写好标题
				</view>
			  </view>
			  <view class="invitation-main-input-bottom">
			  	<textarea @blur="blur" @focus="focus" focus :maxlength='-1' class="input" type="text" value="" placeholder="写上你的标题会增加更多的曝光量哦！" />
			  </view>
		  	
			
		  </view>
		  <view class="invitation-bottom" v-if="lose">
			  <view class="invitation-bottom-attachment" @click='addtopic'>
			  #	添加话题
			  </view>
			  <view class="invitation-bottom-community">
				  <view class="invitation-bottom-community-left">
				  	选择社区
				  </view>
				  <view class="invitation-bottom-community-right">
				  	发布到合适的社区，会有更多的曝光机会 
					<text class="el-icon-arrow-right"></text>
				  </view>
			  	
				
			  </view>
			  <view class="invitation-bottom-classify">
			  	<view class="invitation-bottom-classify-icon el-icon-arrow-down" @click="ensconce">
			  		
			  	</view>
				<view class="invitation-bottom-classify-icon-classify">
					<view class="invitation-bottom-classify-icon-classify-classification">
						#
					</view>
					 <view class="invitation-bottom-classify-icon-classify-classification">
					 	@
					 </view>
					 <view class="invitation-bottom-classify-icon-classify-classification el-icon-picture">
					 	
					 </view>
				</view>
				
				
			  </view>
		  	 
			 
			 
			 
		  </view>
	
	
	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lose:false,
			
			}
		},
		methods: {
			//返回上一级
			back () {
				uni.switchTab({
				    url: '../index/index'
				});
			},
			
			//获得焦点
			focus () {
				this.lose = true
			},
			//失去焦点
			blur () {
				// this.lose = false
					uni.hideKeyboard()
					// uni.onKeyboardHeightChange(res => {
					//   console.log(res.height)
					// })
			},
		
			//隐藏软键盘
			ensconce () {
				uni.hideKeyboard()
					this.lose = false
			},
			//添加话题
			addtopic () {
			
				uni.navigateTo({
					url:'../topic/topic'
				})
			},
		}
	}
</script>

<style lang="scss">
	page, .invitation{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
 .status_bar {

      height: var(--status-bar-height);
      width: 100%; 
	  background-color: #fff;
	
  }
  .invitation {
	 .invitation-header {
		 padding-left: 30upx;
		 padding-right: 30upx;
		 margin-bottom: 25upx;
		 display: flex;
		.invitation-header-left {
			font-size: 28upx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #333333;
		} 
		.invitation-header-center {
			font-size: 32upx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color: #333333;
			// line-height: 34upx;
			flex: 1;
			text-align: center;
			margin-left: 60upx;
		}
		.invitation-header-right {
			display: flex;
			.invitation-header-right-draft {
				font-size: 28upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #333333;
				margin-right: 24upx;
			}
			.invitation-header-right-send {
				font-size: 28upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #1482FF;
				// line-height: 34px;
			}
		}
	 }
	 .invitation-main {
		 .invitation-main-input-top {
			 	display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1px solid #F5F5F5;
			 .input {
				 height: 83upx;
				padding-top: 10upx;
				padding-left: 30upx;
				font-size: 30upx;
				font-family: Microsoft YaHei;
				color: #CCCCCC;
				letter-spacing: 1px; 
				font-weight: 400;
				flex: 1;
			 }
			
			
			.invitation-main-input-title {
			
				font-size: 24upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #CCCCCC;
				padding-right: 30upx;
				letter-spacing: 1px;
			}
		 }
		 .invitation-main-input-bottom {
			 width: 100%;
			 height:  400upx;
			 padding-left: 30upx;
			 padding-right: 30upx;
			 margin-top: 32upx;
			 font-size: 26upx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #CCCCCC;
			 letter-spacing: 1px;
			.input {
				
			} 
		 }
	 }
	 .invitation-bottom {
		 padding-left: 30upx;
		 padding-right: 30upx;
		 .invitation-bottom-attachment {
			 width: 160upx;
			 height: 46upx;
			 background: #F7F7F7;
			 border-radius: 4px;
			 font-size: 24upx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #0598FF;
			 line-height: 46upx;
			 text-align: center;
			 letter-spacing: 1px;
			 margin-bottom: 50upx;
		 }
		 .invitation-bottom-community {
			 display: flex;
			 margin-bottom: 50upx;
			 .invitation-bottom-community-left {
				 flex: 1;
				 font-size: 26upx;
				 font-family: Microsoft YaHei;
				 font-weight: 400;
				 color: #333333;
				 line-height: 34upx;
			 }
			 .invitation-bottom-community-right {
				 font-size: 20upx;
				 font-family: Microsoft YaHei;
				 font-weight: 400;
				 color: #CCCCCC;
				 line-height: 34upx;
				
			 }
		 }
		 .invitation-bottom-classify {
			 display: flex;
			 .invitation-bottom-classify-icon {
				 flex: 1;
			 }
			 .invitation-bottom-classify-icon-classify {
				 display: flex;
				 justify-content: center;
				 align-items: center;
				 .invitation-bottom-classify-icon-classify-classification {
					 margin-right: 32upx;
					 color: #999999;
				 }
			 }
		 }
	 }
  }
</style>
