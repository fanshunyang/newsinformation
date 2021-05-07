<template>
	<view class="comments">
	
		<view class="comments-ul">
			<view class="comments-li">
				<view class="comments-li-img ">
						<image class="comments-li-imgs" src="../../images/pl.jpg" mode=""></image>
				</view>
			
				<view class="comments-li-content">
					
					<view class="comments-li-content-title">
						{{comment.title}}
						
					</view>
					
					<view class="comments-li-content-time">
						{{comment.time}}分钟前
					</view>
					<view class="comments-li-content-area" @click="discuss(comment)">
					{{comment.desc}}
					</view>
					<!-- 回复评论弹框 -->
					<view class="">
						<areas 
						ref="ygcComments"
						:placeholder="'回复' +comment.title " 
						:va='comment'
						@pubComment="pubComment"
						>
						</areas>
					</view>
					<view class="aa" style="width: 290px;">
				<commentfllor v-if="comment.parent" :commentfllors='comment.parent'></commentfllor>
					</view>
				</view>
				<view class="comments-li-content-like ">
					
				<image class="imgs" src="../../images/zan.png" mode=""></image>
				</view>
				<view class="comments-li-content-number">
				11
				</view>
			</view>
			
			
		</view>
		
		
	</view>
</template>

<script>
	import areas from '../area/areas.vue';
	import commentfllor from '../commentfllor/commentfllor.vue'
	export default {
		name:"comments",
		components:{
			commentfllor,
			areas
		},
		props: {
			comment:Object,
			default () {
				return {}
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {
		
		},
		methods: {
			pubComment (va) {
				
			
			},
			
			discuss (va) {
			
			this.$refs.ygcComments.toggleMask('show')
			},
		}
	}
</script>

<style lang="scss">
 .comments {

	 .comments-ul {
		 .comments-li {
			 display: flex;
			 // height: 80px;
			 margin-bottom: 40upx;
			 border-bottom: 1px solid #F2F2F2;
			 .comments-li-img {
				  margin-left: 30upx;
				  
				 .comments-li-imgs {
				 	width: 50upx;
				 	height: 50upx;
				 	border-radius: 50%;
				 }
			 }
			
			 .comments-li-content {
				 width: 520upx;
				 .comments-li-content-title {
					 width: 152upx;
					 // height: 26px;
					 font-size: 26upx;
					 font-family: Microsoft YaHei;
					 font-weight: bold;
					 color: #404040;
					 line-height: 43upx;
					 margin-left: 15upx;
				 }
				 .comments-li-content-time {
					 width: 120upx;
					 height: 23upx;
					 font-size: 22upx;
					 font-family: Microsoft YaHei;
					 font-weight: 400;
					 color: #999999;
					 line-height: 43upx;
					 margin-left: 50upx;
					  letter-spacing: 1px;
				 }
				 .comments-li-content-area {
					 width: 500upx;
					 // height: 146upx;
					 font-size: 26upx;
					 font-family: Microsoft YaHei;
					 font-weight: 400;
					 color: #333333;
					 line-height: 43upx;
					 margin-top: 21upx;
					 margin-left: 20upx;
					 letter-spacing: 1px;
					overflow: hidden;
					margin-bottom: 24upx;
					 // margin-right: 30upx;
				 }
			 }
			 .comments-li-content-like {
				// margin-left: 10upx;
				margin-top: 4upx;
				margin-right: 20upx;
				height: 20px;
				.imgs {
					width: 26upx;
					height: 26upx;
				}
			 }
			 .comments-li-content-number {
				 letter-spacing: 1px;
			 }
		 }
	 }
 }
</style>
