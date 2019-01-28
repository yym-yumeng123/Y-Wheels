<template>
  <div>
		<y-slides :selected.sync="selected">
			<y-slides-item name="你好">
        <div class="box">1</div>
      </y-slides-item>
			<y-slides-item name="hello">
        <div class="box">2</div>
      </y-slides-item>
			<y-slides-item name="3啊啊啊">
        <div class="box">3</div>
    	</y-slides-item>
		</y-slides>
  </div>
</template>

<script>
import ySlides from './slides/slides.vue'
import ySlidesItem from './slides/slides-item.vue'

export default {
  name: "demo",
  components: {
    ySlides,
    ySlidesItem
  },
  data() {
    return {
      selected: undefined
    }
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 12px;
}
.box {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>
