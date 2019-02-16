<template>
  <div class="wrapper" :class="{ error }">
    <!-- 组件支持 v-model:  1. :value="value"  2:  @input="$emit('input', $event.target.value)" -->
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <y-icon name="error" class="icon-error"></y-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import YIcon from "../icon/icon";
export default {
  components: {
    YIcon
  },
  name: "ElementInput", // 使用 vue 开发者工具 给组件命名
  // props: ['value']
  props: {
    value: {
      type: String,
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
