<template>
	<div class="app-init classification">
    <div class="classification-header">
    	<header-back :title="headTitle"></header-back>
    	<x-img v-lazy="imgSrc" :web-src="`${imgSrc}?type=webp`" class="headerImg"></x-img>
    </div>		
    
	<div class="warp-box">
		<div class="left-menu absolute scroll-box-y" ref="left">
			<ul>
				<li class="item" v-for="(target,index) in dataItem" :class="{ 'active': index == active }" @click="jumpToTarget(index)">{{target.name}}</li>
			</ul>
		</div>
		
		<div class="right-box absolute scroll-box-y" ref="rightView">
			<ul>
				<li class="item" v-for="(target,index) in dataItem">
				<p class="title">
					<span>{{target.name}}</span>
				</p>
				<div class="shop-item-wrap clear">
					<div class="shop-item" v-for="shop in target.children" @click="showModel(shop)">
                		<p><img :src="shop.src" alt=""></p>
                		<p class="name">{{shop.name}}</p>						
						
					</div>
				</div>
				</li>
			</ul>			
			
		</div>
		
	</div>


	<div class="classification-footer absolute">
		<div class="">
			2222
			
		</div>
	</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import VueDB from "../../util/vue-db/vue-db-long.js";
import headerBack from "../../components/header-back";
import { XImg } from "vux";

var DB = new VueDB();

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      active:0,
      headTitle: "所有商品",
      imgSrc: "../../../static/images/home/testImg1.jpg",
      dataItem:[{
      	name:"店长推荐",
      	children:[{
      		src:"../../../static/images/home/testImg1.jpg",
      		name:"123"
      	}]
      },{
      	name:"当季精选"
      },{
      	name:"招牌特饮"
      },{
      	name:"素匠泰式热饮"
      },{
      	name:"素匠泰式热饮"
      },{
      	name:"素匠泰式热饮"
      },{
      	name:"素匠泰式热饮"
      },{
      	name:"素匠泰式热饮"
      },{
      	name:"素匠泰式热饮"
      }]
    };
  },
  computed: {
    ...mapGetters({
      nowStatus: "nowStatus"
    })
  },
  mounted: function() {
  },
  methods: {
  	showModel(){
  		
  	},
  	jumpToTarget(){
  		
  	}
  },
  components: {
    headerBack,
    XImg
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
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
  top: 4.2rem;
  left: 0px;
  bottom: $footerHeight;
  .left-menu {
    width: getIphoneWidth(170px);
    left: 0px;
    top: 0px;
    bottom: 0px;
    overflow-x: hidden;
    @include box-sizing;
    ul {
      padding-bottom: 0.44rem;
    }
    li.item {
      text-align: center;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;
      padding:getIphoneWidth(40px) 0.1rem 0 0.1rem;
      @include box-sizing;
      font-size: 0.34rem;
    }
    li.item.active {
      color: #FDA544;
      transform: scale(1.05);
    }
  }
  .right-box{
  	left: getIphoneWidth(180px);
  	top: 0;
  	right: 0px;
  	bottom: 0px;
  	.item{
  		padding-top: 0.8rem;
  	}
  }
}

.classification-footer{
  	left: 0;
  	right: 0px;
  	bottom: 0;
  	height: $footerHeight;
  	outline: 1px solid;
}
</style>