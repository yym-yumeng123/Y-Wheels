<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <!-- v-if=icon : 是否出现icon -->
        <g-icon v-if="icon" :name="icon" class="icon loading"></g-icon>
        <div class="content">
            <slot></slot>  
        </div>
    </button>
</template>

<style lang="scss" scoped>
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        // 设置icon左右
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
        }
        .loading {
            animation: spin 1s linear infinite;
        }
    }

</style>

<script>
export default {
    // props: ['icon', 'iconPosition']
    props: {
        icon: String,
        iconPosition: {
            type: String,
            default: 'left',
            // 防止写除了left 和 right, 属性的检查器
            validator(value) {
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>

