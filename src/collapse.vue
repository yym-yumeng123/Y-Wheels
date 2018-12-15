<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'ElementCollapse',
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: String,
        }
    },
    data() {
        return {
            eventBus: new Vue(),
        }
    },
    provide() {
        // if( this.single ) {
            return {
                eventBus: this.eventBus
            }  
        // }
    },
    mounted () {
        this.eventBus.$emit('update:selected', this.selected)
    }
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


