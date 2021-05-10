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
					<view class="feedback-nav-send">
						发送
					</view>
				</view>
				<view class="feedback-textarea">
					<textarea  class="textarea" :maxlength='200' v-model="textarea" value="" placeholder="请说明您的反馈信息，我们将不断改进~" />
					<view class="feedback-textarea-calculate ">
						{{textarea.length}}/200
					</view>
				</view>
				<view class="feedback-image-upload">
					<gUpload ref='gUpload' :mode="imgList"  @chooseFile='chooseFile' @imgDelete='imgDelete' :maxCount='3' :columnNum='3'></gUpload>
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
	export default {
		components: {
			gUpload
		},
		data() {
			return {
				textarea:'',
				imgList:[],
				phoneNumber:'',
			}
		},
		methods: {
			//返回上一级
			back () {
			  uni.navigateBack()
			},
			chooseFile (list,v) {
				  console.log("上传图片_list：", list)
				  console.log("上传图片_v：", v);
				   this.uploadFileToServe(v)
			},
			imgDelete (list,eq) {
				 console.log("删除图片_list：", list)
				 console.log("删除图片_eq：", eq)
			},
			
			   uploadFileToServe(urlList) {
				   console.log(urlList)
			        if (!urlList || urlList.length <= 0) {
			          return
			        };
			        for (let i = 0; i < urlList.length; i++) {
			          uni.uploadFile({
			            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			            filePath: urlList[i],
			            name: 'file',
			            formData: {
			              'user': 'test'
			            },
			            success: (uploadFileRes) => {
			             console.log(uploadFileRes.data);
			           }
			       });
			   }
		    },
			cellphone (va) {
				if (this.phoneNumber==='') {
					return
				}
			   this.phoneNumber = va.detail.value
			   console.log( this.phoneNumber) 
			},
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
					background-color: #fff;
			padding-bottom: 60upx;
			padding-top: 32upx;	
				
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
