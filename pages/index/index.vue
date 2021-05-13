<template>
	<view class="content">
		<!--
		* 广告组件
		* timedown 倒计时时间
		* imageUrl 背景图
		* url 跳转链接
		*  -->
	<!-- #ifndef MP -->
	<!-- <mix-advert 
		ref="mixAdvert" 
		:timedown="8" 
		imageUrl="/static/advert.jpg"
		:url="advertNavUrl"
	></mix-advert> -->
	<!-- #endif --> 
		
		 <view class="status_bar">
		          <!-- 这里是状态栏 --> 
			
				
		   </view>
		 
		   	<!-- 全局顶部选项卡 -->
			<view class="nav-bat">
			
					<view class="nav-bat-left">
					
							<view 
								v-for="(item,index) in statustext" :key="item.id"
								class="nas-items"
								:class="{currents: index === tabCurrentIndexs}"
							
								@click="changeTabs(index)"
							>{{item.desc}}</view>
						
					</view>
			
		 
			
				<view class="nav-bat-right">
				
				 <view class="nav-search el-icon-search" @click="search">
				 	
				 </view>
				 
				 <view class="nav-word el-icon-message">
				 
				 </view>
				 
				 
				</view>
				
		

			</view>
		
	<swiper
		class="swiper-box" 
		:current="tabCurrentIndexs"
		@change="changeTabs"
	>
	<!-- 关注 -->
		<swiper-item>
			<mix-pulldown-refresh ref="mixPulldownRefreshs" class="panel-content" :top="90" @refresh="onPulldownRereshs" @setEnableScroll="setEnableScroll">
				<scroll-view 
				class="panel-scroll-box"
				:scroll-y="true" 
				@scrolltolower="loadMores"
				>
				<view class="swiper-item-each">
					<view class="attention-header" v-if="userLoginId">
							<scroll-view class="attention-header-list" scroll-x >
								<view class="attention-header-ul">
									
									<view class="attention-header-li" v-for="(item,index) in attention" :key='index' @click="check(index,item)">
										<image class="attention-header-li-imgs" :src="item.user_head_url" mode=""></image>
										<text class="attention-header-li-txt">{{item.user_name}}</text>
									</view>
								</view>
							</scroll-view>
					</view>
					<view class="swiper-item-each-model" v-if="user_id===''?true:false">
						<view class="swiper-item-each-model-text">
							<view class="swiper-item-each-model-text-top">
								登录打造个性化定制
							</view>
							<view class="swiper-item-each-model-text-bottom">
								更加精确的内容推荐
							</view>
							
							
						</view>
						<view class="swiper-item-each-model-login" @tap='login'>
							登录
						</view>
					</view>
					
					<view class="attention-main">
						<view class="attention-main-ul">
							<view class="attention-main-li" @tap='skip(item)' v-for="(item,index) in attentionmain" :key='index'>
							<view class="	attention-main-li-text">
								#{{item.gambit_name}}#
							</view>
								<image v-if="parseInt(item.is_hot)" style="width: 24upx; height: 24upx; margin-top: 6upx; margin-left: 15upx; " src="../../images/hot.png" mode=""></image>
								
								
							</view>
						</view>
						
					</view>
					<view class="attention-list">
						<view class="box-firend">
							盒友动态
						</view>
						<view class="box-firend-ul">
							<view class="box-firend-li" v-for="(item,index) in box_firends" :key='index' @tap="dynamically(item)">
							<view class="box-firend-li-header">
								<view class="box-firend-li-item-madile">
									<view class="box-firend-li-item-madile-img">
										<image v-if="item.news_detail_title==='1'" class="box-firend-li-item-madile-item-imgs" :src=" 'http://www.app.youxun.com/' + item.new_author_head_url" mode=""></image>
										<image v-else class="box-firend-li-item-madile-item-imgs" :src="item.new_author_head_url" mode=""></image>
									</view>
									<view class="box-firend-li-item-madile-text">
										<text class="box-firend-li-item-madile-text-one">{{item.new_author}}</text>
										<!-- <text class="box-firend-li-item-madile-text-two">6分钟前·盒友杂谈</text> -->
									</view>
								
								</view>
								<view class="box-firend-li-item-letter">
									<view class="box-firend-li-item-letter-left">
										<view class="  box-firend-li-item-letter-left-praise">
											<image class="imgs" src="../../images/zan.png" mode=""></image>
										</view>
										<view class="box-firend-li-item-letter-left-number">
											5
										</view>
									</view>
									<view class="box-firend-li-item-letter-right">
									<!-- 	<view class="box-firend-li-item-letter-right-message el-icon-chat-dot-square">
											
										</view> -->
							
									<image class="imgs" src="../../images/shouc.png" mode=""></image>
											<view class="box-firend-li-item-letter-right-number">
												331
											</view>
									</view>
								
								
								</view>			
							</view>
							<view class="box-firend-li-content">
								<view class="box-firend-li-content-title">
									{{item.new_title}}
								</view>
								<!-- <view class="box-firend-li-content-text">
								兄弟们，死亡细胞打折了,史低，我之前玩儿盗版的都没 打通关，这个我还买不买啊
								</view> -->
								<view class="box-firend-li-content-img">
									<view class="box-firend-li-content-img-ul">
										<view class="box-firend-li-content-img-li">
											<image v-if="item.news_detail_title==='1'" class="box-firend-li-content-img-li-imgs" :src=" 'http://www.app.youxun.com/' + item.news_img" mode=""></image>
											<image v-else class="box-firend-li-content-img-li-imgs" :src="item.news_img" mode=""></image>
										</view>
									</view>
								
								
								</view>
							
							
							</view>
							
							
							</view>
							
						<!-- 第一个列表 -->
							
							
							
						</view>
						
					</view>
				</view>
				<!-- <view class="list-item" v-for="item in list" :key="item">
					列表项 -- {{item}}
				</view> -->
				<!-- <view class="issue_all">
					<view class="issue" @click="invition">
					<view class="el-icon-plus">
						
					</view>
								
					</view>
					<view class="" style="position: fixed; top: 77%; font-size: 26upx;font-family: Microsoft YaHei;font-weight: 400; right: 46upx; letter-spacing: 1px; text-align: center; color: #1482FF;">
						发布
					</view>
				</view> -->
			
				
				<mix-load-more :status="loadMoreStatus"></mix-load-more>
				</scroll-view>
			
			</mix-pulldown-refresh>
			
		</swiper-item>
		
		<!-- 推荐 -->
		<swiper-item >
			
			<view class="swiper-items">
				
				<!-- 顶部选项卡 -->
				<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft"  >
					<view 
						v-for="(item,index) in tabnav" :key="item.id"
						class="nav-item"
						:class="{current: index === tabCurrentIndex}"
						:id="'tab'+index"
						@click="changeTab(  index ,item)"
					>{{item.name}}</view>
				
				</scroll-view>
			<!-- 	<view class="screen" @click="screen">
					2
				</view> -->
				<!-- 下拉刷新组件 -->
				<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
					<!-- 内容部分 -->
					
					<swiper 
						id="swiper"
						class="swiper-boxs" 
						:duration="300" 
						:current="tabCurrentIndex   " 
				
						@change="changeTab "
					>
				   
						<swiper-item v-for="tabItem in tabBars" :key="tabItem.id" >
						
							<scroll-view 
								class="panel-scroll-box" 
								:scroll-y="enableScroll" 
								@scrolltolower="loadMore"
								>
							
								<!-- 最新内容轮播 -->
								<view class="swiperst" v-if="tabCurrentIndex===0">
									<swiper :indicator-dots="true" :autoplay="true"  :interval="2000" :duration="500">
										<swiper-item v-for="(item,index) in swiperitem" @tap='jumpdeatils(item)' :key='index'>
											<view class="swiper-itemty">
												
												<image :src="item.re_news_img_url" mode="" class="imgs"></image>
											</view>
										</swiper-item>
										 
									</swiper>
								</view>
								
								<!--最新内容盒子  -->
								<view class="panel-content-box"  v-if="tabCurrentIndex===1">
									<view class="panel-content-box-li" >
										<view class="panel-content-box-background">
											<view class="panel-content-box-background-area" @click="homebranch">
												<view class="panel-content-box-background-area-img">
														<image class="area-imgs" :src=" 'http://www.app.youxun.com' + gametype.special_head_url" mode=""></image>
												</view>
												<view class="panel-content-box-background-area-item">
													<view class="panel-content-box-background-area-item-top">
												  {{gametype.special_cat_name}}
													</view>
													
													<view class="panel-content-box-background-area-item-bottom">
														<view class="panel-content-box-background-area-item-bottom-li" v-for="(item,index) in panelareaoverall" :key='index'  >
														{{item.text}}
														</view>
													
													</view>
												</view>
											
												
											</view>
										</view>
									</view>
									
								
								</view>
								<!--
									* 新闻列表 
									* 和nvue的区别只是需要把uni标签转为weex标签而已
									* class 和 style的绑定限制了一些语法，其他并没有不同
								-->
							
					
										
										
										<view class="new-main">
											<view class="new-item" v-if="tabCurrentIndex===0">
											
												<view class="new-header" v-for="(item,index) in newslistss "  :key='index' @click="details(item)">
													
													<view class="new-header-left">
														<view class="new-header-text">
															{{item.re_news_title}}
														</view>
														<view class="new-header-desc">
															<view class="new-header-desc-left">
															
																{{item.re_news_add_time}}.
																<view class="new-header-desc-name">
																	{{item.name}}
																</view>
															</view>
															<view class="new-header-desc-right">
																<view class=" el-icon-view new-header-desc-right-icon">
																	
																</view>
																<view class="new-header-desc-right-look">
																{{item.re_news_show}}
																</view>
															</view>
															
															
														</view>
													
													</view>
													<view class="new-header-right">
														<image class="img-item" :src="item.re_news_img_url" mode=""></image>
													</view>
											
											</view>
											
											
												
											</view>
											<view class="new-recommend" v-if="tabCurrentIndex===0">
											<view class="new-recommend-title-bar">
												<view class="new-recommend-title">
													今日推荐
												</view>
												<view class="new-recommend-more" @click="further">
													更多   
												</view>
												<view class=" arrow el-icon-arrow-right">
												
												</view>
											</view>
											<view class="new-recommend-title-bars">
												<view class="new-recommend-title-bar-item" @tap='referre(item)' v-for="(item,index) in recommendation" :key='index'>
													<image :src="item.gm_img" mode="" class="img-items"></image>
													<view class="new-recommend-title-bar-item-text">
														<view class="new-recommend-title-bar-item-title">
															{{item.gm_name}}
														</view>
													<!-- 	<view class="new-recommed-type">
															<view class="peson">
															{{item.desc}}
															</view>
															<view class="military">
															{{item.science}}
															</view>
														</view> -->
													
													</view>
												</view>
											
											</view>
										
											</view>
											<view class="new-special" v-if="tabCurrentIndex===0">
												<view class="new-special-news">
													新闻专题
												</view>
												
												<scroll-view class="floor-list" scroll-x >
													<view class="new-special-news-ul">
														<view class="new-special-news-li" @tap='study(item)' v-for="(item,index) in journalism" :key='index'> 
															<image class="new-special-news-li-imgs" :src=" 'http://www.app.youxun.com' + item.special_head_url" mode=""></image>
															<view class="new-special-news-title">
															{{item.special_cat_name}}
															</view>
														<!-- 	<view class="new-special-news-matter">
															{{item.news}}
															</view> -->
															 
														</view>	
														
													</view>
																					
												</scroll-view>
											</view>
											
											
											<view class="new-list">
												<view class="new-items"> 
												
													<view class="new-headers" @click="details(item)" v-show="tabCurrentIndex===tabCurrentIndex"   v-for="(item,index) in newslists "  :key='index'>
														
														<view class="new-header-lefts">
															<view class="new-header-texts">
																{{item.re_news_title}}
															</view>
															<view class="new-header-descs">
																<view class="new-header-desc-lefts">
																	{{item.re_news_add_time}}.
																	<view class="new-header-desc-name">
																	 {{item.name}}
																	</view>
																</view>
															
																<view class="new-header-desc-rights">
																	<view class=" el-icon-view new-header-desc-right-icon">
																		
																	</view>
																	<view class="new-header-desc-right-looks">
																		{{item.re_news_show}}
																	</view>
																<!-- 	<view class="new-header-desc-right-number">
																	1
																	</view> -->
																</view>
																
																
															</view>
														
														</view>
														<view class="new-header-rights">
															<image class="img-items" :src="item.re_news_img_url" mode=""></image>
														</view>
												
												</view>
												
												
													
												</view>
											</view>
										
										</view>
							<!-- 	<view v-for="(item, index) in tabItem.newsList" :key="index" class="news-item" @click="navToDetails(item)">
									
									<text :class="['title', 'title'+item.type]">{{item.title}}</text>
									<view v-if="item.images.length > 0" :class="['img-list', 'img-list'+item.type, item.images.length === 1 && item.type===3 ? 'img-list-single': '']">
										<view 
											v-for="(imgItem, imgIndex) in item.images" :key="imgIndex"
											:class="['img-wrapper', 'img-wrapper'+item.type, item.images.length === 1 && item.type===3 ? 'img-wrapper-single': '']"
										>
											<image class="img" :src="imgItem"></image>
											<view class="video-tip" v-if="item.videoSrc">
												<image class="video-tip-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEC0lEQVRoQ+2ajVEVMRDHdzuwA6ACpQKxArECtQKxAqECoQKhAqECoQKxAqEDrWCdn7Nx8vJy+bp3T4YhM2+O8S7J/rO7//2IKo9k6CPBIU9Acpo0s10ReSkiPA8mtH0tIncicqOqPDcyZmvEhX8rIu8cQI9gtyJyKSIXc0ENA3EAnxxAj/BT356LyEdV/TWyWDcQM3smIgA4mtjwXkQ4aX4Mngj3QkSYy5PfTmb+laoeLg7EzBDga8aEEB4TOVfVAKAoj2sUc+QXQC0PxMzY8Esi3W8ROVbV05FTDHPMDC1AEBzEcqY1AeLMQQxtXANuZvjMa/cb/i6Oqo9kQKCFI1WtLl7bfOq9mUHd3/w9ND1F5f+WKAJxn/gebQiIg1Y/mAEEUsDX8J0zVZ0iljoQZydAYLuMrYCIwXOQrYc2qREzw4E/RAu/X9KcRrUX5mWBODX+jBY/UdXjuZuNznd5PnscepNjtikgODJpRzCp3VFaHBU+MTEOkSDMIJ0hFKyMNSAZbZA2NMUJn7ujqjebABDWyDDnXpqb5YDEvnGvqsHZi7I5CMgBxiHDxRx5bmSYGZlyyADWmCwHBN8IwjdRH5Im3B+En5UIJuYFBeMnjFtV3Y/frwDJmNV+K/1NAGEvIv+pqp7MUU1GthXzSoHE+VSzWRU0EsuOaUDhw+aWmNdKOEiBxOzQlYkWNJIqAiAI0V0dmhkZNvkXYyUkpEDYhFJ17cOaWXQACUtxaPhgc9JpZvFBr+Rg/xNI8B+0w0lXR0LDzUCIoE0bNPpISdC1uJD7uJQVlzTyEIFQgFGhMpo10pVfDfgIwlAiU9s0af4h+gglARkE8WURZ98G/V65Fhal3zgg3qnqXpVK/IMG0/rhAOYExDh9KgZEcqy4DtlEirKpTgutqLjsnk5RnEaLWeaUhiY0srFOS1KxrqVPtTS+2by8xsdsnkONNN5G0pDCQcVmtcaoLYVVV63e0zDo8L+0OVgvrNy84lIXemRiM022CtjynWsabVCwMdpKXQeSOlZXcGwRsPWbJAgyLZvOPOh2UKZWn6xYS0Dibl/IVF+1VoytJ15wbqyCtmkwKdIZGnZZE+9tmbLI4mC8VRuDAG8xpo00sQFDi2iRJrabU2jGBYVVmbMKxJ0/dzfSXeGVzM3ZiRZt2tGsgmDdJiAFMGiHNPxijk+YGV1NsuHgD82aCB82A4lomdohvf8jrQm3s61XbzgzAMJtVXwWOPZhD7F0AXEwnBrqjzv1sRCACnfp/HvIdsNlTbiDn+pgDuVn3UCCxN4wA1Bods+xrr8R26/yuuuULh8p8D0nSzsTE8ldOZcAhttgKsUhAEM+Ujty1xIm1PJfOK7nCh/LM2xaNVDbfv8EZNsnXtvvDyrmF1FIBKIwAAAAAElFTkSuQmCC"></image>
											</view>
										</view>
									</view>
								
									<view v-else class="img-empty"></view>
									<view :class="['bot', 'bot'+item.type]">
										<text class="author">{{item.author}}</text>
										<text class="time">{{item.time}}</text>
									</view>
								</view> -->
								
								<!-- 上滑加载更多组件 -->
							
								<mix-load-more :status="tabItem.loadMoreStatus"></mix-load-more>
							</scroll-view>
						</swiper-item>
					</swiper>
				</mix-pulldown-refresh>
				
			</view>
		</swiper-item>
	</swiper> 
	
	</view> 
