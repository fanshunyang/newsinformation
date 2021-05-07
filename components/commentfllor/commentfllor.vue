<template>
	
	<view class="fllor">
		
		<view class="fllor-comment">
			<commentfllor v-if="commentfllors.parent" :commentfllors='commentfllors.parent'></commentfllor>
			<view class="fllor-commen-all">
				<view class="fllor-commen-user">
					<text class="fllor-commen-user-left">{{commentfllors.title}}</text> 
				  
				<text class="fllor-commen-user-center">回复 {{commentfllors.reviewers_title}}</text>
					<text class="fllor-commen-user-right" @click="fn">{{commentfllors.desc}}</text>
					
					<text class="fllor-commen-user-time">51分钟前</text>
				</view>
				
			<view class="fllor-commen-user-all">
				<view class="fllor-commen-user-wirte">
				
				</view>
				<!-- 子评论回复 -->
				<areas
				ref="ygcCommentsy"
				:placeholder="'回复' + commentfllors.title " 
				:va='commentfllors'
				@pubComment="pubComment"
				>
					
				</areas>
				<view class="fllor-commen-user-reply" @click="fn">
				
				</view>
				<view class="fllor-commen-user-desc">
					
				</view>
			</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	import areas from '../area/areas.vue'
	export default {
	name:'commentfllor',
	components: {
		areas
	},
	props: {
		commentfllors :Object,
		default () {
			return {}
		}
	},
		data() {
			return {
				
			};
		},
	
		onLoad() {
		
		},
		mounted ()  {
			// console.log(this.commentfllors)
		},
		methods: {
			fn () {
			
				this.$refs.ygcCommentsy.toggleMask('show')
			},
			pubComment (va) {
				console.log(va)
			}
		}
	}
</script>

<style lang="scss">
	.fllor {
		margin-bottom: 40upx;
		// width: 613upx;
		background-color: #FAFAFA;
	
		.fllor-comment {
			// padding-left: 20upx;
			// padding-right: 20upx;
		
			.fllor-commen-all {
				display: flex;
				.fllor-commen-user {
				// width: 174upx;
				// height: 25upx;
			
				.fllor-commen-user-left {
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #1482FF;
					line-height: 43upx;
					margin-right: 15upx;
					
				}
				.fllor-commen-user-center {
					
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
					line-height: 43upx;
					margin-right: 15upx;
				}
				.fllor-commen-user-right {
					
				
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #333333;
					line-height: 43upx;
				  }
				  .fllor-commen-user-time {
					
					  font-size: 20upx;
					  font-family: Microsoft YaHei;
					  font-weight: 400;
					  color: #999999;
					  line-height: 43upx;
					  margin-left: 40upx;
				  }
				}
			
			}
			
		}
	}
</style>
