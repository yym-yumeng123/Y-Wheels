<template>
	<div>
		Table
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
		data: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
