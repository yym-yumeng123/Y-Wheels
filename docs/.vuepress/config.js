module.exports = {
    base: '/Y-Wheels/',
    title: 'Vue UI 组件',
    description: '一个很好用的UI组件',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '快速入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
            },
    
        ]
    }
}