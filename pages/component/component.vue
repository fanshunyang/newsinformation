<template>
	<view class="content">
		<!-- 
			* 下拉刷新和加载更多组件使用示例
			* 下拉刷新组件仅支持h5和小程序端，app端受限制目前没想到好的实现。
		-->
		<!--
			* 下拉刷新组件
			* @property {Number} top 距离顶部的距离
			* @event {Function} onPulldownReresh 刷新时调用的方法
			* @event {Function} setEnableScroll 设置组件内scroll-view是否允许滚动
		-->
		<mix-pulldown-refresh 
			ref="mixPulldownRefresh" 
			:top="90" 
			@refresh="onPulldownReresh"
		>
			<scroll-view 	
			class="panel-scroll-box" 
			:scroll-y="enableScroll" 
			@scrolltolower="loadMore"
			>
			<view class="attention-header">
					<scroll-view class="attention-header-list" scroll-x >
						<view class="attention-header-ul">
							
							<view class="attention-header-li" v-for="(item,index) in attention" :key='index'>
								<image class="attention-header-li-imgs" src="../../images/fz.jpg" mode=""></image>
								<text class="attention-header-li-txt">{{item.title}}</text>
							</view>
						</view>
					</scroll-view>
			
			</view>
				<view class="scroll-wrapper">
				
					<view class="list-item" v-for="item in list" :key="item">
						列表项 -- {{item}}
					</view>
					
					<!--
						* 上滑加载更多组件
						* @property {Number} status = [0|1|2] 0加载前，1加载中，2没有更多了
					-->
					<mix-load-more :status="loadMoreStatus"></mix-load-more>
						
				</view>
			</scroll-view>
		
			
		</mix-pulldown-refresh>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore
		},
		data() {
			return {
				list: [],
				//关注
				attention:[
					{id:1,title:'虎扑体育'},
					{id:2,title:'联盟资讯BOT'},
					{id:3,title:'hunderd快讯'},
					{id:4,title:'hunderd快讯'},		
					{id:5,title:'hunderd快讯'}
				],
					enableScroll: true,
				loadMoreStatus: 0,
			}
		},
		onLoad() {
			this.loadData('add');
		},
	
		
		methods: {
			loadData(type){
				if(type === 'add'){
					this.loadMoreStatus = 1;
				}
				setTimeout(()=>{
					if(type === 'refresh'){
						this.list = [];
					}
					
					let length = this.list.length;
					for(let i=length; i< length + 10; i++){
						this.list.push(i);
					}
					
					if(type === 'add'){
						this.loadMoreStatus = 0;
					}
					if(type === 'refresh'){
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
					}
				}, 1000)
				
			},
			
			//上滑加载
			loadMore(){
				this.loadData('add');
			},
			//下拉刷新
			onPulldownReresh(){
				this.loadData('refresh');
			},
		}
	}
</script>

<style lang="scss">
	page, .content{
		background-color: #fff;
	}
	.panel-scroll-box {
		height: 100%;
	}
	.attention-header {
			margin-top: 28upx;
			height: 168upx;
			.attention-header-list {
				::-webkit-scrollbar{
				  display: none; 
				}
				.attention-header-ul {
					display: flex;
					flex-direction: row;
					.attention-header-li {
							width: 95px;
						margin-right: 33upx;
						&:nth-child(1) {
								margin-right: 0upx;
						}
						&:first-child .attention-header-li-txt {
						
							margin-left: 30upx;
							
						}
						.attention-header-li-imgs {
							width: 80upx;
							height: 80upx;
							border-radius: 50%;
							margin-left: 37upx;
						
						}
						.attention-header-li-txt {
							width: 95px;
							height: 22px;
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #333333;
							line-height: 34upx;
							margin-left: 12upx;
							margin-top: 16upx;
								
						}
					}
				}
			}
		
		}
	
	.list-item{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150upx;
		font-weight: bold;
		font-size: 36upx;
		color: #555;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
</style>
