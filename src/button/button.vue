<template>
  <!-- 触发click事件 -->
  <button
    class="y-button yym"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <!-- v-if=icon : 是否出现icon -->
    <y-icon class="icon" v-if="icon && !loading" :name="icon"></y-icon>
    <y-icon class="loading icon" v-if="loading" name="loading"></y-icon>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "ElementButton",
  components: {
    "y-icon": Icon
  },
  // props: ['icon', 'iconPosition']
  props: {
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      // 防止写除了left 和 right, 属性的检查器
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    disabled: {
      type: Boolean,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.y-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $border-bg;

  // 设置icon左右
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }

  > .content-wrapper {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content-wrapper {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
  .loading {
    animation: spin 1s linear infinite;
  }
}
</style>
