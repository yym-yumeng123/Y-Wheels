export default function validator(data, rules) {
	let errors = {}
	rules.forEach(rule => {
		let value = data[rule.key]
		// 存在必填项
		if(rule.required) {
			// 如果 value 不存在
			if(!value && value !== 0) {
				errors[rule.key] = { required: '必填' }
				return
			}
		}

		if(rule.pattern) {
			if(rule.pattern === 'email') {
				rule.pattern = /^.+@.+$/
			}
			if(rule.pattern.test(value) === false) {
				ensureObject(errors, rule.key)
				errors[rule.key].pattern = '格式不正确'
			}
		}

		if(rule.minLength) {
			if(rule.minLength > value.length) {
				ensureObject(errors, rule.key)
				errors[rule.key].minLength = '太短'
			}
		}
	})
	return errors
}

function ensureObject(obj, key) {
	if(typeof obj[key] !== 'object') {
		obj[key] = {}
	}
}