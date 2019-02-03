<template>
  <div style="padding: 20px">
    <y-nav>
      <y-nav-item>首页</y-nav-item>
      <y-nav-item>招聘</y-nav-item>
      <y-nav-item>关于</y-nav-item>
    </y-nav>
  </div>
</template>

<script>
import YNav from './nav/nav'
import YNavItem from './nav/nav-item'
import YSubNav from './nav/sub-nav'

export default {
  name: "demo",
  components: {
    YNav,
    YNavItem,
    YSubNav
  },
  data() {
    return {
      
    }
  },
  created() {
  }
};
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 12px;
}
</style>
