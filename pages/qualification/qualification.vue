<template>
	<view class="content">
	  <view class="status_bar">
	          <!-- 这里是状态栏 -->
	      </view>
		  <view class="contentsy-nav">
			 <view class="contentsy-nav-icon el-icon-arrow-left" @click="iconleft">
			  
			  </view>
		
			  <view class="contentsy-tranmist "  @click="transmit" v-if="user_id">
				<image class="imgs" src="../../images/fx.png" mode=""></image>
			  </view>
			  <view class="contentsy-nav-share el-icon-more" @tap='moreadd'>
			  	
			  </view>
			
		  </view>
	<!-- 	<view class="" style="height: 20px; position: fixed; bottom: 0px; z-index: 2234; background-color: red;">
			222222
		</view> -->
		  <swiper class="swiper-boxt" :current="currindex" @change="changtable">
		  	<swiper-item>
		  		<view class="swiper-item-one">
				<scroll-view  :scroll-y="true" class="scroll-box" >
				<view class="text-part" v-if="loading===false">
					<view class="text-part-ul">
						<view class="text-part-li" >
							<view class="text-part-li-img">
								
								<image @tap='prenect' class="text-part-li-first-imgs" :src="  particulars.re_news_img_url  ||  particulars.special_news_img || newsobjgl.new_img_url  " mode=""></image>
				
							</view>
							<view class="text-part-li-title">
								{{particulars.re_news_title || particulars.special_news_title || newsobjgl.news_title}}
							</view>
						
							<view class="text-part-li-generalize">
						{{particulars.re_news_add_time  || particulars.special_news_add_time || newsobjgl.news_add_time}} 作者：笛音
							</view>
							
							<view class="text-part-li-user-list">
								<view class="text-part-li-user-list-ul">
									<view class="text-part-li-user-list-li" v-for=" (item,index) in newslistsDetails" :key='index'>
										<view class="text-part-li-user-list-li-action">
									    {{  item.re_news_p1 || item.special_news_p1 || newsobjgl.news_p1}}
										</view>
										<image @tap='upstroreimg(item)' :style="{height:320 + 'upx'}" class="text-part-li-user-list-li-imgs" v-if="item.re_news_p3_img===''?false:item.re_news_p3_img " :src="item.re_news_p3_img " mode=""></image>
										
										<image @tap='upstroreimg(item)' class="text-part-li-user-list-li-imgs"  v-else-if=" item.special_news_p2_img===''?false:item.special_news_p2_img " :src=" item.special_news_p2_img" mode=""></image>
										
										<image @tap='upstroreimg(item)' class="text-part-li-user-list-li-imgs"  v-else-if=" newsobjgl.news_p2_img===''?false:newsobjgl.news_p2_img " :src=" newsobjgl.news_p2_img" mode=""></image>
										
										<view class="text-part-li-user-list-li-action">
										{{  item.re_news_p2 || item.special_news_p3 ||newsobjgl.news_p3 }}
										</view>
										<image class="text-part-li-user-list-li-imgs"  v-if="item.re_news_p7_img===''?false:item.re_news_p7_img || item.special_news_p4_img===''?false:item.special_news_p4_img" :src="item.re_news_p7_img || item.special_news_p4_img" mode=""></image>
										
											<image class="text-part-li-user-list-li-imgs"  v-else-if="item.special_news_p4_img===''?false:item.special_news_p4_img" :src=" item.special_news_p4_img" mode=""></image>
											<image class="text-part-li-user-list-li-imgs"  v-else-if="newsobjgl.news_p6===''?false:newsobjgl.news_p6" :src=" newsobjgl.news_p6" mode=""></image>
										
										<view class="text-part-li-user-list-li-action"  >
										{{  item.re_news_p6 || item.special_news_p5 || newsobjgl.news_p4}}
										</view>
										<image @tap='upstroreimgs(item)' class="text-part-li-user-list-li-imgs"  v-if="item.re_news_p11===''?false:item.re_news_p11 " :src="item.re_news_p11 || item.special_news_p8_img" mode=""></image>
										
										
										<image @tap='upstroreimgs(item)' class="text-part-li-user-list-li-imgs"  v-else-if="item.special_news_p8_img===''?false:item.special_news_p8_img " :src=" item.special_news_p8_img" mode=""></image>
										
										<view class="text-part-li-user-list-li-action">
										{{  item.re_news_p9 || item.special_news_p16 || newsobjgl.news_p5}}
										</view>
										
										<view class="text-part-li-user-list-li-action">
										{{  item.re_news_p10 || item.special_news_p16 ||newsobjgl.news_p7}}
										</view>
										
										<view class="text-part-li-user-list-li-action">
										{{  item.re_news_13 ||item.special_news_p11 ||newsobjgl.news_p8}}
										</view>
										    <image @tap='upstroreimgsp(item)'  class="text-part-li-user-list-li-imgs"  v-if="item.re_news_14_img===''?false:item.re_news_14_img "  :src="item.re_news_14_img || item.special_news_p15_img" mode=""></image>
										
											<image  @tap='upstroreimgsp(item)' class="text-part-li-user-list-li-imgs"  v-else-if="item.special_news_p15_img===''?false:item.special_news_p15_img "  :src="item.special_news_p15_img" mode=""></image>
											<image  @tap='upstroreimgsp(item)' class="text-part-li-user-list-li-imgs"  v-else-if="newsobjgl.news_p6===''?false:newsobjgl.news_p6"  :src="newsobjgl.news_p6" mode=""></image>
										
										<view class="text-part-li-user-list-li-action">
										{{  item.re_news_15 || item.special_news_p16 ||newsobjgl.news_p9}}
										</view>
										
									</view>
									
								</view>
								
							</view>
						
						</view>
						
					</view>
				<!-- <view class="article_like">
				<view class="article_like_icon">
					<image class="imgs" src="../../images/like.png" mode=""></image>
				</view>
				<view class="article_like_number">
					331人喜欢
				</view>
				</view> -->
				
					<!-- 文章评论 -->
						<!-- <view class="comments"  >
							<view class="comments-number">
								共11条评论
							</view> 
							<comments v-for="(item,index) in comment" :key='item.id' :comment='item'></comments>
							
						</view> -->
					
			    </view>
			
								
					<!-- 加载图标 -->
				<mixLoading class="mix-loading" v-if="loading"></mixLoading>
								
				</scroll-view>	
				
			</view>
		  	</swiper-item>
		 
		  </swiper>
	
	
			<!-- 底部评论 -->
		  <view class="bottom" @touchmove.stop.prevent="" >
		<ygcComment
		ref="ygcComment" 
		        :placeholder="'发布评论'" 
		        @pubComment="pubComment"
		>
			
		</ygcComment>
		<popup  ref="popup" type="bottom">
			<view class="transmit" >
				<view class="transmit-top">
					<view class="transmit-top-left">
						分享
					</view>
					<view class="transmit-top-right"  @click="retransmission">
						立即转发
					</view>
					
					
				</view>
				<view class="transmit-input">
					<input  type="text" class="text" @input="transmitInpt"   v-model="transtxt" placeholder="说点什么吧" />
				</view>
				<view class="transmit-matter">
					<view class="transmit-matter-title">
						@笛音
					</view>
					<view class="transmit-matter-quers">
						<image class="imgs" src="../../images/gg.jpg" mode=""></image>
						<view class="transmit-matter-quers-text">
						{{particulars.re_news_title}}
						</view>
						
					</view>
					
					
				</view>
				<view class="transmit-distinction-ul">
					<!-- <view class="transmit-distinction-li">
					<view class="transmit-distinction-li-item" @tap='weixin'>
						<view class="transmit-distinction-li-img">
							<image class="transmit-distinction-li-img-icon" src="../../images/wechat.png" mode=""></image>
						</view>
						<view class="transmit-distinction-li-text">
							微信
						</view>
					</view>
						
					</view> -->
					
					<view class="transmit-distinction-li">
					<view class="transmit-distinction-li-item" @tap='QQ'>
						<view class="transmit-distinction-li-img">
							<image class="transmit-distinction-li-img-icon" src="../../images/wechat.png" mode=""></image>
						</view>
						<view class="transmit-distinction-li-text">
							QQ
						</view>
					</view>
						
					</view>
					
					<view class="transmit-distinction-li">
					<view class="transmit-distinction-li-item">
						<view class="transmit-distinction-li-img">
							<image class="transmit-distinction-li-img-icon" src="../../images/wechat.png" mode=""></image>
						</view>
						<view class="transmit-distinction-li-text">
							微博
						</view>
					</view>
						
					</view>
					
					<view class="transmit-distinction-li">
					<view class="transmit-distinction-li-item">
						<view class="transmit-distinction-li-img">
							<image class="transmit-distinction-li-img-icon" src="../../images/wechat.png" mode=""></image>
						</view>
						<view class="transmit-distinction-li-text">
							朋友圈
						</view>
					</view>
						
					</view>
					
				</view>
				
				<view class="countermand" @click="countermand">
					取消
				</view>
			</view>
			
		
		</popup>
		  	<!-- <view class="input-box">
		  		<text class="yticon icon-huifu"></text>
		  		<view
				@click="toggleMask('show')"
					class="input"
					type="text" 
				
				>
				点评一下把..
				</view> 
				
		  		
		  	</view> -->
			<view class="input-box-right" style="width: 550px;">
				<view class="input-box-right-li"  >
					<view class="input-box-right-icon" v-if="favorites===0" @tap='assist'>
						<image class="imgs" src="../../images/zan.png" mode=""></image>
					</view>
					<view class="input-box-right-icon" v-if="favorites===1" @tap='clearassist'>
						<image class="imgs" style="width: 35upx; height: 35upx; margin-right: 10upx; margin-top: 5upx;"  src="../../images/zanxuan.png" mode=""></image>
					</view>
					<view class="input-box-right-number">
					<!-- {{particulars.numsArray.dianzan_num}} -->
					</view>
				</view>
				
			    <view class="input-box-right-li">
				<view  @tap='enshrine' style="font-size: 18px;" class="input-box-right-icon el-icon-star-off" v-if="favorite===0">
					
				</view>
				<image @tap='clearfavorite' v-if="favorite===1" style="width: 35upx; height: 35upx; margin-right: 10upx; margin-top: 5upx;" src="../../images/shouxuan.png" mode=""></image>
				<view class="input-box-right-number">
					<!-- {{particulars.numsArray.collect_num}} -->
				</view>
			</view>
			
			<!-- <view class="input-box-right-li">
				<view class="input-box-right-icon el-icon-chat-dot-round">
				
				</view>
				<view class="input-box-right-number">
					2
					
				</view>
			</view> -->
			</view>
		  </view>
	</view>
