<template>
	<view class="game">
	 <view class="status_bar">
	          <!-- 这里是状态栏 -->
	 			
	 				
	   </view>
	 
	
		<view class="swiper-items">
			
			<!-- 顶部选项卡 -->
			<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation   >
				<view 
					v-for="(item,index) in tabBars" :key="item.id"
					class="nav-item"
					:class="{current: index === tabCurrentIndex}"
					:id="'tab'+index"
					@click="changeTab(index,item)"
				>{{item.name}}</view>
			
			</scroll-view>
		</view>
	<swiper class="altogether"   :current="tabCurrentIndex" @change="changeitem">
		<swiper-item style="height: 100%; padding-left: 30upx; padding-right: 30upx;"	v-for="(item,index) in tabBars" :key="item.id">
		<scroll-view scroll-y="true"  style="height: 100%;">
			<view class="game_swipers">
				<view class="gane_letter" >
							<view class="ul">
								<view class="li"   @tap='gameReferral(item)' v-for="(item,index) in recommended" :key='index'>
									<image :lazy-load='true' class="imgs" :src="item.gm_img" mode=""></image>
									<view class="li-item" >
										<view class="li_text">
											{{item.gm_name}}
										</view>
										
									</view>
									<view class="li_grade">
										<uni-rate v-model="item.gm_star" @change="onChange( $event, item)" :is-fill="false" :max="5" :touchable="false" :size="14" ></uni-rate>   
										<view class="li_grade_mark">
											{{item.gm_star}}
										</view>
									</view>
									
									
								</view>
								
							
							</view>
				        </view>
						<view class="game_advertising">
						<carousel :img-list="imgList" url-key="img" @selected="selectedBanner"></carousel>
						</view>
						<!-- <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html">1</web-view> -->
					<view class="game_recommended" >
						<view class="game_recommended-title-all">
							<view class="game_recommended-title-left">
								热门推荐
							</view>
							<view class="game_recommended-title-right" @tap='gameMore'>
								更多 >
							</view>
							
							 
						</view>
						
						<view class="ul">
							<view class="li" @tap='game_recommend(item)' v-for="(item,index) in game_recommendlist">
								<image  :lazy-load='true' class="imgs" :src="item.gm_img" mode=""></image>
								<view class="li-text-top">
									{{item.gm_name}}
								</view>
								<!-- <view class="li-text-bottom">
									{{item.desc}}
								</view> -->
							</view>
							
						</view>
					</view>
					<view class="news_appear">
						<view class="news_appear_tilte_all">
							<view class="news_appear_tilte_left">
								最新上市
							</view>
							<view class="news_appear_tilte_right"  @tap='gamecompany'>
								更多 >
							</view>
							
							
						</view>
						
						<view class="ul">
							<view class="li" @tap='gameAppear(item)' v-for="(item,index) in appearlist" :key='index'>
								<image  :lazy-load='true' class="imgs" :src="item.gm_img" mode=""></image>
								<view class="li-text-top_fl">
									{{item.gm_name}}
								</view>
								<view class="li-text-bottom_rp">
								<!-- {{item.gm_cat_str}} -->
								
								</view>
							</view>
							
						</view>
					</view>
					<view class="seek_game">
						<view class="seek_game_title">
							找游戏
						</view>
						<view class="game_classify">
							<view class="ul">
								<view class="li" :class="{'fily':item.id===currIndex}" @click="gameclassify(item)" v-for="(item,index) in  game_classify" :key='index'>
									{{item.text}}
								</view>
							</view>
						</view>
						
						<scroll-view scroll-y="true" style="height: 100%;">
						<view class="game_swiper-item">
							<view style="text-align: center;" class="" v-if="makegame.length===0">
								抱歉~~没有该信息
							</view>
							<view class="ul" v-else>
								<view class="li" @tap='makeGame(item)' v-for="(item,index) in makegame" :key='index'>
								<image  :lazy-load='true' class="imgs" :src="item.gm_img" mode=""></image>
								<view class="li_center">
									<view class="li_center_introductory">
									{{item.gm_name}}
									</view>
									<view class="li_center_star">
											<uni-rate   v-model="item.gm_star" :is-fill="false" :max="5"  :touchable="false" :size="10.5" ></uni-rate>   
									</view>
									<view class="li_center_sort">
								{{item.gm_cat_str}}
									</view>
									<view class="li_center_all">
										<view class="arroind">
											
										</view>
										<view class="ios">
											
										</view>
										<view class="listend">
											{{item.gm_update_time}} 上市
										</view>
									</view>
								</view>
								<view class="li_right">
									<view class="li_right-icon el-icon-download">
										
									</view>
									<view class="li_right_text">
										下载
									</view>
								</view>
								
								</view>
								
							
							</view>
							
							
						</view>
						</scroll-view>
						<!-- <swiper style="height: 520px;" :current="currIndex" @change="chagnetabls">
						 	<swiper-item style="height: 100%;"   v-for="(item,index) in  game_classify" :key='index'>

							 
						 	</swiper-item>
						 
						 </swiper> -->
					</view>
			</view>
		</scroll-view>
		</swiper-item>
	
	</swiper>
	
	 
	</view>
