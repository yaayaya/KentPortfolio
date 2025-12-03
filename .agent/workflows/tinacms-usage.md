---
description: How to use TinaCMS for content editing
---

# TinaCMS 使用指南

本網站整合了 TinaCMS，讓您可以直接透過圖形化介面編輯網站內容，無需修改程式碼。

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

## 3. 可編輯的內容

目前支援編輯的區域包括：

*   **首頁 (Home Page)**：
    *   標題、副標題 (Hero Section)
    *   Hero 背景圖片
    *   介紹文字 (Introduction)

*   **全域設定 (Global Settings)**：
    *   網站標題、描述
    *   導航選單 (Navigation)
    *   社群連結 (Social Links)
    *   聯絡 Email

*   **新聞 (News)**：
    *   新增、編輯或刪除新聞文章
    *   設定日期、封面圖、圖庫 (Gallery)

*   **作品 (Art Works)**：
    *   新增、編輯或刪除作品
    *   設定分類、年份、封面圖、圖庫

*   **關於 (About Page)**：
    *   個人照片、名稱、職稱
    *   自我介紹、展覽經歷、創作理念

## 4. 編輯流程

1.  在左側側邊欄選擇要編輯的 Collection。
2.  點擊具體的項目進入編輯表單。
3.  修改文字、更換圖片或調整顏色。
4.  右側預覽視窗會即時顯示變更結果。
5.  完成後點擊上方的 **Save** 按鈕。
    *   這會直接修改專案中的 JSON/Markdown 檔案 (`content/` 目錄下)。

## 5. 圖片管理

*   點擊圖片欄位可開啟媒體管理器。
*   您可以上傳新圖片或選擇現有圖片。
*   圖片會儲存在 `public/content/images` 目錄中。
