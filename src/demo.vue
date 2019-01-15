<template>
  <div>
		{{selected}}
    <g-cascader :source="source" :selected="selected" @update:selected="selected = $event"></g-cascader>
  </div>
</template>

<script>
import Button from "./button";
import Input from "./input";
import Cascader from "./cascader";
export default {
  name: "demo",
  components: {
    "g-button": Button,
    "g-cascader": Cascader,
    "g-input": Input
  },
  data() {
    return {
			selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
              name: "嘉兴",
              children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [{ name: "瑶海" }, { name: "张江" }, { name: "小二" }]
            },
            {
              name: "芜湖",
              children: [{ name: "弋江" }, { name: "鸠江" }, { name: "二哥" }]
            },
          ]
        }
      ]
  	};
  }
};
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 12px;
}
</style>
