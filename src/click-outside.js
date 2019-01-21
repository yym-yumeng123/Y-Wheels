/**
 * vue 自定义指令
 * 元素多会生成很多监听器
 */
export default {
    bind: function(el, binding, vnode) {
        document.addEventListener('click', (e) => {
            let { target } = e
            if (target === el || el.contains(target)) {
                return
            }
            binding.value()
        })
    }
}