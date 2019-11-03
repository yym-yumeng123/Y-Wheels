class Validator {
	static add(name, fn) {
		Validator.prototype[name] = fn
	}
	constructor() {}
	validate(data, rules) {
		let errors = {}
		rules.forEach(rule => {
			let value = data[rule.key]
			// 存在必填项
			if(rule.required) {
				// 如果 value 不存在
				let error = this.required(value)
				if(error) {
					this.ensureObject(errors, rule.key)
					errors[rule.key].required = error
					return
				}
			}
	
			// 遍历 validaotors 并调用对应的函数
			let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
			validators.forEach(validatorKey => {
				// validatorKey 是一个验证的key
				if(this[validatorKey]) {
					let error = this[validatorKey](value, rule[validatorKey])
					if(error) {
						this.ensureObject(errors, rule.key)
						errors[rule.key][validatorKey] = error
					}
				} else {
					throw `不存在的key: ${validatorKey}`
				}
			})
		})
		return errors
	}

	required(value) {
		if(value !== 0 && !value) {
			return '必填'
		}
	}
	
	pattern(value, pattern) {
		if(pattern === 'email') {
			pattern = /^.+@.+$/
		}
		if(pattern.test(value) === false) {
			return '格式不正确'
		}
	}
	
	minLength(value, minLength) {
		if(value.length < minLength) {
			return '太短'
		}
	}
	
	maxLength(value, maxLength) {
		if(value.length > maxLength) {
			return '太长'
		}
	}

	ensureObject(obj, key) {
		if(typeof obj[key] !== 'object') {
			obj[key] = {}
		}
	}
}

export default Validator

/**
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
			}
		}

		// 遍历 validaotors 并调用对应的函数
		let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
		validators.forEach(validatorKey => {
			// validatorKey 是一个验证的key
			if(validator[validatorKey]) {
				let error = validator[validatorKey](value, rule[validatorKey])
				if(error) {
					ensureObject(errors, rule.key)
					errors[rule.key][validatorKey] = error
				}
			} else {
				throw `不存在的key: ${validatorKey}`
			}
		})
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

validator.maxLength = (value, maxLength) => {
	if(value.length > maxLength) {
		return '太长'
	}
}

function ensureObject(obj, key) {
	if(typeof obj[key] !== 'object') {
		obj[key] = {}
	}
}
 */