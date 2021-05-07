<template>
	<view class="strategy">
		
				<view class="strategy-image">
						<image class="imgs" src="../../images/cja.jpg" mode=""></image>
						<view class="strategy-image-desc">
							<view class="strategy-image-desc-left">
								赛博朋克
							</view>
							<view class="strategy-image-desc-right">
								<view class="strategy-image-desc-right-xin el-icon-star-off">
								
								</view>
								<view class="strategy-image-desc-right-mabile">
									收藏
								</view>
								
							</view>
							
							
						</view>
					</view>
					<view class="strategy-magnification">
						<view class="strategy-magnification-title">
							新手入门
						</view>
						<view class="strategy-magnification-item-ul" style="display: flex; ">
							<view class="strategy-magnification-item" v-for="(item,index) in stategydetails">
								<image class="imgs" src="../../images/cjb.jpg" mode=""></image>
								<view class="strategy-magnification-item-shoadown">
								{{item.text}}
								</view>
							</view>
							
						</view>
						
					</view>
					
					<view class="strategy-experience">
						<view class="strategy-experience-title">
							经验分享
						</view>
						<view class="strategy-experience-ul">
							<view class="strategy-experience-item" v-for="(item,index) in stategyarea">
								{{item.text}}
							</view>
						</view>
						
						
					</view>
				
					<view class="strategy-all">
						<view class="strategy-all-text">
							<view class="strategy-all-text-left">
								全部攻略
							</view>
							<view class="strategy-all-text-right">
								<view :class="{'select':index===selectIndex}" class="strategy-all-text-right-item" v-for="(item,index) in strategy_type" :key='index' @tap='selectType(index)'>
									{{item.desc}}
								</view>
							
							</view>
							
						</view>
						<view class="strategy-all-ul">
							<view class="strategy-all-li">
								<view class="strategy-all-li-item">
									<view class="strategy-all-li-icon el-icon-collection">
										
									</view>
									<view class="strategy-all-li-text">
										600/m太阳帆量化黑盒分享
									</view>
								</view>
								
							
								
								
							</view>
							<view class="strategy-all-li">
								<view class="strategy-all-li-item">
									<view class="strategy-all-li-icon el-icon-collection">
										
									</view>
									<view class="strategy-all-li-text">
										600/m太阳帆量化黑盒分享
									</view>
								</view>
								
							
								
								
							</view>
							<view class="strategy-all-li">
								<view class="strategy-all-li-item">
									<view class="strategy-all-li-icon el-icon-collection">
										
									</view>
									<view class="strategy-all-li-text">
										600/m太阳帆量化黑盒分享
									</view>
								</view>
								
							
								
								
							</view>
							<view class="strategy-all-li">
								<view class="strategy-all-li-item">
									<view class="strategy-all-li-icon el-icon-collection">
										
									</view>
									<view class="strategy-all-li-text">
										600/m太阳帆量化黑盒分享
									</view>
								</view>
								
							
								
								
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
		
		},
		data() {
			return {
				selectIndex:0,
				stategydetails:[
					{id:1,text:'全方位上手指南'},
					{id:2,text:'入门教学'},
					{id:3,text:'新手常见问题'}
				],
				stategyarea:[
					{id:1,text:'前期经验'},
					{id:2,text:'上手经验分享'},
					{id:3,text:'开局要点'},
					{id:4,text:'打野小技巧'},
					{id:5,text:'关于5排'},
					{id:6,text:'射手'},
					{id:7,text:'推塔使用技巧'},
					{id:8,text:'电网管理方法'},
					{id:9,text:'清线'},
					{id:10,text:'巅峰赛'}
				],
				strategy_type:[
					{id:1,desc:'最新'},
					{id:2,desc:'热门'}
				]
			}
		},
		mounted() {
		
		},
		methods: {
		 //攻略分类
		 selectType (va) {
			 this.selectIndex = va
		  },
		}
	}
</script>

