import SearchSuggestion from './src/SearchSuggestion.vue'
SearchSuggestion.install = function (Vue) {
  Vue.component(SearchSuggestion.name, SearchSuggestion)
};
export default SearchSuggestion;