</template>

<script>
	import json from '@/json';
	
	import {comment} from '../../comment.js'
	import comments from '../../components/comments/comments.vue'
	import popup from '../../components/uni-popup/uni-popup.vue'
	import ygcComment from '../../components/ygc-comment/ygc-comment.vue';
	import mixLoading from '@/components/mix-loading/mix-loading';
	export default {
		components: {
			mixLoading,
			ygcComment,
			popup,
			comments,
		
		},  
		data() {
			return {
				transtxt:'',
				favorite:0,
				favorites:0,
				particulars:{},
				particularslist:[],
			
				loading: true,
				madeid:0 ,
				detailData: {},
				newsList: [],
				evaList: [],
				currindex:0,
				//导航信息
				navbar:[
					{id:1,title:'正文'},
					{id:2,title:'评论'}
				],
				//文章评论
				comment:[],
			newslistsDetail:{},
			newslistsDetails:[],
			detaId:1,
			ids:1,
			jourId:1,
			itemid:'',
			newsobjgl:{},
			user_id:'',
			// itemp:{},
		
			} 
		},
		onLoad(options){
		 const user_id = uni.getStorageSync('user_id')
		this.user_id = user_id
		
		this.jourId = parseInt( options.items)
		  
		console.log(this.jourId)
			
			this.detaId =  options.item
		
			this.itemid = 	 parseInt( options.itemid)
			console.log(	this.itemid)
		this.ids =  parseInt(this.detaId)
			// this.detailData = JSON.parse(options.data);
			// this.itemp =  JSON.parse(decodeURIComponent(options.itemp)) 
			// console.log(this.itemp)
			this.comment = comment
			
		},
		onShow() {
			
		},
		 mounted() {
			this.loadNewsList();
			this.loadEvaList();
		this.getRecommendNewsDetail()
		this.getSpecialDetail()
	
		this.getSpecialGlDetail()
		},
		methods: {
			//推荐新闻资讯详情
			async getRecommendNewsDetail () {
			
				// tabnav
				let idst = this.ids
				console.log(idst)
					 const user_id = uni.getStorageSync('user_id')
				 let data = await this.$http.post('/api/getRecommendNewsDetail',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						re_id:idst ,
						user_id:user_id
						// search_value:'腾讯'
					
				 });
				  
					const {DATA} = data
					if (data.CODE==='200') {
				
						this.newslistsDetail = DATA
						this.particulars = this.newslistsDetail
						this.newslistsDetails.push(this.newslistsDetail) 
				console.log(this.particulars)
					 // uni.setStorageSync('show', DATA.re_news_show);
					}
					if (DATA.is_collect===0  ) {
								this.favorite = 0	
							
					} else if (DATA.is_collect===1 ) {
							this.favorite = 1
							
					}
					
					if (DATA.is_dianzan===0  ) {
							
							    this.favorites = 0 
					} else if (DATA.is_dianzan===1 ) {
						
							this.favorites = 1
					}
			},
			//专题新闻资讯详情
			async getSpecialDetail () {
			
				 const user_id = uni.getStorageSync('user_id')
			
				 let data = await this.$http.post('/api/getSpecialDetail',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						id:this.jourId,
						user_id:user_id
						// search_value:'腾讯'
					
				 });
				  
					const {DATA} = data
					if (data.CODE==='200') {
						
						  this.newslistsDetail = DATA
						  this.particulars = this.newslistsDetail
						  console.log( DATA)
						  if (DATA.is_collect===0  ) {
						  			this.favorite = 0	
						  		
						  } else if (DATA.is_collect===1 ) {
						  		this.favorite = 1
						  		
						  }
						  
						  if (DATA.is_dianzan===0  ) {
						  		
						  		    this.favorites = 0 
						  } else if (DATA.is_dianzan===1 ) {
						  	
						  		this.favorites = 1
						  }
						  this.newslistsDetails.push(this.newslistsDetail) 
				// 		this.newslistsDetail = DATA
				// 		this.particulars = this.newslistsDetail
				// 		this.newslistsDetails.push(this.newslistsDetail) 
				
				// 	 uni.setStorageSync('show', DATA.re_news_show);
					}
			},
			
			//首页游戏攻略详情
			async getSpecialGlDetail () {
			
				 const user_id = uni.getStorageSync('user_id')
			
				 let data = await this.$http.post('/api/getSpecialGlDetail',{
					 	token:'d6a2fa16e60777e390256ec85cc2f42e',
						id:this.itemid,
						
						// search_value:'腾讯'
					
				 });
				  
					const {DATA} = data
					if (data.CODE==='200') {
						this.newsobjgl = DATA
				
						  this.newslistsDetails.push(this.newsobjgl) 
					}
			},
			//转发
			retransmission () {
		
			},
			fcus () {
				console.log(222)
			},
			//打开评论组件
			toggleMask (type) {
				
					this.$refs.ygcComment.toggleMask(type);
			},
			//发布按钮
			pubComment (va) {
				console.log(va)
				// uni.showToast({
				// 	title:'评论成功',
				// 	icon:'none'
				// })
			},
			iconleft () {
				// uni.switchTab({
				// 	url:'../index/index'
				// })
				uni.navigateBack()
			},
			//收藏
		async	enshrine () {
			 const user_id = uni.getStorageSync('user_id')
				let data = await this.$http.post('/api/addDetailCollect',{
				 detail_id:this.ids || this.jourId,
				 token:'d6a2fa16e60777e390256ec85cc2f42e',
				 user_id:user_id,
				 place_param:'news'
				});
			
				const {CODE} = data
			    if (CODE==="200") {
					uni.showToast({
							title:'收藏成功',
						
					})
					this.favorite = 1
					this.getRecommendNewsDetail() || this.getSpecialDetail()
					
			     }
			},
			//取消收藏
			async clearfavorite () {
				const user_id = uni.getStorageSync('user_id')
				let data = await this.$http.post('/api/cancelDetailCollect',{
				 detail_id:this.ids || this.jourId,
				 token:'d6a2fa16e60777e390256ec85cc2f42e',
				 user_id:user_id,
				place_param:'news'
			 });
			 const {CODE} = data
			   if (CODE==="200") {
				   uni.showToast({
				   		title:'收藏取消',
				   	
				   })
				   	this.favorite = 0
					this.getRecommendNewsDetail() || this.getSpecialDetail()
					
			   }
			},
			
			//点赞
			async	assist () {
				 const user_id = uni.getStorageSync('user_id')
					let data = await this.$http.post('/api/addDetailDianZan',{
					 detail_id:this.ids || this.jourId,
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					 user_id:user_id,
					 place_param:'news'
					});
						console.log(data)
					console.log(data.CODE)
					const {CODE} = data
				    if (CODE==="200") {
						
						this.favorites = 1
						this.getRecommendNewsDetail() || this.getSpecialDetail()
					
				     }
				},
				//取消点赞
				async clearassist () {
					const user_id = uni.getStorageSync('user_id')
					let data = await this.$http.post('/api/cancelDetailDianZan',{
					 detail_id:this.ids || this.jourId,
					 token:'d6a2fa16e60777e390256ec85cc2f42e',
					 user_id:user_id,
					place_param:'news'
				 });
				 const {CODE} = data
				   if (CODE==="200") {
					 
					   	this.favorites = 0
						this.getRecommendNewsDetail() || this.getSpecialDetail()
					
				   }
				},
			fn () {
				  
				this.madeid=1
			},
			fnt () {
			this.madeid=0
			
			},
			changeclick (va) {
	           this.currindex=va
			},
			changtable (va) {
				this.currindex = va.detail.current
			},
			//获取推荐列表
			async loadNewsList(){
				let list = await json.newsList;
				setTimeout(()=>{
					list.sort((a,b)=>{
						return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
					})
					list.length = 5;
					list.forEach(item=>{
						this.newsList.push(item);
					})
				 
					this.detailData.flow = `<div style="font-size:15px;color: #555;line-height: 25px"><h1 style="margin: 0px; font-weight: normal; font-size: 26px; font-family: 微软雅黑; text-align: center; line-height: 30px; white-space: normal; background-color: rgb(255, 255, 255);"><br/></h1><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><img style="width: 100%;max-width: 100% !important;" src="http://app.shundecity.com/data/upload/yangtata/20190414/1555206583915888.jpg" border="0" hspace="0" vspace="0" data-bd-imgshare-binded="1" style="margin: 0px; padding: 0px; border: none; max-width: 90%;"/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;">市委常委、顺德区委书记郭文海赴勒流调研。<br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　昨日（4月13日），市委常委、顺德区委书记郭文海利用周末时间到勒流街道江村、黄连社区调研村级工业园改造、乡村振兴工作。郭文海表示，村级工业园改造和城乡形态提升是勒流目前面临的两大任务，要下定决心以城产人融合标准做好村级工业园连片改造的规划，健全生态体系建设；文化振兴是乡村振兴战略的源头活水，勒流要挖掘弘扬乡村民俗文化，为乡村振兴战略提供坚实的文化支撑，同时要充分发挥党建引领作用，广泛发动群众参与社区营造，自己家园自己建，打造美丽文明乡村。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　勒流今年以五金创新小镇·滨水生态区、中部产业园及富安工业区为着力点，重点推进龙眼、江村、新安三个村级工业园区的改造，吸引优质产业集聚，打造南、中、北三大产业集中布局组团，借助村级工业园改造的契机，让勒流的产业布局和城市面貌得到优化和提升。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　其中，江村工业区计划由改造方分单元进行连片改造，以绿色环保为导向，突出智能制造，打造“环境科技产业基地”；新安工业区初步划分为东、中、西三个改造区域，通过“退二进三”，建设集居住、商业、娱乐于一体的生活服务区，为富安工业区及周边村居提供配套设施服务。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海表示，勒流位于顺德的地理中心，是顺德的腹地，且工业基础雄厚，工业产值在顺德镇街中排名第三，发展潜力巨大，在村级工业园改造升级过程中，要下定决心做好连片改造的规划，腾出空间完善城市配套，以城产人融合标准健全生态体系建设，形成经济效益、生态效益、社会效益的三重丰收，为进驻企业提供优质的工作生活环境。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　古韵绵绵，河水潺潺，组成一幅优美的岭南水乡画卷。在千年古村黄连，文化营造和水乡生态修复、乡土美食推广、民宿建设构成了黄连振兴乡村，建设美丽文明村居的四大发展思路。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海参观了画家艺术村、藩侯何公祠、广绣坊。目前，黄连画家艺术村设有8个入驻画家工作室和10个流动流动艺术家创作驿站，画家村艺术活动非常活跃；黄连广绣作为顺德的传统文化和国家级非物质文化遗产，如今在黄连广绣坊开展有师资培训班、绣娘屋、亲子夏令营、广绣传承进校园等活动，激活、创新广绣技艺。值得一提的是，黄连社区把“厕所革命”与生态文明建设有机结合，优化提升人居环境和文旅公共服务水平。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海分别与画家村驻村画家及广绣坊学员亲切交流，并“点赞”黄连社区乡村振兴工作的开展成效。郭文海表示，文化振兴是乡村振兴战略的源头活水，千年古村黄连拥有深厚的民俗文化底蕴，需要挖掘、弘扬和发扬光大，将黄连的民俗文化做成黄连特色，必然会为乡村振兴提供坚实的文化支撑；同时，黄连的乡村振兴工作也离不开党建引领和社区营造，要充分发挥党建引领作用，广泛发动群众参与社区营造，自己家园自己建，打造“近者悦，远者来”的美丽文明乡村。（姚易　通讯员顺宣）</p><p><br/></p></div>`;
					this.loading = false;
				}, 1000)
			},
			//获取评论列表
			async loadEvaList(){
				this.evaList = await json.evaList;
			},
			//转发
			transmit () {
			uni.showToast({
			  title:'该功能暂未开放 敬请期待!', 
			  icon:'none',
			  duration:2000
			})
				// this.$refs.popup.open()
				// this.focus  = true
			},
			//取消分享
			countermand () {
				this.$refs.popup.close()
			},
			//查看别人主页
			lookpage () {
				uni.navigateTo({
					url:'../homepage/homepage'
				})
			},
			//分享输入信息
			transmitInpt (va) {
			 this.transtxt = va.detail.value
			 console.log( this.transtxt)
			},
			//更多
			moreadd () {
				uni.showToast({
				  title:'该功能暂未开放 敬请期待!', 
				  icon:'none',
				  duration:2000
				})
			},
			//分享微信
			// weixin () {
			//    uni.share({ 
			//    provider: "weixin",
			//    scene: "WXSceneSession",
			//    type: 0,
			//    href:this.particulars.re_news_title_url,
			//    title:this.particulars.re_news_title,
			//    summary:this.particulars.re_news_intro,                         
			//    imageUrl: "http:*******************",
			//    success: function(res) {
			//    console.log(res);
			//    },
			//    fail: function(err) {
			//    console.log("fail:" + JSON.stringify(err));
			//    }
			//  });
			
			// },
			QQ () {
			  uni.share({
			    provider: "qq",
			  //   scene: "WXSceneSession",
			    type: 0,
			    href:this.particulars.re_news_title_url,
			    title:this.particulars.re_news_title,
			    summary:this.particulars.re_news_intro,                         
			    imageUrl: "http:*******************",
			    success: function(res) {
			    console.log(res);
			    },
			    fail: function(err) {
			    console.log("fail:" + JSON.stringify(err));
			    }
			  });
			},
			prenect () {
		    let photoList = [];
			const imgall =  this.particulars.re_news_img_url  ||  this.particulars.special_news_img || this.newsobjgl.new_img_url  
			photoList.push(imgall)
			 uni.previewImage({
			    current: 0,
			    urls:photoList  
			   });
			},
			upstroreimg (va) {
		    let photoList = [];
			const imgsall = va.special_news_p2_img || va.re_news_p3_img || this.newsobjgl.news_p2_img
			photoList.push(imgsall)
		 
			uni.previewImage({
			   current: 0,
			   urls:photoList  
			  });
			},
			upstroreimgs (va) {
			let photoList = [];
			const imgsall = va.re_news_p11 || va.special_news_p8_img
			photoList.push(imgsall)
					 
			uni.previewImage({
			   current: 0,
			   urls:photoList  
			  });
			},
			upstroreimgsp (va) {
			let photoList = [];
			const imgsall = va.re_news_14_img || va.special_news_p8_img || va.special_news_p15_img || this.newsobjgl.news_p6
			photoList.push(imgsall)
					 
			uni.previewImage({
			   current: 0,
			   urls:photoList  
			  });
			},
			
		}
	}
