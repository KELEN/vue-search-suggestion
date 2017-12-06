<template>
  <div id="app">
    <search-suggestion 
      placeholder="Please input value"
      :showBtn="false"
      :datas="lists" 
      @input="handleInput" 
      @selected="handleSelected" 
      @click="handleClick"
      ></search-suggestion>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      lists: [],
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
      },
      handleSelected(item) {
        console.log(item.value);
      },
      handleClick(val) {
        console.log(val);
      }
  }
}
</script>

<style lang="scss">

</style>
