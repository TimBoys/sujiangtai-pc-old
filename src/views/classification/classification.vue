<template>
	<div class="classification">
    <div class="classification-header">
    	<header-back :title="headTitle"></header-back>

    </div>		
    
	<div class="warp-box" ref="boxCont">
    	<swiper :list="banner"></swiper>
		<div class="classificationCont">
		<div class="left-menu absolute scroll-box-y" ref="left">
			<ul>
				<li class="item" v-for="(target,index) in dataItem" :class="{ 'active': index == active }" @click="jumpToTarget(index)" :key="index">{{target.name}}</li>
			</ul>
		</div>
		
		<div class="right-box absolute scroll-box-y" ref="rightView">
			<ul>
				<li class="item" v-for="(target,index) in dataItem" :key="index">
				<p class="title">
					<span>{{target.name}}</span>
				</p>
				<div class="shop-item-wrap clear">
					<div class="shop-item" v-for="(shop,index) in target.children" @click="showModel(shop)" :key="index">
                			<x-img v-lazy="shop.src" alt=""></x-img>
                			<div class="shop-detail">
                				<div class="shopd-title">{{shop.name}}</div>
                				<div class="shopd-detail">
                					<div>乌龙茶</div>
                					<div>月售333份</div>
                				</div>
                				<div class="shopd-pAdd">
                					<div class="shopdpa-price">$22.00</div>
                					<div class="shopdpa-add">
                						 <x-icon type="ios-plus" class="cell-x-icon" ></x-icon>
                					</div>
                				</div>
                			</div>
						
					</div>
				</div>
				</li>
			</ul>			
			
		</div>
		</div>
	</div>


	<div class="classification-footer absolute">
		<div class="cf-left">
			<div class="cfl-cont" @click="gwcMask">
				<div class="iconfont icon-gouwuche ftl-gwc">
			</div>
				<div class="ftl-redPoint">
					12
				</div>
			</div>
			
		</div>
				<div class="cf-center" @click="gwcMask">
			总价:$33.00
		</div>
				<div class="cf-right">
			去结算
		</div>
	</div>
	
	<!--购物车-->
	<div class="gouwuche absolute" :class="{'maskLeave':isMaskLeave}">
		<div class="gwc-mask"  @click.self="gwcMask">
			<div class="gwc-cont absolute">
				<div class="gwc-clear">
					<span class="gwcc-yixuan">已选商品</span>
					<span class="gwcc-qk"><span class="delete iconfont icon-del"></span>清空</span>
				</div>
				<div class="gwc-detail">
					<div class="gwcd-item" v-for="(gwcItem,index) in gwcData" :key="index">
						<div class="gwcdi-left">
							<div class="gwcdil-top">{{gwcItem.gwcdilTop}}</div>
							<div class="gwcdil-bottom">{{gwcItem.gwcdilBottom}}</div>
						</div>
						<div class="gwcdi-right">
							<div class="gwcdir-left">{{gwcItem.gwcdirLeft}}</div>
							<div class="gwcdir-right">
								 <x-icon type="ios-minus" class="cell-x-icon" ></x-icon>
								 <span>{{gwcItem.gwcdirRight}}</span>
								 <x-icon type="ios-plus" class="cell-x-icon" ></x-icon>
							</div>
						</div>						
					</div>
				</div>
				
				
			</div>		
		</div>
	</div>
	
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import swiper from "../../components/swiper";
import VueDB from "../../util/vue-db/vue-db-long.js";
import headerBack from "../../components/header-back";
import { XImg } from "vux";
import { setTimeout } from 'timers';

var DB = new VueDB();

