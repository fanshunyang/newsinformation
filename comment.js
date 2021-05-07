const comment = [
	{
		id:1,
		title:'大胡子-HX',
		time:'41',
		desc:'	使命召唤，我挺普莱斯',
		parent:{
		 //评论者
		title:'大旭他媳妇',
		reply_id:1,
		desc:'是的我也这么认为',
		//被评论者
		reviewers_title:'大胡子-HX',
		parent : {
		 reply_id:2,
		 //评论者
		 title:'宝哥',
		 desc:'个人感觉还是肥皂给力',
		 //被评论者
		 reviewers_title:'大旭他媳妇',
		 parent : {
			reply_id:3,
			//评论者
			title:'一枝梨花压海棠',
			desc:'可惜了肥皂。。。111222222222', 
			//被评论者
			reviewers_title:'宝哥',
			parent : {
				reply_id:4,
				//评论者
				title:'我是谁',
				desc:'没毛病，老铁', 
				//被评论者
				reviewers_title:'大胡子-HX',
			}
		 }
		}
	  },
	},
	{
		id:2,
		title:'你过来呀',
		time:'21',
		desc:'	使命召唤，我挺普莱斯',
		parent:{
		reply_id:1,
		desc:'是的我也这么认为',
		parent : {
		 reply_id:2,
		 desc:'个人感觉还是肥皂给力',
		 parent : {
			reply_id:3,
			desc:'可惜了肥皂。。。', 
		 }
		}
	  }, 
	},
	{
		id:3,
		title:'大胡子-HX',
		time:'41',
		desc:'	使命召唤，我挺普莱斯',
		parent:{
		reply_id:1,
		desc:'是的我也这么认为',
		parent : {
		 reply_id:2,
		 desc:'个人感觉还是肥皂给力',
		 parent : {
			reply_id:3,
			desc:'可惜了肥皂。。。', 
		 }
		}
	  },
	},
	{
		id:4,
		title:'大胡子-HX',
		time:'41',
		desc:'	使命召唤，我挺普莱斯',
		parent:{
		reply_id:1,
		desc:'是的我也这么认为',
		parent : {
		 reply_id:2,
		 desc:'个人感觉还是肥皂给力',
		 parent : {
			reply_id:3,
			desc:'可惜了肥皂。。。', 
		 }
		}
	  },
	},
	{
		id:5,
		title:'大胡子-HX',
		time:'41',
		desc:'	使命召唤，我挺普莱斯',
		parent:{
		reply_id:1,
		desc:'是的我也这么认为',
		parent : {
		 reply_id:2,
		 desc:'个人感觉还是肥皂给力',
		 parent : {
			reply_id:3,
			desc:'可惜了肥皂。。。', 
		 }
		}
	  },
	}
]
export {comment}