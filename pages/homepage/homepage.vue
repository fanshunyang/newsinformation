<template>
	<view class="homepage">
		<view class="status_bar">
		   <!-- 这里是状态栏 -->
		 </view>
		
				<view class="nav-bat">
				
						<view class="nav-bat-left">
							<view class="nav-bat-left-iocn el-icon-arrow-left" @click="upleave">
								
							</view>
						
							
						</view>
				
			
				
					<view class="nav-bat-right" @tap="examine">
						<view class="nav-bat-right-icon el-icon-more">
							
						</view>
					 
					</view>
					
				</view>
		<scroll-view :scroll-y="true" style="height: 100%;">
			<view class="homepage-top">
				<view class="homepage-top-headline ">
					<view class="homepage-top-headline-left">
						<view class="homepage-top-headline-img">
							<image class="imgs" :src="recomobj.user_head_url ||myobj.user_head_url" mode=""></image>
						</view>
						<view class="homepage-top-headline-title">
							<view class="homepage-top-headline-title-top">
								{{recomobj.user_name ||myobj.user_name}}  
							</view>
							<view class="homepage-top-headline-title-bottom">
								TA还没有设置个性签名
							</view>
							
						</view>
					</view>
					<view class="homepage-top-headline-attention" @click="attention" v-if="madeid===0">
					  +	关注
					</view>
					<view class="homepage-top-headline-attention" @click="unfollow" v-if=" madeid===1">
					  已关注
					</view>
				</view>
				 <view class="homepage-top-headline-bottom-area ">
					 <view class="homepage-top-headline-bottom-area-ul">
					 	<view class="homepage-top-headline-bottom-area-li" @click="description(index,$event)">
							<view class="homepage-top-headline-bottom-area-li-number">
								{{recomobj.attention_num ||myobj.attention_num}}
							</view>
						
							<view class="homepage-top-headline-bottom-area-li-desc">
							关注
							</view>
					 	
					 	</view>
						
						<view class="homepage-top-headline-bottom-area-li"  @click="descriptiontwo(index,$event)">
							<view class="homepage-top-headline-bottom-area-li-number">
								{{recomobj.fans_num ||myobj.fans_num}}
							</view>
						
							<view class="homepage-top-headline-bottom-area-li-desc">
						     粉丝
							</view>
						
						</view>
						
						<view class="homepage-top-headline-bottom-area-li"  @click="descriptionthree(index,$event)">
							<view class="homepage-top-headline-bottom-area-li-number">
									{{recomobj.zan_num || myobj.zan_num}}
							</view>
						
							<view class="homepage-top-headline-bottom-area-li-desc">
							帖子
							</view>
						
						</view>
						
						<view class="homepage-top-headline-bottom-area-li">
							<view class="homepage-top-headline-bottom-area-li-number">
							****
							</view>
						
							<view class="homepage-top-headline-bottom-area-li-desc">
							收藏
							</view>
						
						</view>
						
					 </view>
				 	
					
				 </view>
				
			</view>
			<view class="homepage-bottom-list">
				<view class="homepage-bottom-list-ul">
					
					<view class="homepage-bottom-list-li" @tap='zone(item)'  v-for="(item,index) in square_list  " :key='index'>
						<view class="homepage-bottom-list-li-type-top">
							<view class="homepage-bottom-list-li-left">
								<image class="imgs" :src="item.new_author_head_url" mode=""></image>
								<view class="homepage-bottom-list-li-left-maddle">
									<view class="homepage-bottom-list-li-left-desc">
										{{item.new_author}}
									</view>
									<view class="homepage-bottom-list-li-left-text">
									{{item.news_add_time}}
									</view>
								</view>
								
							</view>
							<view class="homepage-bottom-list-li-right">
								<view class="homepage-bottom-list-li-right-li">
									<view class="homepage-bottom-list-li-right-icon ">
										<image class="imgs" src="../../images/zan.png" mode=""></image>
									</view>
									<view class="homepage-bottom-list-li-right-number">
										1
									</view>
									<view class="homepage-bottom-list-li-right-label-icon ">
										<image class="imgs" src="../../images/shouc.png" mode=""></image>
									</view>
									<view class="homepage-bottom-list-li-right-label-number">
										222
									</view>
								</view>
								
							
							</view>
						</view>
						<view class="homepage-bottom-list-li-type-bottom">
							<view class="homepage-bottom-list-li-bottom">
								<view class="homepage-bottom-list-li-bottom-desc">
									{{item.new_title}}
								</view>
								<!-- <view class="homepage-bottom-list-li-bottom-text">
									兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
								</view> -->
							</view>
							<view class="homepage-bottom-list-li-bottom-list-img">
								<view class="homepage-bottom-list-li-bottom-list-img-li">
									<image class="imgs" :src="item.news_img" mode=""></image>
								</view>
							
								
							</view>
							
						</view>
						
						
						
					</view>
					
					<!-- 1 -->
					
					
					
					
					
					
				
					
					
					
				</view>
				
			
			</view>
			
			
		</scroll-view>
		<!-- <view class="fixed-coment" >
		<view class="fixed-coment-button-left">
			<view class="fixed-coment-button-left-icon el-icon-chat-line-round">
			
			</view>
				私信
			
		</view>
		<view class="fixed-coment-button-right">
			<view class="fixed-coment-button-right-icon">
				
			</view>
			+ 关注
			
		</view>
		</view> -->
		<popup ref="popup" type="bottom">
			<view class="examine" >
				<view class="examine-item">
					举报
				</view>
				<view class="examine-item">
					拉黑
				</view>
			</view>
			<view class="examine_bottom" @tap='call' >
				取消
			</view>
		</popup>
		
	</view>
