<template>
	<view class="feedback">
		<view class="status_bar">
		        <!-- 这里是状态栏 -->
		    </view>
			<view class="feedback-top">
				<view class="feedback-nav">
					<view class="feedback-nav-icon el-icon-arrow-left" @tap='back'>
					
					</view>
					<view class="feedback-nav-title">
						建议与反馈
					</view>
					<view class="feedback-nav-send" @tap='send'>
						发送
					</view>
				</view>
				<view class="feedback-textarea">
					<textarea  class="textarea" :maxlength='200' @input="inpt_textarea" v-model="textarea"  placeholder="请说明您的反馈信息，我们将不断改进~" />
					<view class="feedback-textarea-calculate ">
						{{textarea.length}}/200
					</view>
				</view>
				<view class="feedback-image-upload">
					<gUpload ref='gUpload' :mode="imgList"  @chooseFile='chooseFile' @imgDelete='imgDelete' :maxCount='3' :columnNum='3'></gUpload>
					
			
			<!-- 	   <fjjImages :pageImgList='imgList' :imgCount='3' @addImg="editParkImg"></fjjImages> -->
				  <!-- <view class="li" style="display: flex;" >
					  <view style=" font-size: 80upx; text-align: center; line-height: 200upx; width: 200upx; height: 200upx; border-radius: 12px; border: 2px solid #ccc;">
					  	+
					  </view>
				  
				  	 <imagecropper :src="tempFilePath" @confirm="confirm" @cancel="cancels"></imagecropper>
				  					
				  	 <image v-if="hideshow" @tap="upload" :src="cropFilePath" mode="aspectFit" style="width: 200upx; height: 200upx; border-radius: 12px; position: absolute; left: 30upx; z-index: 222;  "></image> 
				  </view> -->
				  
			
				
				
				  
				</view>
			</view>
			<view class="feedback-bottom">
				<view class="feedback-bottom-input">
					<input v-model="phoneNumber" @input="cellphone" class="input" placeholder="请输入您的联系方式" type="text" value="" />
				</view>
			</view>
		
		
	</view>
</template>

