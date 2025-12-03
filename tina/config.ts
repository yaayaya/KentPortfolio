import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
    token: process.env.TINA_TOKEN ?? null,

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
                label: 'Home Page',
                path: 'content/pages',
                match: { include: 'home' },
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                },
                fields: [
                    {
                        type: 'string',
                        name: 'heroTitle1',
                        label: 'Hero Title Line 1',
                    },
                    {
                        type: 'string',
                        name: 'heroTitle2',
                        label: 'Hero Title Line 2',
                    },
                    {
                        type: 'string',
                        name: 'heroSubtitle',
                        label: 'Hero Subtitle',
                    },
                    {
                        type: 'image',
                        name: 'heroBackground',
                        label: 'Hero Background Image',
                    },
                    {
                        type: 'string',
                        name: 'introText1',
                        label: 'Introduction Small Text',
                    },
                    {
                        type: 'rich-text',
                        name: 'introText2',
                        label: 'Introduction Main Text',
                    },
                    {
                        type: 'string',
                        name: 'introText3',
                        label: 'Introduction Footer Text',
                    },
                ],
            },
            {
                name: 'about',
                label: 'About Page',
                path: 'content/pages',
                match: { include: 'about' },
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                },
                fields: [
                    {
                        type: 'image',
                        name: 'heroImage',
                        label: 'Profile Image',
                    },
                    {
                        type: 'string',
                        name: 'name',
                        label: 'Name',
                    },
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Job Title',
                    },
                    {
                        type: 'string',
                        name: 'email',
                        label: 'Email',
                    },
                    {
                        type: 'rich-text',
                        name: 'intro',
                        label: 'Introduction',
                    },
                    {
                        type: 'object',
                        name: 'exhibitions',
                        label: 'Exhibitions',
                        list: true,
                        fields: [
                            { type: 'string', name: 'year', label: 'Year' },
                            { type: 'string', name: 'title', label: 'Title' },
                            { type: 'string', name: 'location', label: 'Location' },
                        ],
                    },
                    {
                        type: 'rich-text',
                        name: 'artistStatement',
                        label: 'Artist Statement',
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
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'date',
                        label: 'Date',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Short Description / Location',
                    },
                    {
                        type: 'image',
                        name: 'coverImage',
                        label: 'Cover Image',
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                    {
                        type: 'image',
                        name: 'gallery',
                        label: 'Image Gallery',
                        list: true,
                    },
                ],
            },
            {
                name: 'art_works',
                label: 'Art Works',
                path: 'content/art-works',
                format: 'md',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'category',
                        label: 'Category',
                    },
                    {
                        type: 'string',
                        name: 'year',
                        label: 'Year',
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Short Description',
                    },
                    {
                        type: 'image',
                        name: 'coverImage',
                        label: 'Cover Image',
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                    {
                        type: 'image',
                        name: 'gallery',
                        label: 'Image Gallery',
                        list: true,
                    },
                ],
            },
            {
                name: 'global',
                label: 'Global Settings',
                path: 'content/settings',
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                },
                fields: [
                    {
                        type: 'object',
                        name: 'site',
                        label: 'Site Info',
                        fields: [
                            { type: 'string', name: 'title', label: 'Site Title' },
                            { type: 'string', name: 'description', label: 'Site Description' },
                            { type: 'string', name: 'email', label: 'Contact Email' },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'navigation',
                        label: 'Navigation',
                        list: true,
                        fields: [
                            { type: 'string', name: 'label', label: 'Label' },
                            { type: 'string', name: 'href', label: 'Link' },
                        ],
                    },
                    {
                        type: 'object',
                        name: 'social',
                        label: 'Social Links',
                        list: true,
                        fields: [
                            { type: 'string', name: 'platform', label: 'Platform Name' },
                            { type: 'string', name: 'url', label: 'URL' },
                        ],
                    },
                ],
            },
        ],
    },
})
