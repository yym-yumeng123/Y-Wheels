<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="lable" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
        {{ item.name }}
        <icon v-if="item.children" name="right" class="icon"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <element-cascader-items :items="rightItems" :height="height"></element-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "ElementCascaderItems",
    components: {
      Icon
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed : {
      rightItems () {
        return this.leftSelected && this.leftSelected.children ? this.leftSelected.children : null
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
      height: 100%;
      padding: .3em 0;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .lable {
      padding: .3em 1em;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        transform: scale(.7);
      }
    }
  }
</style>