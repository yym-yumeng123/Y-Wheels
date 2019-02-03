<template>
  <div style="padding: 20px">
		<y-slides :selected.sync="selected" :autoPlayDelay="3000" :autoPlay="true">
			<y-slides-item name="1">
        <div class="box">1</div>
      </y-slides-item>
			<y-slides-item name="2">
        <div class="box">2</div>
      </y-slides-item>
			<y-slides-item name="3">
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

<style lang="scss">
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 12px;
}
.box {
  width: 100%;
  height: 300px;
	background: #ddd;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 32px;
}
</style>
