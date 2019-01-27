<template>
  <div>
		<y-slides :selected="selected">
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
    let n = 1
    setInterval(() => {
      if (n === 4) {
        n = 1
      }
      this.selected = n.toString()
      n++
    }, 3000);
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
