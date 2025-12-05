import { client } from '@/tina/__generated__/client'
import NewsPageClient from './page-client'

export default async function NewsPage() {
    let newsData = { edges: [] } as any
    let globalData = {} as any
    let query = ''
    let variables = {}

    try {
        const newsRes = await client.queries.newsConnection({
            last: 50,
        })
        const globalRes = await client.queries.global({ relativePath: 'global.json' })

        newsData = newsRes.data.newsConnection
        globalData = globalRes.data.global
        query = newsRes.query
        variables = newsRes.variables
    } catch (error) {
        console.warn('Failed to fetch news data')
    }

    return (
        <NewsPageClient
            query={query}
            variables={variables}
            data={{
                newsConnection: newsData,
                global: globalData
            }}
        />
    )
}
