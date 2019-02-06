<template>
    <div class="y-sub-nav" :class="{actived}" v-click-outside="close">
        <span class="y-sub-nav-label" @click="onClick">
            <slot name="title"></slot>
            <span class="y-sub-nav-icon" :class="{open}">
                <y-icon name="right"></y-icon>
            </span>

        </span>
        <!-- v-if 让元素出现 / 不出现在页面 v-show 加 style 一直在页面-->
        <!-- v-if true / created false / destroy , v-show 只改 style -->
        <transition name="fade" @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
            <div class="y-sub-nav-popover" v-show="open" :class="{vertical}">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import YIcon from '../icon/icon'
import ClickOutside from '../click-outside'
export default {
    name: 'YSubNav',
    directives: {ClickOutside},
    components: {YIcon},
    inject: ['root', 'vertical'],
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            open: false,
        }
    },
    computed: {
        actived () {
            return this.root.namePath.indexOf(this.name) >= 0 ? true : false
        }
    },
    methods: {
        enter (el, done) {
            let {height} = el.getBoundingClientRect()
            el.style.height = 0
            el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterEnter (el) {
            el.style.height = 'auto'
        },
        leave (el, done) {
            let {height} = el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.getBoundingClientRect()
            el.style.height = 0
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterLeave (el) {
            el.style.height = 'auto'
        },
        close () {
            this.open = false
        },
        onClick () {
            this.open = !this.open
        },
        updateNamePath () {
            this.active = true
            this.root.namePath.unshift(this.name)
            if (this.$parent.updateNamePath) {
                this.$parent.updateNamePath()
            } else {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "var";
    .y-sub-nav {
        position: relative;
        &.actived {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $border-bottom-color;
                width: 100%;
            }
        }
        &-label {
            display: block;
            padding: 10px 20px;
        }
        &-icon {
            display: none;
        }
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            white-space: nowrap;
            margin-top: 4px;
            background: #fff;
            box-shadow: 0 0 3px fade-out( #000, .8);
            color: $light-color;
            font-size: $font-size;
            min-width: 8em;
            &.vertical {
                position: static;
                border-radius: 0;
                border: none;
                box-shadow: none;
                transition: height 400ms;
                overflow: hidden;
            }
        }
    }
    .y-sub-nav .y-sub-nav{
        &.actived {
            &::after {
                display: none;
            }
        }
        .y-sub-nav-popover {
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .y-sub-nav-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .y-sub-nav-icon {
            display: inline-flex;
            margin-left: 1em;
            transition: transform 300ms;
            svg {
                fill: $light-color;
            }
            &.open {
                transform: rotate(180deg);
            }
        }
    } 
</style>

