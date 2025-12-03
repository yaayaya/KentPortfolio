import { client } from '@/tina/__generated__/client'
import AboutPageClient from './page-client'

export default async function AboutPage() {
    const aboutRes = await client.queries.about({ relativePath: 'about.json' })

    return (
        <AboutPageClient
            query={aboutRes.query}
            variables={aboutRes.variables}
            data={aboutRes.data}
        />
    )
}
