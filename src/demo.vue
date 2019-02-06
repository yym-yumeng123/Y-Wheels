<template>
  <div style="padding: 20px">
    <y-nav :selected.sync="selected" @update:selected="onChange">
      <y-nav-item name="home">
        <a href="https://www.baidu.com" target="_blank">首页</a>
      </y-nav-item>
      <y-sub-nav name="about">
        <template slot="title">关于</template>
        <y-nav-item name="culture">企业文化</y-nav-item>
        <y-nav-item name="developers">开发团队</y-nav-item>
        <y-sub-nav name="contanct">
          <template slot="title">联系方式</template>
          <y-nav-item name="wechat">微信</y-nav-item>
          <y-nav-item name="qq">QQ</y-nav-item>
          <y-nav-item name="phone">手机</y-nav-item>
        </y-sub-nav>
      </y-sub-nav>
      <y-nav-item name="hire">招聘</y-nav-item>
    </y-nav>
    {{selected}}
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
      selected: ['home']
    }
  },
  methods: {
    onChange (selected) {
      if (selected.indexOf('home') >= 0) {
        alert('hi')
      }
    }
  },
  watch: {
    selected (newValue) {
      if (newValue.indexOf('home') >= 0) {
        alert('hi')
      }
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
  font-size: 14px;
}
</style>
