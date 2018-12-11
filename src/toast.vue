<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ElementToast'
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
</style>


