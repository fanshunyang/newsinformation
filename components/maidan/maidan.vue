<template>
	<view class="maidan">
	
			
		<view class="maidan-top">
			<image class="imgs" src="../../images/c.jpg" mode=""></image>
		</view>
		<view class="maidan-center">
			<view class="maidan-center-item" v-for="(item,index) in maidanLabel">
			#{{item.text}}#
			</view>
			
		</view>
		<view class="maidan-bottom">
			<view class="box-firend-ul">
				<view class="box-firend-li" v-for="(item,index) in plazaList" :key='index' @click="dynamically(item)">
				<view class="box-firend-li-header">
					<view class="box-firend-li-item-madile">
						<view class="box-firend-li-item-madile-img">
							<image class="box-firend-li-item-madile-item-imgs" :src="  item.new_author_head_url" mode=""></image>
						</view>
						<view class="box-firend-li-item-madile-text">
							<text class="box-firend-li-item-madile-text-one">{{item.new_author}}</text>
							<!-- <view class="box-firend-li-item-madile-text-two">6分钟前·盒友杂谈</view> -->
						</view>
					
					</view>
					<view class="box-firend-li-item-letter">
						<view class="box-firend-li-item-letter-left">
							<view class="  box-firend-li-item-letter-left-praise">
								<image style="width: 32upx; height: 32upx;" src="../../images/zan.png" mode=""></image>
							</view>
							<view class="box-firend-li-item-letter-left-number">
								5
							</view>
						</view>
						<view class="box-firend-li-item-letter-right">
							<view class="box-firend-li-item-letter-right-message ">
								<image class="imgs" src="../../images/shouc.png" mode=""></image>
							</view>
							<view class="box-firend-li-item-letter-right-number">
								11
							</view>
						</view>
					
					
					</view>			
				</view>
				<view class="box-firend-li-content">
					<view class="box-firend-li-content-title">
						{{item.news_detail_title}}
					</view>
					<!-- <view class="box-firend-li-content-text">
					</view> -->
					<view class="box-firend-li-content-img">
						<view class="box-firend-li-content-img-ul">
							<view class="box-firend-li-content-img-li">
								<image class="box-firend-li-content-img-li-imgs" :src="item.news_img" mode=""></image>
							</view>
						</view>
					
					
					</view>
				
				
				</view>
				
				
				</view>
				
		
			
			<!-- 第一个列表 -->
				
				
				
			</view>
		</view>
			
		
	<!-- 	<view class="issue el-icon-plus">
			<view class="issue-text">
				发布
			</view>
		</view> -->

	</view>
</template> 

<script>
	import json from '@/json'
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	export default {
	
		components:{
		mixPulldownRefresh,
		mixLoadMore,
		},
		props: {
			box_games:Object,
			default () {
				return {} 
			}
		 
			
		},
		data() {
			return {
			
				loadMoreStatus:0,
			maidanLabel:[
				{id:1,text:'吃鸡大神'},
				{id:2,text:'五排'},
				{id:3,text:'pgls'},
			],
			//广场列表
			plazaList:[
			
			],
			//盒有动态
			boxfirendimg:[
				{id:1,img:''},
				{id:2,img:''},
				{id:3,img:''}
			]
			}
		},
	
		mounted() {
		this.box_sqlist()
	
		},
		onLoad() {
		
		},
		methods: {
		box_sqlist () {
			setTimeout(()=>{
				const {special_sq_list} = this.box_games
			    this.plazaList = special_sq_list
			},500)
		},
			//全局下拉和上拉刷新
			loadData(type){
				// if(type === 'add'){
				// 	this.loadMoreStatus = 1;
				
				// }
				if(type === 'add'){
					if(this.loadMoreStatus === 2){
						return;
					}
					this.loadMoreStatus = 1; 
				}
				// #ifdef APP-PLUS
				else if(type === 'refresh'){
					this.refreshing = true;
				}
				// #endif
				setTimeout(()=>{
					if(type === 'refresh'){
						this.list = [];
					}
					
					let length = this.list.length;
					for(let i=length; i< length + 10; i++){
						this.list.push(i);
					}
					
					if(type === 'add'){
							this.loadMoreStatus = this.list.length > 50 ? 2: 0;
							console.log(	this.list.length)
					
					}
					if(type === 'refresh'){
					
					this.$refs.mixPulldownRefreshs && this.$refs.mixPulldownRefreshs.endPulldownRefresh();
						// #ifdef APP-PLUS
						this.refreshing = false;
						// #endif
						this.loadMoreStatus = 0;
					
					}
				}, 600)
				
			},
			//全局下拉刷新
			onPulldownRereshs () {
					this.loadData('refresh');
			},
			//全局上滑加载
			loadMores () {
					this.loadData('add');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable){
				if(this.enableScroll !== enable){
					this.enableScroll = enable;
				}
			},	
			//跳转帖子详情页
			dynamically (va) {
				let id = va.id
				uni.navigateTo({
					url:`../../pages/details/details?item=${id}`
				})
			},
		}
	}
