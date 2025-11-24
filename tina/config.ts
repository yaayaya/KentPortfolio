import { defineConfig } from 'tinacms'

// TinaCMS 配置
export default defineConfig({
    branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },

    media: {
        tina: {
            mediaRoot: 'uploads',
            publicFolder: 'public',
        },
    },

    schema: {
        collections: [
            // 專案集合
            {
                name: 'project',
                label: '專案作品',
                path: 'content/projects',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: '專案名稱',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'subtitle',
                        label: '副標題',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: '描述',
                        ui: {
                            component: 'textarea',
                        },
                    },
                    {
                        type: 'image',
                        name: 'image',
                        label: '專案圖片',
                    },
                    {
                        type: 'string',
                        name: 'slug',
                        label: 'URL 路徑',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'category',
                        label: '分類',
                        options: ['UX/UI Design', 'Web Development', 'Mobile App', 'Branding', 'Other'],
                    },
                    {
                        type: 'datetime',
                        name: 'date',
                        label: '日期',
                    },
                    {
                        type: 'boolean',
                        name: 'featured',
                        label: '精選專案',
                    },
                    {
                        type: 'number',
                        name: 'order',
                        label: '排序',
                    },
                ],
            },

            // 部落格集合
            {
                name: 'blog',
                label: '部落格文章',
                path: 'content/blog',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: '文章標題',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'excerpt',
                        label: '摘要',
                        ui: {
                            component: 'textarea',
                        },
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: '內容',
                        isBody: true,
                    },
                    {
                        type: 'image',
                        name: 'image',
                        label: '特色圖片',
                    },
                    {
                        type: 'string',
                        name: 'slug',
                        label: 'URL 路徑',
                        required: true,
                    },
                    {
                        type: 'datetime',
                        name: 'date',
                        label: '發布日期',
                    },
                    {
                        type: 'string',
                        name: 'author',
                        label: '作者',
                    },
                    {
                        type: 'string',
                        name: 'tags',
                        label: '標籤',
                        list: true,
                    },
                ],
            },

            // 頁面集合
            {
                name: 'page',
                label: '頁面',
                path: 'content/pages',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: '頁面標題',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'slug',
                        label: 'URL 路徑',
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: '內容',
                        isBody: true,
                    },
                ],
            },

            // 全域設定集合
            {
                name: 'settings',
                label: '全域設定',
                path: 'content/settings',
                format: 'json',
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                fields: [
                    {
                        type: 'object',
                        name: 'site',
                        label: '網站資訊',
                        fields: [
                            {
                                type: 'string',
                                name: 'title',
                                label: '網站標題',
                            },
                            {
                                type: 'string',
                                name: 'description',
                                label: '網站描述',
                                ui: {
                                    component: 'textarea',
                                },
                            },
                            {
                                type: 'string',
                                name: 'email',
                                label: 'Email',
                            },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'colors',
                        label: '顏色配置',
                        fields: [
                            {
                                type: 'string',
                                name: 'background',
                                label: '背景色',
                                ui: {
                                    component: 'color',
                                },
                            },
                            {
                                type: 'string',
                                name: 'foreground',
                                label: '前景色',
                                ui: {
                                    component: 'color',
                                },
                            },
                            {
                                type: 'string',
                                name: 'accent',
                                label: '強調色',
                                ui: {
                                    component: 'color',
                                },
                            },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'typography',
                        label: '字體設定',
                        fields: [
                            {
                                type: 'string',
                                name: 'fontFamily',
                                label: '字體家族',
                            },
                            {
                                type: 'string',
                                name: 'displayFont',
                                label: '標題字體',
                            },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'navigation',
                        label: '導航選單',
                        list: true,
                        fields: [
                            {
                                type: 'string',
                                name: 'label',
                                label: '選單文字',
                            },
                            {
                                type: 'string',
                                name: 'href',
                                label: '連結',
                            },
                        ],
                    },
                ],
            },
        ],
    },
})
