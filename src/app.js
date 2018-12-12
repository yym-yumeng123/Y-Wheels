import Vue from 'vue'

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

import Row from './row'
import Col from './col'

import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import Toast from './toast'
import plugin from './plugin'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

Vue.component('g-row', Row)
Vue.component('g-col', Col)

Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)

Vue.component('g-toast', Toast)
Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        message: '双向绑定'
    },
    created() {
        
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        showToast(message) {
            this.$toast('你好啊', {
                closeButton: {
                    text: '知道了',
                    callback (toast) {
                        toast.log()
                        console.log(toast)
                        console.log('用户知道了')
                    }
                }
            })
        }
    }
})

