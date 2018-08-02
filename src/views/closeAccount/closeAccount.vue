<template>
	<div class="app-init">
    <div class="classification-header">
    	<header-back :title="headTitle"></header-back>

    </div>	
	<div class="absolute closeAccountCont">
		<!--头部三个选择s-->
			<div class="groupCont">

				<group label-width="4.5em" label-margin-right="2em" label-align="left" class="groupItem" >
							<popup-picker title="配送方式" :data="list" v-model="value5" value-text-align="left" ></popup-picker>
							
							<popup-picker title="时间" v-model="formatDemoValue" value-text-align="left" :data="[['01','02','03'],['11','12','13']]" :display-format="format"></popup-picker>
							
							<popup-picker title="支付方式" :data="list2" v-model="value6" value-text-align="left" ></popup-picker>
				</group>	

			</div>
		<!--头部三个选择e-->
		
		<!--商品详情-->
		<div class="goodsDetail">
			<div class="gd-title">
				素匠泰茶(Whiterock)
			</div>
			<div class="gd-cont">
				<div class="gdc-detail">
					<x-img  class="gdcd-img" v-lazy="sjtLogo"></x-img>
					
					<div  class="gdcd-price">
						<div class="gdcdp-right">
							<div>芒果奶昔</div>
							<div>+加冰+加热加冰+加热</div>
							<div>x2</div>
						</div>
						<div class="gdcdp-plus">
							$14.00
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>		
		<!--底部结算按钮s-->
	<div class="classification-footer absolute">
		<div class="cf-left">
			<div class="cfl-cont" >
				<x-img v-lazy="sjtLogo" class="iconfont icon-gouwuche ftl-gwc"></x-img>
				<div class="ftl-redPoint">
					12
				</div>
			</div>
		</div>
				<div class="cf-center">
			总价:$33.00
		</div>
				<div class="cf-right" @click="open('/home')">
			提交订单
		</div>
	</div>
	<!--底部结算按钮e-->
		
	</div>
	
</template>

<script>
import headerBack from "../../components/header-back";
import { XImg,Divider,PopupPicker } from "vux";

export default{
	name:"closeAccount",
	data(){
		return{
			headTitle: "提交订单",
			sjtLogo:"../../../static/images/mine/sjtLogo.jpg",
			list: [['堂吃', '预约', '外卖']],
			list2: [['微信支付', '支付宝', 'VISA/Master Card',"银行卡"]],
			value5: ['堂吃'],
			value6: ['微信支付'],
			formatDemoValue: ['01', '12'],
			format: function (value, name) {
	        return `${value[0]}:${value[1]}`
	      }
		}
	},
	components:{
		headerBack,
		XImg,
		PopupPicker
	},
	methods:{
		//展示规格end
	    open(link){
	    	this.$router.openPage(link);
	    }
	}
	
	
}
	
	
</script>

<style lang="scss" type="text/scss" scoped="scoped">
@import "../../assets/scss/util";

.classification-footer {
  left: 0;
  right: 0px;
  bottom: 0px;
  top: calc(100vh - 1.4rem);
  height: $footerHeight;
  display: flex;
  z-index: 111;
  .cf-left {
    flex: 1;
    background-color: rgb(80, 80, 83);
    display: flex;
    justify-content: center;
    align-items: center;
    .cfl-cont {
      width: 1.2rem;
      height: 1.2rem;
      text-align: center;
      position: relative;
	  background-color:  rgb(80, 80, 83);
      top: 0.1rem;
      .ftl-gwc {
        height: 1rem;
        color: #fff;
      }
      .ftl-redPoint {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 0.4rem;
        font-size: 0.3rem;
        color: #fff;
        background-color: #ff0000;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  .cf-center {
    flex: 3;
    background-color: rgb(80, 80, 83);
    color: #fff;
    line-height: $footerHeight;
  }
  .cf-right {
    flex: 1.5;
    background-color: rgb(46, 163, 69);
    color: #fff;
    text-align: center;
    line-height: $footerHeight;
  }
}

/*中间*/
.closeAccountCont{
	width: 100%;
	top: 0.9rem;
	bottom:  $footerHeight;
	overflow-y: auto;
	.groupCont{

	}
	.goodsDetail{
		margin-top: 0.4rem;
		background-color: #FFF;
		.gd-title{
			font-size: 0.44rem;
			border-bottom: 1px solid #DDD;
			height: 1.2rem;
			line-height: 1.2rem;
			padding-left: 0.4rem;

		}
		.gd-cont{
			.gdc-detail{
					height: 2.4rem;
					display: flex;
					font-size: 0.32rem;
				.gdcd-img{
					width: 2rem;
					height: 2rem;
					padding: 0.2rem;
					border-radius: 50%;
				}	
				.gdcd-price{
					width: calc(10rem - 2.4rem);
					height: 1rem;
					line-height: 1rem;
					display: flex;
					justify-content: space-between;		
					.gdcdp-right{
						line-height: 0.6rem;
					}
					.gdcdp-plus{
						display: flex;
						justify-content: space-between;							
					}			
				}			
			}
		}
	}
	}



.weui-cells,.vux-no-group-title{
	margin-top: 0!important;
}
</style>