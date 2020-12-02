<template>
	<div>
		<y-input type="text" />
		<div class="yym-date-picker-pop">
			弹出层
		</div>
	</div>
</template>

<script>
import YInput from '../../input/input.vue'
export default {
	name: 'date-picker',
	components: {
		YInput
	}
}
</script>