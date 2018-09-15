import Vue from 'vue'
import App from './App.vue'
//import GlobalNinjas from './GlobalNinjas.vue'

// Register component localy 
//	--> use '<globalninjas></globalninjas>' to use
// Can be used anywhere
//Vue.component('globalninjas', GlobalNinjas) 

new Vue({
  el: '#app',
  render: h => h(App)
})
