---
description: How to use TinaCMS for content editing
---

# TinaCMS 使用指南

本網站整合了 TinaCMS，讓您可以直接透過圖形化介面編輯網站內容。

## 1. 啟動開發環境

**重要**：為了啟用內容編輯功能，請務必使用以下指令啟動開發伺服器：

```bash
npm run tina:dev
```

此指令會同時啟動 TinaCMS 本地伺服器與 Next.js 網站。

## 2. 進入編輯模式

1.  確保伺服器正在運行。
2.  在瀏覽器網址列輸入：`http://localhost:3000/admin`
3.  您將看到 TinaCMS 的側邊欄編輯器。

## 3. 安全性與登入 (Security & Login)

目前開發環境處於 **Local Mode (本地模式)**：
*   **無需登入**：因為是運行在您的個人電腦上，任何人訪問 `localhost:3000/admin` 都可以編輯。
*   **檔案寫入**：所有的變更會直接寫入您電腦上的檔案系統 (`content/` 資料夾)。

**若要部署到正式環境並需要帳號密碼登入**：
*   必須整合 **Tina Cloud**。
*   這需要註冊 Tina Cloud 帳號，並在 `tina/config.ts` 與環境變數中設定 `clientId` 與 `token`。
*   Tina Cloud 提供安全的使用者認證與權限管理。

## 4. 可編輯的內容

目前支援編輯的區域包括：

*   **首頁 (Home Page)**：標題、Hero 圖片、介紹文字。
*   **全域設定 (Global Settings)**：網站標題、導航、社群連結、Email。
*   **新聞 (News)**：文章管理。
*   **作品 (Art Works)**：作品集管理。
*   **關於 (About Page)**：個人資料與經歷。

## 5. 常見問題

*   **編輯後網頁沒變？**
    *   請確保您是透過 `npm run tina:dev` 啟動。
    *   編輯後請點擊 **Save**。
    *   若即時預覽未更新，請嘗試重新整理頁面。
