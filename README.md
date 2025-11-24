# Manolo Beviá 作品集網站

完美復刻 [manolobevia.com](https://www.manolobevia.com/) 的作品集網站，整合 TinaCMS 內容管理系統。

## 專案特色

- ✨ **完美復刻**：精確還原目標網站的視覺設計和動畫效果
- 🎨 **現代技術棧**：Next.js 14、TypeScript、Tailwind CSS、Framer Motion
- 📝 **內容管理**：整合 TinaCMS，提供視覺化內容編輯介面
- 🎭 **精緻動畫**：滾動觸發動畫、懸停效果、頁面過渡
- 📱 **響應式設計**：完整支援桌面、平板和手機裝置
- ⚡ **效能優化**：使用 Next.js 的最佳實踐，確保快速載入

## 技術棧

- **框架**：Next.js 14 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **動畫**：Framer Motion
- **CMS**：TinaCMS
- **字體**：Inter、Space Grotesk (Google Fonts)

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
# 標準開發模式
npm run dev

# 使用 TinaCMS 開發模式
npm run tina:dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 建置專案

```bash
# 標準建置
npm run build

# 使用 TinaCMS 建置
npm run tina:build
```

### 生產環境

```bash
npm start
```

## TinaCMS 使用指南

### 訪問 CMS 介面

開發模式下，訪問 [http://localhost:3000/admin](http://localhost:3000/admin) 進入 TinaCMS 編輯介面。

### 可編輯內容

透過 TinaCMS，您可以編輯以下內容：

#### 1. 專案作品
- 新增、編輯、刪除專案
- 修改專案標題、描述、圖片
- 調整專案排序和分類

#### 2. 部落格文章
- 撰寫新文章
- 編輯現有文章
- 管理文章標籤和分類

#### 3. 全域設定
- **網站資訊**：標題、描述、Email
- **顏色配置**：背景色、前景色、強調色
- **字體設定**：字體家族、標題字體
- **導航選單**：選單項目和連結

### 內容檔案位置

所有內容儲存在 `content/` 目錄：

```
content/
├── projects/          # 專案資料
├── blog/             # 部落格文章
├── pages/            # 頁面內容
└── settings/         # 全域設定
```

## 專案結構

```
KentPortfolio/
├── app/                    # Next.js App Router 頁面
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   ├── work/              # 作品頁面
│   ├── about/             # 關於頁面
│   └── blog/              # 部落格頁面
├── components/            # React 元件
│   ├── Header.tsx         # 頂部導航
│   ├── Footer.tsx         # 頁尾
│   ├── MobileMenu.tsx     # 手機選單
│   ├── ProjectCard.tsx    # 專案卡片
│   ├── BlogCard.tsx       # 部落格卡片
│   └── AnimatedSection.tsx # 動畫區塊
├── lib/                   # 工具函式
│   ├── utils.ts           # 通用工具
│   └── animations.ts      # 動畫變體
├── content/               # 內容資料
│   ├── projects/          # 專案資料
│   ├── blog/             # 部落格文章
│   └── settings/         # 全域設定
├── tina/                  # TinaCMS 配置
│   └── config.ts          # CMS 配置檔
└── public/                # 靜態資源
```

## 自訂配置

### 修改顏色

編輯 `tailwind.config.ts` 或透過 TinaCMS 介面修改全域設定。

### 修改字體

編輯 `app/layout.tsx` 中的 Google Fonts 導入。

### 新增頁面

在 `app/` 目錄下建立新的資料夾和 `page.tsx` 檔案。

## 部署

### Vercel（推薦）

1. 將專案推送到 GitHub
2. 在 Vercel 導入專案
3. 設定環境變數
4. 部署

### 其他平台

支援任何支援 Next.js 的平台，如 Netlify、AWS Amplify 等。

## 環境變數

建立 `.env.local` 檔案並設定以下變數：

```env
# TinaCMS 配置
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here

# 網站配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 效能優化

- ✅ 使用 Next.js Image 元件優化圖片
- ✅ 程式碼分割和懶載入
- ✅ 字體優化（Google Fonts）
- ✅ CSS 最小化
- ✅ 靜態生成（SSG）

## 瀏覽器支援

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 授權

本專案僅供學習和參考使用。

## 聯絡方式

如有問題或建議，請聯絡：manolo.bevia@gmail.com

---

使用 ❤️ 和 Next.js 建立
