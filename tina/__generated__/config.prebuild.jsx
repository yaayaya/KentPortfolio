// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
var homeFields = [
  {
    type: "string",
    name: "heroTitle1",
    label: "Hero Title Line 1"
  },
  {
    type: "string",
    name: "heroTitle2",
    label: "Hero Title Line 2"
  },
  {
    type: "string",
    name: "heroSubtitle",
    label: "Hero Subtitle"
  },
  {
    type: "image",
    name: "heroBackground",
    label: "Hero Background Image"
  },
  {
    type: "string",
    name: "introText1",
    label: "Introduction Small Text"
  },
  {
    type: "rich-text",
    name: "introText2",
    label: "Introduction Main Text"
  },
  {
    type: "string",
    name: "introText3",
    label: "Introduction Footer Text"
  }
];
var aboutFields = [
  {
    type: "image",
    name: "heroImage",
    label: "Profile Image"
  },
  {
    type: "string",
    name: "name",
    label: "Name"
  },
  {
    type: "string",
    name: "title",
    label: "Job Title"
  },
  {
    type: "string",
    name: "email",
    label: "Email"
  },
  {
    type: "rich-text",
    name: "intro",
    label: "Introduction"
  },
  {
    type: "object",
    name: "exhibitions",
    label: "Exhibitions",
    list: true,
    fields: [
      { type: "string", name: "year", label: "Year" },
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "location", label: "Location" }
    ]
  },
  {
    type: "rich-text",
    name: "artistStatement",
    label: "Artist Statement"
  }
];
var newsContentFields = [
  {
    type: "string",
    name: "title",
    label: "Title"
  },
  {
    type: "string",
    name: "description",
    label: "Short Description / Location"
  },
  {
    type: "image",
    name: "coverImage",
    label: "Cover Image"
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body"
  },
  {
    type: "image",
    name: "gallery",
    label: "Image Gallery",
    list: true
  }
];
var artWorksContentFields = [
  {
    type: "string",
    name: "title",
    label: "Title"
  },
  {
    type: "string",
    name: "description",
    label: "Short Description"
  },
  {
    type: "image",
    name: "coverImage",
    label: "Cover Image"
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body"
  },
  {
    type: "image",
    name: "gallery",
    label: "Image Gallery",
    list: true
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
        label: "Home Page",
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
            label: "Light Mode Content",
            fields: homeFields
          },
          {
            type: "object",
            name: "dark",
            label: "Dark Mode Content",
            fields: homeFields
          }
        ]
      },
      {
        name: "about",
        label: "About Page",
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
            label: "Light Mode Content",
            fields: aboutFields
          },
          {
            type: "object",
            name: "dark",
            label: "Dark Mode Content",
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
            label: "Title (Internal)",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "object",
            name: "light",
            label: "Light Mode Content",
            fields: newsContentFields
          },
          {
            type: "object",
            name: "dark",
            label: "Dark Mode Content",
            fields: newsContentFields
          }
        ]
      },
      {
        name: "art_works",
        label: "Art Works",
        path: "content/art-works",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title (Internal)",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category"
          },
          {
            type: "string",
            name: "year",
            label: "Year"
          },
          {
            type: "object",
            name: "light",
            label: "Light Mode Content",
            fields: artWorksContentFields
          },
          {
            type: "object",
            name: "dark",
            label: "Dark Mode Content",
            fields: artWorksContentFields
          }
        ]
      },
      {
        name: "global",
        label: "Global Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Info",
            fields: [
              { type: "string", name: "title", label: "Site Title" },
              { type: "string", name: "description", label: "Site Description" },
              { type: "string", name: "email", label: "Contact Email" }
            ]
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            list: true,
            fields: [
              { type: "string", name: "platform", label: "Platform Name" },
              { type: "string", name: "url", label: "URL" }
            ]
          },
          {
            type: "object",
            name: "headerToggle",
            label: "Header Toggle Settings",
            fields: [
              { type: "string", name: "leftText", label: "Left Text (Dark Mode)", description: "Default: \u6881\u5BB6\u8AA0" },
              { type: "string", name: "leftSubtitle", label: "Left Subtitle (Dark Mode)", description: "Default: Art" },
              { type: "string", name: "rightText", label: "Right Text (Light Mode)", description: "Default: Kent" },
              { type: "string", name: "rightSubtitle", label: "Right Subtitle (Light Mode)", description: "Default: Designer" },
              { type: "string", name: "leftColor", label: "Left Background Color", ui: { component: "color" } },
              { type: "string", name: "rightColor", label: "Right Background Color", ui: { component: "color" } },
              { type: "string", name: "leftTextColor", label: "Left Text Color", ui: { component: "color" } },
              { type: "string", name: "rightTextColor", label: "Right Text Color", ui: { component: "color" } }
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
