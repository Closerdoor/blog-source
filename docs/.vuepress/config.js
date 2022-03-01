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
                        title: "vue3.2 setup",
                        path: "/handbook/ConditionalTypes"
                    },
                    {
                        title: "泛型",
                        path: "/handbook/Generics"
                    }
                ],
            },
            {
                title: "http协议",
                path: '/http/http',
                collapsable: false, // 不折叠
                children: [{
                        title: "http",
                        path: "/http/http"
                    },{
                        title: "状态码",
                        path: "/http/StatusCode"
                    },
                ],
            },
            {
                title: "Typescript",
                path: '/typescript/basic',
                collapsable: false, // 不折叠
                children: [{
                        title: "基础类型",
                        path: "/typescript/basic"
                    },
                ],
            },
            {
                title: '日常收集',
                path:'/collect/Fragment1',
                collapsable: false, // 不折叠
                children:[{
                    title: "数据类型判断",
                    path: "/collect/Fragment1"
                },{
                    title: "数组对象去重",
                    path: "/collect/Fragment2"
                },{
                    title: "点击复制链接",
                    path: "/collect/Fragment3"
                },{
                    title: "websocket实现消息通知",
                    path: "/collect/Fragment4"
                },{
                    title: "扁平/树形结构转换",
                    path: "/collect/Fragment5"
                },{
                    title: "滚动条实现动画",
                    path: "/collect/Fragment6"
                }]
            },{
                title: '小插件(工具库)',
                path:'/plugin/Moment',
                collapsable: false, // 不折叠
                children:[{
                    title: "moment.js",
                    path: "/plugin/Moment"
                },{
                    title: "生成二维码(qrcodejs2)",
                    path: "/plugin/Qrcodejs2"
                },{
                    title: "前端显示markdown文件",
                    path: "/plugin/marked"
                }]
            },{
                title: 'css样式库',
                path:'/quickCSS/Scrollbar',
                collapsable: false, // 不折叠
                children:[{
                    title: "滚动条样式",
                    path: "/quickCSS/Scrollbar"
                },{
                    title: "文本超出换行",
                    path: "/quickCSS/Ellipsis"
                },{
                    title: "input输入框",
                    path: "/quickCSS/Input"
                }]
            }
        ]
    }
}