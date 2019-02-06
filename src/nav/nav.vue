<template>
    <div class="y-nav" :class="{vertical: vertical}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'YNav',
    provide () {
        return {
            root: this,
            vertical: this.vertical
        }
    },
    data () {
        return {
            items: [],
            namePath: []
        }
    },
    props: {
        selected: {
            type: Array,
            default: () => []
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
        this.updateChildren()
        this.listenToChildren()
    },
    updated () {
        this.updateChildren()
    },
    methods : {
        addItem (vm) {
            this.items.push(vm)
        },
        updateChildren () {
            this.items.forEach((vm) => {
                if (this.selected.indexOf(vm.name) >= 0) {
                    vm.selected = true
                } else {
                    vm.selected = false
                }
            })
        },
        listenToChildren () {
            this.items.forEach(vm => {
                vm.$on('add:selected', (name) => {
                    this.$emit('update:selected', [name])
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "var";
    .y-nav {
        display: flex;
        border-bottom: 1px solid $grey;
        color: $color;
        cursor: pointer;
        user-select: none;
        &.vertical {
            flex-direction: column;
            border: 1px solid $grey;
        }
    }
</style>

