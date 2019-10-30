export default function validator(data, rules) {
	let errors = {}
	rules.forEach(rule => {
		let value = data[rule.key]
		// 存在必填项
		if(rule.required) {
			// 如果 value 不存在
			if(!value && value !== 0) {
				errors[rule.key] = { required: '必填' }
			}
		}

		if(rule.pattern) {
			if(rule.pattern === 'email') {
				rule.pattern = /^.+@.+$/
			}
			if(rule.pattern.test(value) === false) {
				errors[rule.key] = { pattern: '格式不正确' }
			}
		}
	})
	return errors
}