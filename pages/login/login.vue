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
		  	<image class="img-b" src="@/static/3.png"></image>
		  	<!-- 标题 -->
		  	<view class="t-b">{{ title }}</view>
		
		  	<view class="t-f"><text>———请选择您当前需要登录的平台———</text></view>
		  	<view class="t-e cl">
				
				<view class="t-g" @click="phoneNumbers"><image src="@/static/sj.jpg"></image></view>
		  		<view class="t-g"><image src="@/static/wx.png"></image></view>
		  		<view class="t-g"><image src="@/static/qq.png"></image></view>
		  	</view>
		  </view>
	<button type="default" @click="phoneNumberall">手机号登录</button>
	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone_number:'16413665448',
				title:'欢迎回来',
				phoneNumber:'',
				openid:'',
				access_token:'',
				token:1
			}
		},
		onLoad() {
			
		},
		methods: {
			close () {
				  
				 // value = 0
				 // console.log(value)
				 // uni.getStorage({
				 // 	key:'too',
						
					// success: (res)=>{
					// 	console.log(res)
					// } 
				 // })
				uni.reLaunch({
					url:'../index/index'
				})
			},
				//手机号登录
		    async phoneNumberall () {
			     const data = await this.$http.post('/api/userLogin',{
					token:'d6a2fa16e60777e390256ec85cc2f42e',
					phone_number:this.phone_number,
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
						url:'../index/index' 
					})
				 }  
				
			},
			phoneNumbers () {
			
		
			// let _this = this
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
			"fontSize": "12" // slogan 字体大小 默认值：12  
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
			success:(res)=> { // 登录成功
										
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
			   }).then(res => {
													
				console.log("获取成功");
				console.log(res);
					// console.log(this)
				 // 获取用户的手机号
			    if (res.result.code===0) {
				this.phoneNumber=res.result.data.phoneNumber;
			 
			
				   uni.setStorageSync('too', this.phoneNumber);
				uni.closeAuthView()
				uni.switchTab({
					url:'../index/index' 
				})
			
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
	
	.clos {
	  position: absolute;
	  top: 120upx;
	  left: 20upx;
	  font-size: 48upx;
	  z-index: 22222;
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
