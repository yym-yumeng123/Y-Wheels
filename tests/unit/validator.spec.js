// 引入断言库
import chai, { expect } from "chai";
import sinon from "sinon";

import sinonChai from "sinon-chai";

chai.use(sinonChai);

import Validator from "@/validator.js";

describe("Validator", () => {
	it("存在", () => {
		expect(Validator).to.exist;
	});
	it("required true 报错", () => {
		let data = {
			email: ""
		};
		let rules = [{ key: "email", required: true }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.required).to.eq("必填");
	});
	it("required true 通过", () => {
		let data = {
			email: 0
		};
		let rules = [{ key: "email", required: true }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email).to.not.exist;
	});
	it("测试 email 的 pattern 正则错误", () => {
		let data = {
			email: "@pingan.com"
		};
		let rules = [{ key: "email", pattern: /^.+@.+$/ }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.pattern).to.eq("格式不正确");
	});
	it("测试 email 的正则 pattern 正确", () => {
		let data = {
			email: "1@pingan.com"
		};
		let rules = [{ key: "email", pattern: /^.+@.+$/ }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email).to.not.exist;
	});
	it('测试 email 的为 "email" 的 报错', () => {
		let data = {
			email: "@pingan.com"
		};
		let rules = [{ key: "email", pattern: "email" }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.pattern).to.eq("格式不正确");
	});
	it('测试 email 的为 "email" 的 通过', () => {
		let data = {
			email: "1@pingan.com"
		};
		let rules = [{ key: "email", pattern: "email" }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email).to.not.exist;
	});

	// 规则判断顺序的 required 第一
	it("required && pattern", () => {
		let data = {
			email: ""
		};
		let rules = [{ key: "email", pattern: "email", required: true }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.required).to.exist;
		// expect(errors.email.pattern).to.eq("格式不正确");
	});

	it("minLength && pattern", () => {
		let data = {
			email: ""
		};
		let rules = [{ key: "email", pattern: "email", minLength: 6 }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.minLength).to.exist;
		expect(errors.email.pattern).to.exist;
	});

	it("maxLength", () => {
		let data = {
			email: "12334343435353546"
		};
		let rules = [{ key: "email", maxLength: 6 }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.maxLength).to.exist;
	});
	it("maxLength 报错", () => {
		let data = {
			email: "1254612121"
		};
		let rules = [{ key: "email", maxLength: 6 }];
		let validator = new Validator()
		let errors = validator.validate(data, rules);
		expect(errors.email.maxLength).to.eq("太长");
	});
	it("many key", () => {
		let data = {
			email: "1254612121"
		};
		let rules = [{ key: "email", required: true, maxLength: 6, hasNumber: true }];
		let fn = () => {
			let validator = new Validator()
			validator.validate(data, rules);
		}
		expect(fn).to.throw();
	});
	it("自定义测试规则 Validator hasNumber ", () => {
		let data = {
			email: "abxc"
		};
		let validator = new Validator()
		validator.hasNumber = (value) => {
			if(!/\d/.test(value)) {
				return '必须含有数字'
			}
		}
		let errors
		let rules = [{ key: "email", required: true, hasNumber: true }];
		let fn = () => {
			errors = validator.validate(data, rules);
		}
		expect(fn).to.not.throw();
		expect(errors.email.hasNumber).to.eq('必须含有数字')
	});
	it("两个 validator 互不影响", () => {
		let data = {
			email: "abxc"
		};
		let validator1 = new Validator()
		let validator2 = new Validator()
		validator1.hasNumber = (value) => {
			if(!/\d/.test(value)) {
				return '必须含有数字'
			}
		}
		let errors
		let rules = [{ key: "email", required: true, hasNumber: true }];
		expect(() => {
			validator1.validate(data, rules)
		}).to.not.throw();
		expect(() => {
			validator2.validate(data, rules)
		}).to.throw();
	});
	it("全局添加 validator", () => {
		let data = {
			email: "abxc"
		};
		let validator1 = new Validator()
		let validator2 = new Validator()
		Validator.add('hasNumber', (value) => {
			if(!/\d/.test(value)) {
				return '必须含有数字'
			}
		})
		let errors
		let rules = [{ key: "email", required: true, hasNumber: true }];
		expect(() => {
			validator1.validate(data, rules)
		}).to.not.throw();
		expect(() => {
			validator2.validate(data, rules)
		}).to.not.throw();
	});
});
