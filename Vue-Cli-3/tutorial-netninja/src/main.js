import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'


Vue.use(VueResource)

Vue.config.productionTip = false


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
