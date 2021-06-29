<template>
	<view class="login"> 
		<view class="status_bar">
		         <!-- 这里是状态栏 -->
					
						
		  </view>
		  <view class="el-icon-close clos" @click="close">
		  	
		  </view>
		  <view class="t-login">
		  	<!-- 页面装饰图片 -->
		  	<image class="img-a" src="@/static/2.png"></image>
		  	<!-- <image class="img-b" src="@/static/3.png"></image> -->
		  	<!-- 标题 -->
		  	<view class="t-b">{{ title }}</view>
		
		  	<!-- <view class="t-f"><text>———请选择您当前需要登录的平台———</text></view> -->
		  	<!-- <view class="t-e cl" style="margin-left: 140px;">
				
	<view class="t-g" @click="phoneNumbers"><image src="@/static/sj.jpg"></image></view>
				
		  	  
		  	</view> -->
		  </view>
		   
		 
		
	
		<!-- <input  v-model="verificationdate" password @input="verification" class="verification"  placeholder="请输入验证码" value="" /> -->
				
	<!-- 	<view class="verification_pos" >
			<text>{{!codeTime?'获取验证码':codeTime+'s'}}</text>
	  </view> -->
	  <view class="el-icon-circle-close closer" @tap='closestr' v-if="closet" style="position: absolute; top: 251px; right: 10px; font-size: 20px;">
	  	
	  </view>
	 
	  <view class="item">
	       	<input  maxlength="11"   v-model="nickphone" @input="nicknamechange" class="input" type="number" placeholder="请输入您的手机号" value="" />
	      </view>
		  <view class="lo_g" @tap='madeverifications'>
		   获取验证码
		  </view> 
	 <!--   <number-keyboard tabBar ref='KeyboarHid' @input='inpute' psdLength='11'></number-keyboard> -->
	<!--  <view class="username" @tap='establish'>
	  	还没有账号？自动创建
	  </view> -->
	</view>
</template>

