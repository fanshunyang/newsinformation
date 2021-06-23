<template>
	<view class="setting">
		<view class="status_bar">
		         <!-- 这里是状态栏 --> 
					
						
		  </view>
		  <view class="nav-header" style="display: flex; padding-left: 30upx; padding-right: 30upx;">
		  	<view @tap='backstap' class="nav-header-left el-icon-arrow-left" style="font-size: 40upx;">
		  		
		  	</view>
			<view class="nav-header-right" style="margin:  0 auto; font-family: Microsoft YaHei;font-weight: bold;color: #333232; letter-spacing: 1px;">
				设置
			</view>
		  </view>
		<view class="setting-header" v-if="user_id===''?acdtoken: user_id" @tap='modification'> 
			<image class="imgs" v-if="materialobj.user_head_url===''?false:materialobj.user_head_url" :src="materialobj.user_head_url" mode=""></image>
			<image class="imgs" v-else src="../../images/cj.jpg" mode=""></image>
		
			<view class="setting-header-sorted">
				<view class="setting-header-sorted-top">
				{{materialobj.user_name}}
				</view>
				<view class="setting-header-sorted-bottom">
				{{materialobj.user_signature}}
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
				<view class="li-item" @tap='picture'>
						头像框设置
				</view>
				<view class="li-icon el-icon-arrow-right">
					
				</view>
			  </view>
			  
			</view>
		</view>
		
		<view class="quit" @tap='log_out' v-if="user_id===''?acdtoken: user_id "> 
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			token:'',
			acdtoken:false,
			access_token:'',
			user_id:'',
			value:'',
			materialobj:{},
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
		  this.getPersonalInfo()
		},
		
		methods: {
			//返回
			backstap () {
				
				uni.reLaunch({
					url:'../my/my'
				})
			},
			//登录成功后个人资料
			async getPersonalInfo () {
				const user_id = uni.getStorageSync('user_id')
				const data = await this.$http.post('/api/getPersonalInfo',{
				token:'d6a2fa16e60777e390256ec85cc2f42e',
				user_id:user_id			
				});
			
				const {CODE,DATA} = data
				if (CODE==='200') {
					this.materialobj = DATA
					
					console.log(this.materialobj)
						this.acdtoken = true 
				}
				if (CODE==='NOTlOGIN01') {
					this.acdtoken = false 
				}
			},
			//修改个人信息
			modification () {
				uni.navigateTo({
					url:`../personal/personal?item=${encodeURIComponent (JSON.stringify(this.materialobj))}`
				})
			},
		
			//退出登录
		 log_out () {
			 // uni.navigateTo({
			 // 	url:'../login/login'
			 // })
				uni.showModal({
				  
				    content: '您确定要退出吗？',
				    success: async (res) =>{
				        if (res.confirm) {
						
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
									this.acdtoken = false 
								  uni.navigateTo({
								  	url:'../login/login'
								  })
								}
				      
				        } else if (res.cancel) {
				            console.log('用户点击取消'); 
				        }
				    }
				});
				
			},
			//头像框
			picture () {
				uni.showToast({
					title:'该功能暂未开通,敬请期待!', 
					icon:'none',
					duration:2000
				})
			},
 		}
	}
</script>

<style lang="scss">
	page, .setting {
		height: 100%;
		overflow: hidden;
	
	}
	
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		 background-color: #fff;
		
	 }
 .setting {
	 // background-color: #F1F1F1;
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
