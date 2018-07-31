<template>
	<div>
		{{$route.query}}
		<div><span class="span">url:</span>{{pathUrl}}</div>
	</div>
</template>

<script>
	//获取微信第一次登录参数 
	function getUrlParam(sHref, sArgName) {
		var args = sHref.split("?");
		var retval = "";
		if(args[0] == sHref) /*参数为空*/ {
			return retval; /*无需做任何处理*/
		}
		var str = args[1];
		args = str.split("&");
		for(var i = 0; i < args.length; i++) {
			str = args[i];
			var arg = str.split("=");
			if(arg.length <= 1) continue;
			if(arg[0] == sArgName) retval = arg[1];
		}
		//        console.log(retval)
		return retval;
	}
	
	export default{
		name:"mine",
		data(){
			return {
				pathUrl:""
			}
		},
		mounted:function(){
			this.pathUrl = location.href;
			
			var strUrl = location.href.split('#')[0];
						console.log(strUrl)
			var resultCode = getUrlParam(strUrl, "response_type");
			//			console.log(resultCode)
			
			
			
		}
		
		
	}
	
	
</script>

<style scoped="scoped">
	.span{
		color: red;
		font-size: 0.44rem;
	}
</style>