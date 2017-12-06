import SearchSuggestion from './components/SearchSuggestion.vue'
SearchSuggestion.install = function (Vue) {
  Vue.component(SearchSuggestion.name, SearchSuggestion)
};
export default SearchSuggestion;
