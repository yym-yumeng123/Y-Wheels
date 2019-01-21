<template>
  <div class="cascaderItem" :style="{ height: height }">
    <div class="left">
      <div class="lable"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        <span class="name">{{ item.name }}</span>
        <!-- 判断是否动态加载 -->
        <icon v-if="loadData ? !item.isLeaf : item.children" name="right" class="icon"></icon>
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
    loadData : {
      type: Function
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
  // computed 依赖属性值没变化, UI不变, 缓存问题
  computed: {
    rightItems() {
      if(this.selected && this.selected[this.level]) {
        let items = this.items.filter(item => item.name === this.selected[this.level].name)
        if(items && items[0].children && items[0].children.length > 0) {
          return items[0].children
        }
      }
    },
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
    },
    // rightArrowVisible (item) {
    //   return this.loadData ? !item.isLeaf : item.children
    // }
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
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    white-space: nowrap;
    &:hover {
      cursor: pointer;
      background: $grey;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icon {
      margin-left: auto;
      transform: scale(0.7);
    }
  }
}
</style>
