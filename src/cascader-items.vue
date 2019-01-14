<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="lable" v-for="(item, index) in items" :key="index"
        @click="leftSelected = item"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <element-cascader-items :items="rightItems"></element-cascader-items>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ElementCascaderItems",
    props: {
      items: {
        type: Array
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
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      border: 1px solid red;
    }
    .right {
      margin-top: -1px;
    }
  }
</style>