</template>
<script>
	
	import jingswipe from '../../components/jing-swiper/jing-swiper.vue'
	import goodsSwiper from "@/components/pyh-goodsSwiper/pyh-goodsSwiper.vue"
	import mixAdvert from '@/components/mix-advert/vue/mix-advert';
	import json from '@/json'
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	let windowWidth = 0, scrollTimer = false, tabBar;
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
			mixAdvert,
			goodsSwiper,
			jingswipe
		},
		data() {
			return {
				// list:[],
				loadMoreStatus:0,
			
				refreshing:0,
				swiperitem:[
					
				],
				tabCurrentIndex: 0, //当前选项卡索引
				//全局轮播下标
			    tabCurrentIndexs:0,
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true, 
				//新闻详情前4个
				newfourlist:[
					{id:1,title:'任天堂日服推出2020年Switch 游戏回顾页面',time:'6分钟前.',type:'三国志战略版',look:'11'},
					{id:2,title:'任天堂日服推出2020年Switch 游戏回顾页面',time:'6分钟前.',type:'三国志战略版',look:'11'},
					{id:3,title:'任天堂日服推出2020年Switch 游戏回顾页面',time:'6分钟前.',type:'三国志战略版',look:'11'},
					{id:4,title:'任天堂日服推出2020年Switch 游戏回顾页面',time:'6分钟前.',type:'三国志战略版',look:'11'}
				],
				//每个tab中的索引切换全局不同的最新内容中的盒子
				panelareaoverall:[
				
					{id:1,text:'游戏'},
					{id:2,text:'广场'},
					{id:3,text:'资讯'},
					{id:4,text:'攻略'},
			
				],
				//游戏专题
				gametype:{},
				
				//今日推荐
				recommendation:[
					
				],
				//新闻专题
				journalism:[
				
				],
				
				//新闻列表
				newslists:[
				
			
					
				],
				newslistss:[
				
				],
				
				tabBars: [],
				tabnav:[],
				statustext:[{ id:1, desc:'关注'}, {id:2, desc:'推荐'}],
				detail : {
					title:'新闻专题',
					subLable:'',
					list:[
						{id:1, name:'cat', img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616835881&t=80a9e0425b7fe4e53d1c5e4f36116ab4'},
						{id:2, name:'cat', img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616835881&t=80a9e0425b7fe4e53d1c5e4f36116ab4'},
						{id:3, name:'cat', img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616835881&t=80a9e0425b7fe4e53d1c5e4f36116ab4'},
						{id:4, name:'cat', img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616835881&t=80a9e0425b7fe4e53d1c5e4f36116ab4'},

					]
				},    
				config : {
					circular:false
				},
				//关注
				attention:[
					{id:1,title:'虎扑体育'},
					{id:2,title:'联盟资讯BOT'},
					{id:3,title:'hunderd快讯'},
					{id:4,title:'hunderd快讯'},		
					{id:5,title:'hunderd快讯'}
				],
			
				//热销品牌
				attentionmain :[
					
				],
				//盒有动态
				boxfirendimg:[
					{id:1,img:''},
					{id:2,img:''},
					{id:3,img:''}
				],
				newslistsDetail:{},
				re_id:1,
				// re_news_show:'',
				access_token:'',
				user_id:'',
				box_firends:[],
			}
		},
		computed: {
			//启动页广告测试
			advertNavUrl(){
				let data = {
					title: '测试跳转新闻详情',
					author: '测试作者',
					time: '2019-04-26 21:21'
				}
				return `/pages/details/details?data=${JSON.stringify(data)}`;
			},
			userLoginId () {
				const user_id = uni.getStorageSync('user_id')
				return user_id
			}
		},
		async onLoad() {
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadTabbars();
				
				// this.loadData('add');
		},
		
		mounted() {
		this.getCatNews() 
	
		
		this.getRecommendGame()
		this.getSpecialCat()
		this.getBannerNews()
		this.getEspecialCat()
		
		this.gambit()
	
		},
		onReady(){
			/**
			 * 启动页广告 使用文档（滑稽）
			 * 1. 引入组件并注册 
			 * 		import mixAdvert from '@/components/mix-advert/vue/mix-advert';
			 *      components: {mixAdvert},
					 <!-- #ifndef MP -->
						<mix-advert 
							ref="mixAdvert" 
							:timedown="8" 
							imageUrl="/static/advert.jpg"
							:url="advertNavUrl"
						></mix-advert>
					<!-- #endif -->
			 * 	2. 调用组件的initAdvert()方法进行初始化
			 * 
			 *  初始化的时机应该是在splash关闭时，否则会造成在app端广告显示了数秒后首屏才渲染出来
			 */
			// // #ifndef MP
			// this.$refs.mixAdvert.initAdvert();
			// // #endif
			},
			// watch: {
			// tabCurrentIndex () {
			// 	this.changeTab()
			// }
			// },
			onShow() {
				this.getRecommendNews()
				this.getRecommendNewsunshift()
				this.userList()
			// 	const value = uni.getStorageSync('show');
			
			// 	this.re_news_show = value
			// 		console.log(this.re_news_show)
					
					const access_token = uni.getStorageSync('access_token')
					const user_id = uni.getStorageSync('user_id')
				
					if (access_token && user_id) {
					this.access_token = access_token
					this.user_id = user_id
					
					} 
			},
		methods: {
			//跳转话题
			skip () {
				uni.navigateTo({
					url:'../themet/themet'
				})
			},
			//关注登录
			login () {
				if (!this.user_id) {
					uni.navigateTo({
						url:'../login/login'
					})
				}
			},
			// invition () {
			// 	uni.navigateTo({
			// 		url:'../invitation/invitation'  
			// 	})
			// },
			
			//搜索
			search () {
				uni.navigateTo({
					url:'../search/search'  
				})
			},
			//关注用户列表
			async userList () {
				  const user_id = uni.getStorageSync('user_id')
				  
				 const data = await this.$http.post('/api/userList',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						user_id:user_id
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					    console.log(this.attention = DATA);
					}
			},
			//话题讨论
			async gambit () {
				  const user_id = uni.getStorageSync('user_id')
				 const data = await this.$http.post('/api/gambit',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						user_id:user_id
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
					    console.log(this.attentionmain = DATA);
					}
			},
			//分类导航
			async getCatNews () {
				// tabnav
				 let data = await this.$http.post('/api/getCatNews',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						state:'1',
						// search_value:'腾讯'
					
				 });
				    // console.log(data);
					const {DATA} = data
					if (data.CODE==='200') {
						 
						this.tabnav = DATA
						this.tabnav.unshift({name:'全部'})
					}
			},
		
		
		//轮播图
		async getBannerNews () {
			// tabnav
			 let data = await this.$http.post('/api/getBannerNews',{
				 	token:'d6a2fa16e60777e390256ec85cc2f42e',
				
				
			 });
			    // console.log(data);
				const {DATA} = data
				if (data.CODE==='200') {
					 
					this.swiperitem = DATA
				
				}
		},
		//推荐新闻资讯前四个
		async getRecommendNewsunshift () {
	     let data = await this.$http.post('/api/getRecommendNews',{
	          token:'d6a2fa16e60777e390256ec85cc2f42e',
	          re_c_id:1,
									
	      });
	   // console.log(data);
		  const {DATA} = data
		   if (data.CODE==='200') {
						
			this.newslistss = DATA
		    this.newslistss.splice(0,4)
						
			}
		},
		//推荐新闻资讯
		async getRecommendNews () {
			
			 let data = await this.$http.post('/api/getRecommendNews',{
				 	token:'d6a2fa16e60777e390256ec85cc2f42e',
					re_c_id:this.tabCurrentIndex,
					// search_value:'腾讯' 
				 
			 });
			    // console.log(data);
				const {DATA} = data
				if (data.CODE==='200') {
					
					this.newslists = DATA
					console.log(this.newslists) 

				}
		},
		
		//今日推荐
		async getRecommendGame () {
			// tabnav
			 let data = await this.$http.post('/api/getRecommendGame',{
				 	token:'d6a2fa16e60777e390256ec85cc2f42e',
				
				
			 });
			    // console.log(data);
				const {DATA} = data
				if (data.CODE==='200') {
					
					this.recommendation = DATA
					console.log(this.recommendation) 
					
				
				}
		},
		//新闻专题
		async getSpecialCat () {
			// tabnav
			 let data = await this.$http.post('/api/getSpecialCat',{
				 	token:'d6a2fa16e60777e390256ec85cc2f42e',
				
				
			 });
			    // console.log(data);
				const {DATA} = data
				if (data.CODE==='200') {
					
					this.journalism = DATA
					console.log(this.journalism) 
					
				
				}
		},
		//游戏专题
		async getEspecialCat () {
			// tabnav
			 let data = await this.$http.post('/api/getEspecialCat',{
				 	token:'d6a2fa16e60777e390256ec85cc2f42e',
				
				
			 });
			    // console.log(data);
				const {DATA} = data
				if (data.CODE==='200') {
					
					this.gametype = DATA
					console.log(this.gametype) 
					
				
				}
		},
		
		//首页关注最新发布讯息
		async getEspecialCat () {
			// tabnav
			 let data = await this.$http.post('/api/getSquareNews',{
				 	token:'d6a2fa16e60777e390256ec85cc2f42e',
				
				
			 });
			    // console.log(data);
				const {DATA} = data
				if (data.CODE==='200') {
					
					this.box_firends = DATA
					console.log(this.box_firends) 
					
				
				}
		},
		
			/**
			 * 数据处理方法在vue和nvue中通用，可以直接用mixin混合
			 * 这里直接写的
			 * mixin使用方法看index.nuve
			 */
			//获取分类
			loadTabbars(){
				let tabList = json.tabList;
		
				tabList.forEach(item=>{
				
					item.newsList = [];
					item.loadMoreStatus = 0;  //加载更多 0加载前，1加载中，2没有更多了
					item.refreshing = 0;
				})
				this.tabBars = tabList;
		
				this.loadNewsList('add');
			},
			//新闻列表
			loadNewsList(type){
				let tabItem = this.tabBars[this.tabCurrentIndex];
				
			
				//type add 加载更多 refresh下拉刷新
				if(type === 'add'){
					if(tabItem.loadMoreStatus === 2){
						return;
					}
					tabItem.loadMoreStatus = 1; 
				}
				// #ifdef APP-PLUS
				else if(type === 'refresh'){
					tabItem.refreshing = true;
				}
				// #endif
				
				//setTimeout模拟异步请求数据
				setTimeout(()=>{
					let list = json.newsList;
					list.sort((a,b)=>{
						return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
					})
					if(type === 'refresh'){
						tabItem.newsList = []; //刷新前清空数组
					}
					list.forEach(item=>{
						item.id = parseInt(Math.random() * 10000);
						tabItem.newsList.push(item);
					})
					//下拉刷新 关闭刷新动画
					if(type === 'refresh'){
						
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
						// #ifdef APP-PLUS
						tabItem.refreshing = false;
						// #endif
						tabItem.loadMoreStatus = 0;
					}
					//上滑加载 处理状态
					if(type === 'add'){
						tabItem.loadMoreStatus = tabItem.newsList.length > 40 ? 2: 0;
					}
				}, 600)
			},
			//新闻详情
			navToDetails(item){
				let data = {
					id: item.id,
					title: item.title,
					author: item.author,
					time: item.time
				}
				let url = item.videoSrc ? 'videoDetails' : 'details'; 
				
				uni.navigateTo({
					url: `/pages/details/${url}?data=${JSON.stringify(data)}`
				})
			},
			//轮播跳转
			jumpdeatils (va) {
				const id = va.id
					// url:`../qualification/qualification?item=${id}`
				uni.navigateTo({
					url:`../qualification/qualification?item=${id}`
				})
			},
			//今日推荐
			referre (va) {
				const id = va.gm_id
				uni.navigateTo({
					url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}` 
				})
			},
			//更多
			further () {
				uni.reLaunch({
					url:'../game/game'
				})
			},
			//新闻专题
			study (va) {
				const value = va
				
				 	// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))}` 
				uni.navigateTo({
					url:`../journalism/journalism?item=${encodeURIComponent (JSON.stringify(value))}`
				})
			},
			//下拉刷新
			onPulldownReresh(){
				this.loadNewsList('refresh');
			},
			//上滑加载
			loadMore(){
				this.loadNewsList('add');
			},
			
			
			//全局下拉和上拉刷新
			loadData(type){
				// if(type === 'add'){
				// 	this.loadMoreStatus = 1;
				
				// }
				if(type === 'add'){
					if(this.loadMoreStatus === 2){
						return;
					}
					this.loadMoreStatus = 1; 
				}
				// #ifdef APP-PLUS
				else if(type === 'refresh'){
					this.refreshing = true;
				}
				// #endif
				setTimeout(()=>{
					if(type === 'refresh'){
						this.list = [];
					}
					
					let length = this.list.length;
					for(let i=length; i< length + 10; i++){
						this.list.push(i);
					}
					
					if(type === 'add'){
							this.loadMoreStatus = this.list.length > 50 ? 2: 0;
							console.log(	this.list.length)
					
					}
					if(type === 'refresh'){
					
					this.$refs.mixPulldownRefreshs && this.$refs.mixPulldownRefreshs.endPulldownRefresh();
						// #ifdef APP-PLUS
						this.refreshing = false;
						// #endif
						this.loadMoreStatus = 0;
					
					}
				}, 600)
				
			},
			//全局下拉刷新
			onPulldownRereshs () {
					this.loadData('refresh');
			},
			//全局上滑加载
			loadMores () {
					this.loadData('add');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable){
				if(this.enableScroll !== enable){
					this.enableScroll = enable; 
				}
			},							

			//tab切换
			async changeTab(e,item){
		
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
				}
				if(typeof tabBar !== 'object'){
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0; 
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if(i === index){
						nowWidth = result.width;
					}
				}
				if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index; 
				    this.getRecommendNews()
				}
			
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{ 
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndex = index; 
						this.getRecommendNews()
					}
					// this.tabCurrentIndex = index; 
					
					// console.log(this.tabCurrentIndex)
				
					//第一次切换tab，动画结束后需要加载数据
					let tabItem = this.tabBars[this.tabCurrentIndex];
					if(this.tabCurrentIndex !== 0 && tabItem.loaded !== true){
						this.loadNewsList('add');
						tabItem.loaded = true;
					}
				}, 300)
		
			}, 
			
			//全局tab
			async changeTabs(e){
				console.log(e) 
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
				}
				if(typeof tabBar !== 'object'){
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0; 
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
			
					if(i === index){
						nowWidth = result.width;
					}
				}
				if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndexs = index; 
					console.log(this.tabCurrentIndexs)
				}
				
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{ 
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndexs = index; 
					}
					this.tabCurrentIndexs = index; 
					
					
				console.log(e)
					//第一次切换tab，动画结束后需要加载数据
					// let tabItem = this.tabBars[this.tabCurrentIndex];
					// if(this.tabCurrentIndex !== 0 && tabItem.loaded !== true){
					// 	this.loadNewsList('add');
					// 	tabItem.loaded = true;
					// }
				}, 300)
					
			},
			
			//获得元素的size
			getElSize(id) { 
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			// screen () {
			// 	uni.navigateTo({ 
			// 		url:'../scrren/scrren'
			// 	})
			// },
			//查看别人个人中心
			check (va,item) {
				// url:`../commercials/commercials?item=${encodeURIComponent (JSON.stringify(id))} ${id}` 
				const id = item.user_id
				console.log(id)
				uni.navigateTo({
					url:`../homepage/homepage?id=${id}`
				})
			},
			//跳转详情
			details (va) {
			
			let id = va.id
		 
				console.log(va)
				uni.navigateTo({
					url:`../qualification/qualification?item=${id}`
				})
			},
			//关注 盒有动态跳转详情
			dynamically (va) {
				let id = va.id
				uni.navigateTo({
					url:`../details/details?item=${id}`
					// url:'../button/button'
				})
			},
			//跳转首页分支
			homebranch () {
				uni.navigateTo({
					url:`../homebranch/homebranch?item=${0}`
				})
			},
		}
	}
