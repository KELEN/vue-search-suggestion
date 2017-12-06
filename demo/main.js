import Vue from 'vue'
import App from './App.vue'
import SearchSuggestion from '../src/index';

Vue.use(SearchSuggestion);

new Vue({
  el: '#app',
  render: h => h(App)
})
