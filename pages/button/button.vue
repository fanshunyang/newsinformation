<template>
	<view class="btn">
		<!-- <web-view :webview-styles="webviewStyles" src="https://www.baidu.com/"></web-view> -->
		<view class="image-item" v-for="(item,index) in files" :key="index"></view>
		<view class="upload-button" @click="handClickChooseImage">
			<image class="imgs" src="../../images/ac.jpg" mode=""></image>
		</view>
	
		<view class="" @tap=' clickt'>
			1111111
		</view>
	</view>
</template>

<script>
	import {pathToBase64,  //图片路径转base64
			base64ToPath,  //base64码转图片
		} from '../../js_sdk/mmmm-image-tools/index.js'

	export default {
		data() {
			return {
			// 	 webviewStyles: {
			// 	                    progress: {
			// 	                        color: '#FF3333'
			// 	                    }
			// 	                }
			files:[],
			previewFiles:[]
			}
		},
		onLoad() {
		
			//#ifdef APP-PLUS
			  
			  plus.storage.setItem('user_ids', 'id') 
			//#endif
		},
		methods: {
			clickt () {
				  plus.storage.clear()
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
