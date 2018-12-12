/**
 * 1. 为了避免 把 vue 配到另一个名字上
 * 2. $toast 可能会覆盖现有的toast 
 */

import Toast from './toast'

/** Helper */
function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast

export default {
    install (Vue, options) { 
        Vue.prototype.$toast = function (message, toastOption) {
            if(currentToast) {
                currentToast.close()
            }
            currentToast =  createToast({
                Vue,
                message,
                propsData: toastOption,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}