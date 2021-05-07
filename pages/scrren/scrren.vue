<template>
	<view class="screen">
		<!-- 我的偏好 -->
		<view class="screen-title">
			我的偏好
		</view>
		<view class="screen-my-ul">
			<view class="screen-my-li" v-for="(item,index) in scrrenmy" :key='index'>
				<image class="screen-my-li-imgs" src="../../images/ac.jpg" mode=""></image>
				<view class="screen-my-li-text">{{item.text}}</view>
			</view>
			
			
		</view>
	 <!-- 推荐偏好 -->
	 <view class="screen-recommend-title">
	 	推荐偏好
	 </view>
	 <view class="screen-recommend-ul">
	 	<view class="screen-recommend-li" v-for=" (item,index) in scrrenrecommend" :key='index'>
	    <image class="screen-recommend-li-imgs" src="../../images/cj.jpg" mode=""></image>
	    <view class="screen-recommend-li-text">{{item.text}}</view>
	 	</view>
		
		</view>
	 </view>
	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrrenmy:[
					{id:1,text:'使命召唤'},
					 
				],
				scrrenrecommend:[
					{id:1,text:'绝地求生'},
				
				]
			}
		}, 
		methods: {
			
		}
	}
</script>

<style lang="scss">
   .screen {
	   .screen-title {
		   width: 143upx;
		   height: 32upx;
		   font-size: 32upx;
		   font-family: Microsoft YaHei;
		   font-weight: bold;
		   color: #333333;
		   line-height: 34upx;
		   margin-top: 20upx;
		   letter-spacing: 1px;
		   margin-left: 30upx;
	   }
	   .screen-my-ul {
		   padding: 0 55upx;
		   margin-top: 40upx;
		   display: flex;
		   flex-wrap: wrap;
		   .screen-my-li {
				margin-right: 67upx;
				margin-bottom: 40upx;
				&:nth-child(4n+0) {
						margin-right: 0;
				}
			    // width: 92upx;
			   .screen-my-li-imgs {
				   display: block;
				   margin: 0 auto;
				   width: 92upx;
				   height: 92upx;
				   border-radius: 8upx;
				   margin-bottom: 17upx;
				   vertical-align: middle;
				  
			   }
			   .screen-my-li-text {
				   // width: 110upx;
				   // height: 25upx;
				   font-size: 24upx;
				   font-family: Microsoft YaHei;
				   font-weight: bold;
				   color: #333333;
				   line-height: 34upx;
				   letter-spacing: 1px;
				   text-align: center;
			   }
		   }
	   }
	   .screen-recommend-title {
		   width: 143upx;
		   height: 32upx;
		   font-size: 32upx;
		   font-family: Microsoft YaHei;
		   font-weight: bold;
		   color: #333333;
		   line-height: 34upx;
		   margin-top: 20upx;
		   letter-spacing: 1px;
		   margin-left: 30upx;
	   }
	   .screen-recommend-ul {
		   padding: 0 55upx;
		   margin-top: 40upx;
		   display: flex;
		   flex-wrap: wrap;
		   .screen-recommend-li {
			   margin-right: 67upx;
			   margin-bottom: 40upx;
			   &:nth-child(4n+0) {
			   		margin-right: 0;
			   }
			 
			   .screen-recommend-li-imgs {
				   display: block;
				   margin: 0 auto;
				   width: 92upx;
				   height: 92upx;
				   border-radius: 8upx;
				   margin-bottom: 17upx;
				   vertical-align: middle; 
			   }
			   .screen-recommend-li-text {
				   // width: 110upx;
				   // height: 25upx;
				   font-size: 24upx;
				   font-family: Microsoft YaHei;
				   font-weight: bold;
				   color: #333333;
				   line-height: 34upx;
				   letter-spacing: 1px;
				   text-align: center;
			   }
		   }
	   }
   }
</style>