export default {
  name: "classification",
  data() {
    return {
      msg: "",
      active: 0,
      headTitle: "所有商品",
      isMaskLeave: true,
      offset: [],
      imgSrc: "../../../static/images/home/testImg1.jpg",
      banner: [
        {
          src: "../../../static/images/home/testImg1.jpg",
          href: "/detail/1007"
        },
        {
          src: "../../../static/images/home/testImg2.jpg",
          href: "/detail/1009"
        }
      ],
      dataItem: [
        {
          name: "店长推荐",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "当季精选",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "招牌特饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "素匠泰式热饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "素匠泰式热饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "素匠泰式热饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "素匠泰式热饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "素匠泰式热饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        },
        {
          name: "素匠泰式热饮",
          children: [
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            },
            {
              src: "../../../static/images/home/testImg1.jpg",
              name: "123"
            }
          ]
        }
      ],

      gwcData: [
        {
          gwcdilTop: "招牌特饮",
          gwcdilBottom: "加冰/加糖/加水",
          gwcdirLeft: "$22.22",
          gwcdirRight: "2"
        },
        {
          gwcdilTop: "招牌特饮",
          gwcdilBottom: "加冰/加糖/加水",
          gwcdirLeft: "$22.22",
          gwcdirRight: "2"
        },
        {
          gwcdilTop: "招牌特饮",
          gwcdilBottom: "加冰/加糖/加水",
          gwcdirLeft: "$22.22",
          gwcdirRight: "2"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      nowStatus: "nowStatus"
    })
  },
  mounted: function() {


    // 初始化右侧菜单滚动 
    this.initScroll();
  },
  methods: {
    showModel() {

    },
    // 左侧菜单跳转
    jumpToTarget(index) {
		this.$refs.rightView.scrollTop = this.offset[index] ;
		setTimeout(()=>{
			this.active = index;
		},10)
  },
    // 初始化右侧菜单滚动 
    initScroll() {
      var initLeftRightScroll = {
        left: DB.getItemOnce("classification-left-scrollTop").toNumber(),
        right: DB.getItemOnce("classification-right-scrollTop").toNumber()
      };

      setTimeout(() => {
        _.forEach(
		  this.$refs.rightView.querySelectorAll(".right-box>ul>.item"),
          (value, key) => {
		      // console.dir(value.offsetHeight)
            this.offset.push(value.offsetHeight * key + (11*key));
          }
        );
        var mySort = this.offset;

		//监听右侧滚动来设置左侧焦点状态
        this.$refs.rightView.addEventListener("scroll", e => {
          var rightScrollHeight = this.$refs.rightView.scrollTop;
          if(400 < rightScrollHeight){
              this.$refs.boxCont.scrollTop = 200;
          }
          for (let index = 0; index < mySort.length; index++) {
            let myRightItemHeight = mySort[index];
            if (rightScrollHeight > myRightItemHeight) {
              this.active = index;
            }
          }
        });

		//设置初始化滚动
        // setTimeout(() => {
        //   this.$refs.left.scrollTop = initLeftRightScroll.left;
        //   this.$refs.rightView.scrollTop = initLeftRightScroll.right;
        // }, 10);
      }, 100);
    },
    gwcMask() {
      this.isMaskLeave = !this.isMaskLeave;
    }
  },
  components: {
    swiper,
    headerBack,
    XImg
  },
  beforeRouteLeave(to, from, next) {
    DB.setItem("classification-left-scrollTop", this.$refs.left.scrollTop);
    DB.setItem(
      "classification-right-scrollTop",
      this.$refs.rightView.scrollTop
    );
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" type="text/scss">
@import "../../assets/scss/util";
.classification {
  background-color: #fff;
}
.headerImg {
  width: 100%;
  height: 3rem;
}
.warp-box {
  position: absolute;
  width: 100%;
  top: 1.2rem;
  left: 0px;
  bottom: $footerHeight;
  overflow-y: auto;
  .classificationCont {
    height: calc(100vh - 2.6rem);
    position: absolute;
    width: 100%;
    top: 3rem;
    left: 0px;
    bottom: 0rem;
    .left-menu {
      width: getIphoneWidth(170px);
      left: 0px;
      top: 0px;
      bottom: 0px;
      overflow-x: hidden;
      @include box-sizing;
      background-color: #efefef;
      ul {
        padding-bottom: 0.44rem;
      }
      li.item {
        text-align: center;
        -webkit-transition: all 0.1s ease;
        transition: all 0.1s ease;
        padding: 0 0.1rem 0 0.1rem;
        @include box-sizing;
        font-size: 0.34rem;
        height: 1.2rem;
        line-height: 1.6rem;
      }
      li.item.active {
        color: #fda544;
        transform: scale(1.05);
      }
    }
    .right-box {
      background-color: #fcfcfc;
      left: getIphoneWidth(170px);
      padding-left: getIphoneWidth(10px);
      top: 0;
      right: 0px;
      bottom: 0px;
      overflow-x: hidden;
      .item {
        padding-top: 0.4rem;
        .title {
          text-align: center;
          padding-bottom: 0.2rem;
        }
        span {
          position: relative;
          display: inline-block;
        }
        &:after,
        &:before {
          display: inline-block;
          width: getIphoneWidth(34px);
          height: 1px;
          top: 50%;
          background-color: #e0e0e0;
          position: absolute;
          content: "";
        }
        &:after {
          left: getIphoneWidth(-50px);
        }
        &:before {
          right: getIphoneWidth(-50px);
        }
      }
      .shop-item-wrap .shop-item {
        text-align: left;
        /*float: left;*/
        color: #757575;
        margin-bottom: 0.3rem;
        @include f12px;
        img {
          width: getIphoneWidth(140px);
          height: getIphoneWidth(140px);
          padding-bottom: 0.1rem;
        }
        .shop-detail {
          display: inline-block;
          width: calc(100% - 2.4rem);
          .shopd-title {
            @include f14px;
            font-weight: 600;
            vertical-align: top;
          }
          .shopd-detail {
            div {
              font-size: 0.26rem;
            }
          }
        }
        .shopd-pAdd {
          display: flex;
          .shopdpa-price {
            flex: 1;
          }
          .shopdpa-add {
            flex: 1;
            text-align: right;
            padding-right: 0.4rem;
          }
          .cell-x-icon {
            fill: limegreen;
          }
        }
      }
    }
  }
}

.classification-footer {
  left: 0;
  right: 0px;
  bottom: 0px;
  top: calc(100vh - 1.4rem);
  height: $footerHeight;
  display: flex;
  z-index: 999;
  .cf-left {
    flex: 1;
    background-color: rgb(80, 80, 83);
    display: flex;
    justify-content: center;
    align-items: center;
    .cfl-cont {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background-color: rgb(49, 144, 231);
      text-align: center;
      position: relative;
      top: -0.4rem;
      .ftl-gwc {
        line-height: 1.2rem;
        font-size: 0.6rem;
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

.gouwuche {
  display: inline-block;
  top: 0;
  left: 0;
  bottom: calc(100vh - 1.4rem);
  width: 100%;
  height: calc(100vh - 1.4rem);
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  transform: translateY(0);
  z-index: 888;
  .gwc-mask {
    width: 100%;
    height: 100%;
    /*background-color: rgba(33,33,33,0.6);*/
    background-color: transparent;
    .gwc-cont {
      width: 100%;
      min-height: 2rem;
      max-height: 10rem;
      overflow-y: scroll;
      background-color: #efefef;
      bottom: 0;
      z-index: 333;
      .gwc-clear {
        height: 0.8rem;
        background-color: #e8e8e8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
      }
      .gwc-detail {
        .gwcd-item {
          height: 1.2rem;
          display: flex;
          align-items: center;
          padding: 0 0.4rem;
          border-bottom: 1px solid #bbb;
          .gwcdi-left {
            flex: 1;
            .gwcdil-top {
              font-size: 0.34rem;
              font-weight: 600;
            }
            .gwcdil-bottom {
              font-size: 0.26rem;
            }
          }
          .gwcdi-right {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .gwcdir-left {
              color: #fda544;
            }
            .gwcdir-right {
              display: flex;
              align-items: center;
              fill: rgb(32, 150, 250);
              span {
                padding: 0 0.2rem;
              }
            }
          }
        }
      }
    }
  }
}
.maskLeave {
  transform: translateY(100vh);
}
</style>