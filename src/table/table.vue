<template>
	<div class="y-table-wrapper">
		<table class="y-table">
			<thead>
				<tr>
					<th>#</th>
					<th v-for="column in columns" :key="column.filed">
						{{ column.text }}
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(item, index) in dataSource" :key="item.id">
					<td>{{ index + 1 }}</td>
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
		th, td {
			padding: 8px;
			text-align: left;
			border-bottom: 1px solid $grey;
		}
		tbody {
			> tr {
				&:nth-child(odd) {
					background: #fff;
				}
				&:nth-child(even) {
					background: $grey
				}
			}
		}
	}
}
</style>
