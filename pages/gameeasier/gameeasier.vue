<template>
	<view class="gameeasier">
		<view class="concern_search">
		 <view class="concern_search_icon el-icon-search">
		 
		 </view>
		<input v-model="textvalue"  @input="search_site" class="text" type="text" placeholder="输入昵称搜索" focus >
		<view class="concern_search_icon el-icon-close" v-if="close" @click="search_close">
		
		</view>
		</view>
		
		<view class="WaterfallFlow">
			<view class="ul">
				<view class="li" v-for="(item,index) in  list" @tap='WaterfallFlowClick(item)'>
					<image class="imgs" :src="item.gm_img" mode=""></image>
					<view class="li-text">
						{{item.gm_name}}
					</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script>
	 
	export default {
		components: {
			
		},
		data() {
			return {
				textvalue:'',
				close:false,
				WaterfallFlowList:[],
				list:[]
			}
		},
		 onLoad() {
		 	
		 },
		 mounted() {
		 	this.getTotalSearchGame()
		 },
		methods: {
			//获取更多游戏
			async getTotalSearchGame () {
				// tabnav
				 let data = await this.$http.post('/api/getTotalSearchGame',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					
						search_value:''
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
					
					   this.WaterfallFlowList = DATA
					     this.list = DATA
					   	console.log( this.WaterfallFlowList)
					}
			},
			//搜索
			search_site (va) {
				
				let val = va.detail.value;
			
				let {WaterfallFlowList} = this
				let arr = [];
				for (let i = 0; i < WaterfallFlowList.length; i++) {
				
					if (WaterfallFlowList[i].gm_name.indexOf(val) !==-1) {
					
						arr.push(WaterfallFlowList[i]);
						
					}
				}
				this.list = arr
				
				if (!val) {
		
					this.list = arr;
					
					this.close = false
				} else {
					this.list = arr;
					// 	console.log(this.WaterfallFlowList)
					this.close = true
				}
			},
			search_close () {
				this.list = []
				this.textvalue = ''
				this.close = false
			},
			WaterfallFlowClick (va) {
			const id =  va.gm_id
				// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}` 
			uni.navigateTo({
				url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}`
			})
				
			}
			
		}
	}
</script>

<style lang="scss">
.gameeasier {
	.concern_search {
		
			 display: flex;
			 height: 60upx;
			margin-left: 30upx;
			margin-right: 30upx;
			margin-top: 24upx;
			 background-color: #f3f3f3;
			 position: fixed;
			 top: 30px;
			 width: 100%;
			 z-index: 333;
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
	.WaterfallFlow {
		padding-left: 30upx;
		padding-right: 30upx;
		margin-top: 80upx;
		.ul {
			
			display: flex;
			justify-content: space-between;
		    flex-wrap: wrap;
			.li {
			
				margin-bottom: 75upx;
			
				
				.imgs {
					width: 202upx;
					height: 202upx;
					border-radius:20upx ;
				}
				.li-text {
					width: 190upx;
					font-size: 26upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #333333;
					text-align: center;
					margin-top: 20upx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
}
</style>
