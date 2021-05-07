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
					@click="changeTab(index)"
				>{{item.name}}</view>
			
			</scroll-view>
		</view>
	<swiper style="height: 520px;"  :current="tabCurrentIndex" @change="changeitem">
		<swiper-item style="height: 100%; padding-left: 30upx; padding-right: 30upx;"	v-for="(item,index) in tabBars" :key="item.id">
		<scroll-view scroll-y="true"  style="height: 100%;">
			<view class="game_swipers">
				<view class="gane_letter" >
							<view class="ul">
								<view class="li" v-for="(item,index) in recommended" :key='index'>
									<image class="imgs" src="../../images/nz.jpg" mode=""></image>
									<view class="li_text">
										逆战
									</view>
									<view class="li_grade">
										<uni-rate v-model="item.txt" @change="onChange( $event, item)" :is-fill="false"  :touchable="false" :size="15.5" ></uni-rate>   
										<view class="li_grade_mark">
											 {{item.mark}}
										</view>
									</view>
									
									
								</view>
								
							
							</view>
				        </view>
						<view class="game_advertising">
						<carousel :img-list="imgList" url-key="url" @selected="selectedBanner"></carousel>
						</view>
					<view class="game_recommended" >
						<view class="game_recommended-title-all">
							<view class="game_recommended-title-left">
								热门推荐
							</view>
							<view class="game_recommended-title-right">
								更多 >
							</view>
							
							
						</view>
						
						<view class="ul">
							<view class="li">
								<image class="imgs" src="../../images/cy.jpg" mode=""></image>
								<view class="li-text-top">
									逆战
								</view>
								<view class="li-text-bottom">
									科幻/热血
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/cy.jpg" mode=""></image>
								<view class="li-text-top">
									逆战
								</view>
								<view class="li-text-bottom">
									科幻/热血
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/cy.jpg" mode=""></image>
								<view class="li-text-top">
									逆战
								</view>
								<view class="li-text-bottom">
									科幻/热血
								</view>
							</view>
						</view>
					</view>
					<view class="news_appear">
						<view class="news_appear_tilte_all">
							<view class="news_appear_tilte_left">
								最新上市
							</view>
							<view class="news_appear_tilte_right">
								更多 >
							</view>
							
							
						</view>
						
						<view class="ul">
							<view class="li">
								<image class="imgs" src="../../images/js.jpg" mode=""></image>
								<view class="li-text-top_fl">
									英雄联盟
								</view>
								<view class="li-text-bottom_rp">
									科幻/角色
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/js.jpg" mode=""></image>
								<view class="li-text-top_fl">
									英雄联盟
								</view>
								<view class="li-text-bottom_rp">
									科幻/角色
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/js.jpg" mode=""></image>
								<view class="li-text-top_fl">
									英雄联盟
								</view>
								<view class="li-text-bottom_rp">
									科幻/角色
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/js.jpg" mode=""></image>
								<view class="li-text-top_fl">
									英雄联盟
								</view>
								<view class="li-text-bottom_rp">
									科幻/角色
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/js.jpg" mode=""></image>
								<view class="li-text-top_fl">
									英雄联盟
								</view>
								<view class="li-text-bottom_rp">
									科幻/角色
								</view>
							</view>
							<view class="li">
								<image class="imgs" src="../../images/js.jpg" mode=""></image>
								<view class="li-text-top_fl">
									英雄联盟
								</view>
								<view class="li-text-bottom_rp">
									科幻/角色
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
								<view class="li" :class="{'fily':index===currIndex}" @click="gameclassify(index)" v-for="(item,index) in  game_classify" :key='index'>
									{{item.text}}
								</view>
							</view>
						</view>
						 <swiper style="height: 520px;" :current="currIndex" @change="chagnetabls">
						 	<swiper-item style="height: 100%;"  v-for="(item,index) in  game_classify" :key='index'>
						 		<scroll-view scroll-y="true" style="height: 100%;">
						 		<view class="game_swiper-item">
						 			<view class="ul">
						 				<view class="li">
						 				<image class="imgs" src="../../images/js2.jpg" mode=""></image>
						 				<view class="li_center">
						 					<view class="li_center_introductory">
						 						英雄联盟
						 					</view>
						 					<view class="li_center_star">
						 							<uni-rate  :touchable="false" :size="15.5" ></uni-rate>   
						 					</view>
						 					<view class="li_center_sort">
						 					科幻/角色/热血
						 					</view>
						 					<view class="li_center_all">
						 						<view class="arroind">
						 							
						 						</view>
						 						<view class="ios">
						 							
						 						</view>
						 						<view class="listend">
						 							2020-12-10 上市
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
						 				<view class="li">
						 				<image class="imgs" src="../../images/js2.jpg" mode=""></image>
						 				<view class="li_center">
						 					<view class="li_center_introductory">
						 						英雄联盟
						 					</view>
						 					<view class="li_center_star">
						 							<uni-rate  :touchable="false" :size="15.5" ></uni-rate>   
						 					</view>
						 					<view class="li_center_sort">
						 					科幻/角色/热血
						 					</view>
						 					<view class="li_center_all">
						 						<view class="arroind">
						 							
						 						</view>
						 						<view class="ios">
						 							
						 						</view>
						 						<view class="listend">
						 							2020-12-10 上市
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
						 				<view class="li">
						 				<image class="imgs" src="../../images/js2.jpg" mode=""></image>
						 				<view class="li_center">
						 					<view class="li_center_introductory">
						 						英雄联盟
						 					</view>
						 					<view class="li_center_star">
						 							<uni-rate  :touchable="false" :size="15.5" ></uni-rate>   
						 					</view>
						 					<view class="li_center_sort">
						 					科幻/角色/热血
						 					</view>
						 					<view class="li_center_all">
						 						<view class="arroind">
						 							
						 						</view>
						 						<view class="ios">
						 							
						 						</view>
						 						<view class="listend">
						 							2020-12-10 上市
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
						 				<view class="li">
						 				<image class="imgs" src="../../images/js2.jpg" mode=""></image>
						 				<view class="li_center">
						 					<view class="li_center_introductory">
						 						英雄联盟
						 					</view>
						 					<view class="li_center_star">
						 							<uni-rate  :touchable="false" :size="15.5" ></uni-rate>   
						 					</view>
						 					<view class="li_center_sort">
						 					科幻/角色/热血
						 					</view>
						 					<view class="li_center_all">
						 						<view class="arroind">
						 							
						 						</view>
						 						<view class="ios">
						 							
						 						</view>
						 						<view class="listend">
						 							2020-12-10 上市
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
						 				<view class="li">
						 				<image class="imgs" src="../../images/js2.jpg" mode=""></image>
						 				<view class="li_center">
						 					<view class="li_center_introductory">
						 						英雄联盟
						 					</view>
						 					<view class="li_center_star">
						 							<uni-rate  :touchable="false" :size="15.5" ></uni-rate>   
						 					</view>
						 					<view class="li_center_sort">
						 					科幻/角色/热血
						 					</view>
						 					<view class="li_center_all">
						 						<view class="arroind">
						 							
						 						</view>
						 						<view class="ios">
						 							
						 						</view>
						 						<view class="listend">
						 							2020-12-10 上市
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
							
						 	</swiper-item>
						 
						 </swiper>
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
				
				currIndex:0,
				tabCurrentIndex:0,
				tabBars:[{id:1,name:'推荐'},{id:2,name:'休闲'},{id:3,name:'益智'}],
				//推荐前九个
				recommended:[
					{id:1,txt:'3.5',mark:'3.5'},
					{id:2,txt:'4.4',mark:'4.4'},
				    {id:3,txt:'1.5',mark:'1.5'},
					{id:4,txt:'5',mark:'5'},
					{id:5,txt:'2',mark:'2'},
					{id:6},
				    {id:7},
					{id:8},
				    {id:9},
				],
				game_classify:[
					{id:1,text:'近期热度'},
					{id:2,text:'评分最高'},
					{id:3,text:'最新上市'},
					{id:4,text:'即将上市'}
				],
				imgList:[
					{
					  url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					  id: 1
					  },{
					  url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					  id: 2
					  },{
					  url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					  id: 3
					   },{
					    url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					     id: 4
					 },
				]
			}
		},
		methods: {
		  changeTab (va) {
			this.tabCurrentIndex = va
		  },
		  changeitem (va) {
			 this.tabCurrentIndex = va.detail.current
		  },
			//评分
		  onChange (va,item) {
			  
			 console.log(va) 
			 
		  },
		  //广告位轮播
		  selectedBanner (item,index) {
			  console.log(item)
		  },
		  gameclassify (va) {
			  this.currIndex = va
		  },
		  chagnetabls (va) {
			   this.currIndex = va.detail.current
		  },
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
				height: 90upx;
				margin-bottom: 32upx;
				white-space: nowrap;
				// box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
				background-color: #fff;
				.nav-item{
					display: inline-block;
					width: 150upx;
					height: 90upx;
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
					}
				} 
				.currents {
					color: black;
					font-weight: 700;
				}
			} 
			
		}
		.gane_letter {
			// margin-bottom: 30upx;
			.ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.li {
					display: flex;
					flex-direction: column;
					margin-bottom: 42upx;
					.imgs {
						width: 202upx;
						height: 260upx;
						border-radius: 8px;
						margin-bottom: 24upx;
					}
					.li_text {
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						letter-spacing: 1px;
						// line-height: 34upx;
						margin-bottom: 20upx;
					}
					.li_grade {
						
						display: flex;
						.li_grade_mark {
							margin-left: 12upx;
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
						height: 260upx;
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
				.li {
					display: flex;
					flex-direction: column;
					margin-bottom: 32upx;
					.imgs {
						margin-bottom: 20upx;
						width: 202upx;
						height: 260upx;
						border-radius: 8px;  
					}
					.li-text-top_fl {
						margin-bottom: 21upx;
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						line-height: 34upx;
						letter-spacing: 1px;
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
					margin-bottom: 40upx;
					// justify-content: space-between;
					.imgs {
						width: 136upx;
						height: 164upx;
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
	
</style>
