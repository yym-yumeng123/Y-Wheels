<template>
    <div class="y-slides">
        <div class="y-slides-window" ref="window">
            <div class="y-slides-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElementSlides',
    props: {
        selected:{
            type: String
        },
        autoPlay: {
            type: Boolean,
            default: true
        }
    },
    mounted () {
        console.log(this.$children)
        this.updateChildren()
        this.playAutomatclly()
    },
    updated () {
        this.updateChildren()
    },
    methods: {
        getSelected () {
            let first = this.$children[0]
            return this.selected || first.name
        },
        playAutomatclly () {
            const names = this.$children.map( vm => vm.name)
            let index = names.indexOf(this.getSelected())
            let run = () => {
                if (index === names.length) { index = 0}
                this.$emit('update:selected', names[index + 1])
                index++
                setTimeout(run, 3000)
            }
            setTimeout(run, 3000)
        },
        updateChildren () {
            let selected = this.getSelected()
            this.$children.forEach(vm => {
                vm.selected = selected
                // 往 children 传递一个
                const names = this.$children.map(vm => vm.name)
                let newIndex = names.indexOf(selected)  // 选中的 selcted 下标
                let oldIndex = names.indexOf(vm.name)  // 要更新的下标
                vm.reverse = newIndex > oldIndex ? false : true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .y-slides {
        border: 1px solid black;
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;
        }
    }
</style>

