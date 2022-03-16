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
                title: "htmlcss",
                path: '/htmlcss/html',
                collapsable: false, // 不折叠
                children: [{
                    title: "meta",
                    path: "/htmlcss/meta"
                }, {
                    title: "html",
                    path: "/htmlcss/html"
                }, {
                    title: "table表格",
                    path: "/htmlcss/table"
                }, {
                    title: "form表单",
                    path: "/htmlcss/form"
                }, {
                    title: "css基础",
                    path: "/htmlcss/css2"
                }, {
                    title: "常用css",
                    path: "/htmlcss/css1"
                }, {
                    title: "浮动和定位",
                    path: "/htmlcss/float"
                }, {
                    title: "css书写规范",
                    path: "/htmlcss/stand"
                }, {
                    title: "seo",
                    path: "/htmlcss/seo"
                }, ]
            },
            {
                title: "基础学习",
                path: '/handbook/vue',
                collapsable: false, // 不折叠
                children: [{
                        title: "vue3.2 setup",
                        path: "/handbook/vue"
                    },
                    {
                        title: "markdown语法模板",
                        path: "/handbook/Generics"
                    }
                ],
            },
            {
                title: "题目收集",
                path: '/question/collect',
                collapsable: false, // 不折叠
                children: [{
                    title: "题目收集",
                    path: "/question/collect"
                }, ],
            },
            {
                title: "待整理",
                path: '/clear/eventLoop',
                collapsable: false, // 不折叠
                children: [{
                        title: "JavaScript Event Loop",
                        path: "/clear/eventLoop"
                    },
                    {
                        title: "AJAX",
                        path: "/clear/ajax"
                    }, {
                        title: "闭包",
                        path: "/clear/closure"
                    },
                    {
                        title: "Storage",
                        path: "/clear/storage"
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
                }, {
                    title: "状态码",
                    path: "/http/StatusCode"
                }, ],
            },
            {
                title: "Typescript",
                path: '/typescript/basic',
                collapsable: false, // 不折叠
                children: [{
                    title: "基础类型",
                    path: "/typescript/basic"
                }, ],
            },
            {
                title: '日常收集',
                path: '/collect/Fragment1',
                collapsable: false, // 不折叠
                children: [{
                    title: "数据类型判断",
                    path: "/collect/Fragment1"
                }, {
                    title: "数组对象去重",
                    path: "/collect/Fragment2"
                }, {
                    title: "点击复制链接",
                    path: "/collect/Fragment3"
                }, {
                    title: "websocket实现消息通知",
                    path: "/collect/Fragment4"
                }, {
                    title: "扁平/树形结构转换",
                    path: "/collect/Fragment5"
                }, {
                    title: "滚动条实现动画",
                    path: "/collect/Fragment6"
                }]
            }, {
                title: '小插件(工具库)',
                path: '/plugin/Moment',
                collapsable: false, // 不折叠
                children: [{
                    title: "moment.js",
                    path: "/plugin/Moment"
                }, {
                    title: "生成二维码(qrcodejs2)",
                    path: "/plugin/Qrcodejs2"
                }, {
                    title: "前端显示markdown文件",
                    path: "/plugin/marked"
                }]
            }, {
                title: 'css样式库',
                path: '/quickCSS/Scrollbar',
                collapsable: false, // 不折叠
                children: [{
                    title: "滚动条样式",
                    path: "/quickCSS/Scrollbar"
                }, {
                    title: "文本超出换行",
                    path: "/quickCSS/Ellipsis"
                }, {
                    title: "input输入框",
                    path: "/quickCSS/Input"
                }]
            }
        ]
    }
}