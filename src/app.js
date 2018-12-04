import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false
    }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
// 1. 
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings') // 期望 href 等于 i-settings
    vm.$el.remove()
    vm.$destroy()
}
// 2. 测试loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading') // 期望 href 等于 i-settings
    vm.$el.remove()
    vm.$destroy()
}
// 3. 测试 order
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
// 4. 测试 order 为2 
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
// 测试 click 事件
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}