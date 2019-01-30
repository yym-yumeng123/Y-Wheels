<template>
    <div class="y-slides" @mouseenter="onMousEenter" @mouseleave="onMouseLeave">
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
            lastSelectedIndex: undefined,
            timeId: undefined,  // 判断动画停止
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
        onMousEenter () {
            this.pause()
        },
        onMouseLeave () {
            this.playAutomatclly()
        },
        select(index) {
            this.lastSelectedIndex = this.selectedIndex // 触发新值之前, 被选中的index 赋值给lastIndex
            this.$emit('update:selected', this.names[index])  // 上面后 index 会变化
        },
        getSelected () {
            let first = this.$children[0]
            return this.selected || first.name
        },
        pause () {
            window.clearTimeout(this.timeId)
            this.timeId = undefined
        },
        playAutomatclly () {
            if(this.timeId) {}
            let run = () => {
                let index = this.names.indexOf(this.getSelected())  // index 需重新获取
                let newIndex = index + 1
                if (newIndex === -1) { newIndex = this.names.length - 1}
                if (newIndex === this.names.length) { newIndex = 0}
                this.select(newIndex)  // 告诉外界选中 newIndex
                this.timeId = setTimeout(run, 3000)
            }
            this.timeId = setTimeout(run, 3000)
        },
        updateChildren () {
            let selected = this.getSelected()
            this.$children.forEach(vm => {
                let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                if(this.timeId) {
                    if(this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
                        reverse = false
                    }
                    if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
                        reverse = true
                    }
                }
                vm.reverse = reverse
                this.$nextTick(()=>{
                    vm.selected = selected
                })
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .y-slides {
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;
        }
        &-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 0;
            > span {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #ddd;
                margin: 0 8px;
                font-size: 12px;
                &:hover {
                    cursor: pointer;
                }
                &.active {
                    background: #000;
                    color: #fff;
                    &:hover {
                        cursor: default;
                    }
                }
            }
            
        }
    }
</style>

