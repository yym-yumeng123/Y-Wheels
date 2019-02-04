<template>
    <div class="y-sub-nav">
        <span class="y-sub-nav-title" @click="onClick">
            <slot name="title"></slot>
        </span>
        <!-- v-if 让元素出现 / 不出现在页面 v-show 加 style 一直在页面-->
        <!-- v-if true / created false / destroy , v-show 只改 style -->
        <div class="y-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YSubNav',
    data () {
        return {
            open: false
        }
    },
    methods: {
        onClick () {
            this.open = !this.open
        }
    }
}
</script>

<style lang="scss" scoped>
    .y-sub-nav {
        position: relative;
        > span {
            display: inline-block;
            vertical-align: top;
            padding: 10px 20px;
        }
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid green;
            white-space: nowrap;
        }
    }
</style>

