<template>
    <transition name="fade">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">close</button>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ElementSider',
    data() {
        return {
            visible: true
        }
    }
}
</script>


<style lang="scss" scoped>
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 4px;
            border-radius: 3px;
            background: #ccc;
        }
    }
</style>
