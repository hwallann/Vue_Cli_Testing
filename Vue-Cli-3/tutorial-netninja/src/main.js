import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

// Custom directives
/*
Vue.directive('rainbow', {
	bind(el, binding, vnode){
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
});
*/

Vue.directive('theme', {
	bind(el, binding, vnode) {
		if(binding.value == 'wide') {
			el.style.maxWidth = "1200px";
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = "650px";
		}

		if (binding.arg == 'column') {
			el.style.background = '#ddd';
			el.style.padding = '20px';
			el.style.margin = '20px auto';
			el.style.maxWidth = '800px'
		}
	}
})


//Filters
/*
Vue.filter('to-uppercase', function(value) {
	return value.toUpperCase();
})
*/

Vue.filter('snippet', function(value) {
	return value.slice(0, 100) + '...';
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
