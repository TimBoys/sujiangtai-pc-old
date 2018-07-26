import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home/home'
import classification from '@/views/classification/classification'
import mine from '@/views/mine/mine'

console.log(_.assignIn({
	time:new Date().getTime()
}, {}))
Router.prototype.openPage = function(link,query){
	console.log(link)
	this.push({
		path:link,
		query:_.assignIn({
			time:new Date().getTime()
		},query || {})
		
	})
}

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/home',
			name: 'home',
		    component(resolve){
		       require(['@/views/home/home.vue'], resolve)
		    }
		},		
		{
			path: '/classification',
			name: 'classification',
		    component(resolve){
		       require(['@/views/classification/classification.vue'], resolve)
		    }
		},	
		{
			path: '/mine',
			name: 'mine',
		    component(resolve){
		       require(['@/views/mine/mine.vue'], resolve)
		    }
		}

	]
})