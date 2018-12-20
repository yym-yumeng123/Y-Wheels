<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
		{{sourceItem}}
    <element-cascader-item
      v-if="sourceItem.children"
      v-for="(item, index) in sourceItem.children"
      :sourceItem="item"
			:key="index"
    ></element-cascader-item>
  </div>
</template>

<script>
export default {
  name: "ElementCascaderItem",
	props: {
    sourceItem: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>

