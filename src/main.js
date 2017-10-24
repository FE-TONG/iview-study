import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css';
window.log = function(){

  console.log(...arguments);
}
new Vue({
  el: '#app',
  render: h => h(App)
})
