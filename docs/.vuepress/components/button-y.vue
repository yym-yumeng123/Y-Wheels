<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置icon</g-button>
    <g-button icon="settings" iconPosition="right">设置icon方向</g-button>
    <g-button :loading="true">loading效果</g-button>
    <g-button icon="settings" :loading="loadingSettings" @click="loadingSettings = !loadingSettings">点击变换按钮状态</g-button>
    <g-button disabled>默认按钮</g-button>
    <pre>
    	<code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
  import Button from '../../../src/button.vue'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">设置icon</g-button>
          <g-button icon="settings" iconPosition="right">设置icon方向</g-button>
          <g-button :loading="true">loading效果</g-button>
          <g-button icon="settings" :loading="loadingSettings" @click="loadingSettings = !loadingSettings">点击变换按钮状态</g-button>
          <g-button disabled>默认按钮</g-button>
        `,
        loadingSettings: false
      }
    },
	}
</script>

