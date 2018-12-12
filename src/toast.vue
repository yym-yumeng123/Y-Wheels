<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{ closeButton.text }}
        </span>
    </div>
</template>

<script>
// 构造组件的选项
export default {
    name: 'ElementToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
        },
        closeButton: {
            type: Object,
            // 对象是引用的, return 一个对象
            default: () => {
                return {
                    text: '关闭',
                    callback: undefined
                }

            }
        }
    },
    mounted () {
        if(this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    },
    methods: {
        close () {
            this.$el.remove()
            this.$destroy()
        },
        log () {
            console.log('测试')
        },
        onClickClose () {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this) // this === toast实例
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, .75);
    .toast {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        color: #fff;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        border-radius: 4px;
        padding: 0 16px;
    }
    .close {
        padding-left: 16px;
        cursor: pointer;
    }
    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
</style>


