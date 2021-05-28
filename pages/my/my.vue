<template>
	<view class="my">
		<view class="status_bar">
		        <!-- 这里是状态栏 -->
		    </view>
		<view class="my-nav">
			<view class="my-nav-scan" >
				个人中心
			</view>
			<view class="my-nav-set el-icon-setting" @tap='Setting'>
				
			</view>
			<view class="my-nav-label el-icon-message" @tap='mymessage'>
				 
			</view>
		</view>
		<scroll-view scroll-y="true" style="height: 100%;">
			<view class="my-material" v-if='access_token || user_id' >
				<view class="my-material-top" @tap='mypersonal'>
					<image class="imgs" v-if="materialobj.user_head_url===''?false:materialobj.user_head_url" :src=" 'http://appyouxun.hundredzy.com/' + materialobj.user_head_url" mode=""></image>
					
					<image class="imgs" v-else src="../../images/cj.jpg" mode=""></image>
					
					<view class="my-material-disclosure">
						<view class="material-disclosure-title">
							{{materialobj.user_name}}
						</view>
						<view class="material-disclosure-desc">
						{{	materialobj.user_signature}}
						</view>
					</view>
					<view class="my-material-top-icon el-icon-arrow-right">
					
					</view>
				</view>
				<view class="my-material-bottom">
					<view class="ul">
						<view class="li" @tap='materialclassfily' >
							<view class="li-times">
								{{materialobj.recommend_num }}
							</view>
							<view class="li-classfily">
							关注
							</view>
						</view>
						
						<view class="li" @tap='materialclassfilytwo' >
							<view class="li-times">
								{{materialobj.fans_num }}
							</view>
							<view class="li-classfily">
							粉丝
							</view>
						</view>
						<view class="li" @tap='materialclassfilythree' >
							<view class="li-times">
								{{materialobj.support_num }}
							</view>
							<view class="li-classfily">
							获赞
							</view>
						</view>
						<view class="li" @tap='materialclassfilyfour' >
							<view class="li-times">
								{{materialobj.Topic_num }}
							</view>
							<view class="li-classfily">
							 帖子
							</view>
						</view>
						
					</view>
				</view>
				
				
			</view>
			<view class="my-material-notlog" @tap='clickRegister' v-else-if="user_id || access_token===''">
				<view class="box">
					<image class="imgs" src="../../images/my.png" mode=""></image>
				</view>
				<view class="my-material-click">
					<view class="my-material-click-log">
						点击登录
					</view>
					<view class="my-material-click-desc">
						登录解锁更多内容
					</view>
				</view>
			</view>
			<view class="my-banner" >
				<image @tap='wbbanner(item)' v-for="(item,index) in bannerList" class="imgs" :src="item.img" mode=""></image>
			</view>
			<view class="my-message-list">
				<view class="ul">
					<!-- <view class="li">
						<view class="li-icon">
							<image class="imgs" src="../../images/yao.png" mode=""></image>
						</view>
						<view class="li-dustbin">
							邀请新用户
						</view>
						<view class="li-arrows el-icon-arrow-right">
							
						</view>
					</view> -->
					<view class="li" v-if="userState">
						<view class="li-icon">
							<image class="imgs" src="../../images/shouc.png" mode=""></image>
						</view>
						<view class="li-dustbin" @tap='enshrine'>
							我的收藏
						</view>
						<view class="li-arrows el-icon-arrow-right">
							
						</view>
					</view>
					
					<view class="li" v-if="userState">
						<view class="li-icon">
							<image class="imgs" src="../../images/lishi.png" mode=""></image>
						</view>
						<view class="li-dustbin" @tap='browse'>
							浏览记录
						</view>
						<view class="li-arrows el-icon-arrow-right">
							
						</view>
					</view>
					<view class="li" v-if="userState">
						<view class="li-icon">
							<image class="imgs" src="../../images/fan.png" mode=""></image>
						</view>
						<view class="li-dustbin" @tap='feedback'>
							意见与反馈
						</view>
						<view class="li-arrows el-icon-arrow-right">
							
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
				token:'',
				access_token:'',
				user_id:'',
			  materialList:[
				  {id:1,text:'关注'},
				  {id:2,text:'粉丝'},
				  {id:3,text:'获赞'},
				  {id:4,text:'贴子'}
			  ],
			  materialobj:{},
			  bannerList:[],
			}
		},
		
		onLoad() {
			
	// 	   let value = uni.getStorageSync('tokens')
		
	// 	  console.log(value)
	
	// 	if (value===0) {
	// 	 this.token =  value
	// 	} 
		// if (values===1) {
		// 	 this.token =  values 
		// }
		
		//  console.log(this.token)
		},
		//tabbar切换执行
		onShow() {
			const access_token = uni.getStorageSync('access_token')
			const user_id = uni.getStorageSync('user_id')
			// console.log(user_id)
			if (access_token && user_id) {
			this.access_token = access_token
			this.user_id = user_id
			
			}
			
			const value = uni.getStorageSync('too');
			if (value) {
			  this.token = value 
			} 
			// console.log(value)    
		},
		mounted() {
	      this.getPersonalInfo()
		  this.getPersonalAd()
		},
		computed: {
			userState () {
				const user_id = uni.getStorageSync('user_id')
				return user_id
			}
		},
		methods: {
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
				}
			},
			//banner广告位
			async getPersonalAd () {
				const data = await this.$http.post('/api/getPersonalAd',{
				token:'d6a2fa16e60777e390256ec85cc2f42e',
			
				});
							
				const {CODE,DATA} = data
				if (CODE==='200') {
					// this.materialobj = DATA
					this.bannerList = DATA
					console.log(this.bannerList)
				}
			},
			//点击登录 
			clickRegister () {
				 const value = uni.getStorageSync('too');
				 console.log(value)
				 if (value) {
					this.token =  value
				 }
				uni.reLaunch({
					url:'../login/login'
				})
			},
		  //意见反馈
		  feedback () {
			  uni.navigateTo({
			  	url:'../feedback/feedback'
			  })
		  },
		  //到个人信息页面
		  // materialSetting () {
			 //  uni.setStorageSync('token', this.token);
			 //  uni.navigateTo({
			 //  	url:'../personal/personal',
				
			 //  }) 
		  // },
		  //设置
		  Setting () {
			    uni.setStorageSync('token', this.token);
			 uni.navigateTo({
			 	url:'../setting/setting'
			 }) 
		  },
		  //分类
		  materialclassfily () {
			
			 	uni.navigateTo({
			 		url:'../myconcern/myconcern'
			 	})
			 
		  },
		  materialclassfilytwo () {
			  uni.navigateTo({
			  	url:`../myconcern/myconcern?items=${1}`
			  })
		  },
		  materialclassfilythree () {
			  
		  },
		  mypersonal () {
			  uni.navigateTo({
			  	url:'../setting/setting'
			  })
		  },
		  materialclassfilyfour () {
			  uni.navigateTo({
			  	url:'../myhost/myhost'
			  })
		  },
		  //浏览记录
		  browse () {
			  uni.navigateTo({
			  	url:'../browse/browse'
			  })
		  },
		  //收藏
		  enshrine () {
			 uni.navigateTo({
			 	url:'../collect/collect'
			 }) 
		  },
		  mymessage () { 
			  uni.showToast({
			    title:'该功能暂未开放 敬请期待!',
			    icon:'none',
			    duration:2000
			  })
			  // uni.navigateTo({
			  // 	url:'../button/button'
			  // })
			
		  },
		  wbbanner (va) {
			   const url = 'http://uri6.com/tkio/iyiemqa'  
			 // uni.navigateTo({
			 // 	url:`../webview/webview?items=${va.account}` 
			 // })  
			 
			 //#ifdef APP-PLUS
			 plus.runtime.openURL(url, (res)=> {  
			     console.log(res);  
			  }); 
			  	//#endif
			 // uni.showToast({
			 //   title:'该功能暂未开放 敬请期待!',
			 //   icon:'none',
			 //   duration:2000
			 // })
		  }
		}
	}
