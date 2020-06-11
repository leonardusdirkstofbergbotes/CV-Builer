import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueGeolocation);
window.$ = require('jquery');
window.JQuery = require('jquery');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
