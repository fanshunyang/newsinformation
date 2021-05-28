<template>
	<view class="homepage">
		<view class="status_bar">
		        <!-- 这里是状态栏 -->
		    </view>
			<view class="homepage-header">
				<view class="homepage-header-icon el-icon-arrow-left" @click="back" >
					
				</view>
				<view class="homepage-header-title">
				{{box_game.gm_title}}
				</view>
				<view class="homepage-header-right">
					<view class="homepage-header-right-search el-icon-search" @click="search">
						
					</view>
					<view class="homepage-header-right-box el-icon-message" @tap='homepagemessage'>
						
					</view>
					
					
				</view>
				
				
				
			</view>
			<view class="tab-current">
				<view class="tab-current-li" :class="{'current':index===tabIndex}" @click="changeitem(index)" v-for="(item,index) in tabBar" :key='index'>
					{{item.title}}
				</view>
			</view>
		
	
		
			<swiper class="swiper-box"
			 :current="tabIndex" 
			 @change="changetab"
		
			 >
				<swiper-item >
					
				<scroll-view scroll-y="true" style="height: 100%;">	
				<view v-if="box_game.gm_name=== undefined && box_game.gm_detail_title_img=== undefined &&  box_game.gm_cat_str===undefined && box_game.gm_detail_p1===undefined" style="text-align: center; letter-spacing: 2px; margin-top: 150px;">
				抱歉~~没有该信息列表数据
				</view>
				<view class="swiper-box-game" v-else>
					<view class="swiper-box-game-banner">
						<image class="imgs" :src="box_game.gm_detail_title_img" mode=""></image>
					</view>
					<view class="swiper-box-game-introduce">
						<view class="swiper-box-game-introduce-main">
							<view class="swiper-box-game-introduce-left">
								<view class="swiper-box-game-introduce-left-colset">
								{{box_game.gm_name}}
								</view>
								<!-- <view class="swiper-box-game-introduce-left-text">
									Cyberpunk
								</view> -->
							</view>
							<view class="swiper-box-game-introduce-right">
								<view class="swiper-box-game-introduce-right-icon el-icon-download">
									
								</view>
								<view class="swiper-box-game-introduce-right-dowolad" @tap='uploads'>
									去下载
								</view>
							</view>
						</view>
						<view class="swiper-box-game-introduce-bottom">
							<view class="swiper-box-game-introduce-bottom-label">
								<view class="swiper-box-game-introduce-bottom-label-item">
								{{box_game.gm_cat_str}}
								</view>
								
							</view>
							
						</view>
						
					</view>
					<view class="swiper-box-game-brief">
						<view class="swiper-box-game-brief-top">
							<view class="swiper-box-game-brief-left">
							游戏简介
							</view>
							<view class="swiper-box-game-brief-right" @tap='moread'>
								更多  >
							</view>
							
							
						</view>
						<view class="swiper-box-game-brief-clsoun">
						<!-- 	<view class="swiper-box-game-brief-clsoun-left">
							大小 1.6GB
							</view>
							<view class="swiper-box-game-brief-clsoun-right">
								版本 1.51.1.23
							</view> -->
							
							
						</view>
						<view class="swiper-box-game-brief-bottom">
							<view class="swiper-box-game-brief-bottom-top">
								简介： {{box_game.gm_detail_p1}}
							</view>
							<view class="swiper-box-game-brief-bottom-clousn">
								<view class="swiper-box-game-brief-bottom-clousn-left">
									开发商：
								</view>
								<view class="swiper-box-game-brief-bottom-clousn-right">
									 Tencent
								</view>
								
								
							
							</view>
							
						</view>
						
						
						
					</view>
					
					<!-- <view class="swiper-box-game-comment">
						<view class="swiper-box-game-comment-title">
							相关评论
						</view>
					
							<view class="comments"  >
							
								<comments v-for="(item,index) in comment" :key='item.id' :comment='item'></comments>
							    
							</view>
						
					</view> -->
					
			<!-- 底部评论 -->
			  <!-- <view class="bottom" @touchmove.stop.prevent="" >
			<ygcComment
			ref="ygcComment" 
			        :placeholder="'发布评论'" 
			        @pubComment="pubComment"
			>
				
			</ygcComment>
		
			  	<view class="input-box">
			  		<text class="yticon icon-huifu"></text>
			  		<view
					@click="toggleMask('show')"
						class="input"
						type="text" 
					
					>
					点评一下把..
					</view> 
					
			  		
			  	</view> -->
				<!-- <view class="input-box-right">
					<view class="input-box-right-li">
						<view class="input-box-right-icon">
							1
						</view>
						<view class="input-box-right-number">
							2
						</view>
					</view>
				<view class="input-box-right-li">
					<view class="input-box-right-icon el-icon-star-off">
						
					</view>
					<view class="input-box-right-number">
						2
					</view>
				</view>
				
				<view class="input-box-right-li">
					<view class="input-box-right-icon el-icon-chat-dot-round">
					
					</view>
					<view class="input-box-right-number">
						2
						
					</view>
				</view>
				</view> -->
			  <!-- </view> -->
				
				</view>
				
			
				</scroll-view>
				</swiper-item>
				
				<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;">
				<maidan :box_games='box_game'></maidan>
				</scroll-view>
				
				</swiper-item>
				
				<swiper-item>
					<management :mangent='box_game'></management>
				</swiper-item>
				
				<swiper-item>
					<scroll-view scroll-y="true" style="height: 100%;" >
							<strategy :stratey='box_game'></strategy>
					</scroll-view>
				
				</swiper-item>
			</swiper>
		
		
	</view>
