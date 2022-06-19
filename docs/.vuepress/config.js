module.exports = {
    base: '/vuepress-blog/',
    title: 'Javascript 基础补完计划',
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
                collapsable: true, // 不折叠
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
                    title: "css3",
                    path: "/htmlcss/css3"
                }, {
                    title: "浮动和定位",
                    path: "/htmlcss/float"
                }, {
                    title: "css书写规范",
                    path: "/htmlcss/stand"
                }, {
                    title: "seo",
                    path: "/htmlcss/seo"
                }]
            },
            {
                title: "javascript",
                path: '/javascript/general',
                collapsable: false, // 不折叠
                children: [{
                    title: "数据类型基础",
                    path: "/javascript/general"
                }, {
                    title: "Array数组方法",
                    path: "/javascript/array"
                }, {
                    title: "String字符串方法",
                    path: "/javascript/string"
                }, {
                    title: "Object对象方法",
                    path: "/javascript/object"
                }, {
                    title: "Date和Math对象",
                    path: "/javascript/date_math"
                }, {
                    title: "DOM",
                    path: "/javascript/dom"
                }, {
                    title: "BOM",
                    path: "/javascript/bom"
                },{
                    title: "cookie",
                    path: "/javascript/cookie"
                }, {
                    title: "坐标",
                    path: "/javascript/position"
                }, {
                    title: "滚动条相关",
                    path: "/javascript/scrollbar"
                }, {
                    title: "this",
                    path: "/javascript/this"
                }, {
                    title: "正则表达式",
                    path: "/javascript/RegExp"
                }],
            },
            {
                title: "ES6高阶",
                path: '/es6/this',
                collapsable: false, // 不折叠
                children: [{
                    title: "call、apply、bind",
                    path: "/es6/this"
                },{
                    title: "闭包",
                    path: "/es6/closure"
                },{
                    title: "柯里化函数",
                    path: "/es6/currying"
                },{
                    title: "解构赋值",
                    path: "/es6/rest"
                },{
                    title: "prototype",
                    path: "/es6/prototype"
                },{
                    title: "function",
                    path: "/es6/function"
                },{
                    title: "对象高级",
                    path: "/es6/object"
                }],
            },
            {
                title: "vue框架常用",
                path: '/vue/vue3_2',
                collapsable: false, // 不折叠
                children: [{
                        title: "vue3.2 setup",
                        path: "/vue/vue3_2"
                    }, {
                        title: "vue3",
                        path: "/vue/vue3"
                    },
                    {
                        title: "vue2",
                        path: "/vue/vue2"
                    },
                    {
                        title: "markdown语法模板",
                        path: "/vue/Generics"
                    }
                ],
            },
            {
                title: "react",
                path: '/react/createApp',
                collapsable: false, // 不折叠
                children: [{
                        title: "react setup",
                        path: "/react/createApp"
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
                },{
                    title: "websocket封装",
                    path: "/collect/websocket"
                }, {
                    title: "扁平/树形结构转换",
                    path: "/collect/Fragment5"
                }, {
                    title: "滚动条实现动画",
                    path: "/collect/Fragment6"
                }, {
                    title: "锚点链接",
                    path: "/collect/anchor"
                }, {
                    title: "登录/注册",
                    path: "/collect/login"
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
                }, {
                    title: "swiper",
                    path: "/plugin/swiper"
                }, {
                    title: "Echarts",
                    path: "/plugin/Echarts"
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