</template>

<script>
	import unirate from '../../components/uni-rate/uni-rate.vue'
	import carousel from '../../components/vear-carousel/vear-carousel.vue'
	export default {
		components:{
			unirate,
			carousel
		},
		data() {
			return {
				
				currIndex:1,
				tabCurrentIndex:0,
				tabBars:[],
				//推荐前九个
				recommended:[
				
				],
				game_classify:[
					{id:1,text:'近期热度'},
					{id:2,text:'评分最高'},
					{id:3,text:'最新上市'},
					{id:4,text:'即将上市'}
				],
				game_recommendlist:[
					
				],
				appearlist:[
					
				],
				makegame:[
					
				],
				imgList:[
					
				],
				star:'',
				classfily:1,

			}
		},
		onLoad() {
			
		},
		onShow() {
			 //    const value = uni.getStorageSync('star');
				// this.star = value
		},
		mounted() {
			this.getAllGameCat()
			this.getAllGame()
			this.getAdBanner()
			this.getRecommendGame()
			this.getNewGames()
			this.getSearchGame()
		},
		methods: {
			//分类导航
			async getAllGameCat () {
				// tabnav
				 let data = await this.$http.post('/api/getAllGameCat',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
						this.tabBars = DATA
						// this.tabBars.unshift('推荐')
					}
			},
			//分类筛选
			async getAllGame () {
				// tabnav
				 let data = await this.$http.post('/api/getAllGame',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					    gm_c_id: this.tabCurrentIndex
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
					
					   this.recommended = DATA
					   	console.log(   this.recommended)
					}
			},
			//广告位
			async getAdBanner () {
				// tabnav
				 let data = await this.$http.post('/api/getAdBanner',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
					
					   this.imgList = DATA
					   	console.log(     this.imgList)
					}
			},
			//热门推荐
			async getRecommendGame () {
				// tabnav
				 let data = await this.$http.post('/api/getRecommendGame',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
					
					   this.game_recommendlist = DATA
					   	console.log(      this.game_recommendlist)
					}
			},
			//最新上市
			async getNewGames () {
				// tabnav
				 let data = await this.$http.post('/api/getNewGames',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
					
					   this.appearlist = DATA
					   	console.log(    this.appearlist)
					}
			},
			
			//找游戏
			async getSearchGame () {
				// tabnav
				 let data = await this.$http.post('/api/getSearchGame',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					    gm_type_id:this.currIndex
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
					this.makegame = DATA
					
					   	console.log(   this.makegame)
					}
			},
			
			
		async  changeTab (va,item) {
		this.classfily = item.id
			this.tabCurrentIndex = va
		
		
		
		this.getAllGame()
		
		  },
		  changeitem (va) {
			    
			 this.tabCurrentIndex = va.detail.current
			 this.getAllGame()
		 
		  },
		
		
			//评分
		  onChange (va,item) {
			  
			 console.log(va) 
			 
		  },
		  gameMore () {
			  uni.navigateTo({
			  	url:'../gameeasier/gameeasier' 
			  })
		  },
		  //广告位轮播
		  selectedBanner (item,index) {
			 const url = 'http://uri6.com/tkio/iyiemqa'
			 // console.log(item.account)
			  // uni.navigateTo({
			  // 	url:`../webview/webview?items=${encodeURIComponent(item.account)}`
			  // })
			  
			    //跳转外部链接
				
			  	//#ifdef H5
			  location.href = url
			   	//#endif
			  
			
			 	//#ifdef APP-PLUS
			  plus.runtime.openURL(url, (res)=> {  
			      console.log(res);  
			   }); 
			   	//#endif
				
			// uni.showToast({
			//   title:'该功能暂未开放 敬请期待!',
			//   icon:'none',
			//   duration:2000
			// })
			  
		  },
		    //找游戏
		  gameclassify (va) {
			  this.currIndex = va.id
			  console.log(this.currIndex)
			  this.getSearchGame()
		  },
		  //找游戏切换
		  // chagnetabls (va) {
			 //   this.currIndex = va.detail.current 
			 //  this.getSearchGame()
		  // },
		  //游戏介绍
		  gameReferral (va) {
			  const id =  va.gm_id
			  	// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}` 
			  uni.navigateTo({
			  	url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  })
		  },
		  //热门推荐
		  game_recommend (item) {
			  const id =  item.gm_id
			   	// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  uni.navigateTo({
			  	url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  })
		  },
		  //最新上市
		  gameAppear (va) {
			 const id =  va.gm_id
			     	// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  uni.navigateTo({
			  	url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  })
		  },
		  //找游戏
		  makeGame (va) {
			  const id =  va.gm_id
			  	// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  uni.navigateTo({
			  	url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			  })
		  },
		  gamecompany () {
			  uni.navigateTo({
			  	url:'../newcompany/newcompany'
			  })
		  }
		}
	}
