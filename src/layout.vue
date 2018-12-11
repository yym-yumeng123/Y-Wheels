<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'ElementLayout',
	data() {
		return {
			layoutClass: {
				hasSider: false
			}
		}
	},
	mounted () {
		console.log('mounted')
		console.log(this.$children)
		this.$children.forEach((vm) => {
			if(vm.$options.name === 'ElementSider') {
				this.layoutClass.hasSider = true
			}
		})
	}
}
</script>


<style lang="scss" scoped>
.layout {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	border: 1px solid red;
	&.hasSider {
		flex-direction: row;
	}
}
</style>
