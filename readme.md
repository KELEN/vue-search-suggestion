## vue search dropdown suggestion

### install
```javascript
npm i vue-search-suggestion -S
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
// app.vue
<template>
  <div id="app">
    <search-suggestion 
      placeholder="Please input value"
      :showBtn="true"
      :datas="lists" 
      @input="handleInput" 
      @selected="handleSelected" 
      @click="handleClick"
      ></search-suggestion>

      <ul class="console-list">
        <li v-for="(item, idx) in events" :key="idx">{{ item.type }} -- {{ item.value }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      val: '',
      lists: [],
      events: []
    }
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

        this.events.push({
          type: "oninput",
          value: ev.target.value
        })
      },
      handleSelected(item) {
        console.log(item.value);
        this.events.push({
          type: "on selecte",
          value: item.value
        })
      },
      handleClick(val) {
        console.log(val);
        this.events.push({
          type: "on click search btn",
          value: val
        })
      }
  }
}
</script>

<style lang="scss">

</style>
```
#### 属性

| 属性 | 值 |  说明 |
| placeholder | string | input空值字符串 |
| showBtn | boolean | 显示按钮 |
| datas | array | 动态数据，value对应的值为显示的内容 | 


#### 事件处理

| 方法 | 参数 | 说明 |
| ------ | ------ | ------ |
| input  | event，获取值event.target.value |  输入响应事件 |
| selected  | 选择的item，item.value获取值 | 选择响应事件 |
| click  | input的值 | 搜索按钮点击事件 |