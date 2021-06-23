<template>
	<scroll-view :scroll-y="true" style="height: 100%;">
	<!-- <view class="btn">
		
			<view class="image-item" v-for="(item,index) in files" :key="index"></view>
			<view class="upload-button" @click="handClickChooseImage">
				<image class="imgs" src="../../images/ac.jpg" mode=""></image>
			</view>
		
			<view class="" @tap='clickt'>
				1111111
			</view> 
	
		
		
			<view class="videos" >   
			
				<video :enable-progress-gesture='false' ref="videost" :muted='muted' style=" width: 100%;" :loop='true' :controls='false' :autoplay='false' objectFit="cover"  src="https://vd3.bdstatic.com/mda-ka9rbu1tgsazghj3/v1-cae/sc/mda-ka9rbu1tgsazghj3.mp4?v_from_s=sz_haokan_4469&auth_key=1622172314-0-0-6472a47636606867e982d7c5e6cd0e7d&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=" >
				
					  
					  <cover-image src="/static/gbysu.jpeg" v-if="courshide===0" style="position: absolute;  top: 20px;   font-size: 40upx; color: #0000FF; width: 50px; height: 50px;" class="" @click="clickmouted">
					    					
					  </cover-image>
					 
						<cover-image src="/images/ylc.jpg" v-if="courshide===1" style="position: absolute; top: 20px; font-size: 40upx; color: #0000FF; width: 50px; height: 50px; " class="" @click="clickmoutedtwo" >  
						  					
						</cover-image>
					  
				
					 
					  <cover-view style="  height: 50px; line-height: 50px; text-align: center; position: absolute; top: 150px; right: 0; color: #007AFF; font-size: 40upx;" class=" icon" @tap="fn">
					  				
					  	了解详情
					  				
					  </cover-view>
				</video>
			 
			</view>
			
			
		
		</view> -->
		<view @tap='zfbPay' class="" style="text-align: center; font-size: 22px; margin-top: 120px;" >
			调用
		</view>
		  
				
	</scroll-view>
	
</template>

<script>
	import {pathToBase64,  
			base64ToPath, } from '../../js_sdk/mmmm-image-tools/index.js'
  import mUpdateAppTip from '@/components/maozai-update/updateAppTip.vue'
  
	export default {
		components: {
			mUpdateAppTip
		},
		data() {
			return {
			// 	 webviewStyles: {
			// 	                    progress: {
			// 	                        color: '#FF3333'
			// 	                    }
			// 	                }
			files:[],
			previewFiles:[],
			dataList:[
				{id:1,title:'随便'},
				{id:2,title:'随便1'},
				{id:3,title:'随便'},
				{id:4,title:'随便'},
				{id:5,title:'随便'},
				{id:6,title:'随便'},
				{id:7,title:'随便'},
				{id:8,title:'随便'},
				{id:9,title:'随便'},
				{id:10,title:'随便'},
			],
			muted:false,
			courshide:0,
			
			  update_type:0,//0是热更新，1整包更新
			                update_url:'',//更新的地址
			                update_title:'发现新的版本，请点击升级',
			                update_des:['1.发现新的版本，请点击升级','2.发现新的版本，请点击升级'],
			                is_update_app:false,
			                is_forced_update:false,//是否强制升级
			}
		},
		onLoad() {
		
			//#ifdef APP-PLUS
			  
			  plus.storage.setItem('user_ids', 'id') 
			//#endif 
		},
		methods: {
			queryList (pageNo,pageSize) {
				
				 // this.$request.queryList(pageNo, pageSize, (data) => {
				 //    this.$refs.paging.complete(data);
		   //         });
			},
			// weixinLo () {
			// 	uni.login({
			// 		provider:'weixin',
			// 		success(res) {
			// 			const {access_token,openid,unionid} = res.authResult
			// 			if (access_token && openid && unionid) {
			// 				uni.reLaunch({
			// 					url:'../index/index'
			// 				})
			// 			}
			// 			// console.log(res.authResult)
						
			// 		},
			// 	})
			// },
			clickt () {
				  plus.storage.clear()
			},
			clickmouted () {
			  this.muted = true
			  this.courshide = 1
			},
			clickmoutedtwo () {
				this.muted = false
				this.courshide = 0
			},
			fn () {
				 const url = 'http://uri6.com/tkio/iyiemqa'  
				// uni.navigateTo({
				// 	url:'../qualification/qualification'
				// })
				//#ifdef APP-PLUS
				plus.runtime.openURL(url, (res)=> {  
				    console.log(res);  
				 }); 
				 	//#endif
			},
			handClickChooseImage(){
					let that = this;
					uni.chooseImage({
						count: (4 - that.files.length), //默认9
						//官方的压缩为50%,图片太大的话，压缩效果不好
						sizeType: ['compressed'], //original 原图，compressed 压缩图
						sourceType: ['album'], //album 从相册选图，camera 使用相机，默认二者都有
						success: (res) => {
						
							let imageList = res.tempFilePaths.toString().split(',');
								console.log(imageList)
								imageList.forEach((item)=>{  
									// 	//调用自己的方法
										that.handControllGetBase64(item, async base => {	
											// that.files.push(base);
											let basers =  base
										let resr = plus.storage.getItem('user_ids')
										console.log(resr)  
										const user_id = uni.getStorageSync('user_id')
										console.log(user_id)
										// let data = await this.$http.post('/api/uploadFile',{
										//  token:'d6a2fa16e60777e390256ec85cc2f42e',					
										// user_id:user_id,
										// path:'my',
										// file: basers	
										// });
										// console.log(data)
											// this.files.forEach((item)=>{
											// 	console.log(item)
											// })
										
										});
								})
							
						
						}
					});
				},
				zfbPay () {
				 	var that = this;
				 	// 调用uniapp API uni.getProvider 获取服务供应商
				 	uni.getProvider({
				 		/* 获取服务类型，可选值如下:
				 		* @param share: 分享
				 		* @param oauth: 授权登录
				 		* @param push: 推送
				 		* @param payment: 支付类型
				 		*/
				 		service: 'payment',
						
				 		success: (res) => {
					
				 			/*
				 			* @ res.service 获取服务供应商 ==> 'payment'
				 			* @ res.provider 这里选择的是支付类型，所以包含["alipay","wxpay"]
				 			* ‘alipay’: 表示支付宝
				 			* ‘wxpay’: 表示微信
				 			*/
				 			// 检查res.provider中是否有 alipay
				 			if (res.provider.indexOf('wxpay') !== -1) {
							
				 				// 后台支付接口需要的一些参数
				 				var data = {
				 					id: that.id, // 订单id
				 					pay_type: that.pay_type // 支付类型
				 				};
								
								
				 				
				 			}
							
				 		}
				 	})
					
				},
		    handControllGetBase64(file, callback) {
		    		//h5不可用
		    		uni.saveFile({
		    			tempFilePath: file,
		    			success: (saveFile) => {
					
		    			//pathToBase64为uniapp 插件市场的插件内方法
		    				pathToBase64(saveFile.savedFilePath).then(base64 => {
		    					//用完就删
		    					uni.removeSavedFile({
		    						filePath: saveFile.savedFilePath
		    					});
		    					//返回
		    					callback(base64); 
		    				})
		    			}
		    		});
		    	},
		    
		  
		}
	}
</script>

<style lang="scss">
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
