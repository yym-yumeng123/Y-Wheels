<template>
  <svg 
    class="y-icon" 
    :style="`fill: ${color}; font-size: ${size}px`">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "ElementIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    size: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.y-icon {
  width: 1em;
  height: 1em;
}
</style>