<script>
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	export default {
		components: {
		
			numberKeyboard,
			passwordInput
		},
		data() { 
			return { 
				password:'',
				closet:false,
				codeTime:0,
				phone_number:'15713665448',    
				title:'欢迎回来',
				phoneNumber:'',
				openid:'',
				access_token:'',  
				token:1,
				nickphone:'',
				verificationdate:'',
				
			}
		},
		onLoad() {
		
		},
		methods: {
			
		
			inpute (va) {
				 this.nickphone = va;
				 console.log( this.nickphone)
			},
 			close () {
				
				uni.reLaunch({
					url:'../index/index'
				})
			},  
		
			nicknamechange (va) {
			
				this.nickphone =  va.detail.value
				if (this.nickphone==='') {
				   this.closet = false
				} else {
				   this.closet = true 
				}
			
			},
			closestr () {
			this.nickphone = '' 
			this.closet = false
			},
			verification (va) {
				this.verificationdate =  va.detail.value
				
			},
			madeverifications () {
				if (this.nickphone==='') {
					uni.showToast({
						title:'请输入您的手机号',
						icon:'none',
						duration:2000
					}) 
				} else {
					uniCloud.callFunction({
					 	name: 'sandcode',
						data:{ 
						code:this.verificationdate,
						phone:this.nickphone 
					    }
					 }).then((res)=>{
						 
					    console.log(res)
					 })
					uni.navigateTo({
						url:`../button/button?phone=${this.nickphone}`
					})
				}
				
			},
			//获取验证码
			madeverification () {
				if (this.nickphone==='') {
					uni.showToast({
						title:'请输入您的手机号',
						icon:'none',
						duration:2000
					}) 
				} else {
					if(this.codeTime>0){
						uni.showToast({
						title: '不能重复获取',
						icon:"none"
						});
						return;
						}else{
						  this.codeTime = 60
						 let timer = setInterval(()=>{
						this.codeTime--;
						if(this.codeTime<1){
						clearInterval(timer);
						this.codeTime = 0
						}
						},1000)
					  }
					  
					  uniCloud.callFunction({
					   	name: 'sandcode',
						data:{ 
							code:this.verificationdate,
							phone:this.nickphone
						}
					   }).then((res)=>{
						 // if (res.result.code===0) {
							  
						 // } 
						  console.log('这是发送验证码', res); 
						   
					   })
				}
			
			
			},
		
			//登录
		async verificationlogin () {
		uni.reLaunch({
			url:'../button/button'
		})
			console.log(this.verificationdate)
			if (this.nickphone==='' ) {
				uni.showToast({
					title:'请输入您的手机号',
					icon:'none',
					duration:2000
				}) 
			} else if (this.verificationdate==='') {
				uni.showToast({
					title:'请输入您的密码',
					icon:'none',
					duration:2000
				}) 
			} else {
				const data = await this.$http.post('/api/userLogin',{
					token:'d6a2fa16e60777e390256ec85cc2f42e',
					phone_number:this.nickphone,
					pwd:this.verificationdate
					});
					const {DATA} = data
					if (data.CODE==='200') {
														
					const {access_token,user_id} = DATA.user_info		 
					uni.setStorageSync('access_token', access_token);
					uni.setStorageSync('user_id', user_id);
									
					uni.reLaunch({
					url:'../index/index',
					success:(res)=> {
					if (res.errMsg) {
					uni.showToast({
				    title:'登录成功',
					duration:1500
					})
					 }
				    },
				})
			}
			
	   }
		
				// uniCloud.callFunction({
				//  	name: 'sandcode',
				// 	data:{
				// 	code:this.verificationdate,
				// 	phone:this.nickphone
				//    }
				//  }).then((res)=>{
					
				//    console.log('这是发送验证码', res); 
				//  })
			},
			
			// establish () {
				
			// },
				//手机号登录
		    async phoneNumberall () {
			     const data = await this.$http.post('/api/userLogin',{
					token:'d6a2fa16e60777e390256ec85cc2f42e',
					phone_number:this.phone_number,
				 })
					const {DATA} = data
					if (data.CODE==='200') {
					
					const {access_token,user_id} = DATA.user_info		 
					uni.setStorageSync('access_token', access_token)
					uni.setStorageSync('user_id', user_id)
					//#ifdef APP-PLUS
					  plus.storage.setItem('user_id', user_id)
					//#endif
				 
				
					uni.reLaunch({
						url:'../index/index' 
					})
				 }  
				
			},                                                                                                                                                                                                                            
			// weixin () {
			// 	// uni.showToast({
			// 	//   title:'该功能暂未开放 敬请期待!',
			// 	//   icon:'none',
			// 	//   duration:2000
			// 	// })
				
			// 		uni.getProvider({
			// 			service:'oauth',
			// 			success(res) {
			// 				console.log(res)
			// 				if (res.provider.indexOf('weixin')) {
			// 					uni.login({
			// 						provider:'weixin',
			// 						success(res) {
			// 						  console.log(res.authResult.openid)
									   
			// 						  uni.getUserInfo({
			// 						  	  provider: 'weixin',
			// 						  	  success: async (res)=> {
			// 								  const {openId,nickName,avatarUrl} = res.userInfo
			// 								  console.log( openId, nickName , avatarUrl)
			// 								  //发送请求
			// 								// const data = await this.$http.post('/api/userLogin',{
			// 								// nickname:nickName,
			// 								// avatarurl:avatarUrl,
			// 								// openid:openId
			// 								// });
			// 								   const data  = {
			// 									   code:'200'
			// 								   }
			// 								 if (data.code==='200') {
			// 									 uni.setStorageSync('openid', openId);
			// 									 uni.reLaunch({
			// 									 	url:'../index/index'
			// 									 })
			// 								 }
			// 						  	  }
			// 						   })
			// 						},
			// 					})
			// 				}
			// 			}
			// 		})
			// },
			QQ () {
				uni.showToast({
				  title:'该登录功能暂未开放 敬请期待!', 
				  icon:'none',
				  duration:2000
				})
			
			},
			phoneNumbers () {
			uni.preLogin({
			provider: 'univerify',
			success:(res)=> { //预登录成功
				 			 			// 显示一键登录选项
			console.log(res);
				 						
			uni.login({
			provider: 'univerify',
			univerifyStyle: { // 自定义登录框样式
			//参考`univerifyStyle 数据结构`
			
			"backgroundColor": "#ffffff", // 授权页面背景颜色，默认值：#ffffff  
			"icon": {
			"path": "/static/sj.jpg" // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo   
			},
			"phoneNum": {
			"color": "#000000", // 手机号文字颜色 默认值：#000000   
			"fontSize": "18" // 手机号字体大小 默认值：18  
			},
			"slogan": {
			"color": "#8a8b90", //  slogan 字体颜色 默认值：#8a8b90  
			"fontSize": "14" // slogan 字体大小 默认值：12  
			},
			"authButton": {
			"normalColor": "#3479f5", // 授权按钮正常状态背景颜色 默认值：#3479f5  
			"highlightColor": "#2861c5", // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）  
			"disabledColor": "#73aaf5", // 授权按钮不可点击时背景颜色 默认值：#73aaf5（仅ios支持）  
			"textColor": "#ffffff", // 授权按钮文字颜色 默认值：#ffffff  
			"title": "本机号码一键登录" // 授权按钮文案 默认值：“本机号码一键登录”  
			},
			"otherLoginButton": {
			"visible": "false", // 是否显示其他登录按钮，默认值：true  
			"normalColor": "#f8f8f8", // 其他登录按钮正常状态背景颜色 默认值：#f8f8f8  
			"highlightColor": "#dedede", // 其他登录按钮按下状态背景颜色 默认值：#dedede  
			"textColor": "#000000", // 其他登录按钮文字颜色 默认值：#000000  
			"title": "其他登录方式", // 其他登录方式按钮文字 默认值：“其他登录方式”  
			"borderWidth": "1px", // 边框宽度 默认值：1px（仅ios支持）  
			"borderColor": "#c5c5c5" //边框颜色 默认值： #c5c5c5（仅ios支持）  
			},
			"privacyTerms": {
			"defaultCheckBoxState": "true", // 条款勾选框初始状态 默认值： true   
			"textColor": "#8a8b90", // 文字颜色 默认值：#8a8b90  
			"termsColor": "#1d4788", //  协议文字颜色 默认值： #1d4788  
			"prefix": "我已阅读并同意", // 条款前的文案 默认值：“我已阅读并同意”  
			"suffix": "并使用本机号码登录", // 条款后的文案 默认值：“并使用本机号码登录”  
			"fontSize": "12", // 字体大小 默认值：12,  
			"privacyItems": [
			// 自定义协议条款，最大支持2个，需要同时设置url和title. 否则不生效  
			{
			"url": "https://", // 点击跳转的协议详情页面  
			"title": "用户服务协议" // 协议名称  
			 }
			  ]
			  }
			},
			success: async (res)=> { // 登录成功
						
			this.openid = res.authResult.openid;
			this.access_token = res.authResult.access_token;
			console.log(res.authResult); // {openid:'deviceIDlength+deviceID+gyuid',access_token:'接口返回的 token'}
			console.log(this.openid);
			console.log("access_token",this.access_token);
			
			// 客户端(调用云函数)  调用云函数来实现整个业务逻辑
			// 在得到access_token后，通过callfunction调用云函数
			uniCloud.callFunction({
			  name: 'login', // 你的云函数名称
			  data: {
			  access_token: this.access_token, // 客户端一键登录接口返回的access_token
			  openid: this.openid // 客户端一键登录接口返回的openid
			  }
			   }).then( async res=> {
									 				
				console.log("获取成功");
				console.log(res);
					// console.log(this)
				 // 获取用户的手机号
			    if (res.result.code===0) {
				this.phoneNumber=res.result.data.phoneNumber;
			 
			
				   // uni.setStorageSync('too', this.phoneNumber);
				uni.closeAuthView()
				const data = await this.$http.post('/api/userLogin',{
				token:'d6a2fa16e60777e390256ec85cc2f42e',
				phone_number:this.phoneNumber,
				});
				 const {DATA} = data
				if (data.CODE==='200') {
									
				const {access_token,user_id} = DATA.user_info		 
				uni.setStorageSync('access_token', access_token);
				uni.setStorageSync('user_id', user_id);
				//#ifdef APP-PLUS
				plus.storage.setItem('user_id', user_id)
				//#endif
				
								
				uni.reLaunch({
				url:'../index/index',
				 success:(res)=> {
				   if (res.errMsg) {
					   uni.showToast({
					   	 title:'登录成功',
						 duration:1500
					   })
				   }
				 },
				})
			 }  
			
			
			}						
				 								
			    // res.result = {
				//   code: '',
				//   message: ''
			   // }
			    // 登录成功，可以关闭一键登陆授权界面了
				 }).catch(err=>{
				   // 处理错误
				 	 console.log("获取失败");
				 	 console.log(err);
				 	})
				 	}, 
				    fail(res) { // 登录失败
					// console.log('失败',2222);
				 	console.log(res.errCode)
				 	console.log(res.errMsg)
				 	}
				 })
				},
				fail(res) { // 预登录失败
				// 不显示一键登录选项（或置灰）
				// 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器
				console.log('失败',2222);
				uni.showToast({
					title:'当前没有开启蜂窝网络,请检查是否开启蜂窝网络',
					icon:'none',
					duration:2500
				}) 
				// uni.closeAuthView()
				console.log(res) 
				console.log(res.errCode)
				console.log(res.errMsg)
				  } 
				});
		
			
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		
	.input {
		height: 80upx;
		border-bottom: 1px solid #ccc;
		padding-left: 30upx;
	
	}
	.verification {
			padding-left: 30upx;
			height: 110upx;
			border-bottom: 1px solid #ccc;
	}
	.username {
		text-align: center;
		margin-top: 20px;
		font-size: 14px;
	}
	.verification_pos {
		width: 200upx;
		height:  65upx;
		text-align: center;
		line-height: 65upx;
		color: #fff;
		border-radius: 4px;
		position: absolute;
		top: 293px;
		right: 10px;
		background-color: #007AFF;
	}
	.clos {
	  position: absolute;
	  top: 120upx;
	  left: 20upx;
	  font-size: 48upx;
	  z-index: 22222;
	}
	.lo_g {
		margin-top: 40upx;
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		margin-left: 30upx;
		margin-right: 30upx;
		text-align: center;
		border-radius: 4px;
		background-color: #67c23a;
	}
	.img-a {
		position: absolute;
		width: 100%;
		top: -280rpx;
		right: -100rpx;
	}
	.img-b {
		position: absolute;
		width: 50%;
		bottom: 0;
		left: -50rpx;
		margin-bottom: -200rpx;
	}
	.t-login {
		width: 600rpx;
		margin: 0 auto;
		font-size: 28rpx;
		color: #000;
	}
	
	.t-login button {
		font-size: 28rpx;
		background: #5677fc;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		box-shadow: 0 5px 7px 0 rgba(86, 119, 252, 0.2);
	}
	
	.t-login input {
		padding: 0 20rpx 0 120rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-bottom: 50rpx;
		background: #f8f7fc;
		border: 1px solid #e9e9e9;
		font-size: 28rpx;
		border-radius: 50rpx;
	}
	
	.t-login .t-a {
		position: relative;
	}
	
	.t-login .t-a image {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		left: 40rpx;
		top: 28rpx;
		border-right: 2rpx solid #dedede;
		padding-right: 20rpx;
	}
	
	.t-login .t-b {
		text-align: left;
		font-size: 46rpx;
		color: #000;
		padding: 300rpx 0 120rpx 0;
		font-weight: bold;
	}
	
	.t-login .t-c {
		position: absolute;
		right: 22rpx;
		top: 22rpx;
		background: #5677fc;
		color: #fff;
		font-size: 24rpx;
		border-radius: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
	}
	
	.t-login .t-d {
		text-align: center;
		color: #999;
		margin: 80rpx 0;
	}
	
	.t-login .t-e {
		text-align: center;
		width: 250rpx;
		margin: 80rpx auto 0;
		display: flex;
	}
	
	.t-login .t-g {
		
	margin-right: 40upx;
	}
	
	.t-login .t-e image {
		width: 50rpx;
		height: 50rpx;
		margin-right: 20upx;
	}
	
	.t-login .t-f {
		text-align: center;
		margin: 200rpx 0 0 0;
		color: #666;
	}
	
	.t-login .t-f text {
		margin-left: 20rpx;
		color: #000;
		font-size: 28upx;
	}
	
	.t-login .uni-input-placeholder {
		color: #000;
	}
	
	.cl {
		zoom: 1;
	}
	
	.cl:after {
		clear: both;
		display: block;
		visibility: hidden;
		height: 0;
		content: '\20';
	}
	}
</style>
