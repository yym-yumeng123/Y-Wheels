/**
 * 1. 为了避免 把 vue 配到另一个名字上
 * 2. $toast 可能会覆盖现有的toast 
 */

import Toast from './toast'
export default {
    install (Vue, options) { 
        Vue.prototype.$toast = function (message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}