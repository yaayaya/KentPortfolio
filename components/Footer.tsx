import Link from 'next/link'

/**
 * 頁尾元件
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 品牌資訊 */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Kent 梁家誠</h3>
                        <p className="text-sm text-gray-600">
                            數位工作者，探索科技與人的交互關係
                        </p>
                    </div>

                    {/* 快速連結 */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">快速連結</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/work" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    作品
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    關於
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    部落格
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 聯絡資訊 */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">聯絡方式</h4>
                        <a
                            href="mailto:kent.liang@example.com"
                            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            title="kent.liang@example.com"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                {/* 版權資訊 */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600">
                            © {currentYear} Kent 梁家誠. 保留所有權利。
                        </p>
                        <p className="text-sm text-gray-600">
                            數位藝術 / 互動創作
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
