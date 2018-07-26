<template>
	<div class="app-init">
		<swiper :list="banner"></swiper>
		 
		 <!--热门三种按钮-->
		<div class="topFire_cont">
			<div v-for="(tf_src) in topFire_src" class="tf_cell">
				<section @click="open(tf_src.linkTo)">
					<x-img v-lazy="tf_src.src" :web-src="`${tf_src.src}?type=webp`" class="tf_img"></x-img>
					<div class="tf_title">{{tf_src.title}}</div>
				</section>
			</div>
		</div>
		<div class="bodyCont scroll-box-y">
		
		<!--三种分类-->
		<div class="detailFire_cont">
			<div v-for="(df_src) in detailFire_src" class="df_cell">
				<div class="df_header">
					<x-img v-lazy="df_src.src" :web-src="`${df_src.src}?type=webp`" class="dfh_img"></x-img>
					<p class="dfh_title">{{df_src.title}}</p>
				</div>
				<div class="df_body">
					<div v-for="(dfb_body) in df_src.body" class="dfb_item">
						<x-img  v-lazy="dfb_body.bodySrc" :web-src="`${dfb_body.bodySrc}?type=webp`" class="dfb_img"></x-img>
						<p class="dfb_name">{{dfb_body.name}}</p>
						<p class="dfb_price">{{dfb_body.price}}</p>
					</div>
				</div>
				
				
			</div>
			
		</div>
		</div>
		
	</div>
</template>

<script>
	import swiper from '../../components/swiper';
	import {XImg,Flexbox, FlexboxItem} from 'vux';
	//获取微信第一次登录参数 
	function getUrlParam(sHref, sArgName){
          var args  = sHref.split("?");
          var retval = "";
          if(args[0] == sHref) /*参数为空*/
          {
               return retval; /*无需做任何处理*/
          }  
          var str = args[1];
          args = str.split("&");
          for(var i = 0; i < args.length; i ++)
          {
              str = args[i];
              var arg = str.split("=");
              if(arg.length <= 1) continue;
              if(arg[0] == sArgName) retval = arg[1]; 
          }
//        console.log(retval)
          return retval;
    	}
	
	export default{
		name:"home",
		data(){
			return {
				home:"home",
				banner: [{
						src: '../../../static/images/home/testImg1.jpg',
						href: '/detail/1007'
					},
					{
						src: '../../../static/images/home/testImg2.jpg',
						href: '/detail/1009'
					}
				],
				topFire_src:[{
					src:"../../../static/images/home/tf_zhaopai.png",
					title:"店长推荐",
//					title:this.$t('message.hello'),
					linkTo:"/classification"
				},{
					src:"../../../static/images/home/tf_dianzhang.png",
					title:"招牌特饮",
					linkTo:"/classification"
				},{
					src:"../../../static/images/home/tf_yuding.png",
					title:"预定下单"
				}],
				detailFire_src:[{
					src:"../../../static/images/home/fire_icon.png",
					title:"单季精选——",
					body:[{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					}]
				},{
					src:"../../../static/images/home/zan_icon.png",
					title:"店长推荐——",
					body:[{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					}]
				},{
					src:"../../../static/images/home/crown_icon.png",
					title:"招牌饮品——",
					body:[{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					},{
						bodySrc:'../../../static/images/home/testImg1.jpg',
						name:"桃子茶",
						price:"$25.00"
					}]
				}],				
			}
		},
		mounted:function(){
			var strUrl=location.href.split('#')[0];
			console.log(strUrl)
			var resultCode = getUrlParam(strUrl,"response_type");
			console.log(resultCode)
			
		},
		methods:{
			open(link){
				console.log(link)
				this.$router.openPage(link);
			}
		},
		components:{
			swiper,
			XImg,
			Flexbox,
			FlexboxItem
		}
		
	}
	
</script>

<style scoped="scoped" lang="scss">
	@import "../../assets/scss/util";

	
	.bodyCont{
		position: absolute;
	    width: 100%;
	    left: 0;
	    background-color: #fff;
	    top: 5rem;
	    bottom: 1.43rem;
	}
	
	.topFire_cont{
		.tf_cell{
			width: calc(100% / 3);
			height: 100%;
			display: inline-block;
			section{
				width: 100%;
				height: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #000000;
				.tf_img{
					width: 1.2rem;
					height: 1rem;
					margin-bottom: .1rem;
				}
			}
		}
	}
	
	.detailFire_cont{
		.df_cell{
			background-color:$bodyBackgroundColor;
		.df_header{
			height: 1rem;
			padding-left: .4rem;
			display: flex;
			align-items: center;
			.dfh_img{
					width: .6rem;
					height: .6rem;		
			}
			.dfh_title{
				display: inline-block;
				padding-left: .1rem;
				font-size: .4rem;
				color: rgb(254,122,16);
			}
		}
		.df_body{
			display: flex;
			flex-wrap: wrap;
			.dfb_item{
				width: calc(100% / 3);
				display: inline-block;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #FDA544;
				padding: 0.2rem;
				@include box-sizing;
				.dfb_img{
					width: 2rem;
					height: 1.2rem;
					border-radius: 1.2rem;
					padding-bottom: 0.1rem;
				}
				.dfb_name,.dfb_price{
					font-size: 0.3rem;
				}
			}
			
		}
		}
		
	}
	

	
	/*.footer{
		position: absolute;
		z-index: 400;
		bottom: 0;
	}*/

</style>