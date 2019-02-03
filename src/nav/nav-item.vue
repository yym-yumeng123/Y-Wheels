<template>
    <div class="y-nav-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'YNavItem',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

