<template>
	<view class="setting">
		<view class="setting-header" v-if="user_id " @tap='modification'>
			<image class="imgs" src="../../images/cj.jpg" mode=""></image>
			<view class="setting-header-sorted">
				<view class="setting-header-sorted-top">
					玩家:王者荣耀Bot
				</view>
				<view class="setting-header-sorted-bottom">
				  ID:王者荣耀Bot
				</view>
			</view>
			<view class="setting-header-alter">
				<view class="alter">
					修改
				</view>
				<view class="alter-icon el-icon-arrow-right">
					
				</view>
			</view>
		</view>
		<view class="setting-message-list">
			<view class="ul">
				<view class="li">
				<view class="li-item">
						头像框设置
				</view>
				<view class="li-icon el-icon-arrow-right">
					
				</view>
			  </view>
			  
			</view>
		</view>
		
		<view class="quit" @tap='log_out' v-if="user_id ">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			token:'',
			access_token:'',
			user_id:'',
			value:'',
			}
		},
		onLoad(va) {

			   const value = uni.getStorageSync('token')
			   console.log(value)
			  this.token = value
		},
		onShow() {
			const access_token = uni.getStorageSync('access_token')
			const user_id = uni.getStorageSync('user_id')
			console.log(access_token,user_id)
			if (access_token && user_id) {
			this.access_token = access_token
			this.user_id = user_id
			
			}
		
		},
		mounted() {
			
		},
		
		methods: {
			//修改个人信息
			modification () {
				uni.navigateTo({
					url:'../personal/personal'
				})
			},
		
			//退出登录
		 log_out () {
				uni.showModal({
				  
				    content: '您确定要退出吗？',
				    success: async (res) =>{
				        if (res.confirm) {
							
							// if (this.token===1) {
							// 	this.token=0
							// 	  uni.setStorageSync('tokens', this.token);
								
							// }
						    const user_id = uni.getStorageSync('user_id')
							let data = await this.$http.post('/api/userLoginOut',{
							token:'d6a2fa16e60777e390256ec85cc2f42e',
						    user_id:user_id
												
							});
						
								const {CODE} = data
								if (CODE==='200') {
								 uni.removeStorageSync('access_token')
								 uni.removeStorageSync('user_id')
							
									this.settingShow = false
						
								  uni.navigateTo({
								  	url:'../login/login'
								  })
								}
						// 	const {DATA} = data
						// 	if (data.CODE==='200') {
						// 		console.log(DATA)					 
						
					 //     	}
						
				      
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},
		}
	}
</script>

<style lang="scss">
	page, .setting {
		height: 100%;
		overflow: hidden;
	}
 .setting {
	 background-color: #F1F1F1;
	.setting-header {
		background-color: #fff;
		display: flex;
		padding-top: 30upx;
		align-items: center;
		padding-left: 30upx;
		padding-right: 30upx;
		padding-bottom: 41upx;
		.imgs {
			width: 98upx;
			height: 98upx;
			border-radius: 50%;
		}
		.setting-header-sorted {
			flex: 1;
			margin-left: 24upx;
			.setting-header-sorted-top {
				font-size: 30upx;
				font-family: Microsoft YaHei;
				font-weight: bold;
				color: #333232;
				line-height: 43upx;
				letter-spacing: 1px;
			}
			.setting-header-sorted-bottom {
				font-size: 24upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #999797;
				line-height: 43upx;
				letter-spacing: 1px;
			}
		}
		.setting-header-alter {
			display: flex;
			align-items: center;
			.alter {
				font-size: 24upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #999797;
				line-height: 43upx;
				margin-right: 10upx;
				letter-spacing: 1px;
			}
			.alter-icon {
				color: #999797;
			}
		}
	}
	.setting-message-list {
	
		background-color: #fff;
		.ul {
				border-bottom: 5px solid #F1F1F1;
			.li {
				padding-left: 30upx;
				padding-right: 30upx;
				height: 87upx;
				display: flex;
				align-items: center;
			
				.li-item {
				  font-size: 30upx;
				  font-family: Microsoft YaHei;
				  font-weight: bold;
				  color: #333232;
				  line-height: 43upx;
				  letter-spacing: 1px;
				  flex: 1;
				}
				.li-icon {
				
				}
				
			}
		}
	}
	.quit {
		background-color: #fff;
		height: 87upx;
		text-align: center;
		line-height: 87upx;
		font-size: 30upx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #333232;
		letter-spacing: 1px;
	}
 }
</style>
