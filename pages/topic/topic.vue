<template>
	<view class="topic">
	<view class="concern_search">
	 <view class="concern_search_icon ">
	 #
	 </view>
	<input v-model="textvalue"  @input="search_site" class="text" type="text" placeholder="输入话题" focus >
	
	</view>
	<view class="topic_list">
		<view class="topic_list-item" v-for="(item,index) in list" :key='index'>
			<view class="topic_list-item-left-text">
			{{item.text}}
			</view>
			<view class="topic_list-item-right-coment">
				<text class="txt">热</text> 4040人讨论
			</view>
			
			
		</view>
		
		
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textvalue:'',
				concern_list:[
					{id:1,text:'逆战'},
					{id:2,text:'cf'},
					{id:3,text:'英雄联盟'},
					{id:4,text:'绝地求生'},
					{id:5,text:'逆水寒'},
					{id:6,text:'一梦江湖'}
				],
				list:[
				{id:1,text:'逆战'},
				{id:2,text:'cf'},
				{id:3,text:'英雄联盟'},
				{id:4,text:'绝地求生'},
				{id:5,text:'逆水寒'},
				{id:6,text:'一梦江湖'}
				]
			}
		},
		mounted() {
			// this.search_site()
		},
		methods: {
			search_site (va) {
				
				let val = va.detail.value;
				console.log(val)
				let {concern_list} = this
				let arr = [];
				for (let i = 0; i < concern_list.length; i++) {		
					if (concern_list[i].text.indexOf(val) !==-1) {
					
						arr.push(concern_list[i]);
						
					}
				}
				console.log(arr)
				if (!val) {
					this.list = arr
					this.close = false
				} else {
					this.list = arr;
					this.close = true
				}
			},
		}
	}
</script>

<style lang="scss">
.topic {
	.concern_search {
			 display: flex;
			 height: 60upx;
			margin-left: 30upx;
			margin-right: 30upx;
			margin-top: 24upx;
			 background-color: #f3f3f3;
			 .concern_search_icon {
				 margin-right: 20upx;
				 margin-top: 16upx;
				 margin-left: 20upx;
				 font-size: 26upx;
				 height: 30px;
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
				padding-top: 10upx;
			 }
	}
	.topic_list {
		margin-top: 52upx;
		padding-left: 30upx;
		padding-right: 30upx;
		.topic_list-item {
			display: flex;
			border-bottom: 1px solid #F5F5F5;
			margin-bottom: 33upx;
			height: 65upx;
			.topic_list-item-left-text {
				font-size: 28upx;
				font-family: Microsoft YaHei;
				font-weight: bold;
				color: #333333;
				line-height: 34upx;
				margin-right: 20upx;
				letter-spacing: 1px;
			}
			.topic_list-item-right-coment {
				font-size: 20upx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #999999;
				line-height: 34upx;
				
				.txt {
					width: 30upx;
					height: 30upx;
					text-align: center;
					background-color: #EA5044;
					color: #fff;
					display: inline-block;
					line-height: 30upx;
					margin-right: 20upx;
				}
			}
		}
		
		
	}
}
</style>