</script>

<style lang="scss">
 .maidan {
	.maidan-top {
		margin-top: 20upx;
		margin-bottom: 24upx;
		.imgs {
			width: 750upx;
			height: 130upx;
		}
	}
	.maidan-center {
		display: flex;
		padding-left: 30upx;
		padding-right: 30upx;
		margin-bottom: 86upx;
		.maidan-center-item {
			// width: 110upx;
			height: 44upx;
			background: #D9D9D9;
			opacity: 0.35;
			border-radius: 2px;
			padding-left: 10upx;
			padding-right: 10upx;
			letter-spacing: 1px;
			color: #333;
			font-family: Microsoft YaHei;
			font-weight: 400;
			margin-right: 12upx;
			font-size: 22upx;
			line-height: 44upx;
		}
	}
	.maidan-bottom {
		// padding-left: 30upx;
		// padding-right: 30upx;
		.box-firend-ul {
		
			.box-firend-li {
					border-bottom: 1px solid #F5F5F5;
					height: 430upx;
					margin-bottom: 32upx;
				.box-firend-li-content {
					margin-left: 30upx;
					margin-right: 30upx;
					.box-firend-li-content-title {
						width: 513upx;
						// height: 26upx;
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #404040;
						line-height: 43upx;
						margin-top: 30upx;
						margin-bottom: 24upx;
					}
					.box-firend-li-content-text {
						width: 685upx;
						height: 67upx;
						font-size: 26upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #666666;
						line-height: 41upx;
					}
					.box-firend-li-content-img {
						.box-firend-li-content-img-ul {
							display: flex;
							flex-direction: row;
							.box-firend-li-content-img-li {
								margin-top: 25upx;
								margin-right: 18upx;
								.box-firend-li-content-img-li-imgs {
									width: 218upx; 
									height: 152upx;
									border-radius: 8upx;
								}
							}
						}
					}
				}
				.box-firend-li-header {
					margin: 0 30upx;
					display: flex;
					flex-direction: row;
					
					.box-firend-li-item-madile {
						display: flex;
						flex-direction: row;
						flex: 1;
						.box-firend-li-item-madile-img {
							.box-firend-li-item-madile-item-imgs {
								width: 72upx;
								height: 72upx;
							    border-radius: 50%;
							}
						}
						.box-firend-li-item-madile-text {
							margin-left: 24upx;
							.box-firend-li-item-madile-text-one {
								width: 180upx;
								height: 26upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #404040;
								line-height: 43upx;
								margin-bottom: 17upx;
							}
							.box-firend-li-item-madile-text-two {
								width: 190upx;
								height: 22upx;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 43upx;
							}
						}
					}
					.box-firend-li-item-letter {
						// margin-left: 240upx;
						display: flex;
						// align-items: center;
						flex-direction: row;
						.box-firend-li-item-letter-left {
							display: flex;
							flex-direction: row;
							margin-top: 2px;
							.box-firend-li-item-letter-left-praise {
								width: 26upx;
								height: 26upx;
								margin-right: 20upx;
							}
							.box-firend-li-item-letter-left-number {
								width: 13upx;
								height: 21upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #CCCCCC;
								line-height: 43upx;
							}
						}
						.box-firend-li-item-letter-right {
							display: flex;
							flex-direction: row;
							
							.box-firend-li-item-letter-right-message {
								margin-left: 30upx;
								margin-right: 20upx;
								// width: 27upx;
								// height: 24upx;
								margin-top: 6upx;
								.imgs {
									width: 37upx;
									height: 36upx;
								
								}
							}
							.box-firend-li-item-letter-right-number {
								// width: 28upx;
								// height: 21upx;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #CCCCCC;
								line-height: 43upx;
								margin-top: 4upx;
							}
						}
					}
				}
				
			}
		}
	}
	.issue {
		position: fixed;
		top: 70%;
		right: 29upx; 
		z-index: 333333;
		width: 90upx;
		height: 90upx;
		background-color: #1482FF;
		border-radius: 50%;
		text-align: center;
		line-height: 90upx;
		color: #ffff;
		font-size: 50upx;
		.issue-text {
			width: 56upx;
			height: 26upx;
			font-size: 26upx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #1482FF;
			line-height: 43upx;
			margin: 0 auto;
			letter-spacing: 1px;
		}
	}
	
 }
</style>
