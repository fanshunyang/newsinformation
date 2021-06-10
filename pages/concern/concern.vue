<template>
	<view class="concern">
	<view class="status_bar">
	        <!-- 这里是状态栏 -->
	    </view>
		<view class="concern-header">
			<view class="concern_icon el-icon-arrow-left" @click="back">
				
			</view>
			<view class="concern_classify" :class="{'exhibition':currIndex===index}" @click="concernTable(index)" v-for="(item,index) in concern_classify" :key='index'>
			{{item.text}}
			</view>
		</view>
		<swiper style="height: 100%;"  :current="currIndex" @change="changItem">
			<swiper-item  v-for="(item,index) in 2" :key='index'>
				<scroll-view scroll-y="true" style="height: 100%;" >
				<view class="concern_search">
				 <view class="concern_search_icon el-icon-search">
				 
				 </view> 
				<input v-model="textvalue"  @input="search_site" class="text" type="text" placeholder="输入昵称搜索"  >
				<view class="concern_search_icon el-icon-close" v-if="close" @click="search_close">
				
				</view>
				</view>
			
				<view class="concern_list">
					<view class="ul">
						<view class="li" v-for="(item,index) in listype" :key='index'>  
							<view class="li_kind"  @click="concern_list_item(item)"> 
								<image class="imgs" :src=" item.fans_head_url ||  item.rem_head_url  " mode=""></image>
								<view class="li_kind_text">
								{{item.rem_user_name || item.fans_user_name}}
								</view>
							</view>
						<!-- 	<view class="li_close" @click="attention(item)" v-if="madeid===0">
								关注
							</view> -->
							<view class="li_close" @click="unfollow(item)" v-if=" currIndex===0">
								已关注
							</view>
							
						</view>
						
					</view>
				</view>
				
				
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;" >
				<view class="concern_search">
				 <view class="concern_search_icon el-icon-search">
				 
				 </view>
			<!-- 	<input v-model="textvalue"  @input="search_site" class="text" type="text" placeholder="输入昵称搜索" focus > -->
				<view class="concern_search_icon el-icon-close" v-if="close" @click="search_close">
				
				</view>
				</view>
							
				
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	
	export default {
		components: {
		
		},
		data() {
			return {
				currIndex:0,
				close:false,
				textvalue:'',
				concern_classify:[
					{id:1,text:'关注'},
					{id:2,text:'粉丝'}
				],
				concern_list:[
					
				],
				concern_lists:[],
				lists:[],
				list:[
				
				],
				madeid:1 ,
				recom_user_id:'',
				recom_user_ids:'',
				user_index:'',
				homepage:[],
				homepagefans:[]
			}
		},
	async onLoad(va) {
	
	    this.user_index = 	parseInt(   va.user_index)
		console.log(  this.user_index )
		this.recom_user_id = 	parseInt(  va.recom_user_id)
		this.recom_user_ids = parseInt( va.recom_user_ids)
	
		console.log(this.recom_user_id,this.recom_user_ids )
			if (va.items==='0') {
				 this.recommendUserList()
		
			}
			if (va.items==='1') {
			    this.currIndex = 1
			  this.fansUserList()
			
			   // console.log( this.homepagefans)
			}
		
			
		},
	     mounted() {
		  this.myRecommendUser()
		  	this.myFansUser()
	
		},
		computed:{
			listype () {
				let tablist
				
				if (this.currIndex===0) {
			
				 tablist =  this.homepage ||   this.list 
				 
				} else if (this.currIndex===1) {
					
					tablist = this.homepagefans || this.lists  
			
				
				}
				return tablist 
			}
		},
		methods: {
		
			
			//首页用户关注的信息
			async recommendUserList () {
				 const user_id = uni.getStorageSync('user_id')
				
				 const data = await this.$http.post('/api/recommendUserList',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
				
					 id:this.recom_user_id || this.recom_user_ids ||  this.user_index ,
					
				 });
				    console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						
					 this.homepage = DATA
				
					}
			},
			//首页用户粉丝的信息
			async fansUserList () {
				 const user_id = uni.getStorageSync('user_id')
				
				 const data = await this.$http.post('/api/fansUserList',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
				
					 id:this.recom_user_id || this.recom_user_ids ||  this.user_index,
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					 this.homepagefans = DATA
					}
			},
			async myRecommendUser () {
				 const user_id = uni.getStorageSync('user_id')
			
				 const data = await this.$http.post('/api/myRecommendUser',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
				
					 user_id:user_id,
					 search_value:''
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						this.concern_list = DATA
						this.list = DATA
						  console.log(this.list);
					}
			},
			async myFansUser () {
				 const user_id = uni.getStorageSync('user_id')
				
				 const data = await this.$http.post('/api/myFansUser',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
				
					 user_id:user_id,
					 search_value:''
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						this.concern_lists = DATA
						console.log(this.concern_lists);
						this.lists = DATA 
					}
			},
			async attention (va) {
				// console.log(va)
				// 	// if (this.detailsobj.is_attention==='') {
				// 	// 	uni.showModal({
				// 	// 		title:'提示',
				// 	// 		content:'该功能需要登录使用',
				// 	// 		success:(res)=> {
				// 	// 			if (res.confirm) {
				// 	// 		    uni.navigateTo({
				// 	// 		    	url:'../login/login'
				// 	// 		    })
				// 	// 			 // this.detailsobj.is_attention = ''
				// 	// 			}
				// 	// 		}
				// 	// 	})
				// 	// }
				
				// 	const user_id = uni.getStorageSync('user_id')
					
				// 	let data = await this.$http.post('/api/addRecommend',{
				// 	 token:'d6a2fa16e60777e390256ec85cc2f42e',
				// 	 user_id:user_id,
				// 	 child_id:va.rem_id			
				// 	});
				// 	console.log(this.detailsobj )
				
				// 	const {CODE} = data
				// 	if (CODE==='200') {
				// 		this.madeid =  this.detailsobj.is_attention
				// 		this.madeid = 1
			 //        	this.myRecommendUser()
				// 		console.log(this.madeid )
						
					
				// 	}
				},
				
			async unfollow () {
				// const user_id = uni.getStorageSync('user_id')
				
				// let data = await this.$http.post('/api/cancelRecommend',{
				//  token:'d6a2fa16e60777e390256ec85cc2f42e',
				//  user_id:user_id,
				//  child_id:this.detailsobj.user_id			
				// });
			 //    const {CODE,DATA} = data
				// uni.showModal({
				// 	title:'确定取消关注？',
				// 	success: (res)=> {
				// 		if (res.confirm) {
				// 		if (CODE==='200') {
				// 			this.madeid =  this.detailsobj.is_attention
				// 			this.madeid = 0
				// 		    this.myRecommendUser()
				// 			console.log(this.madeid )
							
				// 		   }
				// 		}
				// 	}
				// })
			
			},
			//返回上一级页面
			back () {
			  uni.navigateBack()
			},
			
			concernTable (va) {
				
			
			  this.currIndex = va
			},
			changItem (va) {
			
				this.currIndex = va.detail.current
			},
			search_close () {
				this.list = []
				this.textvalue = ''
				this.close = false
				// this.myRecommendUser()
			},
			concern_list_item (va) {
				const id = va.rem_id ||va.fans_id
				console.log(id)
				uni.navigateTo({
					url:`../homepage/homepage?index=${id}&recom_user_id=${this.recom_user_id}&&recom_user_idsyl=${this.recom_user_ids}`
				})
			},
			search_site (va) {
				
				let val = va.detail.value;
				console.log(val)
				let {concern_list,concern_lists} = this
				let arr = [];
				for (let i = 0; i < concern_list.length; i++) {
												
				if (concern_list[i].rem_user_name.indexOf(val) !==-1) {
													
				arr.push(concern_list[i]);
														
				}
			}
				

				console.log(arr)
				if (!val) {
					this.list = arr
						this.lists = arr
					this.close = false
				
				} else {
					this.list = arr;
						this.lists = arr
					this.close = true
				}
			},
			
		}
	}
