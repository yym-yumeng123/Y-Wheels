<template>
    <div class="y-slides" @mouseenter="onMousEenter" @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <div class="y-slides-window" ref="window">
            <div class="y-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="y-slides-dots">  
            <span @click="onClickPrev" data-action="prev">
                <y-icon name="left"></y-icon>
            </span>
            <span v-for="n in childrenLength" :key="n" :data-index="n - 1" :class="{active: selectedIndex === n-1}"
                @click="select(n-1)"
            >
                {{n}}
            </span>
            <span @click="onClickNext" data-action="next">
                <y-icon name="right"></y-icon>
            </span>
        </div>
    </div>
</template>

<script>
import Icon from '../icon/icon'
export default {
    name: 'ElementSlides',
    components:{yIcon: Icon},
    props: {
        selected:{
            type: String
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        autoPlayDelay: {
            type: Number,
            default: 3000
        }
    },
    data () {
        return {
            childrenLength: 0,
            lastSelectedIndex: undefined,
            timeId: undefined,  // 判断动画停止
            startTouch: undefined, // 手机手指开始触摸的点
        }
    },
    computed: {
        selectedIndex () {
            let index = this.names.indexOf(this.selected)
            return index === -1 ? 0 : index
        },
        names () {
            return this.items.map( vm => vm.name)
        },
        items () {
            return this.$children.filter(vm => vm.$options.name === 'ElementSlidesItem')
        }
    },
    mounted () {
        this.updateChildren()
        if (this.autoPlay) {
            this.playAutomatclly()
        }
        this.childrenLength = this.items.length
    },
    updated () {
        this.updateChildren()
    },
    beforeDestroy () {
        this.pause()
    },
    methods: {
        onClickPrev () {
            this.select(this.selectedIndex - 1)
        },
        onClickNext () {
            this.select(this.selectedIndex + 1)
        },
        onTouchStart(e) {
            console.log(e.touches[0])
            if (e.touches.length > 1) {return}
            this.startTouch = e.touches[0]
            this.pause()
        },
        onTouchMove() {
        },
        onTouchEnd(e) {
            let endTouch = e.changedTouches[0]
            let {clientX:x1, clientY:y1} = this.startTouch
            let {clientX:x2, clientY:y2} = endTouch
            // 判断用户滑动轨迹的夹角
            let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
            let deltaY = Math.abs(y2 - y1)
            let rate = distance / deltaY
            if (rate > 2) {
                if (x2 > x1) {
                    this.select(this.selectedIndex - 1)
                }else {
                    this.select(this.selectedIndex + 1)
                }
            }
            this.$nextTick(()=> {
                if (this.autoPlay) {
                    this.playAutomatclly()
                }
            })
        },
        onMousEenter () {
            this.pause()
        },
        onMouseLeave () {
                if (this.autoPlay) {
                    this.playAutomatclly()
                }
        },
        select(newIndex) {
            this.lastSelectedIndex = this.selectedIndex // 触发新值之前, 被选中的index 赋值给lastIndex
            if (newIndex === -1) { newIndex = this.names.length - 1}
            if (newIndex === this.names.length) { newIndex = 0}
            this.$emit('update:selected', this.names[newIndex])  // 上面后 index 会变化
        },
        getSelected () {
            let first = this.items[0]
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
                this.select(newIndex)  // 告诉外界选中 newIndex
                this.timeId = setTimeout(run, this.autoPlayDelay)
            }
            this.timeId = setTimeout(run, this.autoPlayDelay)
        },
        updateChildren () {
            let selected = this.getSelected()
            this.items.forEach(vm => {
                let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                if(this.timeId) {
                    if(this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
                        reverse = false
                    }
                    if(this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
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

