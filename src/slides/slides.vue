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
            // 周期触发
            // setInterval(()=> {  // 会造成内存过大, 不清楚 Interval
            //     if (index === names.length) {index = 0}
            //     this.$emit('update:selected', names[index + 1])
            //     index++
            // }, 2000)
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
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .y-slides {
        display: inline-block;
        border: 1px solid black;
        &-wrapper {
            position: relative;
        }
    }
</style>

