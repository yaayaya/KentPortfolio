import Link from 'next/link'

/**
 * 頁尾元件
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-50 border-t border-primary-200">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 品牌資訊 */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Manolo Beviá</h3>
                        <p className="text-sm text-primary-600">
                            產品設計師，將想法轉化為體驗
                        </p>
                    </div>

                    {/* 快速連結 */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">快速連結</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/work" className="text-sm text-primary-600 link-hover">
                                    作品
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-primary-600 link-hover">
                                    關於
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-primary-600 link-hover">
                                    部落格
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 聯絡資訊 */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">聯絡方式</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:manolo.bevia@gmail.com"
                                    className="text-sm text-primary-600 link-hover"
                                >
                                    manolo.bevia@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 版權資訊 */}
                <div className="mt-12 pt-8 border-t border-primary-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-primary-600">
                            © {currentYear} Manolo Beviá. 保留所有權利。
                        </p>
                        <p className="text-sm text-primary-600">
                            今天 / manolobevia.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
