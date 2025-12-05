import { client } from '@/tina/__generated__/client'
import AboutPageClient from './page-client'

export default async function AboutPage() {
    let aboutData = {} as any
    let globalData = {} as any
    let query = ''
    let variables = {}

    try {
        const aboutRes = await client.queries.about({ relativePath: 'about.json' })
        const globalRes = await client.queries.global({ relativePath: 'global.json' })

        aboutData = aboutRes.data.about
        globalData = globalRes.data.global
        query = aboutRes.query
        variables = aboutRes.variables
    } catch (error) {
        console.warn('Failed to fetch about data')
    }

    return (
        <AboutPageClient
            query={query}
            variables={variables}
            data={{
                about: aboutData,
                global: globalData
            }}
        />
    )
}
