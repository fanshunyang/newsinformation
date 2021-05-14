<template>
	<view class="moredetails">
		<view class="status_bar">
		        <!-- 这里是状态栏 -->
		    </view>
			<view class="moredetails-nav">
				<view @tap='back' class="moredetails-nav-icon el-icon-arrow-left">
					
				</view>
				<view class="moredetails-nav-title">
					{{item.gm_title}} 
				</view>
			</view>
			
		<scroll-view scroll-y="true" style="height: 100%;" >
		<view class="moredetails-text">
			<view class="moredetails-text-title">
				游戏简介
			</view>
			<view class="moredetails-text-desc">
			{{item.gm_detail_p2 ||item}}
			</view>
			
			
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{}
				
			}
		},
		onLoad(va) {
			const item=  JSON.parse(decodeURIComponent(va.item))
			console.log(item)
		    this.item = item
		},
		mounted() {
			
		},
		methods: {
			back () {
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="scss">
	page, .moredetails{
			
			background-color: #ffff;
			height: 100%;
			overflow: hidden;
		}
		.status_bar {
		     height: var(--status-bar-height);
		     width: 100%; 
		 }
.moredetails {
	padding-left: 30upx;
	padding-right: 30upx;
	.moredetails-nav {
		
		display: flex;
		margin-bottom: 30upx;
		.moredetails-nav-icon {
			// margin-right: 245upx;
		    font-size: 40upx;
		}
		.moredetails-nav-title {
		font-size: 32upx;
		text-align: center;
		width: 100%;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #333333;
		line-height: 34upx;
		}
	}
	.moredetails-text {
	
		.moredetails-text-title {
			font-size: 32upx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color: #333333;
			// line-height: 50px;
			letter-spacing: 1px;
		}
		.moredetails-text-desc {
			width: 688upx;
			// height: 487px;
			font-size: 24upx;
			margin-top: 25upx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #666666;
			line-height: 42upx;
		}
	}
}
</style>
