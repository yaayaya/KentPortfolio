/**
 * Framer Motion 動畫配置集合
 * 集中管理所有動畫效果，確保一致性
 */

import { Variants, Transition } from "framer-motion";

// ==================== 基礎動畫 ====================

/**
 * 淡入上移動畫
 * 適用於: 頁面載入、區塊進入
 */
export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

/**
 * 淡入動畫
 * 適用於: 簡單的淡入效果
 */
export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

/**
 * 縮放淡入動畫
 * 適用於: 圖片、卡片
 */
export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
};

/**
 * 從右側滑入動畫
 * 適用於: 選單、側邊欄
 */
export const slideInRight: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
};

// ==================== 容器動畫 ====================

/**
 * 依序出現動畫容器
 * 子元素會依序淡入
 */
export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

/**
 * 快速依序出現
 */
export const staggerContainerFast: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

// ==================== 過渡配置 ====================

/**
 * 平滑過渡
 * 使用自訂緩動函數
 */
export const smoothTransition: Transition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
};

/**
 * 快速過渡
 */
export const fastTransition: Transition = {
    duration: 0.3,
    ease: "easeOut",
};

/**
 * 彈性過渡
 */
export const springTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
};

// ==================== 懸停效果 ====================

/**
 * 圖片縮放懸停
 * 適用於: 專案卡片圖片
 */
export const imageHover = {
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeOut" as const },
};

/**
 * 文字顏色變化懸停
 */
export const textHover = {
    color: "hsl(0 0% 45%)",
    transition: { duration: 0.3, ease: "easeOut" as const },
};

// ==================== 捲動觸發動畫 ====================

/**
 * 捲動觸發淡入上移
 * 使用 whileInView
 */
export const scrollFadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: smoothTransition,
};

/**
 * 捲動觸發淡入
 */
export const scrollFadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: smoothTransition,
};

// ==================== 頁面過渡 ====================

/**
 * 頁面進入動畫
 */
export const pageEnter: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

/**
 * 頁面過渡配置
 */
export const pageTransition: Transition = {
    duration: 0.4,
    ease: "easeInOut",
};
