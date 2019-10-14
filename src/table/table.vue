<template>
	<div class="y-table-wrapper">
		<table class="y-table" :class="{border, compact, striped: striped}">
			<thead>
				<tr>
					<th><input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected" /></th>
					<th v-if="isOrder">序号</th>
					<th v-for="column in columns" :key="column.filed">
						{{ column.text }}
						<span class="y-table-sorter">
							<span>&lt;</span>
							<span>&gt;</span>
						</span>
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(item, index) in dataSource" :key="item.id">
					<td>
						<input type="checkbox" 
							@change="onChangeItem(item, index, $event)" 
							:checked="isSelectedItems(item)"
						/>
					</td>
					<td v-if="isOrder">{{ index + 1 }}</td>
					<template v-for="column in columns">
						<td :key="column.field">
							{{ item[column.field] }}
						</td>
					</template>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'YTable',
	props: {
		columns: {
			type: Array,
			required: true
		},
		dataSource: {
			type: Array,
			required: true,
			validator (array) {
				return !(array.filter(item => item.id === undefined).length > 0)
			}
		},
		// 如果直接 [], 有多个会共用数组
		selectedItems: {
			type: Array,
			default: () => []
		},
		isOrder: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: false
		},
		compact: {
			type: Boolean,
			default: false
		},
		striped: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		selectedItems() {
			if(this.selectedItems.length === this.dataSource.length) {
				this.$refs.allChecked.indeterminate = false
				// this.$refs.allChecked.checked = true
			} else if(this.selectedItems.length === 0) {
				this.$refs.allChecked.indeterminate = false
				// this.$refs.allChecked.checked = false
			} else {
				this.$refs.allChecked.indeterminate = true
			}
		}
	},
	computed: {
		areAllItemsSelected() {
			// 字典序
			const a = this.dataSource.map(item => item.id).sort()
			const b = this.selectedItems.map(item => item.id).sort()

			if(a.length !== b.length) return false
			let equal = true
			for(let i = 0; i < a.length; i++) {
				// 只要有一个不相等, 就等于 false
				if(a[i] !== b[i]) {
					equal = false
					break
				}
			}
			return equal
		}
	},
	methods: {
		onChangeItem(item, index, e) {
			const { checked } = e.target
			// props 数据不能直接改变
			let copy = JSON.parse(JSON.stringify(this.selectedItems))
			if(checked) {
				copy.push(item)
			} else {
				// 得不到 index
				// const index = copy.indexOf(item)
				// console.log(index, 'index')

				copy = copy.filter(i => i.id !== item.id )
				// copy.splice(index, 1)
			}
			this.$emit('update:selectedItems', copy)
		},
		onChangeAllItems(e) {
			const { checked } = e.target
			this.$emit('update:selectedItems', checked ? this.dataSource : [])
		},
		isSelectedItems(item) {
			return this.selectedItems.filter(i => i.id === item.id).length > 0
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'var.scss';
$grey: darken($grey, 20%);
.y-table-wrapper {
	.y-table {
		width: 100%;
		// 边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。
		border-collapse: collapse;
		// 规定相邻单元的边框之间的距离
		border-spacing: 0;
		&.border {
			border: 1px solid $grey;
			th, td {
				border: 1px solid $grey;
			}
		}
		&.compact {
			th, td {
				padding: 4px;
			}
		}
		th, td {
			padding: 8px;
			text-align: left;
			border-bottom: 1px solid $grey;
		}
		&.striped {
			tbody {
				> tr {
					&:nth-child(odd) {
						background: #fff;
					}
					&:nth-child(even) {
						background: #eee;
					}
				}
			}
		}
	}

	.y-table-sorter {
		display: inline-flex;
		flex-direction: column;
		margin-left: 8px;
		cursor: pointer;
		> span {
			display: inline-block;
			width: 8px;
			height: 8px;
			transform: rotate(90deg);
			color: $grey;
		}
	}
}
</style>
