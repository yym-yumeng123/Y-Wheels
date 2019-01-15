<template>
  <div>
    hi
    <g-button>点击</g-button>
    <div style="margin-bottom: 10px"><g-input></g-input></div>
    <g-cascader :source="source"></g-cascader>
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
