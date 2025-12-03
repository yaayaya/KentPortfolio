import { client } from '@/tina/__generated__/client'
import HomePageClient from './page-client'

export default async function HomePage() {
    const homeRes = await client.queries.home({ relativePath: 'home.json' })
    const newsRes = await client.queries.newsConnection({
        sort: 'date',
        last: 2,
    })

    return (
        <HomePageClient
            query={homeRes.query}
            variables={homeRes.variables}
            data={{
                home: homeRes.data.home,
                newsConnection: newsRes.data.newsConnection,
            }}
        />
    )
}
