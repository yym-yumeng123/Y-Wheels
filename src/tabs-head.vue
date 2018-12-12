<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
export default {
    name: 'ElementTabHead',
}
</script>

<style lang="scss" scoped>
    .tabs-head{}
</style>


