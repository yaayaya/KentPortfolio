// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
var homeFields = [
  {
    type: "string",
    name: "heroTitle1",
    label: "\u4E3B\u6A19\u984C\u7B2C\u4E00\u884C"
  },
  {
    type: "string",
    name: "heroTitle2",
    label: "\u4E3B\u6A19\u984C\u7B2C\u4E8C\u884C"
  },
  {
    type: "string",
    name: "heroSubtitle",
    label: "\u526F\u6A19\u984C"
  },
  {
    type: "image",
    name: "heroBackground",
    label: "\u4E3B\u8996\u89BA\u80CC\u666F\u5716\u7247"
  },
  {
    type: "string",
    name: "introText1",
    label: "\u7C21\u4ECB\u5C0F\u6A19\u984C"
  },
  {
    type: "rich-text",
    name: "introText2",
    label: "\u7C21\u4ECB\u4E3B\u8981\u5167\u5BB9"
  },
  {
    type: "string",
    name: "introText3",
    label: "\u7C21\u4ECB\u5E95\u90E8\u6587\u5B57"
  }
];
var aboutFields = [
  {
    type: "image",
    name: "heroImage",
    label: "\u500B\u4EBA\u7167\u7247"
  },
  {
    type: "string",
    name: "name",
    label: "\u59D3\u540D"
  },
  {
    type: "string",
    name: "title",
    label: "\u8077\u7A31"
  },
  {
    type: "string",
    name: "email",
    label: "\u96FB\u5B50\u90F5\u4EF6"
  },
  {
    type: "rich-text",
    name: "intro",
    label: "\u7C21\u4ECB"
  },
  {
    type: "string",
    name: "exhibitionsTitle",
    label: "\u5C55\u89BD\u5340\u584A\u6A19\u984C"
  },
  {
    type: "object",
    name: "exhibitions",
    label: "\u5C55\u89BD\u7D93\u6B77",
    list: true,
    fields: [
      { type: "string", name: "year", label: "\u5E74\u4EFD" },
      { type: "string", name: "title", label: "\u6A19\u984C" },
      { type: "string", name: "location", label: "\u5730\u9EDE" }
    ]
  },
  {
    type: "rich-text",
    name: "artistStatement",
    label: "\u85DD\u8853\u5BB6\u8072\u660E"
  }
];
var newsContentFields = [
  {
    type: "boolean",
    name: "visible",
    label: "\u5728\u6B64\u6A21\u5F0F\u986F\u793A",
    description: "\u5207\u63DB\u4EE5\u5728\u6B64\u7279\u5B9A\u4E3B\u984C\u6A21\u5F0F\u4E2D\u986F\u793A/\u96B1\u85CF\u6B64\u9805\u76EE",
    ui: {
      defaultValue: true
    }
  },
  {
    type: "string",
    name: "title",
    label: "\u6A19\u984C"
  },
  {
    type: "datetime",
    name: "date",
    label: "\u65E5\u671F",
    dateFormat: "YYYY-MM-DD",
    timeFormat: ""
    // Set to empty string to only show date picker
  },
  {
    type: "string",
    name: "category",
    label: "\u5206\u985E\u6A19\u7C64",
    description: "\u4F8B\u5982\uFF1A\u5C55\u89BD"
  },
  {
    type: "string",
    name: "description",
    label: "\u7C21\u77ED\u63CF\u8FF0 / \u5730\u9EDE"
  },
  {
    type: "image",
    name: "coverImage",
    label: "\u5C01\u9762\u5716\u7247"
  },
  {
    type: "rich-text",
    name: "body",
    label: "\u5167\u6587"
  },
  {
    type: "object",
    name: "gallery",
    label: "\u5716\u7247\u5EAB",
    list: true,
    fields: [
      { type: "image", name: "src", label: "\u5716\u7247" },
      { type: "string", name: "caption", label: "\u8AAA\u660E\u6587\u5B57" }
    ]
  }
];
var artWorksContentFields = [
  {
    type: "boolean",
    name: "visible",
    label: "\u5728\u6B64\u6A21\u5F0F\u986F\u793A",
    description: "\u5207\u63DB\u4EE5\u5728\u6B64\u7279\u5B9A\u4E3B\u984C\u6A21\u5F0F\u4E2D\u986F\u793A/\u96B1\u85CF\u6B64\u9805\u76EE",
    ui: {
      defaultValue: true
    }
  },
  {
    type: "string",
    name: "title",
    label: "\u6A19\u984C"
  },
  {
    type: "string",
    name: "category",
    label: "\u5206\u985E"
  },
  {
    type: "string",
    name: "year",
    label: "\u5E74\u4EFD"
  },
  {
    type: "string",
    name: "description",
    label: "\u7C21\u77ED\u63CF\u8FF0"
  },
  {
    type: "image",
    name: "coverImage",
    label: "\u5C01\u9762\u5716\u7247"
  },
  {
    type: "string",
    name: "projectDetailsTitle",
    label: "\u5C08\u6848\u8A73\u60C5\u5340\u584A\u6A19\u984C"
  },
  {
    type: "rich-text",
    name: "body",
    label: "\u5167\u6587"
  },
  {
    type: "object",
    name: "gallery",
    label: "\u5716\u7247\u5EAB",
    list: true,
    fields: [
      { type: "image", name: "src", label: "\u5716\u7247" },
      { type: "string", name: "caption", label: "\u8AAA\u660E\u6587\u5B57" }
    ]
  }
];
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "content/images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        path: "content/pages",
        match: { include: "home" },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "light",
            label: "\u6DFA\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: homeFields
          },
          {
            type: "object",
            name: "dark",
            label: "\u6DF1\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: homeFields
          }
        ]
      },
      {
        name: "about",
        label: "About",
        path: "content/pages",
        match: { include: "about" },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "light",
            label: "\u6DFA\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: aboutFields
          },
          {
            type: "object",
            name: "dark",
            label: "\u6DF1\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: aboutFields
          }
        ]
      },
      {
        name: "news",
        label: "News",
        path: "content/news",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6A19\u984C (\u5167\u90E8\u4F7F\u7528)",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            name: "light",
            label: "\u6DFA\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: newsContentFields
          },
          {
            type: "object",
            name: "dark",
            label: "\u6DF1\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: newsContentFields
          }
        ]
      },
      {
        name: "art_works",
        label: "Works",
        path: "content/art-works",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6A19\u984C (\u5167\u90E8\u4F7F\u7528)",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            name: "light",
            label: "\u6DFA\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: artWorksContentFields
          },
          {
            type: "object",
            name: "dark",
            label: "\u6DF1\u8272\u6A21\u5F0F\u5167\u5BB9",
            fields: artWorksContentFields
          }
        ]
      },
      {
        name: "global",
        label: "\u5168\u57DF\u8A2D\u5B9A",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "\u7DB2\u7AD9\u8CC7\u8A0A",
            fields: [
              { type: "string", name: "title", label: "\u7DB2\u7AD9\u6A19\u984C" },
              { type: "string", name: "description", label: "\u7DB2\u7AD9\u63CF\u8FF0" },
              { type: "string", name: "email", label: "\u806F\u7D61\u4FE1\u7BB1" }
            ]
          },
          {
            type: "object",
            name: "navigation",
            label: "\u5C0E\u822A\u9078\u55AE",
            list: true,
            fields: [
              { type: "string", name: "labelLight", label: "\u6A19\u7C64 (\u6DFA\u8272\u6A21\u5F0F)" },
              { type: "string", name: "labelDark", label: "\u6A19\u7C64 (\u6DF1\u8272\u6A21\u5F0F)" },
              { type: "string", name: "href", label: "\u9023\u7D50" }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "\u793E\u7FA4\u9023\u7D50",
            list: true,
            fields: [
              { type: "string", name: "platform", label: "\u5E73\u53F0\u540D\u7A31" },
              { type: "string", name: "url", label: "\u7DB2\u5740" }
            ]
          },
          {
            type: "object",
            name: "headerToggle",
            label: "\u9801\u9996\u5207\u63DB\u8A2D\u5B9A",
            fields: [
              { type: "string", name: "leftText", label: "\u5DE6\u5074\u6587\u5B57 (\u6DF1\u8272\u6A21\u5F0F)", description: "\u9810\u8A2D: \u6881\u5BB6\u8AA0" },
              { type: "string", name: "leftSubtitle", label: "\u5DE6\u5074\u526F\u6A19\u984C (\u6DF1\u8272\u6A21\u5F0F)", description: "\u9810\u8A2D: Art" },
              { type: "string", name: "rightText", label: "\u53F3\u5074\u6587\u5B57 (\u6DFA\u8272\u6A21\u5F0F)", description: "\u9810\u8A2D: Kent" },
              { type: "string", name: "rightSubtitle", label: "\u53F3\u5074\u526F\u6A19\u984C (\u6DFA\u8272\u6A21\u5F0F)", description: "\u9810\u8A2D: Designer" },
              { type: "string", name: "leftColor", label: "\u5DE6\u5074\u80CC\u666F\u984F\u8272", ui: { component: "color" } },
              { type: "string", name: "rightColor", label: "\u53F3\u5074\u80CC\u666F\u984F\u8272", ui: { component: "color" } },
              { type: "string", name: "leftTextColor", label: "\u5DE6\u5074\u6587\u5B57\u984F\u8272", ui: { component: "color" } },
              { type: "string", name: "rightTextColor", label: "\u53F3\u5074\u6587\u5B57\u984F\u8272", ui: { component: "color" } }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
