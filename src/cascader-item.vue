<template>
  <div class="cascaderItem">
    {{sourceitem.name}}
    <gulu-cascader-item
      v-if="sourceitem.children"
      v-for="item in sourceitem.children"
      :sourceitem="item"
    ></gulu-cascader-item>
  </div>
</template>

<script>
  export default {
    name: "GuluCascaderItem",
    props: {
      sourceitem: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    border: 1px solid red;
    margin: 10px;
  }
</style>