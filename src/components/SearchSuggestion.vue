<style lang="scss" scoped>
  $borderColor: #e0e0e0;
  .slide-toggle-enter {
    transform: scaleY(0);
  }

  .slide-toggle-enter-active {
    transition: all .3s ease;
  }

  .slide-toggle-enter-to {
    transform: scaleY(1);
  }

  .slide-toggle-leave {
    display: none;
  }

  .slide-toggle-leave-active {
    transform: scaleY(0);
  }
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
      transform-origin: center center;
      transform: translate3d(-50%, -17px, 0) rotate(45deg);
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
    box-sizing: border-box;
    border: none;
  }
  .search--btn {
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0 16px;
    color: grey;
  }
  .search--input {
    flex: 1;
    padding: 0 10px;
  }
  .search--btn {
    border-left: 1px solid #e0e0e0;
  }
  .search--suggest--loading {
    padding: 20px;
    text-align: center;
  }
</style>
<template>
  <div class="search--wrap">
    <div ref="searchSync" class="search--input--wrap">
      <input @input="handleInput($event)" v-model="value" @blur="handleBlur($event)" class="search--input" type="text" :placeholder="placeholder">
      <button v-if="showBtn" class="btn-default search--btn" @click="handleSubmit">Search</button>
    </div>
    <transition name="slide-toggle">
      <div ref="suggestList" class="search--suggest" v-show="showSuggest">
        <div class="search--suggest--loading" v-show="!datas.length"><img src="../assets/loading.gif" alt=""></div>
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
      selected: Function,
      placeholder: String,
      showBtn: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        showSuggest: false,
        value: ""
      };
    },
    methods: {
      handleBlur: function(ev) {
        if (!ev.target.value) {
          this.showSuggest = false;
        }
      },
      handleInput: function(ev) {
        this.$emit('input', ev);
        if (!ev.target.value) {
          this.showSuggest = false;
        } else if (this.datas) {
          this.showSuggest = true;
        } else {
          this.showSuggest = false;
        }
      },
      handleSelect: function(item) {
        this.$emit("selected", item);
        this.value = item.value;
        this.showSuggest = false;
      },
      handleSubmit: function() {
        this.$emit('click', this.value)
      }
    },
    mounted() {
      let rect = this.$refs.searchSync.getBoundingClientRect();
      this.$refs.suggestList.style.top = rect.height + 20 + "px";
    }
  };
</script>
