---
description: How to deploy the portfolio to Vercel with TinaCMS
---

# 部署至正式環境 (Deployment Guide)

本專案使用 **Next.js** 與 **TinaCMS**，推薦使用 **Vercel** 進行部署。

## 1. 前置準備 (Prerequisites)

1.  將您的程式碼推送到 **GitHub** Repository。
2.  註冊 [Tina Cloud](https://app.tina.io/) 帳號並建立專案 (參考 README)。
    *   取得 `Client ID`
    *   取得 `Content Token` (Read/Write)

## 2. Vercel 部署步驟

1.  前往 [Vercel Dashboard](https://vercel.com/dashboard)。
2.  點擊 **Add New...** > **Project**。
3.  匯入您的 GitHub Repository。
4.  在 **Configure Project** 頁面：
    *   **Framework Preset**: 選擇 `Next.js`。
    *   **Build Command**: 覆寫為 `npm run tina:build` (重要！這會確保 TinaCMS 先建置)。
    *   **Environment Variables** (環境變數)：新增以下變數：
        *   `NEXT_PUBLIC_TINA_CLIENT_ID`: (從 Tina Cloud 取得)
        *   `TINA_TOKEN`: (從 Tina Cloud 取得)
        *   `NEXT_PUBLIC_TINA_BRANCH`: `main` (或是您的主要分支名稱)
        *   `NEXT_PUBLIC_SITE_URL`: (您的 Vercel 網址，例如 `https://your-project.vercel.app`，部署後可再更新)

5.  點擊 **Deploy**。

## 3. 驗證部署

1.  部署完成後，訪問您的網址。
2.  進入 `/admin` (例如 `https://your-project.vercel.app/admin`)。
3.  您應該會看到 Tina Cloud 的登入畫面，使用您的 Tina Cloud 帳號登入即可開始編輯。

## 4. 常見問題

*   **Build 失敗？**
    *   檢查環境變數是否正確設定。
    *   檢查 `package.json` 中是否有 `tina:build` 指令。
*   **進入 Admin 顯示 404？**
    *   確保 Build Command 是 `npm run tina:build`，這樣才會產生 Admin 頁面。
