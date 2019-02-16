<template>
  <div style="padding: 20px">
        <y-pager :total-page="20" :current-page.sync="currentPage"></y-pager>
  </div>

</template>

<script>
import YPager from './pagination/pager.vue'

export default {
  name: "demo",
  components: {
    YPager
  },
  data() {
    return {
      currentPage: 1
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
</style>
