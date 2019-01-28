<template>
    <div class="y-slides">
        <div class="y-slides-window" ref="window">
            <div class="y-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="y-slides-dots">  
            <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}"
                @click="select(n-1)"
            >
                {{n}}
            </span>
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
    data () {
        return {
            childrenLength: 0,
            lastSelected: undefined
        }
    },
    computed: {
        selectedIndex () {
            return this.names.indexOf(this.selected) || 0
        },
        names () {
            return this.$children.map( vm => vm.name)
        }
    },
    mounted () {
        this.updateChildren()
        this.playAutomatclly()
        this.childrenLength = this.$children.length
    },
    updated () {
        this.updateChildren()
    },
    methods: {
        select(index) {
            this.$emit('update:selected', this.names[index])
        },
        getSelected () {
            let first = this.$children[0]
            return this.selected || first.name
        },
        playAutomatclly () {
            let index = this.names.indexOf(this.getSelected())
            let run = () => {
                let newIndex = index -1
                if (newIndex === -1) { newIndex = this.names.length - 1}
                if (newIndex === this.names.length) { newIndex = 0}
                this.$emit('update:selected', this.names[newIndex])
                setTimeout(run, 3000)
            }
            // setTimeout(run, 3000)
        },
        updateChildren () {
            let selected = this.getSelected()
            this.$children.forEach(vm => {
                vm.selected = selected
                // 往 children 传递一个
                let newIndex = this.names.indexOf(selected)
                let oldIndex = this.names.indexOf(vm.name)
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
        &-dots {
            > span {
                &.active {
                    background: red;
                }
            }
            
        }
    }
</style>

