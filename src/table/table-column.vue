<template>
	<div>
		table-column
	</div>
</template>

<script>
	export default {
		name: 'YTableColumn',
		props: {
			text: {
				type: String,
				required: true
			},
			field: {
				type: String,
				required: true
			},
			width: {
				type: Number
			}
		}
	}
</script>