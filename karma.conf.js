// karma 读取 webpack 里面的配置
const webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
	config.set({
		frameworks: ['mocha'],
		// 需要跑的文件地址
		files: ['tests/**/*.spec.js'],

		preprocessors: {
			'**/*.spec.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		reporters: ['spec'],
		// 运行的测试器, 无头 Chrome
		browsers: ['ChromeHeadless']
	})
}