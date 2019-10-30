// 引入断言库
import chai, { expect } from 'chai'
import sinon from 'sinon'

import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import validator from '@/validator.js'

describe('validator', () => {
	it('存在', () => {
		expect(validator).to.exist
	})
	it('required true 报错', () => {
		let data = {
			email: ''
		}
		let rules = [
			{ key: 'email', required: true }
		]
		let errors = validator(data, rules)
		expect(errors.email.required).to.eq('必填')
	})
	it('required true 通过', () => {
		let data = {
			email: 0
		}
		let rules = [
			{ key: 'email', required: true }
		]
		let errors = validator(data, rules)
		expect(errors.email).to.not.exist
	})
	it('测试 email 的 pattern 正则错误', () => {
		let data = {
			email: '@pingan.com'
		}
		let rules = [
			{ key: 'email', pattern: /^.+@.+$/ }
		]
		let errors = validator(data, rules)
		expect(errors.email.pattern).to.eq('格式不正确')
	})
	it('测试 email 的正则 pattern 正确', () => {
		let data = {
			email: '1@pingan.com'
		}
		let rules = [
			{ key: 'email', pattern: /^.+@.+$/ }
		]
		let errors = validator(data, rules)
		expect(errors.email).to.not.exist
	})
	it('测试 email 的为 "email" 的 报错', () => {
		let data = {
			email: '@pingan.com'
		}
		let rules = [
			{ key: 'email', pattern: 'email' }
		]
		let errors = validator(data, rules)
		expect(errors.email.pattern).to.eq('格式不正确')
	})
	it('测试 email 的为 "email" 的 通过', () => {
		let data = {
			email: '1@pingan.com'
		}
		let rules = [
			{ key: 'email', pattern: 'email' }
		]
		let errors = validator(data, rules)
		expect(errors.email).to.not.exist
	})


	it('required && pattern', () => {
		let data = {
			email: ''
		}
		let rules = [
			{ key: 'email', pattern: 'email', required: true }
		]
		let errors = validator(data, rules)
		expect(errors.email).to.not.exist
	})
})