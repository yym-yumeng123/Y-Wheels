<template>
    <div>
        <h4>基础用法</h4>
        <y-input></y-input>
        <br>
        <br>
        <y-input value="请输入..."></y-input>

        <h4>只读状态</h4>
        <y-input value="readonly只读" readonly></y-input>

        <h4>禁用状态</h4>
        <y-input value="不可点击" disabled></y-input>

        <h4>错误提示</h4>
        <y-input error="姓名不能少于两个字" value="王"></y-input>
        <br>
        <br>
        <y-input error="年龄不能超过30岁" value="31"></y-input>

        <h4>事件</h4>
        <y-input value="change事件" @change="inputChange"></y-input>
        <y-input value="input事件" @input="inputIpt"></y-input>
        <br>
        <br>
        <y-input value="focus事件" @focus="inputFocus"></y-input>
        <y-input value="blur事件" @blur="inputBlur"></y-input>

        <h4>双向绑定</h4>
        <y-input v-model="message"></y-input>
        <p style="font-size:20px;">双向绑定: {{ message }}</p>
        <y-button @click="message += 1">点击 +1</y-button>
    </div>
</template>

<script>
import YInput from '../../../src/input/input'
import YButton from '../../../src/button/button'
export default {
    components: {
        YInput,YButton
    },
    data () {
        return {
            message: '双向绑定'
        }
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        inputIpt(e) {
            console.log(e)
        },
        inputFocus(e) {
            console.log(e)
        },
        inputBlur(e) {
            console.log(e)
        }
    }
}
</script>
