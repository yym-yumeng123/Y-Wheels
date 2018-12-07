<template>
    <div class="col" :class="colClass"
        :style="colStyle"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ElementCol',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        }
    },
    data() {
        return {
            gutter: 0,
        }
    },
    // 计算样式的变化 一个属性根据另一个属性变化
    computed: {
        colClass () {
            let {span, offset} = this
            return [span && `col-${span}`, offset && `offset-${offset}`]
        },
        colStyle () {
            return {
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2 + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .col {
        height: 50px;
        width: 50%;
        background: #3D8FEE;
        // for循环width
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            } 
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            } 
        }
    }
</style>

