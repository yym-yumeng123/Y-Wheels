<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items :items="source" class="popover"
        :height="popoverHeight"
      ></cascader-items>
    </div>
  </div>
</template>

<script>
  import CascaderItems from './cascader-items'
  export default {
    name: 'GuluCascader',
    components: {CascaderItems},
    props: {
      source: {
        type: Array
      },
      popoverHeight: {
        type: String
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "var";
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 200px;
    }
    .popover-wrapper {
      @extend .box-shadow;
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
    }
  }
</style>