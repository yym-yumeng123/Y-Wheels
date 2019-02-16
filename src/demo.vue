<template>
  <div style="padding: 20px">
        <y-pager :total-page="10" :current-page.sync="currentPage" :hide-if-one-page="false"></y-pager>


        <y-input></y-input>
        <y-input value="readonly只读" readonly></y-input>
        <y-input value="不可点击" disabled></y-input>

        <y-input error="姓名不能少于两个字" value="ni"></y-input>

        <y-input value="change事件" @change="inputChange"></y-input>

        <div>
            <y-input v-model="message"></y-input>
            <p>{{ message }}</p>
            <y-button @click="message += 1">点击 +1</y-button>
        </div>
  </div>

</template>

<script>
import YPager from './pagination/pager.vue'
import YButton from './button/button'
import YInput from './input/input'

export default {
  name: "demo",
  components: {
    YPager, YInput, YButton
  },
  data() {
    return {
      currentPage: 1,
      message: '双向绑定'
    }
  },
  methods: {
        inputChange(e) {
            alert(e)
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
