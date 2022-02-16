module.exports = {
    base: '/vuepress-blog/',
    title: 'Javascript 补完计划',
    description: 'Javascript基础知识',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'Closerdoor',
                items: [{
                    text: 'Github',
                    link: 'https://github.com/Closerdoor'
                }, ]
            }
        ],
        subSidebar: 'auto',
        sidebar: [{
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [{
                    title: "学前必读",
                    path: "/"
                }]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [{
                        title: "条件类型",
                        path: "/handbook/ConditionalTypes"
                    },
                    {
                        title: "泛型",
                        path: "/handbook/Generics"
                    }
                ],
            },
            {
                title: '日常收集',
                path:'/collect/Fragment1',
                collapsable: false, // 不折叠
                childrend:[{
                    title: "对象去重",
                    path: "/collect/Fragment1"
                }]
            }
        ]
    }
}