<template>
	<div class="hello"> 	
		<div class="about-words">
		{{ $t("message.hello") }}
		{{nowStatus}}
 		</div>

		<group>
			<cell title="title" value="value"></cell>
		</group>
		{{$route.query}}
		<router-link to="/home">Go to HelloWorld</router-link>
		
	</div>
</template>

<script>
	 import { mapGetters } from 'vuex'
	
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: ''
			}
		},
		computed:{
			...mapGetters({
				nowStatus:"nowStatus"
			})

		},
		mounted: function() {
//			console.log(this.$router)

			//			测试axios---start
			this.$http
				.get("/getAllGoodsClass")
				.then(res => {
//					console.log(res)
				})
				.catch(err => {
					console.log(err);
				});

			this.$http.post("/jielong/selectAll", {
				'pageNum': 2,
				'pageSize': 2
			}).then((res) => {
//				console.log(res)
			}).catch((err) => {
				//				console.log(err)
			})
			//			测试axios---end

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
	@import "../assets/scss/util";		
	
	.about-words{
		width: getIphoneWidth(20px);
		border: getIphoneWidth(20px) solid red;
	}
</style>