</script>

<style lang="scss">
	page, .concern{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		
	
	 }
 .concern {
	  .concern-header {
		  margin-left: 30upx;
		  margin-right: 30upx;
		 display: flex;
		 .concern_icon {
			margin-right: 229upx;
			font-size: 36upx;
		 }
		 .exhibition {
			 border-bottom: 2px solid #046AFF;
			  color:#333 !important;
			  font-weight: 700 !important;
		 }
		 .concern_classify {
			 height: 46upx;
			 font-size: 26upx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #999999;
			 line-height: 34upx;
			 margin-right: 80upx;
			 letter-spacing: 2px;
		 }
	 }
	 .concern_search {
		 display: flex;
		 height: 60upx;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-top: 24upx;
		 background-color: #f3f3f3;
		 .concern_search_icon {
			 margin-right: 20upx;
			 margin-top: 16upx;
			 margin-left: 20upx;
		 }
		 .text {
			 font-size: 26upx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #CCCCCC;
			 flex: 1;
			 line-height: 34upx;
			 margin-top: 12upx;
			 letter-spacing: 1px;
		 }
	 }
	 .concern_list {
	
		 margin-top: 66upx;
		 margin-left: 30upx;
		 margin-right: 30upx;
		 
		 .ul {
			 background-color: #fff;
			  .li {
				 display: flex;
				 border-bottom: 1px solid #F2F2F2;
				margin-bottom: 24upx;
				 .li_kind {
				 	display: flex;
					flex: 1;
					margin-bottom: 24upx;
					 .imgs {
						width: 82upx;
						height: 82upx;
						border-radius: 50%;
						
					 }
					 .li_kind_text {
					
						font-size: 28upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #404040;
						line-height: 43upx;
						margin-top: 18upx;
						margin-left: 24upx;
						letter-spacing: 1px;
					}
				} 
				 .li_close {
					width: 128upx;
					height: 52upx;
					margin-top: 16upx;
					background: #CCCCCC;
					border-radius: 4px;
					text-align: center;
					color: #fff;
					font-family: Microsoft YaHei;
					font-weight: 400;
					line-height: 52upx;
				
				}
			 }
		 }
	 }
 }
</style>
