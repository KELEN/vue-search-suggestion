import Vue from 'vue'
import App from './App.vue'
import SearchSuggestion from '../index.js';

Vue.use(SearchSuggestion);

new Vue({
  el: '#app',
  render: h => h(App)
})
