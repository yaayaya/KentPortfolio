import { client } from '@/tina/__generated__/client'
import ArtWorksPageClient from './page-client'

export default async function ArtWorksPage() {
    const worksRes = await client.queries.art_worksConnection({
        sort: 'year',
    })

    return (
        <ArtWorksPageClient
            query={worksRes.query}
            variables={worksRes.variables}
            data={worksRes.data}
        />
    )
}
