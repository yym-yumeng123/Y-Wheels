<template>
	<div class="y-table-wrapper">
		<table class="y-table" :class="{border, compact, striped: striped}">
			<thead>
				<tr>
					<th><input type="checkbox" /></th>
					<th v-if="isOrder">序号</th>
					<th v-for="column in columns" :key="column.filed">
						{{ column.text }}
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(item, index) in dataSource" :key="item.id">
					<td><input type="checkbox" @change="onChangeItem(item, index, $event)" /></td>
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
			required: true
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
	methods: {
		onChangeItem(item, index, e) {
			const { checked } = e.target
			console.log(checked)
			// 向父组件触发事件
			this.$emit('changeItem', {selected: checked, item, index})
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
}
</style>