<style lang="scss">
 .strategy {
	 
	.strategy-image {
		margin-top: 40upx;
		margin-bottom: 32upx;
		
		position: relative;
		.imgs {
			width: 750upx;
			height: 220upx;
		}
		.strategy-image-desc {
			display: flex;
			position: absolute;
			top: 29upx;
			
			.strategy-image-desc-left {
				// width: 150upx;
				height: 32upx;
				letter-spacing: 1px;
				padding-left: 30upx;
				padding-right: 30upx;
				font-size: 32upx;
				font-family: Microsoft YaHei;
				font-weight: bold;
				color: #FDFDFD;
				line-height: 34upx;
				margin-right: 415upx;
			}
			.strategy-image-desc-right {
				display: flex;
				height: 48upx;
				background: #000000;
				opacity: 0.5;
				border-radius: 4upx;
				padding-left: 16upx;
				padding-right: 16upx;
			padding-top: 5upx;
				.strategy-image-desc-right-xin {
					width: 26upx;
					height: 26upx;
					margin-right: 12upx;
					color: #fff;
				}
				.strategy-image-desc-right-mabile {
					height: 26upx;
					font-size: 26upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 35upx;
					color: #fff;
					letter-spacing: 1px;
				}
			}
		}
	}
	.strategy-magnification {
		padding-left: 30upx;
		padding-right: 30upx;
		.strategy-magnification-title {
			width: 146upx;
			// height: 32upx;
			font-size: 32upx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color: #333333;
		
			margin-bottom: 32upx;
			letter-spacing: 1px;
		}
		.strategy-magnification-item {
			position: relative;
			margin-right: 15upx;
			.imgs {
				width: 220upx;
				height: 136upx;
				border-radius: 4px;
			}
			.strategy-magnification-item-shoadown {
				position: absolute;
				z-index: 3333;
				top: 50px;
				width: 220upx;
				height: 34upx;
				background: #000000;
				opacity: 0.5;
				border-radius: 4px;
				color: #fff;
				text-align: center;
				font-size: 20upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				letter-spacing: 1px;
			
			}
		}
		
	}
	.strategy-experience {
		padding-left: 30upx;
		padding-right: 30upx;
		margin-top: 74upx;
		margin-bottom: 84upx;
		.strategy-experience-title {
			width: 148upx;
			// height: 32upx;
			font-size: 32upx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color: #333333;
			line-height: 50upx;
			margin-bottom: 32upx;
			letter-spacing: 1px;
		}
		.strategy-experience-ul {
			display: flex;
			 justify-content: space-between;
			 flex-wrap: wrap;
			.strategy-experience-item {
				width: 220upx;
				height: 60upx;
				background: #D9D9D9;
				opacity: 0.35;
				border-radius: 4px;
				text-align: center;
				line-height: 60upx;
				font-size: 24upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #333333;
				margin-bottom: 20upx;
				letter-spacing: 1px;
			}		
		}
	}
	.strategy-all {
		padding-left: 30upx;
		padding-right: 30upx;
		.strategy-all-text {
			display: flex;
			.strategy-all-text-left {
				width: 148upx;
				// height: 32px;
				font-size: 32upx;
				font-family: Microsoft YaHei;
				font-weight: bold;
				color: #333333;
				line-height: 50upx;
				letter-spacing: 1px;
				flex: 1;
			}
			.strategy-all-text-right {
				display: flex;
				.select {
					color: #1482FF !important;
				}
				.strategy-all-text-right-item {
					margin-right: 32upx;
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
					letter-spacing: 2px;
					line-height: 50upx;
				}
			
			}
		}
		.strategy-all-ul {
			margin-top: 31upx;
				
			// display: flex;
			.strategy-all-li {
				// display: flex;
				border-bottom: 1px solid #F7F7F7;
				margin-top: 30upx;
				.strategy-all-li-item {
						display: flex;
					.strategy-all-li-icon {
					width: 30upx;
					height: 28upx;
				margin-top: 3px;
				margin-right: 20upx;
				}
				.strategy-all-li-text {
					font-size: 28upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #333333;
					margin-top: 2px;
					margin-bottom: 30upx;
					letter-spacing: 2px;
				}
			
				}
				
			
			}
		}
	}
	
 }
</style>