</script>

<style lang="scss">
	page, .my{
		
		background-color:ffff ;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%; 
		
	 }
      .my {
		  background-color: #fff;
	   .my-nav {
		   padding-left: 30upx;
		   // padding-right: 30upx;
		   background-color: #fff;
		   	// padding-right: 30upx;
		display: flex;
		// justify-content: flex-end;
		padding-bottom: 28upx;
		.my-nav-scan {
		flex: 1;
		font-size: 32upx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #333333;
		}
		.my-nav-set {
			margin-right: 30upx;
			font-size: 40upx;
		}
		.my-nav-label {
			margin-right: 30upx;
			font-size: 40upx;
		}
	}
	.my-material {
	   background-color: #fff;
		.my-material-top {
			padding-left: 34upx;
			padding-right: 30upx;
			display: flex;
			align-items: center;
			margin-bottom: 41upx;
			.imgs {
				width: 98upx;
				height: 98upx;
				border-radius: 50%;
			}
			.my-material-disclosure {
				flex: 1;
				margin-left: 24upx;
				.material-disclosure-title {
					font-size: 30upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #333232;
					line-height: 43upx;
				}
				.material-disclosure-desc {
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999797;
					line-height: 43upx;
					letter-spacing: 1px;
				}
			}
			.my-material-top-icon {
				font-size: 40upx;
				color: #999;
			}
		}
		.my-material-bottom {
			padding-left: 59upx;
			padding-right: 59upx;
			.ul {
				display: flex;
				justify-content: space-between;
				.li {
					text-align: center;
					.li-times {
						font-size: 32upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						line-height: 34upx;
						margin-bottom: 10upx;
					
					}
					.li-classfily {
						font-size: 24upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #999999;
						line-height: 43upx;
						letter-spacing: 1px;
					}
				}
			}
		}
	}
	.my-material-notlog {
		padding-left: 30upx;
		padding-right: 30upx;
		display: flex;
	    align-items: center;
		   background-color: #fff;
		   .box {
			   position: relative;
			   width: 50px;
			   height: 50px;
			   background-color: #F1F1F1;
			   border-radius: 50%;
			   .imgs {
			   	width: 70upx;
			   	height: 70upx;
			   	border-radius: 50%;
			    position: absolute;
			   	top:50%;
			   	left: 50%;
			   	transform: translate(-50%,-50%);
			   }
		   }
		  
		   .my-material-click {
			   margin-left: 20upx;
			   .my-material-click-log {
				   font-size: 30upx;
				   font-family: Microsoft YaHei;
				   font-weight: bold;
				   color: #333232;
				   margin-bottom: 10upx;
			   }
			   .my-material-click-desc {
				   font-size: 24upx;
				   font-family: Microsoft YaHei;
				   font-weight: 400;
				   color: #999797;
			   }
		   }
	}
	.my-banner {
		   background-color: #fff;
		   border-bottom: 5px solid #f1f1f1;
		padding-left: 30upx;
		padding-right: 30upx;
		padding-top: 38upx;
		padding-bottom: 32upx;
		.imgs { 
			width: 690upx;
			height: 180upx;
			border-radius: 8px;
		}
	}
	.my-message-list {
		   background-color: #fff;
		padding-left: 30upx;
		padding-right: 30upx; 
		margin-top: 10upx;
		//background-color: #F1F1F1;
		.ul {
			
			.li {
				height: 87upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #F2F2F2;
				margin-bottom: 34upx;
				
			  .li-icon {
				  margin-right: 18upx;
				  .imgs {
					  width: 35upx;
					  height: 33upx;
					  margin-top: 8upx;
				  }
			  }
			  .li-dustbin {
				  flex: 1;
				  font-size: 28upx;
				  font-family: Microsoft YaHei;
				  font-weight: 400;
				  color: #666666;
				  line-height: 45upx;
				  letter-spacing: 1px;
			  }
			  .li-arrows {
				  font-size: 40upx;
			  }
			}
		}
	}
}
</style>
