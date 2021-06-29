<template>
	<view class="main">
	 <view class="status_bar">
	          <!-- 这里是状态栏 --> 
	 			
	 				  
	   </view>
	   <view class="el-icon-arrow-left lefte" @tap='back'>
	   	
	   </view>
	   <view class="" style="font-size: 20px; font-weight: 700; margin-top: 20px; margin-left: 8px;">
	   	输入验证码
	   </view>
	   <view class="" style="margin-top: 15px; margin-left: 10px;">
	   	{{phonex}}
	   </view>
	    <view class="item" @tap='KeyboarOpen'>
	      <password-input  :numLng='password'></password-input>
	    </view>
	    <number-keyboard  tabBar ref='KeyboarHid' @input='int' psdLength='6'></number-keyboard>
		
		<view class="verification_pos" @tap='madeverifications' >
			<text>{{!codeTime?'重新发送':codeTime+'s'}}</text>
		</view>
	  </view>
	
	
</template>

<script>
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput  from '@/components/password-input/password-input.vue'
	
	import {pathToBase64,  base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
  import mUpdateAppTip from '@/components/maozai-update/updateAppTip.vue'
  
	export default {
		components: {
			mUpdateAppTip,
			numberKeyboard,
			passwordInput
		},
		data() {
			return {
			codeTime:0,
			password:'',
			muted:false,
			courshide:0,
			phonex:'',
			verificationdate:'',
			}
		},
		onLoad(va) {
			this.phonex = va.phone
			//#ifdef APP-PLUS
			  
			  plus.storage.setItem('user_ids', 'id') 
			//#endif 
			 setTimeout(() => {
			        this.$refs.KeyboarHid.open()
			  }, 50)
			  this.madeverification()
		},
		methods: {
			back () {
				uni.navigateBack()
			},
			madeverification () {
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
			},
			madeverifications () {
				if (this.phonex==='') {
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
							code:this.password,
							phone:this.phonex
						}
					   }).then((res)=>{
						 // if (res.result.code===0) {
							  
						 // } 
						  console.log('这是发送验证码', res); 
					   })
				}
			},
			  //打开键盘
			      KeyboarOpen(e) {
			        this.$refs.KeyboarHid.open();
			      },
				  
			async  int (val) {
				    this.password = val;
				  // const S = this.password 
				  
				  // const rs = [].filter.call(S, (s, i, o) => o.indexOf(s) == i).join('');
				 
				   if (  this.password.length===6) {
					  // uni.reLaunch({
					  // 	url:'../index/index'
					  // })
					  
					  if (this.phonex==='' ) {
					  				uni.showToast({
					  					title:'请输入您的手机号',
					  					icon:'none',
					  					duration:2000
					  				}) 
					  			} else if (this.password==='') {
					  				uni.showToast({
					  					title:'请输入您的密码',
					  					icon:'none',
					  					duration:2000
					  				}) 
					  			} else {
					  				const data = await this.$http.post('/api/userLogin',{
					  					token:'d6a2fa16e60777e390256ec85cc2f42e',
					  					phone_number:this.phonex,
					  					pwd:this.password
					  					});
					  					const {DATA} = data
					  					if (data.CODE==='200') {
					  														
					  					const {access_token,user_id} = DATA.user_info		 
					  					uni.setStorageSync('access_token', access_token);
					  					uni.setStorageSync('user_id', user_id);
					  									
					  					uni.switchTab({
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
					  
					  
					  
					  
					  
					  
				   }
				   // console.log(  this.password)
			  }, 
			    
		
				
		
		    
		  
		}
	}
</script>

<style lang="scss">
	page, .main{
			
			background-color: #ffff;
			height: 100%;
			overflow: hidden;
		}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
			  background-color: #fff;
		
	 }
	.verification_pos {
		text-align: center;
		margin-top: 40px;
		font-size: 34rpx;
		color: #ffff;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 10px;
		background-color: #000000;
	}
	.main {
		margin-top: 0px;
	    padding: 0rpx 40rpx;
		.lefte {
			font-size: 30px;
			margin-top: 30px;
		}
	  }
	  .ipt {
	    border-bottom: 1rpx solid #CCCCCC;
	  }
	  .item {
	    padding: 10rpx 0rpx;
		margin-top: 25px;
	  }
	  .title {
	    margin: 30rpx 0;
	  }
	.btn {
		.upload-button {
			margin-top: 20px;
			.imgs {
				width: 150px;
				height: 150px;
			}
		}
	}

</style>
