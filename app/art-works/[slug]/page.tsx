import { client } from '@/tina/__generated__/client'
import ArtWorkDetailPageClient from './page-client'

export default async function ArtWorkDetailPage({ params }: { params: { slug: string } }) {
    const workRes = await client.queries.art_works({ relativePath: `${params.slug}.md` })

    return (
        <ArtWorkDetailPageClient
            query={workRes.query}
            variables={workRes.variables}
            data={workRes.data}
        />
    )
}
