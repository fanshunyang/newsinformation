<template>
	
	<view class="fllor">
		
		122222222222
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
