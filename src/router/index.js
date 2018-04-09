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
	        path: '/login',
	        name: 'login',
	        component: (resolve) => {
	            require(["@/components/HelloWorld"], resolve);
	        }
	    },
	    {
	        path: '/index',
	        name: 'index',
	        component: (resolve) => {
	            require(["@/components/HelloWorld"], resolve);
	        }
	    }
    ]
})