<script>
	 import gUpload from "../../components/g-upload/g-upload.vue"
	 import vastwuSaveimg from '../../components/vastwu-saveimg/vastwu-saveimg.vue'
	 import imgUpload from '../../components/poiuy-uImgUpload/imgUpload.vue';
	 import fjjImages from '@/components/fjj-images/fjj-images.vue';
	 import imagecropper from '../../components/invinbg-image-cropper/invinbg-image-cropper.vue'
	 import {pathToBase64,  //图片路径转base64
	 		base64ToPath,  //base64码转图片
	 	} from '../../js_sdk/mmmm-image-tools/index.js'
	export default {
		components: {
			gUpload,
			vastwuSaveimg,
			imgUpload,
			fjjImages,
			imagecropper
		},
		data() {
			return {
				textarea:'',
				initialimgs:true,
				hideshow:true,
				imgList:[],
				phoneNumber:'',
			    tempFilePath:'',
			    cropFilePath:'',
		
			    user_url:'',
			    cropFilePathApp:'',
			}
		},
		onLoad() {
	
		},
		methods: {
			//意见反馈
			async opinion () {
				const user_id = uni.getStorageSync('user_id')
				const data = await this.$http.post('/api/addOpinion',{
				token:'d6a2fa16e60777e390256ec85cc2f42e',
				user_id:user_id,
				opinion_title :this.textarea,
				opinion_title_img:this.user_url,
				opinion_content:this.phoneNumber,
				});
				console.log(data)
				// const {CODE,DATA} = data
				// if (CODE==='200') {
				// 	this.materialobj = DATA
					
				// 	console.log(this.materialobj)
				// }
			},
			//返回上一级
			back () {
			  uni.navigateBack()
			},
			//图片上传
				upload () {
					  uni.chooseImage({
					     count: 1, //默认9
					     sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					     sourceType: ['album'], //从相册选择
					      success: (res) => {
							console.log(res)
					      this.tempFilePath = res.tempFilePaths.shift()
							 uni.getFileSystemManager()
					      }
					   });
				},
				
				//确定裁剪
			async	confirm (e) {
				this.tempFilePath = ''
				 this.cropFilePath = e.detail.tempFilePath
				console.log( this.cropFilePath)
				
				const user_id = uni.getStorageSync('user_id')
				let data = await this.$http.post('/api/uploadFile',{
			     token:'d6a2fa16e60777e390256ec85cc2f42e',					
				user_id:user_id,
				path:'my',
				file: this.cropFilePath	
				});
					if (this.cropFilePath) {
						this.initialimgs = false
					}
					const {CODE,DATA} = data
				    if (CODE==='200') {
					this.user_url = DATA
				
				    }
				},
				//取消裁剪
				cancels () {
				
				},
			// rest (va) {
			// 	console.log(va)
			// },
			// delImg () {
				
			// },
			async chooseFile (list,v) {
		
			list.forEach((item)=>{
			pathToBase64( item).then( async base64 => {
			
			  this.cropFilePathApp = base64
			  console.log(  this.cropFilePathApp)
			    const user_id = uni.getStorageSync('user_id')
				
			 	let data = await this.$http.post('/api/uploadFile',{
			    token:'d6a2fa16e60777e390256ec85cc2f42e',					
			 	user_id:user_id,
			 	path:'my',
			 	file:this.cropFilePathApp			
			 	});
			 
			 console.log(data)
			 	const {CODE,DATA} = data
			 	if (CODE==='200') {
			 	this.user_url = DATA
			 		console.log(this.user_url)	
			    }
			   })		
			})
				
		
		
			},
			imgDelete (list,eq) {
			   console.log(list)
			},
			
		
		     //发送
		     send () {
			 this.opinion()
			 uni.showToast({
				 title:'提交成功',
				 success:(res)=> {
					 console.log(res)
				 	if (res.errMsg) {
					setTimeout(()=>{
						uni.reLaunch({
							url:'../my/my'
						})
					},1500)
					}
				 }
			 })
			 this.phoneNumber = ''
		     this.textarea  = ''
			 this.hideshow = false
	      	},
			cellphone (va) {
				if (this.phoneNumber==='') {
					return
				}
			   this.phoneNumber = va.detail.value
			   console.log( this.phoneNumber) 
			},
			inpt_textarea (va) {
				if (this.textarea==='') {
		           return
				}
				this.textarea = va.detail.value
				console.log( this.textarea) 
			}
		}
	}
</script>

<style lang="scss">
page, .feedback{
		
	
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%; 
		background-color: #fff;
	 }
	 .feedback {
		background-color: #f1f1f1;
		.feedback-top {
	
		border-bottom:5px solid #f1f1f1;
			.feedback-nav {
				background-color: #fff;
				display: flex;
				padding-left: 30upx;
				padding-right: 30upx;
				padding-bottom: 28upx;
				.feedback-nav-icon {
					font-size: 40upx;
				}
				.feedback-nav-title {
					flex: 1;
					text-align: center;
					font-size: 32upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #333333;
					line-height: 34upx;
					letter-spacing: 1px;
				}
				.feedback-nav-send {
					font-size: 30upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #1482FF;
					line-height: 34upx;
				}
			}
				
			.feedback-textarea {
					background-color: #fff;
				padding-left: 30upx;
				padding-right: 30upx;
				.textarea {
					width: 100%;
					height: 310upx;
				}
				.feedback-textarea-calculate {
					display: flex;
					justify-content: flex-end;
				}
			}
			.feedback-image-upload {
				// padding-left: 30upx;
				// padding-right: 30upx;
				display: flex;
				justify-content: space-between;
				position: relative;
			    background-color: #fff;
			    padding-bottom: 60upx;
			    padding-top: 32upx;	
				height: 150px;
			}
		} 
		.feedback-bottom {
				background-color: #fff;
			padding-left: 30upx;
			padding-right: 30upx;
			.feedback-bottom-input {
				.input {
					height: 88upx;
				}
			}
		}
	 }
</style>