</script>

<style lang='scss'>
	
	page, .content{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
 .status_bar {

      height: var(--status-bar-height);
      width: 100%; 
		  background-color: #fff;
	
  }
  .content {
	 .nav-bat {
		 	flex-direction: row;
		z-index: 2222;
	 	padding: 0 30upx;
	 	  background-color: #fff;
	 	  .nav-bat-left {
			  	flex-direction: row;
			
				margin-top: 20upx;
				.currents {
					color: black;
					font-weight: 700;
				
				}
			.nas-items {
				/* color: #999999; */
				margin-right: 16upx;
				
			}
	 		
	 	  }
	 	  .nav-bat-right {
	 	  	flex-direction: row;  
			margin-top: 20upx;
			margin-left: 421upx;
			.nav-search {
				margin-right: 40upx;
				font-size: 32upx;
				margin-top: 6upx;
			}
			.nav-word {
				width: 38upx;
				height: 30upx;
				font-size: 38upx;
				margin-top: 4upx;
			}
	 	  }
	   }
	 	/* 顶部tabbar */
	 	.nav-bar{
	 		position: relative;
	 		z-index: 10;
	 		height: 90upx;
	 		
	 		white-space: nowrap;
	 		box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
	 		background-color: #fff;
	 		.nav-item{
	 			display: inline-block;
	 			width: 150upx;
	 			height: 90upx;
	 			text-align: center;
	 			line-height: 90upx;
	 			font-size: 30upx;
	 			color: #303133;
	 			position: relative;
	 			&:after{
	 				content: '';
	 				width: 0;
	 				height: 0;
	 				border-bottom: 4upx solid #007aff;
	 				position: absolute;
	 				left: 50%;
	 				bottom: 0;
	 				transform: translateX(-50%);
	 				transition: .3s;
	 			}
	 		} 
	 		.current{  
	 			color: #007aff;
	 			&:after{
	 				width: 50%;
	 			}
	 		} 
	 		.currents {
	 			color: black;
	 			font-weight: 700;
	 		}
	 	}
	 	
	 
	 	.swiper-box{
	 		height: 100%;
	 		margin-top: 23upx;
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
		
			.swiper-item-each {
					/* height: 1260upx; */
					.swiper-item-each-model {
						margin:  0 auto;
						.swiper-item-each-model-text {
							.swiper-item-each-model-text-top {
								/* height: 26px; */
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color: #404040;
								line-height: 43upx;
								letter-spacing: 1px;
							}
							.swiper-item-each-model-text-bottom {
								font-size: 22upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 43upx;
								letter-spacing: 1px;
								margin-top: 5px;
							}
						}
						.swiper-item-each-model-login {
							width: 180upx;
							height: 60upx;
							color: #ffff;
							text-align: center;
							background-color: black;
							letter-spacing: 1px;
							margin-top: 5px;
							margin-left: 10px;
							line-height: 60upx;
							margin-bottom: 5px;
						}
					}
				.attention-header {
					margin-top: 28upx;
					height: 168upx;
					.attention-header-list {
						::-webkit-scrollbar{
						  display: none; 
						}
						.attention-header-ul {
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							/* padding-left: 30upx;
							padding-right: 30upx; */
							.attention-header-li {
									/* width: 90px; */
								margin-right: 33upx;
								&:nth-child(1) {
									/* width: 95px; */
										margin-right: 33upx;
								}
								&:first-child .attention-header-li-txt {
								
									margin-left: 30upx;
									
								}
								.attention-header-li-imgs {
									width: 80upx;
									height: 80upx;
									border-radius: 50%;
									/* margin-left: 37upx; */
								    margin:  0 auto;
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
									text-align: center;	
								}
							}
						}
					}
				
				}
				.attention-main {
						
					background-color: #f1f1f1;
					.attention-main-ul {
						display: flex;
						flex-direction: row;
							
						flex-wrap: wrap;
			            height: 154upx;
						
						background-color: #fff;
						margin-top: 10upx;
						margin-bottom: 10upx;
						.attention-main-li {
							margin-top: 32upx;
						
							display: flex;
							flex-direction: row;
							position: relative;
							margin-left: 12upx;
							margin-right: 12upx;
					    	letter-spacing: 1px;
							.attention-main-li-text {
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #333333;
								line-height: 34upx;
							}
						}
					}
				}
				.attention-list {
					/* padding: 0 30upx; */
					
					
					.box-firend {
						width: 146upx;
						height: 32upx;
						font-size: 32upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						line-height: 34upx;
						margin-top: 32upx;
						letter-spacing: 4upx;
						margin-bottom: 32upx;
						margin-left: 30upx;
						margin-right: 30upx;
					}
					.box-firend-ul {
					
						.box-firend-li {
								border-bottom: 1px solid #F5F5F5;
								height: 430upx;
								margin-bottom: 32upx;
							.box-firend-li-content {
								margin-left: 30upx;
								margin-right: 30upx;
								.box-firend-li-content-title {
									/* width: 513upx; */
									/* height: 26upx; */
									font-size: 30upx;
									font-family: Microsoft YaHei;
									font-weight: bold;
									color: #404040;
									line-height: 43upx;
									margin-top: 30upx;
									margin-bottom: 24upx;
								}
								.box-firend-li-content-text {
									width: 685upx;
									height: 67upx;
									font-size: 26upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #666666;
									line-height: 41upx;
								}
								.box-firend-li-content-img {
									.box-firend-li-content-img-ul {
										display: flex;
										flex-direction: row;
										.box-firend-li-content-img-li {
											margin-top: 25upx;
											margin-right: 18upx;
											.box-firend-li-content-img-li-imgs {
												width: 218upx; 
												height: 152upx;
												border-radius: 8upx;
											}
										}
									}
								}
							}
							.box-firend-li-header {
								margin: 0 30upx;
								display: flex;
								flex-direction: row;
								align-items: center;
								.box-firend-li-item-madile {
									display: flex;
									flex-direction: row;
									flex: 1;
									.box-firend-li-item-madile-img {
										.box-firend-li-item-madile-item-imgs {
											width: 72upx;
											height: 72upx;
										    border-radius: 50%;
										}
									}
									.box-firend-li-item-madile-text {
										margin-left: 24upx;
										.box-firend-li-item-madile-text-one {
											/* width: 180upx; */
											height: 26upx;
											font-size: 26upx;
											font-family: Microsoft YaHei;
											font-weight: bold;
											color: #404040;
											line-height: 43upx;
											margin-bottom: 17upx;
										}
										.box-firend-li-item-madile-text-two {
											width: 190upx;
											height: 22upx;
											font-size: 22upx;
											font-family: Microsoft YaHei;
											font-weight: 400;
											color: #999999;
											line-height: 43upx;
										}
									}
								}
								.box-firend-li-item-letter {
									/* margin-left: 240upx; */
									display: flex;
									flex-direction: row;
									.box-firend-li-item-letter-left {
										display: flex;
										flex-direction: row;
										flex: 1;
										margin-right: 20upx;
										align-items: center;
										.box-firend-li-item-letter-left-praise {
										/* 	width: 26upx;
											height: 26upx; */
											margin-right: 10upx;
											/* margin-top: 4px; */
											.imgs {
										
												width: 32upx;
												height: 32upx;
										
											}
										}
										.box-firend-li-item-letter-left-number {
										/* 	width: 13upx;
											height: 21upx; */
											font-size: 26upx;
											font-family: Microsoft YaHei;
											font-weight: 400;
											color: #CCCCCC;
											line-height: 43upx;
										}
									}
									.box-firend-li-item-letter-right {
										display: flex;
										flex-direction: row;
									
										.imgs {
											width: 37upx;
											height: 36upx;
										}
										.box-firend-li-item-letter-right-message {
											margin-left: 30upx;
											margin-right: 10upx;
											width: 27upx;
											height: 24upx;
											margin-top: 6upx;
										}
										.box-firend-li-item-letter-right-number {
										/* 	width: 28upx;
											height: 21upx; */
											font-size: 26upx;
											font-family: Microsoft YaHei;
											font-weight: 400;
											color: #CCCCCC;
											line-height: 43upx;
											margin-left: 12upx;
										}
									}
								}
							}
							
						}
					}
				}
			}
	 		.swiper-items {
				position: relative;
	 			height: 1260upx;
				.screen {
				box-shadow:1px 1px 12px rgba(0,0,0,.3);
				position: absolute;
				width: 80upx;
				height: 90upx;
				background-color: pink;
				top: 0px;
				right: 0;
				z-index: 2222;
				
				}
	 	
	 		}
	 	}
	 .swiper-boxs{
	 		height: 100%;
			
	 	}
		
	
	 	.panel-scroll-box{
	 		height: 100%;
			.issue {
				width: 90upx;
				height: 90upx;
				position: fixed;
				top: 70%;
				right: 31upx;
				z-index: 33453535;
				border-radius: 50%;
				background-color: #1482FF;
				.el-icon-plus {
					color: #fff;
					font-size: 60upx;
					line-height: 90upx;
					text-align: center;
				}
			}
			/* 最新内容盒子 */
			.panel-content-box {
				.panel-content-box-li {
					.panel-content-box-background {
					width: 690upx;
					height: 132upx;
					background: rgba(0,0,0,0.4);
					border-radius: 4px;
					margin-left: 30upx;
					margin-right: 30upx;
					margin-top: 26upx;
					.panel-content-box-background-area {
						
						display: flex;
						flex-direction: row;
						.panel-content-box-background-area-img {
							width: 88upx;
							height: 88upx;
							margin: 22upx 0 22upx 20upx;
							.area-imgs {
								width: 88upx;
								height: 88upx;
								border-radius: 8upx;
								vertical-align: middle;
							}
						}
						.panel-content-box-background-area-item {
							margin-top: 26upx;
							margin-left: 20upx;
							.panel-content-box-background-area-item-top {
							/* 	width: 305upx;
								height: 26px; */
								font-size: 26upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #FFFFFF;
								line-height: 40upx;
								letter-spacing: 1px;
								margin-bottom: 10upx;
							}
							.panel-content-box-background-area-item-bottom {
								display: flex;
								flex-direction: row;
								.panel-content-box-background-area-item-bottom-li {
									width: 70upx;
									height: 34upx;
									background: rgba(0,0,0,0.3);
									margin-right: 19upx;
									border-radius: 2px;
									
									font-size: 22upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color:#fff;
									text-align: center;
								}
							}
						}
					  }
					}
				}
			
			}
			/* 最新内容轮播 */
	 		.swiperst {
	 		
				.swiper-itemty {
						height: 100%;
						.imgs {
							width: 100%;
					}
				 } 
	 		}
			
	 		/* .panel-item{
	 			background: #fff;
	 			padding: 30px 0;
	 			border-bottom: 2px solid #000;
	 		} */
			.new-main {
				.new-list {
					margin-top: 11upx;
						padding: 0 30upx;
						.new-items {
									
										background-color: #fff;
					
											.new-headers {
												padding:34upx 0upx;
												display: flex;
												flex-direction: row;
												/* height: 800upx; */
												border-bottom: 1px solid #E6E6E6;
										
												background-color: #fff;
												&:last-child {
												  border-bottom:0;
												}
												.new-header-lefts {
													height: 140upx;
													.new-header-texts {
														width: 407upx;
														color: #333333;
														font-weight: bold;
														font-size: 26upx;
														font-family: Microsoft YaHei;
														margin-top: 10upx;
														/* height: 67upx; */
														line-height: 40upx;
														margin-bottom: 10upx;
													}
													.new-header-descs {
														display: flex;
														flex-direction: row;
														.new-header-desc-lefts {
														/* 	width: 263upx;
															height: 24upx; */
															display: flex;
																flex-direction: row;
															flex: 1;
															font-size: 24upx;
															font-family: Microsoft YaHei;
															font-weight: 400;
															color: #999999;
															line-height: 41upx;
															margin-top: 30upx;
															letter-spacing: 2upx;
															/* margin-right:81upx; */
															.new-header-desc-name {
																font-size: 24upx;
																font-family: Microsoft YaHei;
																font-weight: 400;
																color: #999999;
																line-height: 41upx;
																/* margin-top: 30upx; */
																letter-spacing: 2upx;
																/* margin-right:151upx; */
															}
														}
														
														.new-header-desc-rights {
															display: flex;
															flex-direction: row;
															margin-top: 32upx;
														
															.new-header-desc-right-icon {
																margin-right: 12upx;
															}
															.new-header-desc-right-looks {
																
																height: 19upx;
																font-size: 24upx;
																font-family: Microsoft YaHei;
																font-weight: 400;
																color: #999999;
															}
														}
													}
												}
												.new-header-rights {
													margin-left: 41upx;
													height: 140upx;
													.img-items {
														width: 242upx;
														height: 242upx;
														border-radius: 8upx;
													}
												}
											  }
										   }
				}
				.new-special {
						padding: 0 30upx;
						height: 396upx;
						.new-special-news {
							width: 140upx;
							height: 32upx;
							font-size: 32upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 34upx;
							margin-top: 43upx;
							margin-bottom: 34upx;
							letter-spacing: 2upx;
						}
						.floor-list {
							::-webkit-scrollbar{ 
							  display: none; 
							}
						  .new-special-news-ul {
							  display: flex;
							  flex-direction: row;
					
							  .new-special-news-li {
								  margin-right: 20upx;
							  	.new-special-news-li-imgs {
									width: 274upx;
									height: 172upx;
								}
								.new-special-news-title {
									/* width: 173upx;
									height: 26upx; */
									font-size: 26upx;
									font-family: Microsoft YaHei;
									font-weight: bold;
									color: #333333;
									line-height: 34upx;
									margin-top: 20upx;
									letter-spacing: 1px;
									text-align: center;
								}
								.new-special-news-matter {
									/* width: 83upx; */
									/* height: 22upx; */
									font-size: 22upx; 
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #CCCCCC;
									line-height: 34upx;
									margin-top: 17upx;
									letter-spacing: 1px;
								}	
							  }
						  }
					 }
				}
				.new-item {
				padding: 0 30upx;
				background-color: #fff;
/* 					height: 200px; */
					.new-header {
						padding:34upx 0upx;
						display: flex;
						flex-direction: row;
						/* height: 800upx; */
						border-bottom: 1px solid #E6E6E6;
				
						background-color: #fff;
						&:last-child {
						  border-bottom:0;
						}
						.new-header-left {
							height: 140upx;
							.new-header-text {
								width: 407upx;
								color: #333333;
								font-weight: bold;
								font-size: 26upx;
								font-family: Microsoft YaHei;
								margin-top: 10upx;
								height: 67upx;
								line-height: 40upx;
							}
							.new-header-desc {
								display: flex;
								flex-direction: row;
								.new-header-desc-left {
									display: flex;
									flex-direction: row;
								/* 	width: 263upx;
									height: 24upx; */
									font-size: 24upx;
									font-family: Microsoft YaHei;
									font-weight: 400;
									color: #999999;
									line-height: 41upx;
									margin-top: 30upx;
									letter-spacing: 2upx;
									flex: 1;
									/* margin-right:81upx; */
									.new-header-desc-name {
										
									}
								}
								.new-header-desc-right {
									display: flex;
									flex-direction: row;
									margin-top: 32upx;
									.new-header-desc-right-icon {
										margin-right: 12upx;
									}
									.new-header-desc-right-look {
										
										height: 19upx;
										font-size: 24upx;
										font-family: Microsoft YaHei;
										font-weight: 400;
										color: #999999;
									}
								}
							}
						}
						.new-header-right {
							margin-left: 41upx;
							height: 140upx;
							.img-item {
								width: 242upx;
								height: 140upx;
								border-radius: 8upx;
							}
						}
					  }
				   }
		      }
			  
			 .new-recommend {
				height: 400upx;
				 padding: 0 30upx;
				 .new-recommend-title-bars {
					 	 display: flex;
						 flex-direction: row;
						 margin-top: 33upx; 
					 .new-recommend-title-bar-item {
							margin-right: 42upx;
							.img-items {
					 		width: 202upx;
					 	     height: 202upx;
							 border-radius: 16upx;
					 	}
					 	.new-recommend-title-bar-item-text {
					 	.new-recommend-title-bar-item-title {
					 		/* width: 57upx;
					 		height: 26upx; */
					 		font-size: 26upx;
					 		font-family: Microsoft YaHei;
					 		font-weight: bold;
					 		color: #333333;
					 		line-height: 34upx;
					 		letter-spacing: 1px;
					 		margin-top: 20upx;
					 		margin-bottom: 18upx;
							text-align: center;
					 		}
					 		.new-recommed-type {
					 		display: flex;
					 		flex-direction: row;
					 		.peson {
												
					 		height: 36upx;
					 		padding: 0 6upx;
					 		font-size: 16upx;
					 		font-family: Microsoft YaHei;
					 		font-weight: 400;
					 		color: #CCCCCC;
					 		line-height: 34upx;
					 		border: 1px solid #E5E5E5;
					 		margin-top: 13upx;
					 		}
					 		.military {
													
					 		height: 36upx;
					 		font-size: 16upx;
					 		font-family: Microsoft YaHei;
					 		font-weight: 400;
					 		color: #CCCCCC;
					 		line-height: 34upx;
					 		border: 1px solid #E5E5E5;
					 		padding-left: 6upx;
					 		padding-right: 6upx;
					 		margin-left: 17upx;
					 		margin-top: 12upx;
					 	      }
					 		}				
					 	 }								
					 }
				 }
				
				 .new-recommend-title-bar {
					 display: flex;
					 flex-direction: row;
					 margin-top: 30upx;
					 .new-recommend-title {
						 width: 144upx;
						 height: 33upx;
						 font-size: 32upx;
						 font-family: Microsoft YaHei;
						 font-weight: bold;
						 color: #333333;
						 line-height: 34upx;
					 	 margin-right: 438upx;			 
					 }
					
					 .new-recommend-more {
					 	width: 66upx;
					    height: 32upx;
					 	font-size: 32upx;
					    font-family: Microsoft YaHei;
					 	font-weight: 400;
					 	color: #666666;
					 	line-height: 34upx;		 
					 }
					 .arrow {
						width: 16upx;
						height: 28upx;
				       margin-left: 12upx;
					 }
				 }
				
			 } 
	 	}
	 	
	 	/**
	 	 * 新闻列表 直接拿的nvue样式修改，,
	 	 * 一共需要修改不到10行代码, 另外px需要直接修改为upx，只有单位不一样，计算都是一样的
	 	 * 吐槽：难道不能在编译的时候把nuve中的upx转为px? 这样就不用修改单位了
	 	 */
	 	.video-wrapper{
	 		width: 100%;
	 		height: 440upx;
	 		.video{
	 			width: 100%;
	 		}
	 	}
	 	
	 	view{
	 		display:flex;
	 		flex-direction: column;
	 	}
	 	.img{
	 		width: 100%;
	 		height: 100%;
	 	}
	 	.news-item{
	 		position:relative;
	 	}
	 	/* 修改结束 */
	 	
	 	/* 新闻列表  emmm 仅供参考 */
	 	.news-item{
	 		width: 750upx;
	 		padding: 24upx 30upx;
	 		border-bottom-width: 1px;
	 		border-color: #eee;
	 		background-color: #fff;
	 	}
	 	.title{
	 		font-size: 32upx;
	 		color: #303133;
	 		line-height: 46upx;
	 	}
	 	.bot{
	 		flex-direction: row;
	 	}
	 	.author{
	 		font-size: 26upx;
	 		color: #aaa;
	 	}
	 	.time{
	 		font-size: 26upx;
	 		color: #aaa;
	 		margin-left: 20upx;
	 	}
	 	.img-list{
	 		flex-shrink: 0;
	 		flex-direction: row;
	 		background-color: #fff;
	 		width: 220upx;
	 		height: 140upx;
	 	}
	 	.img-wrapper{
	 		flex: 1;
	 		flex-direction: row;
	 		height: 140upx;
	 		position: relative;
	 		overflow: hidden;
	 	}
	 	.img{
	 		flex: 1;
	 	}
	 	.img-empty{
	 		height: 20upx;
	 	}
	 	
	 	/* 图在左 */
	 	.img-list1{
	 		position:absolute;
	 		left: 30upx;
	 		top: 24upx;
	 	}
	 	.title1{
	 		padding-left: 240upx; 
	 	}
	 	.bot1{
	 		padding-left: 240upx; 
	 		margin-top: 20upx;
	 	}
	 	/* 图在右 */
	 	.img-list2{
	 		position:absolute;
	 		right: 30upx;
	 		top: 24upx;
	 	}
	 	.title2{
	 		padding-right: 210upx; 
	 	}
	 	.bot2{
	 		margin-top: 20upx;
	 	}
	 	/* 底部3图 */
	 	.img-list3{
	 		width: 700upx;
	 		margin: 16upx 0upx;
	 	}
	 	.img-wrapper3{
	 		margin-right: 4upx;
	 	}
	 	/* 底部大图 */
	 	.img-list-single{
	 		width: 690upx;
	 		height: 240upx;
	 		margin: 16upx 0upx;
	 	}
	 	.img-wrapper-single{
	 		height: 240upx;
	 		margin-right: 0upx;
	 	}
	 	
	 	.video-tip{
	 		position: absolute;
	 		left: 0;
	 		top: 0;
	 		display: flex;
	 		align-items: center;
	 		justify-content: center;
	 		width: 100%;
	 		height: 100%;
	 		background-color: rgba(0,0,0,.3);
	 	}
	 	.video-tip-icon{
	 		width: 60upx;
	 		height:60upx; 
	 	} 
  }
 
</style>
