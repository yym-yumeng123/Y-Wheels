<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ElementCollapse',
}
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
        // border-bottom: none;
    }
</style>


