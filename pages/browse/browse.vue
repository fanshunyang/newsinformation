<template>
	<view class="browse">
		<view class="status_bar">
		        <!-- 这里是状态栏 -->
		    </view>
			<view class="nav-bat">
			
					<view class="nav-bat-left">
						<view class="nav-bat-left-iocn el-icon-arrow-left" @click="upleave">
							
						</view>
					
						
					</view>
			
						<view class="nav-bat-center">
						浏览记录
							
						</view>
			
				<view class="nav-bat-right" @tap="delate">
					<view class="nav-bat-right-icon el-icon-delete">
						
					</view>
				 
				</view>
				
			</view>
			<scroll-view scroll-y="true" style="height: 100%;" >
				<view class="browse-list" >
					<view class="ul">
						<view class="li" v-for="(item,index) in browseList" :key='index'>
							<view class="li-left">
								{{item.title}}
							</view>
							<view class="li-center">
								|
							</view>
							<view class="li-right">
							{{item.desc}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				browseList:[
					{id:1,title:'资讯',desc:'主机游戏战争史下，怎么才能玩的6到飞'},
					{id:2,title:'资讯',desc:'身经百战”的玩家们，如今被一款黄油破了'},
					{id:3,title:'攻略',desc:'整活成功！Xbox营销部总经理：Xbox冰箱'},
					{id:4,title:'资讯',desc:'主机游戏战争史下，怎么才能玩的6到飞'},
					{id:5,title:'攻略',desc:'整活成功！Xbox营销部总经理：Xbox冰箱'},
					{id:6,title:'资讯',desc:'身经百战”的玩家们，如今被一款黄油破了'}
				]
			}
		},
		methods: {
			//返回上一级
			upleave () {
			   uni.navigateBack()
			},
			//清空记录
			delate () {
				
			},
		}
	}
</script>

<style lang="scss">
	page, .browse{
		
		background-color:#ffff !important;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%; 
		
	 }
	.browse {
	 .nav-bat {
	 		  display: flex;
	 		 flex-direction: row;
	 		z-index: 2222;
	 	padding: 0 30upx;
		margin-bottom: 20upx;
	 	  background-color: #fff;
	 	  .nav-bat-left {
	 			display: flex;
	 		flex-direction: row;
			align-items: center;
	 		// margin-top: 20upx;
	 		.nav-bat-left-iocn {
	 				// width: 16px;
	 				// height: 30upx;
	 				font-size: 40upx; 
	 			}
	 		
	 	  }
		  .nav-bat-center {
			  flex: 1;
			  text-align: center;
			  font-size: 32upx;
			  font-family: Microsoft YaHei;
			  font-weight: bold;
			  color: #333333;
			  
			  // line-height: 34upx;
		  }
	 	  .nav-bat-right {
	 	  
	 			// margin-top: 20upx;
	 		
	 		 .nav-bat-right-icon {
	 				font-size: 40upx;
	 			  }
	 	   }  
	  }
	  .browse-list {
		  padding-left: 30upx;
		  padding-right: 30upx;
		  .ul {
			  .li {
				  height: 92upx;
				  display: flex;
				  line-height: 92upx;
				  margin-bottom: 33upx;
				  border-bottom: 1px solid #F5F5F5;
				.li-left {
					font-size: 28upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #CCCCCC;
				}
				.li-center {
					// flex: 1;
					margin-left: 13upx;
					color: #999999;
				}
				.li-right {
					margin-left: 14upx;
					font-size: 28upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #666666;
					// line-height: 34upx;
				}
			  }
		  }
	  }
   }
</style>
