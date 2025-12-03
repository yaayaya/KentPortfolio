import { client } from '@/tina/__generated__/client'
import HomePageClient from './page-client'

export default async function HomePage() {
    let homeData = {} as any
    let newsData = { edges: [] } as any
    let query = ''
    let variables = {}

    try {
        const homeRes = await client.queries.home({ relativePath: 'home.json' })
        const newsRes = await client.queries.newsConnection({
            sort: 'date',
            last: 2,
        })
        homeData = homeRes.data.home
        newsData = newsRes.data.newsConnection
        query = homeRes.query
        variables = homeRes.variables
    } catch (error) {
        console.warn('Failed to fetch home data')
    }

    return (
        <HomePageClient
            query={query}
            variables={variables}
            data={{
                home: homeData,
                newsConnection: newsData,
            }}
        />
    )
}
