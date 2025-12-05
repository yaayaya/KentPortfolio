import { client } from '@/tina/__generated__/client'
import ArtWorksPageClient from './page-client'

export default async function ArtWorksPage() {
    let worksData = { edges: [] } as any
    let globalData = {} as any
    let query = ''
    let variables = {}

    try {
        const worksRes = await client.queries.art_worksConnection({
            last: 50,
        })
        const globalRes = await client.queries.global({ relativePath: 'global.json' })

        worksData = worksRes.data.art_worksConnection
        globalData = globalRes.data.global
        query = worksRes.query
        variables = worksRes.variables
    } catch (error) {
        console.warn('Failed to fetch works data')
    }

    return (
        <ArtWorksPageClient
            query={query}
            variables={variables}
            data={{
                art_worksConnection: worksData,
                global: globalData
            }}
        />
    )
}
