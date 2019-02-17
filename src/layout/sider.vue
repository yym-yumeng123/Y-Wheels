<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot> 
      <y-button @click="visible = false">close</y-button>
    </div>
  </transition>
</template>

<script>
import YButton from '../button/button'
export default {
  name: "ElementSider",
  components: {
    YButton
  },
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px;
    border-radius: 3px;
    background: #ccc;
  }
}
</style>
