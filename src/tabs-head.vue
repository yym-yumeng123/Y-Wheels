<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" v-if="x"></div>
    <!-- v-if 会控制 div 是否显示在 DOM 里 -->
    <div class="actions-wrapper"><slot name="actions"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: false
    };
  },
  name: "ElementTabsHead",
  inject: ["eventBus"],
  mounted() {
    // console.log(this.eventBus)
    this.eventBus.$on("update:selected", (item, vm) => {
      this.x = true;
      // console.log(vm.$el)
      // 渲染到 UI 之后
      this.$nextTick(() => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left}px`;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
$tab-height: 40px;
$border-color: #ddd;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.35s;
  }
  > .actions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    padding: 0 1em;
  }
}
</style>
