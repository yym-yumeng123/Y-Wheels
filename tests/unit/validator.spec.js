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
	it('测试 email 为空, 必填', () => {
		let data = {
			email: ''
		}
		let rules = [
			{ key: 'email', required: true }
		]
		let errors = validator(data, rules)
		expect(errors.email.required).to.eq('必填')
	})
	it('测试 email 为 0 时', () => {
		let data = {
			email: 0
		}
		let rules = [
			{ key: 'email', required: true }
		]
		let errors = validator(data, rules)
		expect(errors.email).to.not.exist
	})
})