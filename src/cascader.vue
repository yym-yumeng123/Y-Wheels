<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items
        :items="source"
        class="popover"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      popoverVisible: false
    }
  },
  methods: {
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length -1]
      // 如何更新 source
      let updateSource = (result) => {
        let toUpdate= this.source.filter(item => item.id === lastItem.id)[0]
        this.$set(toUpdate, 'children', result)
      }
      this.loadData(lastItem, updateSource)  // 回调: 把别人传给我的函数调用一下
    }
  },
  computed: {
    result () {
      return this.selected.map((item) => item.name).join('/')
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";
.cascader {
  position: relative;
  .trigger {
    height: $input-height;
    min-width: 10em;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    border: 1px solid $border-color;
    border-radius: $border-radius
  }
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    background: #fff;
  }
}
</style>
