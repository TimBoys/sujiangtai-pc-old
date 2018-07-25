<template>
  <div id="app">
    <div class="app-init">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
    
    <footer class="footer clear" :class="{'leave':leaveComp}">
    	
    	
    	
    	
    	
    	
    </footer>
    
    
    
    
    
  </div>
</template>

<script>
import Rem from '@/assets/js/rem'
	
new Rem();

export default {
  name: 'App',
  watch:{
			'$route'(to,from){
//				console.log(to)
//				console.log(from)o
				
			}
		},
}
</script>

<style lang="scss" type="text/scss">
	@import "./assets/scss/public";
	@import "./assets/scss/util";


</style>