</script>

<style lang="scss" >
page, .game{
		background-color: #FFFFFF;
		height: 100%;
		overflow: hidden;
		
	}
	.status_bar { 
	     height: var(--status-bar-height);
	     width: 100%; 	  
	 }
	 .game {
		.swiper-items {
			position: relative;
			// height: 1260upx;
		
			/* 顶部tabbar */
			.nav-bar{
				position: relative;
				z-index: 10;
				// height: 90upx;
				margin-bottom: 32upx;
				white-space: nowrap;
				// box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
				background-color: #fff;
				
				.nav-item{
					padding-left: 30upx;
					// padding-right: 30upx;
					display: inline-block;
					// width: 150upx;
					height: 90upx;
					margin-right: 40upx;
					text-align: center;
					line-height: 90upx;
					font-size: 30upx;
					color: #303133;
					position: relative;
					&:after{
						content: '';
						width: 0;
						height: 0;
						border-bottom: 4upx solid #007aff;
						position: absolute;
						left: 50%;
						bottom: 0;
						transform: translateX(-50%);
						transition: .3s;
					}
				} 
				.current{  
					color: #007aff;
					
					&:after{
						width: 50%;
						margin-left: 10upx;
					}
				} 
				.currents {
					color: black;
					font-weight: 700;
				}
			} 
			
		}
		/*  #ifdef  APP-PLUS ||  #ifdef H5 */
		.altogether {
			height: 1200upx;
			.game_swipers {
				.gane_letter {
					
					// margin-bottom: 30upx;
					.ul {
						display: flex;
						flex-wrap: wrap;
						// justify-content: space-around;
						.li {
							display: flex;
							flex-direction: column;
							margin-bottom: 42upx;
							margin-right: 29upx;
							&:nth-child(1) {
								margin-right: 16px;
								// margin-left: 11px;
							}
							&:nth-child(2) {
								margin-right: 10px;
								margin-left: 2px;
								// margin-left: 11px;
							}
							&:nth-child(3) {
								margin-right: 0;
								margin-left: 11px;
							}
							&:nth-child(4) {
								margin-right: 16px;
							}
							&:nth-child(5) {
							margin-right: 10px;
							margin-left: 2px;
							// margin-left: 11px;
							}
							&:nth-child(6) {
							margin-right: 0; 
							margin-left: 11px; 
							}
							&:nth-child(7) {
							margin-right: 16px;
							}
							&:nth-child(8) {
							margin-right: 10px;
							margin-left: 2px;
							}
							&:nth-child(9) {
								margin-right: 0;
								margin-left: 11px;
							}
							
							
							.imgs {
								width: 202upx;
								height: 202upx;
								border-radius: 8px;
								margin-bottom: 24upx;
							}
							.li-item {
								display: flex;
								.li_text {
									width: 167upx;
									font-size: 26upx;
									font-family: Microsoft YaHei;
									font-weight: bold;
									color: #333333;
									letter-spacing: 1px;
									// line-height: 34upx;
									margin-bottom: 20upx;
								    white-space:nowrap;
								    overflow:hidden;
								    text-overflow:ellipsis;
								}
								
							}
							
							.li_grade {
								
								display: flex;
								// width: 80px;
								.li_grade_mark {
									margin-left: 22upx;
									font-size: 24upx;
									font-family: Microsoft YaHei;
									font-weight: bold;
									color: #666666;
								}
							}
						}
					}
				}	
				.game_advertising {
				
				}
				.game_recommended {
					
					margin-top: 67upx;
					margin-bottom: 64upx;
					.game_recommended-title-all {
				
						margin-bottom: 32upx;
						display: flex;
						.game_recommended-title-left {
							flex: 1;
							font-size: 32upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
							letter-spacing: 1px;
						}
						.game_recommended-title-right {
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 34upx;
						}
					}
					.ul {
						display: flex;
						.li {
							display: flex;
							flex-direction: column;
							margin-right: 42upx;
							.imgs {
								width: 202upx;
								height:202upx;
								border-radius: 8px;
							}
							.li-text-top {
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #333333;
								line-height: 34upx;
								margin-top: 20upx;
								letter-spacing: 1px;
								text-align: center;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
							.li-text-bottom {
							    margin-top: 20upx;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 34upx;
								letter-spacing: 1px;
							}
						}
					}
					
				}
				.news_appear {
					.news_appear_tilte_all {
						display: flex;
						margin-bottom: 32upx;
						.news_appear_tilte_left {
							flex: 1;
							font-size: 32upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
						}
						.news_appear_tilte_right {
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 34upx;
						}
					}
					.ul {
							display: flex;
							flex-wrap: wrap;
							justify-content: space-between;
							// border-bottom: 10upx solid #f1f1f1;
						.li {
							display: flex;
							flex-direction: column;
							margin-bottom: 32upx;
							.imgs {
								margin-bottom: 20upx;
								width: 202upx;
								height: 202upx;
								border-radius: 8px;  
							}
							.li-text-top_fl {
								width: 180upx;
								margin-bottom: 21upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #333333;
								line-height: 34upx;
								letter-spacing: 1px;
								text-align: center;
								    white-space: nowrap;
								    overflow: hidden;
								    text-overflow: ellipsis;
								    // white-space: nowrap;
								    // overflow: hidden;
								    // text-overflow: ellipsis;
							}
							.li-text-bottom_rp {
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 34upx;
								letter-spacing: 1px;
							}
						}
					}
				}
				.seek_game {
					margin-top: 64upx;
					.seek_game_title {
						margin-bottom: 32upx;
						font-size: 32upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						line-height: 34upx;
						letter-spacing: 1px;
					}
					.game_classify {
						.ul {
							display: flex;
							justify-content: space-between;
							.fily {
									// border-bottom: 1px solid #046AFF;
									color: #046AFF !important;
							}
							.li {
								font-size: 28upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color:#999999;
								line-height: 37upx;
								// height: 38upx;
							
								margin-bottom: 55upx;
								// margin-right: 51upx;
							}
						}
					}
				}
				.game_swiper-item {
					.ul {
						.li {
							display: flex;
							align-items: center;
							margin-bottom: 40upx;
							// justify-content: space-between;
							.imgs {
								width: 136upx;
								height: 136upx;
								border-radius: 4px;
							}
							.li_center {
								flex: 1;
								margin-left: 32upx;
								.li_center_introductory {
									font-size: 32upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #333333;
									line-height: 34upx;
									margin-bottom: 12upx;
									letter-spacing: 1px;
								}
								.li_center_star {
									margin-bottom: 18upx;
								}
								.li_center_sort {
									font-size: 24upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #999999;
									line-height: 34upx;
									margin-bottom: 5upx;
								}
								.li_center_all {
									.arroind {
										
									}
									.ios {
										
									}
									.listend {
										font-size: 24upx;
										font-family: Microsoft YaHei;
										font-weight: 400;
										color: #CCCCCC;
										line-height: 34upx;
									}
								}
							}	
							.li_right {
								  text-align: center;
							  .li_right-icon {
								  font-size: 40upx;
									margin-bottom: 15upx;
									color: #EEAD45;
							  }
								  
							  .li_right_text {
								  font-size: 26upx;
								  font-family: Microsoft YaHei;
								  font-weight: bold;
								  color: #EEAD45;
								  line-height: 34upx;
								  letter-spacing: 1px;
							  }
							}
						}
					}
				}
			}
			
		}
		
		/*  #endif  */
	
	 }
	
</style>
