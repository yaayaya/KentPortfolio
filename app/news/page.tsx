import { client } from '@/tina/__generated__/client'
import NewsPageClient from './page-client'

export default async function NewsPage() {
    const newsRes = await client.queries.newsConnection({
        sort: 'date',
    })

    return (
        <NewsPageClient
            query={newsRes.query}
            variables={newsRes.variables}
            data={newsRes.data}
        />
    )
}
