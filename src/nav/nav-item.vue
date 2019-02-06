<template>
    <div class="y-nav-item" :class="{active: selected, vertical}"
        @click="onClickItem"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'YNavItem',
    inject:['root', 'vertical'],
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
            this.root.namePath = []
            this.$parent.updateNamePath && this.$parent.updateNamePath()
            this.$emit('update:selected',this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "var";
    .y-nav-item {
        position: relative;
        padding: 10px 20px;
        &:not(.vertical) {
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
        &.vertical {
            &.active {
                color: $border-bottom-color;
            }
        }
    }
    a {
        color: inherit;
        // text-decoration: none;
    }
    .y-sub-nav .y-nav-item:not(.vertical) {
        &.active {
            background: $grey;
            color: $color;
            &::after {
                display: none;
            }
        }
    }
</style>

