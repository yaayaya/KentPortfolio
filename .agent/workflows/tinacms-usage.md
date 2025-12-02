---
description: How to use TinaCMS for content editing
---

# TinaCMS 使用指南

本網站整合了 TinaCMS，讓您可以直接透過圖形化介面編輯網站內容，無需修改程式碼。

## 1. 進入編輯模式

1.  確保開發伺服器正在運行：`npm run dev`
2.  在瀏覽器網址列輸入：`http://localhost:3000/admin`
3.  您將看到 TinaCMS 的側邊欄編輯器。

## 2. 可編輯的內容

目前支援編輯的區域包括：

*   **首頁 (Home)**：
    *   標題 (Title)
    *   副標題 (Subtitle)
    *   Hero 圖片 (Hero Image)
    *   背景色與強調色

*   **全域設定 (Global Settings)**：
    *   網站標題
    *   導航選單 (Navigation Menu)

*   **專案 (Projects)** & **部落格 (Blog)**：
    *   新增、編輯或刪除文章
    *   上傳封面圖片
    *   編輯內文 (支援 Markdown)

## 3. 編輯流程

1.  在左側側邊欄選擇要編輯的 Collection (例如 `Home` 或 `Post`)。
2.  點擊具體的項目進入編輯表單。
3.  修改文字、更換圖片或調整顏色。
4.  右側預覽視窗會即時顯示變更結果。
5.  完成後點擊上方的 **Save** 按鈕。
    *   在開發環境下，這會直接修改專案中的 JSON/Markdown 檔案。
    *   在正式環境下，這會觸發 Git Commit 並推送到儲存庫。

## 4. 圖片管理

*   點擊圖片欄位可開啟媒體管理器。
*   您可以上傳新圖片或選擇現有圖片。
*   圖片會儲存在 `public/uploads` 目錄中。

## 5. 常見問題

*   **看不到編輯按鈕？** 確保您已進入 `/admin` 路徑。
*   **存檔失敗？** 檢查終端機是否有錯誤訊息，確保檔案權限正確。
