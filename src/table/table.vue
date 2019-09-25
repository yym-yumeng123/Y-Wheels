<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th v-for="(column, index) in columns">
						{{ column.text }}
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(item, index) in dataSource">
					<td>{{ index + 1 }}</td>
					<template v-for="column in columns">
						<td>
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

</style>
