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
