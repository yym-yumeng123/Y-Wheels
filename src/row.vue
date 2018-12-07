<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ElementRow',
    props: {
        gutter: {
            type: [Number, String]
        }
    },
    created() {
        console.log('row created')
    },
    mounted() {
        console.log('row mounted')
        console.log(this.$children)
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
    // var div = document.createElement('div')  created 过程 创建这个组件但并没有放到页面中
    // document.body.appendChild(div)           mounted 过程 把它放到页面中
}
</script>


<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>
