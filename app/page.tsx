import { client } from '@/tina/__generated__/client'
import HomePageClient from './page-client'

export default async function HomePage() {
    let homeData = {} as any
    let newsData = { edges: [] } as any
    let globalData = {} as any
    let query = ''
    let variables = {}

    try {
        const homeRes = await client.queries.home({ relativePath: 'home.json' })
        const newsRes = await client.queries.newsConnection({
            last: 6,
        })
        const globalRes = await client.queries.global({ relativePath: 'global.json' })

        homeData = homeRes.data.home
        newsData = newsRes.data.newsConnection
        globalData = globalRes.data.global
        query = homeRes.query
        variables = homeRes.variables
    } catch (error) {
        console.error('Failed to fetch home data:', error)
    }

    return (
        <HomePageClient
            query={query}
            variables={variables}
            data={{
                home: homeData,
                newsConnection: newsData,
                global: globalData,
            }}
        />
    )
}
