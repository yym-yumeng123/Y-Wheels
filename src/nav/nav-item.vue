<template>
    <div class="y-nav-item" :class="{active: selected}"
        @click="onClickItem"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'YNavItem',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            selected: false
        }
    },
    mounted () {

    },
    methods : {
        onClickItem () {
            this.$emit('add:selected',this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
    .y-nav-item {
        padding: 10px 20px;
        &.active {
            background: red;
        }
    }
</style>

