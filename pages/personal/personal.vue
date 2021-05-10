<template>
	<view class="personal">
	<view class="status_bar">
	        <!-- 这里是状态栏 -->
	   </view>
	  <view class="feedback-nav">
	 	<view class="feedback-nav-icon el-icon-arrow-left" @tap='back'>
	 	
	 	</view>
	 	<view class="feedback-nav-title">
	 		个人信息
	 	</view>
	 	<view class="feedback-nav-send" @tap='save'>
	 		保存
	 	</view>
	 </view>
	 <view class="personal-head">
	 	<view class="personal-head-title">
	 		我的头像
	 	</view>
		<!--  <button >上传</button>
		      
		        <image :src="cropFilePath" mode="aspectFit" style="width: 100%;"></image> -->
		
		<image class="imgs" src="../../images/cj.jpg" mode=""></image>
		  <imagecropper :src="tempFilePath" @confirm="confirm" @cancel="cancels"></imagecropper>
		 <image @tap="upload" :src="cropFilePath" mode="aspectFit" style="width: 100upx; height: 100upx; border-radius: 50%; position: absolute; right: 10px; z-index: 222;"></image> 
	 </view>
	 <view class="personal-list">
	 	<view class="ul">
	 		<view class="li">
	 			<view class="li-nickname">
	 		      昵称
	 			</view>
				<view class="li-message">
				
				<input v-model="nickname" @input="nicknamechange" class="input" type="text" placeholder="王者荣耀" value="" />
				</view>
	 		</view>
			<view class="li">
				<view class="li-nickname">
			       个性签名
				</view>
				<view class="li-message">
				
				<input @input="personalizedchange" v-model="personalized" class="input" type="text" placeholder="你的月亮代表我的心" value="" />
				</view>
			</view>
			<view class="li">
				<view class="li-nickname">
			     性别
				</view>
				<view class="li-message">
			
				<ldSelect value-key="value"    placeholder="选填"   @change="selectChange"  :list="options"   v-model="value"></ldSelect>
			<!-- 	<input class="input" type="text" placeholder="发生的" value="" /> -->
				</view>
			</view>
			<view class="li" @tap='birthday'>
				<view class="li-nickname">
				
				生日
				</view>
				<view class="li-message">
						{{values}}
					<view class="" v-if="hide">
					请选择所属类别
					</view>
				<popup ref='popup' type="bottom" :maskClick='false'>
					<view class=""  style="height: 200px; width: 100%; background-color: #fff;">
						<minpicker
						
						  :endTime="endTime"
						    :startTime="startTimes"
						    @cancel="cancel"
						    @sure="sure"
						></minpicker>
					</view>
				</popup>
			
			
				<!-- <input class="input" type="text" placeholder="发生的" value="" /> -->
				</view>
			</view>
			<view class="li">
				<view class="li-nickname">
			      邮箱
				</view>
				<view class="li-message">
				
				<input class="input" @input='em_ail' v-model="email" type="text" placeholder="请输入您的邮箱" value="" />
				</view>
			</view>
			<view class="li">
				<view class="li-nickname">
			      教育经历
				</view>
				<view class="li-message">
			
			
				<vvSelect @change="pickerChanges"  v-model="categoryCode" placeholder="请选择所属类别" :list="categorys" valueKey="value" label="label"></vvSelect>
				
				<!-- <input class="input" type="text" placeholder="发生的" value="" /> -->
				</view>
			</view>
			<view class="li">
				<view class="li-nickname">
			     职业
				</view>
				<view class="li-message">
					<vvSelect @change="occupationchange"  v-model="occupation" placeholder="请选择所属类别" :list="categoryst" valueKey="value" label="label"></vvSelect>
				<!-- <input class="input" type="text" placeholder="发生的" value="" /> -->
				</view>
			</view>
	 	</view>
	 </view>
	
	</view>
</template>

