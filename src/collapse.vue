<template>
  <div class="collapse"><slot></slot></div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ElementCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    // 1. 通知所有儿子该选中的选中
    this.eventBus.$emit("update:selected", this.selected);

    // 2. 接收儿子所传过来的意图
    this.eventBus.$on("update:addSelected", name => {
      // 不支持直接修改props, 深拷贝一下
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      // 3. 通知儿子们该更新了
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });

    // 4. 同上, 移除
    this.eventBus.$on("update:removeSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
