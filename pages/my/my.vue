<template>
	<view>
	<button type="default" @click="fn">点击登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return { 
				 
			}
		},
		methods: {
		
			fn () {
				uni.reLaunch({
						url:'../login/login' 
				})
			
			},
		}
	}
</script>

<style>

</style>
