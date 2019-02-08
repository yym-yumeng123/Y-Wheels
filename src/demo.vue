<template>
  <div style="padding: 20px">
        <y-button icon="settings" iconPosition="right" :loading="loading1" @click="loading1 = !loading1">
            我爱Vue
        </y-button>
        <y-button :loading="true">
            我爱Vue
        </y-button>
        <y-button icon="right" icon-position="right" :loading="loading2"  @click="loading2 = !loading2">
            往右
        </y-button>
        <y-button icon="download">
            下载
        </y-button>
        <y-button icon="download" disabled>
            下载1
        </y-button>

        <y-button-group>
            <y-button icon="left">上一页</y-button>
            <y-button>更多</y-button>
            <y-button icon="right" icon-position="right" @click="xx">下一页</y-button>
        </y-button-group>
        <div style="margin-top:20px">
          <y-icon name="thumbs-up"></y-icon>
          <y-icon name="error"></y-icon>
          <y-icon name="info"></y-icon>
          <y-icon name="loading"></y-icon>
          <y-icon name="right"></y-icon>
          <y-icon name="download"></y-icon>
          <y-icon name="down"></y-icon>
          <y-icon name="settings"></y-icon>
          <y-icon name="left"></y-icon>
        </div>
  </div>

</template>

<script>
import YButton from './button/button'
import YButtonGroup from './button/button-group'
import YIcon from './icon/icon'

export default {
  name: "demo",
  components: {
    YButton,YButtonGroup,YIcon
  },
  data() {
    return {
      loading2: false,
      loading1: false
    }
  },
  methods: {
    xx () {
      console.log('点击我')
    }
  }
};
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
*, *::after, *::before{box-sizing: border-box;}
html {
  font-size: 14px;
}
</style>
