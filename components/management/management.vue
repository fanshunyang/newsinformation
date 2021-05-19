<template>
	<view class="management">
	
		<view class="main">
			<view class="main-ul">
			
				<view class="main-li" v-for="(item,index) in informationList" @tap='information(item)'>
					<view class="main-li-left">
						<view class="main-li-left-top">
							<view class="main-li-left-number">
								
							</view>
							<view class="main-li-left-desc">
							{{item.special_news_detiial_title}}
							</view>
						</view>
						<view class="main-li-left-bottom">
						
							<view class="main-li-left-title">
							{{item.special_news_add_time}}
							</view>
							<view class="main-li-left-leave">
								<view class="main-li-left-leave-icon el-icon-view">
									
								</view>
								<view class="main-li-left-leave-number">
									{{item.special_news_zx_show}}
								</view>
							
							
							</view>
						</view>
					
					</view>
					
				  <view class="main-li-right">
					<image class="imgs" :src="item.special_news_img" mode=""></image>
				 </view>
				</view>
				
				<view v-if="informationList.length===0" style="text-align: center;">
				抱歉~~没有该信息列表数据
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
	
		components:{
		
		},
		props: {
		mangent:Object,
		default () {
			return {}
		  }
		},
		data() {
			return {
			  informationList:[
				
			  ]	
			}
		},
		mounted() {
		 this.zx_list()
		},
		methods: {
			zx_list () {
				setTimeout(()=>{
					const {special_zx_list} = this.mangent
					this.informationList = special_zx_list
					console.log(	this.informationList )
				},500)
			},
			//跳转新闻资讯
			information (va) {
				let id = va.id
				uni.navigateTo({
					url:`../../pages/qualification/qualification?items=${id}`
				})
			},
		}
	}
</script>

<style lang="scss">
 .management {
 .main {
				.main-ul {
					margin-top: 61upx;
					.main-li {
						display: flex;
						border-bottom: 1px solid #F7F7F7;
						margin-bottom: 32upx;
					  .main-li-left {
						    // display: flex;
						  .main-li-left-top {
							    display: flex;
							  .main-li-left-number {
								  // width: 9px;
								  // height: 23upx;
								  font-size: 28upx;
								  font-family: Microsoft YaHei;
								  font-weight: bold;
								  color: #EB9238;
								  // line-height: 34px;
							  	margin-left: 30upx;
								margin-right: 17upx;
							  }
							  .main-li-left-desc {
							  	width: 416upx;
							  	height: 66upx;
							  	font-size: 28upx;
							  	font-family: Microsoft YaHei;
							  	font-weight: bold;
							  	color: #333333;
							  	line-height: 37upx;
								letter-spacing: 1px;
							  }
						  }
						.main-li-left-bottom {
							display: flex;
							margin-top: 29upx;
							.main-li-left-title {
								flex: 1;
								// width: 101upx;
								// height: 22px;
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 36upx;
								margin-left: 40upx;
								// margin-right: 242upx;
							}
							.main-li-left-leave {
								display: flex;
								.main-li-left-leave-icon {
									margin-top: 8upx;
									margin-right: 12upx;
								}
								.main-li-left-leave-number {
									// width: 36upx;
									// height: 18upx;
									font-size: 22upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #999999;
									line-height: 36upx;
									margin-bottom: 32upx;
									margin-top: 4upx;
								}
							}
						}
						
						
					  }
						.main-li-right {
							margin-left: 83upx;
							margin-right: 20upx;
							.imgs {
								width: 160upx;
								height: 116upx;
							}
						}
					}
					
				}
			}
	
 }
</style>
