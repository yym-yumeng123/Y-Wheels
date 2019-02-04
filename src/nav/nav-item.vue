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
    inject:['root'],
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
    created () {
        this.root.addItem(this)
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
    @import "var";
    .y-nav-item {
        position: relative;
        padding: 10px 20px;
        &.active {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $border-bottom-color;
                width: 100%;
            }
        }
    }
    .y-sub-nav .y-nav-item {
        &.active {
            background: $grey;
            color: $color;
            &::after {
                display: none;
            }
        }
    }
</style>