<script>
	import popup from '../../components/uni-popup/uni-popup.vue'
	import imagecropper from '../../components/invinbg-image-cropper/invinbg-image-cropper.vue'
	import ldSelect from '../../components/ld-select/ld-select.vue'
	import minpopup from '../../components/min-picker/min-popup.vue'
	import minpicker from '../../components/min-picker/min-picker.vue'
	import vvSelect from '@/components/vv-select/vv-select'
	export default {
		components: {
		imagecropper,
		 ldSelect,
		 minpopup,
		 minpicker,
		 popup,
		 vvSelect
		},
		data() {
			return {
				hide:true,
				tempFilePath:'',
				email:'',
				values:'',
				cropFilePath:'',
				nickname:'',
				personalized:'',
				value: '',
				 options: [{
				  value: '选项1',
				  label: '男'
				   }, {
				   value: '选项2',
				   label: '女'
				   },],
				     startTimes:[1950,6,1],
				           endTime: 2046,
				           show:false,
						          categoryCode: '',
								  occupation:'',
						             categorys: [{
						             label: '初中',
						             value: 1
						           },{
						             label: '高中',
						             value: 2
						           },
								   {
								     label: '专科',
								     value: 2
								   },
								   {
								     label: '本科',
								     value: 3
								   }
								   ], // 类别list
								   
								   categoryst: [{
								     label: '未知',
								     value: 1
								   },{
								     label: '在校学生',
								     value: 2
								   },
								   {
								     label: '企业、公司职员',
								     value: 3
								   }
								   ], // 类别list
				// personal_list:[
				// 	{id:1,nickname:'昵称',message:'王者荣耀Bot'},
				// 	{id:2,nickname:'个性签名',message:'为了爱与和平'},
				// 	{id:3,nickname:'性别',message:'选填'},
				// 	{id:4,nickname:'生日',message:'选填'},
				// 	{id:5,nickname:'邮箱',message:''},
				// 	{id:6,nickname:'教育经历',message:'选填'},
				// 	{id:7,nickname:'职业',message:'选填'},
				// ]
			}
		},
		onLoad() {
			
			            // 回显
			            // setTimeout(function(){
			            //     that.value2 = ['选项2','选项4']
			            // }, 2000)
		},
		mounted() {
			
		},
		methods: {
			//返回上一级
			back () {
			  uni.navigateBack()
			},
			//保存
			save () {
				uni.showLoading({
					title:'保存中',
					success: (res) => {
						console.log(res)
						setTimeout(()=>{
				            uni.hideLoading();
						    uni.navigateTo({
						    url:'../setting/setting'
						   })
						},800)
					},
					fail: (res) => {
						console.log(res)
					}
				})
			
			},
			//图片上传
			upload () {
				  uni.chooseImage({
				     count: 1, //默认9
				     sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				     sourceType: ['album'], //从相册选择
				      success: (res) => {
					
				      this.tempFilePath = res.tempFilePaths.shift()
					  
				      }
				   });
			},
			//确定裁剪
			confirm (e) {
				  this.tempFilePath = ''
				   this.cropFilePath = e.detail.tempFilePath
				 
			},
			//取消裁剪
			cancels () {
			
			},
		
			cancel () {
				 this.close()
			},
			//昵称
			nicknamechange (va) {
				this.nickname =  va.detail.value
				console.log(	this.nickname)
			},
			//个性签名
			personalizedchange (va) {
				if (this.personalized==='') {
					return
				}
				this.personalized =  va.detail.value
				console.log(this.personalized )
			},
			selectChange (val) {
			  this.value = val
			},
			birthday () {
				  // this.show = true
			 this.$refs.popup.open()
			},
			// 确认事件
			sure(e){
				
				let times = e.a + '年' + e.b + '月' + e.c + '日'
				this.values = times
				if (this.values) {
					this.hide =false  
				
				}
			  this.$refs.popup.close()
			
			
			    // 输出 { year: 2020,month: 3,day: 23}
			},
			//取消
			close(){
			   this.$refs.popup.close()
			},
			occupationchange (e) {
				console.log(e)
			},
			pickerChanges (e) {
					console.log(e)
			},
			//邮箱
			em_ail (va) {
				this.email = va.detail.value
				
			},
		}
	}
</script>

<style lang="scss">
	
   page, .personal{
		
		height: 100%;
		overflow: hidden;
		background-color: #f1f1f1;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%; 
		 background-color: #fff;
	 }
	 .personal {
		
		 .feedback-nav {
		 	background-color: #fff;
		 	display: flex;
			align-items: center;
		 	padding-left: 30upx;
		 	padding-right: 30upx;
		 	// padding-bottom: 28upx;
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
		 		font-size: 32upx;
		 		font-family: Microsoft YaHei;
		 		font-weight: bold;
				letter-spacing: 1px;
		 		line-height: 34upx;
		 	}
		 }
		.personal-head {
			position: relative;
			height: 170upx;
			background-color: #fff;
			padding-left: 30upx;
			padding-right: 20upx;
			
			display: flex;
			align-items: center;
			padding-top: 28upx;
			border-bottom: 1px solid #F2F2F2;
			.personal-head-title {
				
			  flex: 1;
			  font-size: 26upx;
			  font-family: Microsoft YaHei;
			  font-weight: bold;
			  color: #404040;
			  line-height: 43upx;
			  letter-spacing: 1px;
			}
			.imgs {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}
		}
		 .personal-list {
			 background-color: #fff;
			
			 padding-top: 40upx;
			 padding-left: 30upx;
			 padding-right: 30upx;
			 .ul {
				 .li {
					 height: 87upx;
					  display: flex;
						align-items: center;
				 		border-bottom: 1px solid #F2F2F2;
					margin-bottom: 40upx;
					.li-nickname {
					 
						flex: 1;
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #404040;
						line-height: 43upx;
						letter-spacing: 1px;
					} 
					.li-message {
						// flex: 1;
						text-align: right;
						font-size: 24upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #999999;
						line-height: 43upx;
						.input {
							width: 100%;
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
	 }
</style>