</template>

<script>
	import popup from '../../components/uni-popup/uni-popup.vue'
	export default {
		components: {
			popup
		},
		data() {
			return {
				//帖子
				zoneList:[
				
				],
				homepage_title:[
					{id:1, numbers:222,desc:'关注'},
					{id:2,numbers:12,desc:'粉丝'},
					{id:3,numbers:54,desc:'帖子'},
					{id:4,numbers:'****',desc:'收藏'},
				],
				recom_user_id:'',
				recomobj:{},
				square_list:[],
				index:'',
				madeid:0,
				re_id:'',
				user_index:'',
				recom_user_idsyl:'',
				myobj:{}
			}
		},
		onLoad(va) {   
			this.recom_user_idsyl =  parseInt(va.recom_user_idsyl)
			const id = parseInt(va.id)
	    	this.user_index = 	parseInt(va.index)
			console.log(this.user_index)
			this.recom_user_id = id
			this.re_id =  parseInt( va.recom_user_id)
		console.log(this.re_id)
		   this.index = parseInt(va.index)
		   console.log( '我是从用户列表来的' + this.re_id)
		console.log( '我是从首页来的用户id' + this.recom_user_id, '我是从个人中心来的用户id'+ this.index)
		// let squetList
		// if (  this.recom_user_id) {
		// 	squetList = this.square_list
		// } else if (this.index) {
		// 	squetList = this.zoneList
		// }
		// return squetList
		
		 
		
		},
	async	mounted() {
		  this.myRecommend()
		await  this.myRecommendUserDetail() 
		if ( this.recomobj.is_attention===1) {
			this.madeid=1
		}
		if ( this.recomobj.is_attention===0) {
			this.madeid=0
		}
		},
		computed: {
		
		},
		methods: {
			//我的关注热帖列表
			async myRecommend () {
				 const user_id = uni.getStorageSync('user_id')
				
				 const data = await this.$http.post('/api/myRecommendUserDetail',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
				     recom_user_id:  this.recom_user_id  || this.re_id || this.recom_user_idsyl  || this.user_index,
					 user_id:user_id
				 });
				   
					const {DATA} = data
					if (data.CODE==='200') {
					
					  this.myobj = DATA
					  const {square_list} = this.myobj
					    this.square_list = square_list
					  // console.log( this.myobj)
					  // console.log(  this.myobj.is_attention)
					  if (  this.myobj.is_attention===1) {
						     	this.madeid = 1
					  }
					  
					}
			},
			
			//用户关注资料详情显示
			async myRecommendUserDetail () {
				 const user_id = uni.getStorageSync('user_id')
				
				 const data = await this.$http.post('/api/myRecommendUserDetail',{
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					 recom_user_id:this.recom_user_id  ||this.re_id || this.recom_user_idsyl || this.user_index,
					 user_id:user_id
				 });
				    console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					  this.recomobj = DATA
					  const {square_list} = this.recomobj
					  this.square_list = square_list
					  console.log(this.square_list)
					}
			},
			//返回上一级
			upleave () {
				uni.navigateBack()
			},
			//点击跳转对应的分类
			description (va,e) {
					console.log(this.recom_user_id)
					uni.navigateTo({
						url:`../concern/concern?items=${0}&recom_user_id=${this.recom_user_id}&&recom_user_ids=${this.re_id}&&user_index=${this.user_index}`
					})
				
			},
			descriptiontwo () {
				uni.navigateTo({
					url:`../concern/concern?items=${1}&recom_user_id=${this.recom_user_id}&&recom_user_ids=${this.re_id}&&user_index=${this.user_index}`
				})
			},
			descriptionthree () {
				uni.navigateTo({
					url:`../myinvitation/myinvitation?items=${1}&recom_user_id=${this.recom_user_id}`
				})
			},
			//关注
			async attention () {
			   if (this.recomobj.is_attention==='') {
			   	uni.showModal({
			   		title:'提示',
			   		content:'该功能需要登录使用',
			   		success:(res)=> {
			   			if (res.confirm) {
			   		    uni.navigateTo({
			   		    	url:'../login/login'
			   		    })
			   			 // this.detailsobj.is_attention = ''
			   			}
			   		}
			   	})
			   }
			   			
			   const user_id = uni.getStorageSync('user_id')
			   
			   let data = await this.$http.post('/api/addRecommend',{
			    token:'d6a2fa16e60777e390256ec85cc2f42e',
			    user_id:user_id,
			    child_id:this.recomobj.user_id			
			   });
			   console.log(this.recomobj )
			   			
			   const {CODE} = data
			   if (CODE==='200') {
			   	this.madeid =  this.recomobj.is_attention
			   	this.madeid = 1
			   this.myRecommendUserDetail()
			  
			   	console.log(this.madeid )
			   	
			   
			   }	
			},
			async unfollow () {
			   const user_id = uni.getStorageSync('user_id')
			   
			   let data = await this.$http.post('/api/cancelRecommend',{
			    token:'d6a2fa16e60777e390256ec85cc2f42e',
			    user_id:user_id,
			    child_id:this.recomobj.user_id	|| this.myobj.rem_id			
			   });
			   const {CODE,DATA} = data
			   uni.showModal({
			   	title:'确定取消关注？',
			   	success: (res)=> {
			   		if (res.confirm) {
			   		if (CODE==='200') {
			   			this.madeid =  this.recomobj.is_attention || this.myobj.rem_id
			   			this.madeid = 0
			   			// this.getSquareNewsDetail()
			   			console.log(this.madeid )
			   			
			   		   }
			   		}
			   	}
			   })
			   
			   
			},
			//帖子详情 
			zone (va) {
				const id = va.id
				uni.navigateTo({
					url:`../details/details?item=${id}`
				})
			},
			//举报和拉黑
			examine () {
			 this.$refs.popup.open()
			},
			//取消
			call () {
			 this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss">
	page, .homepage{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		
	}	
  .homepage {
	  // height: auto!important;
	  // padding-bottom: 260upx;
	  .fixed-coment {
		  position: fixed;
		  bottom: 0;
		  // z-index: 2222229;
		  padding: 0 30upx;
		  display: flex;
		  background-color: #fff;
		  .fixed-coment-button-left {
			  width: 332upx;
			  height: 72upx;
			  border: 1px solid #D9D9D9;
			  border-radius: 2px;
			  margin-right: 26upx;
			  text-align: center;
			  line-height: 72upx;
			  background-color: #fff;
			  margin-top: 13upx;
			  margin-bottom: 13upx;
			  letter-spacing: 1px;
			  font-family: Microsoft YaHei;
			  color: #999;
			  .fixed-coment-button-left-icon {
				  margin-right: 12upx;
			  }
		  }
		  .fixed-coment-button-right {
			  width: 332upx;
			  height: 72upx;
			  border: 1px solid #8C8C8C;
			  border-radius: 2px;
			  text-align: center;
			  line-height: 72upx;
			  background-color: #1482FF;
			  font-family: Microsoft YaHei;
			  margin-top: 13upx;
			  margin-bottom: 13upx;
			  color: #fff;
			  letter-spacing: 1px;
		  }
	  }
	  .nav-bat {
	  		  display: flex;
	  		 flex-direction: row;
	  		z-index: 2222;
	  	padding: 0 30upx;
	  	  background-color: #fff;
	  	  .nav-bat-left {
	  			display: flex;
	  		flex-direction: row;
	  		margin-top: 20upx;
	  		.nav-bat-left-iocn {
				// width: 16px;
				// height: 30upx;
				font-size: 40upx; 
			}
	  		
	  	  }
	  	  .nav-bat-right {
	  	  
	  			margin-top: 20upx;
	  			margin-left: 611upx;
	  		 .nav-bat-right-icon {
				font-size: 40upx;
			  }
	  	   }  
	   }
	   .homepage-top {
		   margin-top: 30upx;
		   .homepage-top-headline {
			   padding-left: 30upx;
			   display: flex;
			   
			   .homepage-top-headline-attention {
				   width: 116upx;
				   height: 52upx;
				   background: #1482FF;
				   border-radius: 4px;
				margin-right: 31upx;
				text-align: center;
				letter-spacing: 1px;
				font-size: 28upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #fff;
				line-height: 52upx;
			   }
			   .homepage-top-headline-left {
				   display: flex;
				   flex: 1;
				   .homepage-top-headline-img {
				   				   .imgs {
				   					   width: 92upx;
				   					   height: 91upx;
				   					   border-radius: 50%;
				   				   }
				   }
				   .homepage-top-headline-title {
				   				   margin-left: 24upx;
				   				   .homepage-top-headline-title-top {
				   					   // width: 183px;
				   					   // height: 28px;
				   					   font-size: 28upx;
				   					   font-family: Microsoft YaHei;
				   					   font-weight: bold;
				   					   color: #404040;
				   					   line-height: 43upx;
				   					   letter-spacing: 1px;
				   					 
				   				   }
				   				   .homepage-top-headline-title-bottom {
				   					   // width: 270px;
				   					   // height: 24px;
				   					   font-size: 24upx;
				   					   font-family: Microsoft YaHei;
				   					   font-weight: 400;
				   					   color: #999999;
				   					   line-height: 46upx;
				   					   letter-spacing: 1px;
				   				   }
				   }
			   }
			
		   }
		   .homepage-top-headline-bottom-area {
			   margin-top: 34upx;
			   margin-bottom: 33upx;
			   .homepage-top-headline-bottom-area-ul {
				   display: flex;
				   .homepage-top-headline-bottom-area-li {
							margin-right: 144upx;
							text-align: center;
							&:first-child {
								padding:  0 0 0 58upx;
							}
							&:last-child {
								padding:  0 58upx 0 0 ;
							}
						
					   .homepage-top-headline-bottom-area-li-number {
						   // width: 16upx;
						   // height: 24upx;
						   font-size: 30upx;
						   font-family: Microsoft YaHei;
						   font-weight: 400;
						   color: #333333;
						   line-height: 34upx;
						 text-align: center;
					   }
					   .homepage-top-headline-bottom-area-li-desc {
						   width: 52upx;
						   letter-spacing: 1px;
						   // height: 24upx;
						   font-size: 24upx;
						   font-family: Microsoft YaHei;
						   font-weight: 400;
						   color: #999999;
						   line-height: 43upx;
						   text-align: center;
					   }
				   }
			   }
		   }
	   }
	   .homepage-bottom-list {
		   background-color: #F1F1F1;
		   // height: 870px;
		   padding-bottom: 110upx;
		   .homepage-bottom-list-ul {
			
			   padding-top: 10upx;
			 
			   .homepage-bottom-list-li {
				     padding-left: 30upx;
					 padding-right: 29upx;
				   padding-top: 32upx;
				 background-color: #fff;
				 border-bottom: 1px solid #F5F5F5;
				 // margin-bottom: 32upx;
				 .homepage-bottom-list-li-type-top {
					  display: flex;
					  margin-bottom: 20upx;
					 .homepage-bottom-list-li-left {
						 display: flex;
						 flex: 1;
						 // margin-right: 220upx;
						 .imgs {
							 width: 72upx;
							 height: 72upx;
							 border-radius: 50%;
						 }
						 .homepage-bottom-list-li-left-maddle {
							 display: flex;
							 flex-direction: column;
							 margin-left: 25upx;
							.homepage-bottom-list-li-left-desc {
								// width: 220upx;
								// height: 28upx;
								font-size: 28upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #404040;
								line-height: 43upx;		
								letter-spacing: 1px;
							}
							.homepage-bottom-list-li-left-text {
								// width: 190upx;
								// height: 23upx;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 43upx;	
							    letter-spacing: 1px;
							} 
						 }
						
					 }
					 .homepage-bottom-list-li-right {
						 .homepage-bottom-list-li-right-li {
							 display: flex;
							 align-items: center;
							 .homepage-bottom-list-li-right-icon {
								
								 margin-right: 10upx;
								 // margin-top: 6upx;
								 .imgs {
									 width: 32upx;
									 height: 32upx;
								 }
							 }
							 .homepage-bottom-list-li-right-number {
								 margin-right: 20upx;
								 font-size: 26upx;
								 font-family: Microsoft YaHei;
								 font-weight: 400;
								 color: #CCCCCC;
								 line-height: 21px;
							 }
							 .homepage-bottom-list-li-right-label-icon {
								 	 margin-right: 10upx;
									  margin-top: 6upx;
									  .imgs {
										  width: 37upx;
										  height: 36upx;
									  }
							 }
							 .homepage-bottom-list-li-right-label-number {
								     font-size: 26upx;
								     font-family: Microsoft YaHei;
								     font-weight: 400;
								     color: #CCCCCC;
								     line-height: 21px;
								     margin-left: 5px;
							 }
						 }
					 }
				 }
				 .homepage-bottom-list-li-type-bottom {
					 .homepage-bottom-list-li-bottom {
						 .homepage-bottom-list-li-bottom-desc {
							 // width: 337upx;
							 // height: 27upx;
							 font-size: 26upx;
							 font-family: Microsoft YaHei;
							 font-weight: bold;
							 color: #404040;
							 line-height: 43upx;
							 letter-spacing: 1px;
							 margin-bottom: 18upx;
						 }
						 .homepage-bottom-list-li-bottom-text {
							 // width: 687upx;
							 // height: 67upx;
							 font-size: 26upx;
							 font-family: Microsoft YaHei;
							 font-weight: 400;
							 color: #666666;
							 line-height: 41upx;
							 letter-spacing: 1px;
							 margin-bottom: 23upx;
						 }
					 }
					 .homepage-bottom-list-li-bottom-list-img {
						 margin-bottom: 32upx;
						 display: flex;
						 .homepage-bottom-list-li-bottom-list-img-li {
							 margin-right: 18upx;
							 .imgs {
								 width: 218upx;
								 height: 152upx;
								 border-radius: 8upx;
							 }
						 }
					 }
				 }
			   }
		   }
	   }
	   .examine {
		   height:220upx; 
		   background-color: #fff;
		   border-radius: 20upx;
		   margin-left: 10upx;
		   margin-right: 10upx;
		   .examine-item {
			   border-bottom: 1px solid #EBEBEB;
			   text-align: center;
			   height: 110upx;
			   line-height: 110upx;
			   font-size: 30upx;
			   font-family: Microsoft YaHei;
			   font-weight: 400;
			   color: #5E95F2;
			   letter-spacing: 2px;
			   &:last-child {
				 border-bottom:0; 
			   }
		   }
	   }
	   .examine_bottom {
		   margin-top: 16upx;
		   height: 98upx;
		   margin-left: 10upx;
		   margin-right: 10upx;
		   background-color: #fff;
		   text-align: center;
		   line-height: 98upx;
		   font-size: 32upx;
		   font-family: Microsoft YaHei;
		   font-weight: bold;
		   color: #5E95F2;
		   letter-spacing: 2px;
		    border-radius: 20upx;
	   }
  }
</style>
