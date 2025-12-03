import { client } from '@/tina/__generated__/client'
import NewsDetailPageClient from './page-client'

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
    const newsRes = await client.queries.news({ relativePath: `${params.slug}.md` })

    return (
        <NewsDetailPageClient
            query={newsRes.query}
            variables={newsRes.variables}
            data={newsRes.data}
        />
    )
}
