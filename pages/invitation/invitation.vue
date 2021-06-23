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
				  <view class="invitation-header-right-send" @tap='send'>
				  	发送
				  </view>
			  	
				
			  </view>
		  	
			
			
		  </view>
		  <view class="invitation-main">
			  <view class="invitation-main-input-top">
			  	<input class="input" @blur="blur" @focus="focus" v-model="topics_title" @input="input_title"  type="text"  placeholder="标题" />
				<view class="invitation-main-input-title">
					如何写好标题
				</view>
			  </view>
			  
			  <view class="invitation-main-input-bottom">
			  	<textarea @blur="blur" @focus="focus"  v-model="topics_texta" @input="inputs_text" :maxlength='-1' class="input" type="text" value="" placeholder="写下内容会增加更多的曝光量哦！" />
			  </view>
			  
		  	<view class="invitation-main-update" v-if="update">
		  	<gUpload ref='gUpload' :mode="imgList"  @chooseFile='chooseFile' @imgDelete='imgDelete' :maxCount='1' :columnNum='3'></gUpload>
		  	</view>
			
		  </view>
		  <view class="invitation-bottom" v-if="lose">
			  <view class="invitation-bottom-attachment" @click='addtopic'>
			  #	添加话题
			  </view>
			  <!-- <view class="invitation-bottom-community">
				  <view class="invitation-bottom-community-left">
				  	选择社区
				  </view>
				  <view class="invitation-bottom-community-right">
				  	发布到合适的社区，会有更多的曝光机会 
					<text class="el-icon-arrow-right"></text>
				  </view>
			  	
				
			  </view> -->
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
					<view @tap='uploadClick' class="invitation-bottom-classify-icon-classify-classification el-icon-picture">
					 	 
					 </view>
					<!-- <imagecropper style="z-index: 2222222;" :src="tempFilePath" @confirm="confirm" @cancel="cancels"></imagecropper>
					 				  					
					 <image v-if="hideshow" @tap="upload" :src="cropFilePath" mode="aspectFit" style="width:32upx; height: 32upx;  position: absolute; left: 658upx; z-index: 222;  "></image> -->
				</view>
				
				
			  </view>
		  	 
			 
			 
			 
		  </view>
	
	
	
		
	</view>
</template>

<script>
	 import gUpload from "../../components/g-upload/g-upload.vue"
	 import imagecropper from '../../components/invinbg-image-cropper/invinbg-image-cropper.vue'
	 import {pathToBase64,  //图片路径转base64
	 		base64ToPath,  //base64码转图片
	 	} from '../../js_sdk/mmmm-image-tools/index.js'
	import {mapState,mapMutations} from 'vuex';

	export default {
		components: {
			imagecropper,
			gUpload
		},
		data() {
			return {
				update:false,
				lose:false,
			    topics_title:'',
				topics_texta:'',
				hideshow:true,
				tempFilePath:'',
				cropFilePath:'',
				user_url:'',
				imgList:[],
			}
		},
		onLoad() {
		   uni.setStorageSync('number',0) 
		},
		methods: {
		  
			//发布帖子
			async createTopic  () {
				console.log(this.user_url)
				const user_id = uni.getStorageSync('user_id')
				const data = await this.$http.post('/api/createTopic ',{
				token:'d6a2fa16e60777e390256ec85cc2f42e',
				user_id:user_id,
				topic_title :this.topics_title,
				topic_img:this.user_url,
				topic_param:1,
				topic_content:this.topics_texta,
				});
				console.log(data)
				
				// const {CODE,DATA} = data
				// if (CODE==='200') {
				// 	this.materialobj = DATA
					
				// 	console.log(this.materialobj)
				// }
			},
			chooseFile (list,v) {
				list.forEach((item)=>{
				pathToBase64(item).then( async base64 => { 
				  this.cropFilePathApp = base64
				    const user_id = uni.getStorageSync('user_id') 
				 	let data = await this.$http.post('/api/uploadFile',{
				    token:'d6a2fa16e60777e390256ec85cc2f42e',					
				 	user_id:user_id,
				 	path:'my',
				 	file:this.cropFilePathApp			
				 	});
				 	const {CODE,DATA} = data
					console.log(DATA)
				 	if (CODE==='200') {
				 	this.user_url = DATA
				    }
				  })
				})
				
			},
			imgDelete (list) {
				
			},
			//返回上一级
			back () {
			 
				uni.switchTab({
				    url: `../index/index`
				});
				
			},
			input_title (va) {
			this.topics_title =  va.detail.value
			},
			inputs_text (va) {
			this.topics_texta = va.detail.value
			},
			uploadClick () {
			   this.update = true
			},
			// //图片上传
			// 	upload () {
			// 		  uni.chooseImage({
			// 		     count: 1, //默认9
			// 		     sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			// 		     sourceType: ['album'], //从相册选择
			// 		      success: (res) => {
			// 				console.log(res)
			// 		      this.tempFilePath = res.tempFilePaths.shift()
							
			// 		      }
			// 		   });
			// 	},
				
			// 	//确定裁剪
			// async	confirm (e) {
			// 	this.tempFilePath = ''
			// 	 this.cropFilePath = e.detail.tempFilePath
			// 	console.log( this.cropFilePath)
				
			// 	const user_id = uni.getStorageSync('user_id')
			// 	let data = await this.$http.post('/api/uploadFile',{
			//  token:'d6a2fa16e60777e390256ec85cc2f42e',					
			// 	user_id:user_id,
			// 	path:'my',
			// 	file: this.cropFilePath	
			// 	});
			// 		if (this.cropFilePath) {
			// 			this.initialimgs = false
			// 		}
			// 		const {CODE,DATA} = data
			// 	    if (CODE==='200') {
			// 		this.user_url = DATA
				
			// 	    }
			// 	},
			// cancels () {
				
			// },
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
				this.update = false 
			},
			
			//添加话题
			addtopic () {
			uni.showToast({
			  title:'该功能暂未开放 敬请期待!',
			  icon:'none',
			  duration:2000
			})
				// uni.navigateTo({
				// 	url:'../topic/topic'
				// })
			},
			//发送
			send () {
				if (this.topics_title === '') {
					uni.showToast({
						title:'请输入标题',
						icon:'none',
						duration:2000
					})
					
				} else if (this.topics_texta === '') {
					uni.showToast({
						title:'请输入内容主体',
						icon:'none',
						duration:2000
					})
				} else {
				   this.createTopic()
				   this.hideshow = false
				   this.topics_title = ''
				   this.topics_texta = ''
				   uni.reLaunch({
				   	url:'../index/index'
				   })	
				}
				
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
				font-size: 30upx;
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
			 height:  300upx;
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
