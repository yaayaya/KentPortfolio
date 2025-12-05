import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

const homeFields = [
    {
        type: 'string',
        name: 'heroTitle1',
        label: '主標題第一行',
    },
    {
        type: 'string',
        name: 'heroTitle2',
        label: '主標題第二行',
    },
    {
        type: 'string',
        name: 'heroSubtitle',
        label: '副標題',
    },
    {
        type: 'image',
        name: 'heroBackground',
        label: '主視覺背景圖片',
    },
    {
        type: 'string',
        name: 'introText1',
        label: '簡介小標題',
    },
    {
        type: 'rich-text',
        name: 'introText2',
        label: '簡介主要內容',
    },
    {
        type: 'string',
        name: 'introText3',
        label: '簡介底部文字',
    },
]

const aboutFields = [
    {
        type: 'image',
        name: 'heroImage',
        label: '個人照片',
    },
    {
        type: 'string',
        name: 'name',
        label: '姓名',
    },
    {
        type: 'string',
        name: 'title',
        label: '職稱',
    },
    {
        type: 'string',
        name: 'email',
        label: '電子郵件',
    },
    {
        type: 'rich-text',
        name: 'intro',
        label: '簡介',
    },
    {
        type: 'string',
        name: 'exhibitionsTitle',
        label: '展覽區塊標題',
    },
    {
        type: 'object',
        name: 'exhibitions',
        label: '展覽經歷',
        list: true,
        fields: [
            { type: 'string', name: 'year', label: '年份' },
            { type: 'string', name: 'title', label: '標題' },
            { type: 'string', name: 'location', label: '地點' },
        ],
    },
    {
        type: 'rich-text',
        name: 'artistStatement',
        label: '藝術家聲明',
    },
]

const newsContentFields = [
    {
        type: 'boolean',
        name: 'visible',
        label: '在此模式顯示',
        description: '切換以在此特定主題模式中顯示/隱藏此項目',
        ui: {
            defaultValue: true,
        },
    },
    {
        type: 'string',
        name: 'title',
        label: '標題',
    },
    {
        type: 'datetime',
        name: 'date',
        label: '日期',
        dateFormat: 'YYYY-MM-DD',
        timeFormat: '', // Set to empty string to only show date picker
    },
    {
        type: 'string',
        name: 'category',
        label: '分類標籤',
        description: '例如：展覽',
    },
    {
        type: 'string',
        name: 'description',
        label: '簡短描述 / 地點',
    },
    {
        type: 'image',
        name: 'coverImage',
        label: '封面圖片',
    },
    {
        type: 'rich-text',
        name: 'body',
        label: '內文',
    },
    {
        type: 'object',
        name: 'gallery',
        label: '圖片庫',
        list: true,
        fields: [
            { type: 'image', name: 'src', label: '圖片' },
            { type: 'string', name: 'caption', label: '說明文字' }
        ]
    },
] as const

const artWorksContentFields = [
    {
        type: 'boolean',
        name: 'visible',
        label: '在此模式顯示',
        description: '切換以在此特定主題模式中顯示/隱藏此項目',
        ui: {
            defaultValue: true,
        },
    },
    {
        type: 'string',
        name: 'title',
        label: '標題',
    },
    {
        type: 'string',
        name: 'category',
        label: '分類',
    },
    {
        type: 'string',
        name: 'year',
        label: '年份',
    },
    {
        type: 'string',
        name: 'description',
        label: '簡短描述',
    },
    {
        type: 'image',
        name: 'coverImage',
        label: '封面圖片',
    },
    {
        type: 'string',
        name: 'projectDetailsTitle',
        label: '專案詳情區塊標題',
    },
    {
        type: 'rich-text',
        name: 'body',
        label: '內文',
    },
    {
        type: 'object',
        name: 'gallery',
        label: '圖片庫',
        list: true,
        fields: [
            { type: 'image', name: 'src', label: '圖片' },
            { type: 'string', name: 'caption', label: '說明文字' }
        ]
    },
] as const

export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
    token: process.env.TINA_TOKEN || null,

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: 'content/images',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [
            {
                name: 'home',
                label: 'Home',
                path: 'content/pages',
                match: { include: 'home' },
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                },
                fields: [
                    {
                        type: 'object',
                        name: 'light',
                        label: '淺色模式內容',
                        fields: homeFields as any,
                    },
                    {
                        type: 'object',
                        name: 'dark',
                        label: '深色模式內容',
                        fields: homeFields as any,
                    },
                ],
            },
            {
                name: 'about',
                label: 'About',
                path: 'content/pages',
                match: { include: 'about' },
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                },
                fields: [
                    {
                        type: 'object',
                        name: 'light',
                        label: '淺色模式內容',
                        fields: aboutFields as any,
                    },
                    {
                        type: 'object',
                        name: 'dark',
                        label: '深色模式內容',
                        fields: aboutFields as any,
                    },
                ],
            },
            {
                name: 'news',
                label: 'News',
                path: 'content/news',
                format: 'md',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: '標題 (內部使用)',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'object',
                        name: 'light',
                        label: '淺色模式內容',
                        fields: newsContentFields as any,
                    },
                    {
                        type: 'object',
                        name: 'dark',
                        label: '深色模式內容',
                        fields: newsContentFields as any,
                    },
                ],
            },
            {
                name: 'art_works',
                label: 'Works',
                path: 'content/art-works',
                format: 'md',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: '標題 (內部使用)',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'object',
                        name: 'light',
                        label: '淺色模式內容',
                        fields: artWorksContentFields as any,
                    },
                    {
                        type: 'object',
                        name: 'dark',
                        label: '深色模式內容',
                        fields: artWorksContentFields as any,
                    },
                ],
            },
            {
                name: 'global',
                label: '全域設定',
                path: 'content/settings',
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                },
                fields: [
                    {
                        type: 'object',
                        name: 'site',
                        label: '網站資訊',
                        fields: [
                            { type: 'string', name: 'title', label: '網站標題' },
                            { type: 'string', name: 'description', label: '網站描述' },
                            { type: 'string', name: 'email', label: '聯絡信箱' },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'navigation',
                        label: '導航選單',
                        list: true,
                        fields: [
                            { type: 'string', name: 'labelLight', label: '標籤 (淺色模式)' },
                            { type: 'string', name: 'labelDark', label: '標籤 (深色模式)' },
                            { type: 'string', name: 'href', label: '連結' },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'social',
                        label: '社群連結',
                        list: true,
                        fields: [
                            { type: 'string', name: 'platform', label: '平台名稱' },
                            { type: 'string', name: 'url', label: '網址' },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'headerToggle',
                        label: '頁首切換設定',
                        fields: [
                            { type: 'string', name: 'leftText', label: '左側文字 (深色模式)', description: '預設: 梁家誠' },
                            { type: 'string', name: 'leftSubtitle', label: '左側副標題 (深色模式)', description: '預設: Art' },
                            { type: 'string', name: 'rightText', label: '右側文字 (淺色模式)', description: '預設: Kent' },
                            { type: 'string', name: 'rightSubtitle', label: '右側副標題 (淺色模式)', description: '預設: Designer' },
                            { type: 'string', name: 'leftColor', label: '左側背景顏色', ui: { component: 'color' } },
                            { type: 'string', name: 'rightColor', label: '右側背景顏色', ui: { component: 'color' } },
                            { type: 'string', name: 'leftTextColor', label: '左側文字顏色', ui: { component: 'color' } },
                            { type: 'string', name: 'rightTextColor', label: '右側文字顏色', ui: { component: 'color' } },
                        ],
                    },
                ],
            },
        ],
    },
})
