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
    @import "var";
    .y-sub-nav {
        position: relative;
        > span {
            display: block;
            padding: 10px 20px;
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
        }
    }
    .y-sub-nav .y-sub-nav .y-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>