</script>

<style lang="scss">
	page, .content{
		
		background-color: #ffff;
		height: 100%;
		overflow: hidden;
	}
	.status_bar {
	
	     height: var(--status-bar-height);
	     width: 100%; 
		
		
	 }
	.content {
		padding-bottom: 50px; 
		.bottom{
			
			position: fixed;
			bottom: 0px;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			height: 90upx;
			padding: 0 40upx;
			box-shadow: 0 -1px 3px rgba(0,0,0,.04); 
			background-color: #fff;
			z-index: 1111111111;
			.transmit {
				height: 622upx;
				background: #FFFFFF;
				border-radius: 20upx 20upx 0px 0px;
				.countermand {
					margin-top: 40upx;
				    margin-left: 30upx;
					margin-right: 30upx;
					letter-spacing: 2px;
					height: 72upx;
					background: #F4F4F4;
					text-align: center;
					line-height: 72upx;
					font-size: 30upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
				}
				.transmit-top {
					 display: flex;
					padding-top: 32upx;
					.transmit-top-left {
						flex: 1;
						// width: 52upx;
						height: 25upx;
						font-size: 24upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #666666;
						line-height: 34upx;
						margin-left: 30upx;
						letter-spacing: 1px;
					}
					.transmit-top-right {
						// width: 131upx;
						height: 29upx;
						font-size: 28upx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #333333;
						line-height: 34upx;
						margin-right: 30upx;
						letter-spacing: 1px;
					}
				}
				.transmit-input {
					padding-left: 30upx;
					padding-right: 30upx;
					padding-top: 35upx;
					background-color: #fff;
					padding-bottom: 33upx;
					.text {
						font-size: 28upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						// color: #1482FF;
						line-height: 43upx;
					
					}
				}
				.transmit-matter {
					margin-left: 30upx;
					margin-right: 30upx;
					margin-bottom: 50upx;
					height: 170upx;
					background: #F7F7F7;
					border-radius: 4upx 4upx 0px 4upx;
					.transmit-matter-title {
						padding-top: 23upx;
						padding-left: 20upx;
						letter-spacing: 1px;
						padding-bottom: 20upx;
						color: #1482FF;
					}
					.transmit-matter-quers {
						
						display: flex;
						.imgs {
							width: 68upx;
							height: 68upx;
							margin-left: 20upx;
							border-radius: 4upx;
							margin-right: 18upx;
							
						}
						.transmit-matter-quers-text {
							// width: 566upx;
							height: 24upx;
							font-size: 24upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #999999;
							line-height: 43upx;
							letter-spacing: 1px;
							margin-top: 12upx;
						}
					}
				}
				.transmit-distinction-ul {
						display: flex;
					padding-left: 30upx;
					padding-right: 30upx;
					margin-left: 20upx;
					.transmit-distinction-li {
						margin-right: 59upx;
						.transmit-distinction-li-item {
							.transmit-distinction-li-img {
								width: 74upx;
								height: 74upx;
								border: 1px solid #BFBFBF;
								border-radius: 50%;
								margin: 0 auto;
								.transmit-distinction-li-img-icon {
									width: 44upx;
									height: 36upx;
									margin-left: 15upx;
									margin-right: 15upx;
									margin-top: 19upx;
									text-align: center;
								}
							}
							.transmit-distinction-li-text {
								font-size: 24upx;
								font-family: Microsoft YaHei;
								font-weight: 400;
								color: #999999;
								line-height: 34upx;
								letter-spacing: 2px;
								margin-top: 15upx;
								// margin-left: 10upx;
								text-align: center;
							}
						}
					
					}
				}
			}
			.input-box-right {
				 display: flex;
				.input-box-right-li {
					display: flex;
					margin-right: 38upx;
					margin-top: 10upx;
					.input-box-right-icon {
					  margin-right: 12upx;
					  // font-size: 36upx;
					  margin-top: 4upx;
					  .imgs {
						  width: 35upx;
						  height: 35upx;
					  }
					}
					.input-box-right-number {
						// width: 45px;
						// height: 23px;
						font-size: 28upx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #333333;
						line-height: 43upx;
						
					}
				}
			}
			.input-box{
				display: flex;
				align-items: center;
				width: 380upx;
				height: 60upx;
				background: #f2f3f3;
				border-radius: 200upx;
				padding-left: 30upx;
				margin-right: 38upx;
				.icon-huifu{
					font-size: 28upx;
					color: #909399;
				}
				.input{
					padding: 0 75upx 0 0 ;
					margin-left: 25upx;
					font-size: 28upx;
					color: #303133;
					
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
					line-height: 43upx;
					letter-spacing: 1px;
				}
			}
			.confirm-btn{
				font-size: 30upx;
				padding-left: 20upx;
				color: #0d9fff;
			}
		}
		.contentsy-nav {
				
					 display: flex;
					 height: 88upx;
					 margin-left: 30upx;
					 margin-right: 30upx;
					z-index: 222222;
				 
					 .contentsy-nav-icon {
						 width: 18upx;
						 height: 32upx;
						 font-size:40upx;
						 flex: 1;
						 margin-right: 202upx;
					 }
					
					 .contentsy-tranmist {
						 margin-right: 32upx;
						 .imgs {
							 width: 32upx;
							 height: 32upx;
						 }
					 }
					 .contentsy-nav-share {
						 width: 38upx;
						 height: 8upx;
						 // margin-left: 75upx;
					 }
		     }
	
		 .swiper-boxt {
			height: 640px;
			 .swiper-item-one {
			height: 100%;
		   .scroll-box {
			
	       	height: 100%;
			.text-part {
				.comments {
					margin-top: 50upx;
					.comments-number {
					 // width: 138upx;
					 // height: 23upx;
					 font-size: 24upx;
					 font-family: Microsoft YaHei;
					 font-weight: 400;
					 color: #999999;
					 line-height: 43upx;
					 margin-left: 30upx;
					 margin-bottom: 30upx;
					 letter-spacing: 1px;
					}
					// height: 220px;
				
					
				}
				.text-part-ul {
				
					.text-part-li {
						.text-part-li-img {
						
								height: 320upx;
							.text-part-li-first-imgs {
								width: 750upx;
								height: 320upx;
							}
						}
						.text-part-li-title {
							width: 680upx;
							height: 80upx;
							font-size: 36upx;
							font-family: Microsoft YaHei;
							font-weight: bold;
							color: #333333;
							line-height: 50upx;
							margin: 24upx 40upx 43upx 30upx ;
							
						}
						.text-part-li-generalize {
							padding-left: 30upx;
							padding-right: 30upx;
							font-size: 22upx;
							font-family: Microsoft YaHei;
							font-weight: 400;
							color: #CCCCCC;
							// line-height: 50upx;
						}
						.text-part-li-user-list {
							margin-top: 33upx;
							.text-part-li-user-list-ul {
								margin-bottom: 40upx;
								.text-part-li-user-list-li {
									margin-bottom: 25upx;
									.text-part-li-user-list-li-action {
										width: 689upx;
										// height: 327upx;
										font-size: 30upx;
										font-family: Microsoft YaHei;
										font-weight: 400;
										color:#333;
										line-height: 45upx;
										margin-left: 30upx;
										margin-right: 30upx; 
										margin-bottom: 25upx;
										line-height: 55upx;
									}
									.text-part-li-user-list-li-imgs {
										width: 750upx;
										height: 750upx;
									}
								}
							}
							
						}
					 }
				 }
				 .article_like {
				width: 195upx;
				height: 58upx; 
				margin:  0 auto;
				border: 1px solid #FD652A;
				border-radius: 29upx;
				display: flex;
				justify-content: center;
			
					padding-right: 18upx;
				.article_like_icon {
					flex: 1;	
					padding-left: 18upx;
					margin-top: 2px;
					.imgs {
						width: 30upx;
						height: 26upx;
					}
				 }
				  .article_like_number {
					// width: 103upx;
					height: 24upx;
					font-size: 24upx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #FD652A; 
					line-height: 43upx;
					text-align: center;
					// padding-right: 18upx;
					margin-top: 2px;
					// letter-spacing: 1px;
				   }
				 }
			 }
		  }
	   }
	}	
}
	
</style>

