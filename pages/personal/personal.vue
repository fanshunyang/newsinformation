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
		
		<image v-if="initialimgs  " class="imgs" src="../../images/cj.jpg" mode=""></image>
        	<image class="imgs" :src=" 'http://www.app.youxun.com/' +  user_item.user_head_url" mode=""></image>
		  <imagecropper :src="tempFilePath" @confirm="confirm" @cancel="cancels"></imagecropper>
		 <image @tap="upload" :src="cropFilePath " mode="aspectFit" style="width: 100upx; height: 100upx; border-radius: 50%; position: absolute; right: 10px; z-index: 222;"></image> 
	 </view>
	 <view class="personal-list">
	 	<view class="ul">
	 		<view class="li">
	 			<view class="li-nickname">
	 		      昵称
	 			</view>
				<view class="li-message">
				
				<input v-model="nickname" @input="nicknamechange" class="input" type="text" placeholder="请输入您的昵称" value="" />
				</view>
	 		</view>
			<view class="li">
				<view class="li-nickname">
			       个性签名
				</view>
				<view class="li-message">
				
				<input @input="personalizedchange" v-model="personalized" class="input" type="text" placeholder="请输入您的个性签名" value="" />
				</view>
			</view>
			<view class="li">
				<view class="li-nickname">
			     性别
				</view>
				<view class="li-message">
			
				<ldSelect value-key="label"    placeholder="请选择"   @change="selectChange"  :list="options"   v-model="value"></ldSelect>
			<!-- 	<input class="input" type="text" placeholder="发生的" value="" /> -->
				</view>
			</view>
			<!-- <view class="li" @tap='birthday'>
				<view class="li-nickname">
				
				年龄
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
			
			
			
				</view>
			</view> -->
			<view class="li">
				<view class="li-nickname">
			      年龄
				</view>
				<view class="li-message">
				
				<input class="input" @input='em_userage' v-model="userage" type="text" placeholder="请输入您的年龄" value="" />
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
			
			
				<vvSelect @change="pickerChanges"  v-model="categoryCode" placeholder="请选择" :list="categorys" valueKey="label" label="label"></vvSelect>
				
				<!-- <input class="input" type="text" placeholder="发生的" value="" /> -->
				</view>
			</view>
			<view class="li">
				<view class="li-nickname">
			     职业
				</view>
				<view class="li-message">
					<vvSelect @change="occupationchange"  v-model="occupation" placeholder="请选择" :list="categoryst" valueKey="label" label="label"></vvSelect>
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
				userage:'',
				// username:'请输入您的名称',
				// sexlabel:'请选择',
				// signaturenames:'请输入您的个性签名',
				// selectcate:'请选择',
				// selectcates:'请选择',
				// pleadr_eamil:'请输入您的邮箱',
				// pleadr_eage:'请输入您的年龄',
				user_item:{},
				initialimgs:false,
				user_url:'',
				education:'',
				occupationst:'',
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
								   ],
								   userid:'',
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
		onLoad(va) {
		const user_item = 	JSON.parse(va.item)
		
			this.user_item = user_item
			    const user_id = uni.getStorageSync('user_id')
				this.userid = user_id
			
		},
		mounted() {
			this.nickname =this.user_item.user_name
			this.userage = this.user_item.user_age
			this.value = this.user_item.user_sex
			this.user_url = this.user_item.user_head_url
		    this.occupationst = this.user_item.user_occupation
			this.email =  this.user_item.user_email
			this.education = this.user_item.user_education
			this.personalized =  this.user_item.user_signature
		},
		methods: {
			 async updatePersonalInfo () {
					 const user_id = uni.getStorageSync('user_id')
				     let data = await this.$http.post('/api/updatePersonalInfo',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					 user_id:user_id,
					 user_name:this.nickname,
					 user_age:this.userage,
					 user_sex:this.value,
					 user_head_url:this.user_url,
					 user_occupation:this.occupationst,
					 user_email:this.email,
					 user_education:this.education,
					 user_signature:this.personalized,
					 
					
				 });
				 console.log(data)
			}, 
			//返回上一级
			back () {
			  uni.navigateBack()
			},
			
			//保存
			save () {
			 this.updatePersonalInfo()
				uni.showLoading({
					title:'保存中',
					success:  (res) => {
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
				     count:1, //默认9
				     sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				     sourceType: ['album'], //从相册选择
				      success: (res) => {
						console.log(res)
				      this.tempFilePath = res.tempFilePaths.shift()
					  console.log(  this.tempFilePath)
				      }
				   });
			},
			//确定裁剪
		async	confirm (e) {
			console.log(e)
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
			  console.log(  this.value )
			},
			// birthday () {
			// 	  // this.show = true
			//  this.$refs.popup.open()
			// },
			// 确认事件
			// sure(e){
				
			// 	let times = e.a + '年' + e.b + '月' + e.c + '日'
			// 	this.values = times
			// 	if (this.values) {
			// 		this.hide =false  
				
			// 	}
			// 	console.log(	this.values)
			//   this.$refs.popup.close()
			
			
			//     // 输出 { year: 2020,month: 3,day: 23}
			// },
			//取消
			// close(){
			//    this.$refs.popup.close()
			// },
			occupationchange (e) {
			this.occupationst = e
			},
			pickerChanges (e) {
			this.education = e
			},
			//年龄
			em_userage (va) {
			  this.userage = va.detail.value
			  console.log(  this.userage)
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
