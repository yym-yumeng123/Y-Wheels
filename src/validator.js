export default function validator(data, rules) {
	let errors = {}
	rules.forEach(rule => {
		let value = data[rule.key]
		// 存在必填项
		if(rule.required) {
			// 如果 value 不存在
			let error = validator.required(value)
			if(error) {
				ensureObject(errors, rule.key)
				errors[rule.key].required = error
				return
			}
		}

		if(rule.pattern) {
			let error = validator.pattern(value, rule.pattern)
			if(error) {
				ensureObject(errors, rule.key)
				errors[rule.key].pattern = error
				return
			}
		}

		if(rule.minLength) {
			let error = validator.minLength(value, rule.minLength)
			console.log(error, 'error...')
			if(error) {
				ensureObject(errors, rule.key)
				errors[rule.key].minLength = error
			}
		}
	})
	return errors
}

validator.required = value => {
	if(value !== 0 && !value) {
		return '必填'
	}
}

validator.pattern = (value, pattern) => {
	if(pattern === 'email') {
		pattern = /^.+@.+$/
	}
	if(pattern.test(value) === false) {
		return '格式不正确'
	}
}

validator.minLength = (value, minLength) => {
	if(value.length < minLength) {
		return '太短'
	}
}

function ensureObject(obj, key) {
	if(typeof obj[key] !== 'object') {
		obj[key] = {}
	}
}