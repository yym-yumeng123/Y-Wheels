<template>
  <div class="cascaderItem" :style="{ height: height }">
    <div class="left">
      <div class="lable"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        {{ item.name }}
        <icon v-if="item.children" name="right" class="icon"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <element-cascader-items
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></element-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      return currentSelected && currentSelected.children
        ? currentSelected.children
        : null;
    }
  },
  methods: {
    onClickLabel (item) {
      // Vue 不允许在已经创建的实例上添加新的响应式属性, 修改数组要小心
      // this.selected[this.level] = item
      // 深拷贝
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      // 数据变动, 后面的数据不要
      copy.splice(this.level + 1)
      // this.$set(this.selected, this.level, item)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
};
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
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .lable {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      transform: scale(0.7);
    }
  }
}
</style>
