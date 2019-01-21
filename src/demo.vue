<template>
  <div>
    <g-cascader 
			popoverHeight="200px"
		  :source.sync="source"
			:selected.sync="selected"
			:load-data="loadData"
		></g-cascader>


		<g-button icon="loading" loading>点我</g-button>
  </div>

	
</template>

<script>
import Button from "./button";
import Cascader from "./cascader";
import db from './db'

// Promise
function ajax(parentId = 0) {
	return new Promise((success, fail) => {
		setTimeout(()=> {
			let result = db.filter((item) => item.parent_id == parentId)

			result.forEach(node => {
				if (db.filter(item => item.parent_id === node.id).length > 0) {
					node.isLeaf = false
				} else {
					node.isLeaf = true
				}
			})

			success(result)
		},1000)
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
			source: [],
		}
	},
	created() {
		ajax(0).then(result => {
			this.source = result
		})
	},
	methods: {
		// 接口 loadData 接受参数
		loadData (item, updateSource) {
			let {name, id, parent_id} = item
			ajax(id).then(result => {
				updateSource(result)  // 回调: 把别人传给我的函数调用一下
			})
		},
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
