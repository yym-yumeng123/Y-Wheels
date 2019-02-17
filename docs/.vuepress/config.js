module.exports = {
    base: '/Y-Wheels/',
    title: 'ymwheels UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                ]
            }
            
        ]
    }
}