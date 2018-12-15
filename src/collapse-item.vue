<template>
    <div class="collapseItem">
        <div class="title" @click="toggle" :data-name="name">
            {{ title }}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElementCollapseItem',
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    inject: ['eventBus'],
    data () {
        return {
            open: false,
        }
    },
    methods: {
        toggle () {
            if (this.open) {
                this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
            } else {
                this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
            }
        },
    },
    mounted () {
        // 1. 监听 eventBus, 只要父元素更新, 就更新
        this.eventBus && this.eventBus.$on('update:selected', (names) => {
            if (names.indexOf(this.name) >= 0) {
                this.open = true
            } else {
                this.open = false
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        > .content {
            padding: 8px;
        }
        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>


