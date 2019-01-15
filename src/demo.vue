<template>
  <div>
    <g-cascader popoverHeight="200px" :source="source" :selected.sync="selected"></g-cascader>
  </div>
</template>

<script>
import Button from "./button";
import Input from "./input";
import Cascader from "./cascader";
import db from './db'

function ajax(parentId = 0) {
	return new Promise((success, fail) => {
		let result = db.filter((item) => item.parent_id == parentId)
		success(result)
	})
}
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
			source: []
		}
	},
	created() {
		ajax(0).then(result => {
			this.source = result
		})
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
