<template>
  <div>
    <g-cascader popoverHeight="200px" :source="source" :selected.sync="selected"
			:load-data="loadData" @update:selected="xxx"
		></g-cascader>
  </div>
</template>

<script>
import Button from "./button";
import Cascader from "./cascader";
import db from './db'

//回调
// function ajax2(parentId = 0, success, fail) {
// 	let id = setTimeout(() => {
// 		let result = db.filter((item) => item.parent_id == parentId)
// 		success(result)
// 	},3000)
// 	return id
// }

// Promise
function ajax(parentId = 0) {
	return new Promise((success, fail) => {
		setTimeout(()=> {
			let result = db.filter((item) => item.parent_id == parentId)
			success(result)
		},2000)
	})
}

export default {
  name: "demo",
  components: {
    "g-button": Button,
    "g-cascader": Cascader,
  },
  data() {
    return {
			selected: [],
			source: []
		}
	},
	created() {
		// ajax2(0, (result)=> {
		// 	this.source = result
		// })
		ajax(0).then(result => {
			this.source = result
		})
	},
	methods: {
		xxx () {
			ajax(this.selected[0].id).then(result => {
				let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
				// lastLevelSelected.children = result
				this.$set(lastLevelSelected, 'children', result)
			})
		},
		loadData (node, callback) {
			let {name, id, parent_id} = node
			ajax(id).then(result => {
				callback(result)
			})
		}
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
