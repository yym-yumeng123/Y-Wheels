<template>
  <div style="padding: 20px">
      <y-collapse>
        <y-collapse-item title="标题一">内容一</y-collapse-item>
        <y-collapse-item title="标题二">内容二</y-collapse-item>
        <y-collapse-item title="标题三">内容三</y-collapse-item>
      </y-collapse>
  </div>

</template>

<script>
import YCollapse from './collapse/collapse'
import YCollapseItem from './collapse/collapse-item'

export default {
  name: "demo",
  components: {
    YCollapse,YCollapseItem
  },
  data() {
    return {
selected: 'sports'
    }
  },
  methods: {

  }
};
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 14px;
}
  .demo {
    background: #409EFF;
    height: 36px;
  }
</style>
