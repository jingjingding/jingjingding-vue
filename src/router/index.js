import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
    routes: [
	    {
	        path: '/',
	        name: '',
	        component: (resolve) => {
	            require(["@/view/login/login"], resolve);
	        }
	    }, 
	    {
	        path: '/index',
	        name: 'index',
	        component: (resolve) => {
	            require(["@/view/login/index"], resolve);
	        }
	    }
    ]
})
