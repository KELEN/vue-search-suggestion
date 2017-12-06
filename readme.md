## vue search dropdown suggestion

### install
```javascript
npm i vue-suggestion-suggestion -S
```
#### 全局引入
```javascript
import SearchSuggestion from 'vue-search-suggestion'
Vue.use(SearchSuggestion);
```
#### vue文件引入
```javascript
import SearchSuggestion from 'vue-search-suggestion'
new Vue({
    // ...
    components: {
      SearchSuggestion
    }
    // ...
})
```
#### 使用方法
```
<search-suggestion :datas="lists" @input="handleInput" @selected="handleSelected"></search-suggestion>
<script>
  import SearchSuggestion from 'vue-search-suggestion'
  export default {
    data: function () {
      return {
        lists: [],
      }
    },
    components: {
      SearchSuggestion
    },
    methods: {
        handleInput(ev) {
          this.lists = (function () {
            var arr = [];
            for (var i = 0; i < Math.floor(Math.random() * 10); i++) {
              arr.push({
                value: Math.random(),
              })
            };
            return arr;
          })()
        },
        handleSelected(item) {
          console.log(item.value);
        }
    }
  }
</script>
```
#### 事件处理

| 方法 | 参数 | 说明 |
| ------ | ------ | ------ |
| input  | event，获取值event.target.value |  输入响应事件 |
| selected  | 选择的item，item.value获取值 | 选择响应事件 |