</template>

<script>

	import {comment} from '../../comment.js'
	import mixLoading from '@/components/mix-loading/mix-loading';
	import comments from '../../components/comments/comments.vue'
	import popup from '../../components/uni-popup/uni-popup.vue'
	import maidan from '../../components/maidan/maidan.vue'
	 import  management  from '../../components/management/management.vue'
	 import  strategy from '../../components/strategy/strategy.vue'
	import ygcComment from '../../components/ygc-comment/ygc-comment.vue';
	import market from "../../js_sdk/dc-market/market.js"
	export default {
		components: {
			mixLoading,
			ygcComment,
			popup,
			comments,
			maidan,
			management,
			market
		},  
		data() {
			return {
					//文章评论
				comment:[],
				focus:false,
				tabIndex:1,
				tabBar:[
					{id:0,title:'游戏'},
					{id:1,title:'广场'},
					{id:2,title:'资讯'},
					{id:3,title:'攻略'}
				],
				labels:[
					{id:1,text:'头条'},
					{id:1,text:'多人'},
					{id:1,text:'第三方射击'}
				],
				box_game:{},
				indexId:'',
			}
		},
		onShow() {
		
		},
		onLoad(va) {
		this.indexId = 	parseInt(va.items)
			
			this.tabIndex = parseInt(va.item)
				this.comment = comment
		},
		mounted() {
			this.getSpecialOneInfo()
		},
		methods: {
			//首页关注最新发布讯息
			async getSpecialOneInfo () {
				
				 let data = await this.$http.post('/api/getSpecialOneInfo',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						special_id:this.indexId
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						   
						this.box_game= DATA
					
						console.log(this.box_game) 
					
					
					}
			},
			//返回
			back () {
				uni.navigateBack()
			},
			//打开评论组件
			toggleMask (type) {
				
					this.$refs.ygcComment.toggleMask(type);
			},
			moread () {
				uni.navigateTo({
					url:`../moredetails/moredetails?item=${encodeURIComponent (JSON.stringify(	this.box_game.gm_detail_p2))}`
				})
			},
			//转发
			transmit () {
				this.$refs.popup.open()
				this.focus  = true
			},
			//发布按钮
			pubComment (va) {
				console.log(va)
				// uni.showToast({
				// 	title:'评论成功',
				// 	icon:'none'
				// })
			},
			
			//取消分享
			countermand () {
				this.$refs.popup.close()
			},
			changeitem (va) {
				this.tabIndex = va
			},
			changetab (va) {
			
				this.tabIndex = va.detail.current
			},
			search () {
				// uni.navigateTo({
				// 	url:'../search/search'
				// })
				uni.showToast({
					title:'该功能暂未开放 敬请期待!',
					icon:'none',
					duration:2000
				})
			},
			homepagemessage () {
				uni.showToast({
					title:'该功能暂未开放 敬请期待!', 
					icon:'none',
					duration:2000
				})
			},
			uploads () {
				uni.showToast({
					title:'该游戏暂未开放 敬请期待!',
					icon:'none',
					duration:2000
				})
				
				
			},
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
	 .homepage{
	 	.homepage-header {
	 		display: flex;	
			padding-left: 31upx;
			padding-right: 28upx;
			justify-content: center;
			align-items: center;
			 .homepage-header-icon {
				 width: 16upx;
				 // height: 30upx;
					font-size: 40upx;
			 }
			.homepage-header-title {
				flex: 1;
				text-align: center;
			} 
			.homepage-header-right {
				width: 100upx;
				.homepage-header-right-search {
					margin-right: 30upx;
				}
				.homepage-header-right-box {
					
				}
			}
	 	}
		.tab-current {
			display: flex;
			margin-left: 66upx;
			margin-top: 30upx;
			.tab-current-li {
				width: 132upx;
				height: 64upx;
				font-size: 28upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #666666;
				margin-right: 36upx;
				letter-spacing: 2px;
				text-align: center;
				line-height: 64upx;
			}
			.current {
			color: #fff;	
			background: #1482FF;
			border-radius: 4px;
			}
		}
		
		.swiper-box {
			height:1360upx;
			padding-bottom: 50upx; 
			.swiper-box-game {
				
			.bottom{
				
				position: fixed;
				bottom: 0px;
				flex-shrink: 0;
				display: flex;
				align-items: center;
				height: 90upx;
				padding: 0 30upx;
				box-shadow: 0 -1px 3px rgba(0,0,0,.04); 
				background-color: #fff;
				z-index: 1111111111;
				.transmit {
					height: 622upx;
					background: #FFFFFF;
					border-radius: 20upx 20upx 0px 0px;
					.countermand {
						margin-top: 40upx;
					    margin-left: 30upx;
						margin-right: 30upx;
						letter-spacing: 2px;
						height: 72upx;
						background: #F4F4F4;
						text-align: center;
						line-height: 72upx;
						font-size: 30upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #999999;
					}
					.transmit-top {
						 display: flex;
						padding-top: 32upx;
						.transmit-top-left {
							flex: 1;
							// width: 52upx;
							height: 25upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 34upx;
							margin-left: 30upx;
							letter-spacing: 1px;
						}
						.transmit-top-right {
							// width: 131upx;
							height: 29upx;
							font-size: 28upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
							margin-right: 30upx;
							letter-spacing: 1px;
						}
					}
					.transmit-input {
						padding-left: 30upx;
						padding-right: 30upx;
						padding-top: 35upx;
						background-color: #fff;
						padding-bottom: 33upx;
						.text {
							font-size: 28upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							// color: #1482FF;
							line-height: 43upx;
						
						}
					}
					.transmit-matter {
						margin-left: 30upx;
						margin-right: 30upx;
						margin-bottom: 50upx;
						height: 170upx;
						background: #F7F7F7;
						border-radius: 4upx 4upx 0px 4upx;
						.transmit-matter-title {
							padding-top: 23upx;
							padding-left: 20upx;
							letter-spacing: 1px;
							padding-bottom: 20upx;
							color: #1482FF;
						}
						.transmit-matter-quers {
							
							display: flex;
							.imgs {
								width: 68upx;
								height: 68upx;
								margin-left: 20upx;
								border-radius: 4upx;
								margin-right: 18upx;
								
							}
							.transmit-matter-quers-text {
								width: 566upx;
								height: 24upx;
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 43upx;
								letter-spacing: 1px;
								margin-top: 12upx;
							}
						}
					}
					.transmit-distinction-ul {
							display: flex;
						padding-left: 30upx;
						padding-right: 30upx;
						margin-left: 20upx;
						.transmit-distinction-li {
							margin-right: 59upx;
							.transmit-distinction-li-item {
								.transmit-distinction-li-img {
									width: 74upx;
									height: 74upx;
									border: 1px solid #BFBFBF;
									border-radius: 50%;
									.transmit-distinction-li-img-icon {
										width: 44upx;
										height: 36upx;
										margin-left: 15upx;
										margin-right: 15upx;
										margin-top: 19upx;
										text-align: center;
									}
								}
								.transmit-distinction-li-text {
									font-size: 24upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #999999;
									line-height: 34upx;
									letter-spacing: 2px;
									margin-top: 15upx;
									margin-left: 10upx;
								}
							}
						
						}
					}
				}
				.input-box-right {
						display: flex;
					.input-box-right-li {
						display: flex;
						margin-right: 38upx;
						margin-top: 10upx;
						.input-box-right-icon {
						  margin-right: 12upx;
						  // font-size: 36upx;
						  margin-top: 4upx;
						}
						.input-box-right-number {
							// width: 45px;
							// height: 23px;
							font-size: 28upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #333333;
							line-height: 43upx;
							
						}
					}
				}
				.input-box{
					display: flex;
					align-items: center;
					width: 380upx;
					height: 60upx;
					background: #f2f3f3;
					border-radius: 200upx;
					padding-left: 30upx;
					margin-right: 38upx;
					.icon-huifu{
						font-size: 28upx;
						color: #909399;
					}
					.input{
						padding: 0 75upx 0 0 ;
						margin-left: 25upx;
						font-size: 28upx;
						color: #303133;
						
						font-size: 24upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #999999;
						line-height: 43upx;
						letter-spacing: 1px; 
					}
				}
				.confirm-btn{
					font-size: 30upx;
					padding-left: 20upx;
					color: #0d9fff;
				}
			}
				margin-top: 20upx;
				.swiper-box-game-banner {
					.imgs {
						width: 750upx;
						height: 450upx;
					}
				}
				.swiper-box-game-introduce {
					.swiper-box-game-introduce-main {
						margin-top: 24upx;
						padding-left: 30upx;
						padding-right: 30upx;
						display: flex;
						.swiper-box-game-introduce-left {
							flex: 1;
							.swiper-box-game-introduce-left-colset {
								height: 32upx;
								font-size: 32upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #333333;
							    margin-bottom: 20upx;
								letter-spacing: 2px;
							}
							.swiper-box-game-introduce-left-text {
								height: 24upx;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 50upx;
							}
						}
						.swiper-box-game-introduce-right {
							text-align: center;
							.swiper-box-game-introduce-right-icon {
								margin-bottom: 15upx;
								width: 34upx;
								height: 36upx;
								font-size: 36upx;
								color: #EEAD45;
							}
							.swiper-box-game-introduce-right-dowolad {
								// width: 89upx;
								height: 26upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #EEAD45;
								line-height: 34upx;
							}
						}
						
					}
					.swiper-box-game-introduce-bottom {
						// margin-top: 30upx;
						padding-left: 30upx;
						padding-right: 30upx;
						.swiper-box-game-introduce-bottom-label {
							display: flex;
						}
						.swiper-box-game-introduce-bottom-label-item {
							// width: 134upx;
							height: 42upx;
							background: #D9D9D9;
							opacity: 0.35;
							border-radius: 2px;
							text-align: center;
							line-height: 42upx;
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #333333;
							margin-right: 12upx;
							padding-left: 12upx;
							padding-right: 12upx;
						}
					}
				}
				.swiper-box-game-brief {
					padding-left: 30upx;
					padding-right: 30upx;
					margin-top: 45upx;
				
					.swiper-box-game-brief-top {
						display: flex;
						margin-bottom: 32upx;
						.swiper-box-game-brief-left {
							flex: 1;
							height: 33upx;
							font-size: 32upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
							letter-spacing: 1px;
						}
						.swiper-box-game-brief-right {
							height: 22upx;
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 34upx;
						}
					}
					.swiper-box-game-brief-clsoun {
						display: flex;
						.swiper-box-game-brief-clsoun-left {
							width: 136upx;
							height: 23upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 41upx;
							margin-right: 50upx;
						}
						.swiper-box-game-brief-clsoun-right {
							width: 179upx;
							height: 24upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 41upx;
							margin-bottom: 23upx;
						}
					}
					.swiper-box-game-brief-bottom {
						// display: flex;
						.swiper-box-game-brief-bottom-top {
							// height: 107upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #666666;
							line-height: 41upx;
							margin-bottom: 23upx;
						}
						.swiper-box-game-brief-bottom-clousn {
							display: flex;
							.swiper-box-game-brief-bottom-clousn-left {
								height: 25upx;
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								line-height: 41upx;
								letter-spacing: 1px;
							}
							.swiper-box-game-brief-bottom-clousn-right {
								height: 25upx;
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								line-height: 41upx;
								color: #046AFF;
							}
						}
					}
				}
			}
			.swiper-box-game-comment {
				padding-left: 30upx;
				padding-right: 30upx;
				margin-top: 73upx;
				.swiper-box-game-comment-title {
					height: 32upx;
					font-size: 32upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #333333;
					line-height: 34upx;
					margin-bottom: 36upx;
				}
				.comments {
					
					.comments-number {
					 // width: 138upx;
					 // height: 23upx;
					 font-size: 24upx;
					 font-family: Microsoft YaHei;
					 font-weight: 400;
					 color: #999999;
					 line-height: 43upx;
					 margin-left: 30upx;
					 margin-bottom: 30upx;
					 letter-spacing: 1px;
					}
					// height: 220px;
				
					
				}
			}
		}
	 }
	
</style>
