<template>
  <div style="padding: 20px">
		{{selectedList}}
    <y-table :columns="columns" :dataSource="dataSource"
			:orderBy.sync="orderBy"
			:selectedItems.sync="selectedList"
			:loading="loading"
			@update:orderBy="x"
		></y-table>
  </div>
	<!-- 排序交给后端来做 -->
</template>

<script>
import YIcon from './icon/icon'
import YButton from './button/button'
import YTable from './table/table'

export default {
  name: "demo",
  components: {
    YIcon,
    YButton,
    YTable
  },
  data () {
    return {
			selectedList: [],
      columns: [
        {
          text: '姓名',
          field: 'name'
        },
        {
          text: '分数',
          field: 'score'
        }
			],
			orderBy: {  // true 开启排序, 但不确定 asc desc
				name: true,
				score: 'asc'
			},
			loading: false,
      dataSource: [
        {
					id: "1",
          name: '张三',
          score: '89'
        },
        {
					id: "2",
          name: '李四',
          score: '100'
        },
        {
					id: "3",
          name: '王二',
          score: '1007'
        },
        {
					id: "4",
          name: '掌柜',
          score: '160'
        },
        {
					id: "5",
          name: '小红',
          score: '100'
        },
        {
					id: "6",
          name: '部门',
          score: '100'
        },
      ]
    }
  },
  methods: {
		x() {
			this.loading = true
			setTimeout(() => {
				this.dataSource = this.dataSource.sort((a,b) => a.score - b.score)
				this.loading = false
			}, 1000)
		}
  }
};
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 14px;
}
  .demo {
    background: #409EFF;
    height: 36px;
  }
</style>
