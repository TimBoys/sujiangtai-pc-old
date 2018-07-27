<template>
	<div class="header-back" :class="{'active':active}">
		<p>{{title}}</p>
    	<span class="iconfont icon-backer myicon back" @click="$router.go(-1)"><</span>		
		
	</div>
</template>

<script>
	export default{
		name:"header-back",
		props:{
			title:{
				type:String,
				default:"标题"
			}
		},
		data(){
			return{
				active:false
			}
		},
		mounted(){
			setTimeout(function(){
				this.active = true;
			},10)
		}
	}
</script>

<style type="text/scss" lang="scss">
	@import '../assets/scss/util';
	.header-back.active{
		transform: translateY(0%);
	}
	.header-back{
		    line-height: 2rem;
    		padding: .2rem 0;
    		background-color: red;
    		/*background-color: #F2F2F2;*/
    		@include ani01-transform;
   	 		transform: translateY(-100%);
    		@include f14px;
    		color: #333;
    		text-align: center;
    		position: relative;
    		top: 0;
		    .myicon{
      			position: absolute;
      			width: 0.44rem;
      			line-height: 2rem;
      			/*top: .5rem;*/
      			color: #919191;
      			font-size: 0.58rem;
			}
    .back{
      left: 0;
    }
    p{
    	left: 5rem;
    }
    .search{
      right: 0;
		}
	}
	
	
</style>