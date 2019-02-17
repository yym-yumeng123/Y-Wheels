<template>
  <div style="padding: 20px">
  <y-row>
		<y-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
			<div class="demo"></div>
		</y-col>
  </y-row>
  </div>

</template>

<script>
import YRow from './grid/row'
import YCol from './grid/col'

export default {
  name: "demo",
  components: {
    YRow, YCol
  },
  data() {
    return {

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
