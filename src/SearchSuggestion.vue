<style lang="scss" scoped>
  $borderColor: #e0e0e0;
  .search--wrap {
    position: relative;
    width: 600px;
    margin: 0 auto;
  }
  .search--suggest {
    position: absolute;
    left: 0;
    width: 100%;
    border: 1px solid $borderColor;
    transform-origin: center top;
    z-index: 2;
    padding: 10px 0;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      width: 12px;
      height: 12px;
      z-index: 1;
      transform: rotate(45deg) translateX(-50%) translateY(-18px);
      background-color: #fff;
      border-left: 1px solid $borderColor;
      border-top: 1px solid $borderColor;
    }
    .search--suggest--item {
      text-align: left;
      cursor: pointer;
      line-height: 40px;
      padding: 0 10px;
      &:hover {
        background: #dde0d7;
      }
    }
  }
  .search--input--wrap {
    display: flex;
    border: 1px solid #e0e0e0;
  }
  .search--input, .search--btn {
    height: 40px;
    display: inline-table;
    border: none;
  }
  .search--input {
    flex: 1;
  }
  .search--btn {
    border-left: 1px solid #e0e0e0;
  }
  .search--suggest--loading {
    padding: 20px;
  }
</style>
<template>
  <div class="search--wrap">
    <div ref="searchSync" class="search--input--wrap">
      <input @input="handleInput($event)" v-model="value" class="search--input" type="text" placeholder="Please input the function keyword"><button class="btn-default search--btn">Search</button>
    </div>
    <transition name="slide-toggle">
      <div ref="suggestList" class="search--suggest" v-show="showSuggest">
        <div class="search--suggest--loading" v-show="!datas.length"><img src="./assets/loading.gif" alt=""></div>
        <div class="search--suggest--item" v-for="(item, idx) in datas" :key="idx" @click="handleSelect(item)">
          {{ item.value }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: "search-suggestion",
    props: {
      datas: Array,
      input: Function,
      selected: Function
    },
    data() {
      return {
        showSuggest: false,
        value: ""
      };
    },
    methods: {
      handleInput: function(ev) {
        this.$emit('input', ev);
        if (this.datas) {
          this.showSuggest = true;
        } else {
          this.showSuggest = false;
        }
      },
      handleSelect: function(item) {
        this.$emit("selected", item);
        this.value = item.value;
        this.showSuggest = false;
      }
    },
    mounted() {
      let rect = this.$refs.searchSync.getBoundingClientRect();
      this.$refs.suggestList.style.top = rect.height + 20 + "px";
    }
  };
</script>
