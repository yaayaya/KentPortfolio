import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "dummy-token",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "siteTitle",
            label: "Site Title",
          },
          {
            type: "string",
            name: "primaryColor",
            label: "Primary Color",
            ui: {
              component: "color",
            },
          },
          {
            type: "string",
            name: "secondaryColor",
            label: "Secondary Color",
            ui: {
              component: "color",
            },
          },
          {
            type: "string",
            name: "backgroundColor",
            label: "Background Color",
            ui: {
              component: "color",
            },
          },
          {
            type: "object",
            name: "navLinks",
            label: "Navigation Links",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "string",
                name: "href",
                label: "Link",
              },
            ],
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "blocks",
            label: "Content Blocks",
            list: true,
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "string",
                    name: "subheading",
                    label: "Subheading",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },
              {
                name: "content",
                label: "Content",
                fields: [
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Body",
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
      },
      {
        name: "work",
        label: "Work",
        path: "content/work",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "string",
            name: "template",
            label: "Template",
            options: ["templateA", "templateB", "templateC", "templateD"],
          },
          {
            type: "boolean",
            name: "showOnHome",
            label: "Show on Home",
          },
          {
            type: "object",
            name: "blocks",
            label: "Project Blocks",
            list: true,
            templates: [
              {
                name: "imageFull",
                label: "Full Width Image",
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "caption",
                    label: "Caption",
                  },
                ],
              },
              {
                name: "text",
                label: "Text Content",
                fields: [
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Body",
                  },
                ],
              },
              {
                name: "gallery",
                label: "Image Gallery",
                fields: [
                  {
                    type: "image",
                    name: "images",
                    label: "Images",
                    list: true,
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/work/${document._sys.filename}`,
        },
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
