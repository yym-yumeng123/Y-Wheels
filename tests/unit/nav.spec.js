import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Nav from '../../src/nav/nav.vue'
import NavItem from '../../src/nav/nav-item.vue'
import SubNav from '../../src/nav/sub-nav.vue'
import Vue from 'vue'

chai.use(sinonChai)

describe('nav.vue', () => {
	it('存在.', () => {
		expect(Nav).to.exist
	})
	it('支持selected 属性', (done) => {
		Vue.component('y-nav-item', NavItem)
		Vue.component('y-sub-nav', SubNav)
		const wrapper = mount(Nav, {
			propsData: {
				selected: 'home'
			},
			slots: {
				default: `
					<y-nav-item name="home">
							<a href="https://www.baidu.com" target="_blank">首页</a>
					</y-nav-item>
					<y-sub-nav name="about">
							<template slot="title">关于</template>
							<y-nav-item name="culture">企业文化</y-nav-item>
					</y-sub-nav>
				`
			}
		})
		setTimeout(() => {
			expect(wrapper.find('[data-name="home"].active').exists()).to.be.true
			done()
		})
	})
	it('会触发 update:selected 事件.', (done) => {
		Vue.component('y-nav-item', NavItem)
		Vue.component('y-sub-nav', SubNav)
		const callback = sinon.fake();
		const wrapper = mount(Nav, {
			propsData: {
				selected: 'home'
			},
			slots: {
				default: `
					<y-nav-item name="home">
							<a href="https://www.baidu.com" target="_blank">首页</a>
					</y-nav-item>
					<y-sub-nav name="about">
							<template slot="title">关于</template>
							<y-nav-item name="culture">企业文化</y-nav-item>
							<y-nav-item name="developers">开发团队</y-nav-item>
					</y-sub-nav>
				`
			},
			listeners: {
				'update:selected': callback
			}
		})
		wrapper.find('[data-name="developers"]').trigger('click')
		expect(callback).to.have.been.calledWith('developers')
		done()
	})
})

