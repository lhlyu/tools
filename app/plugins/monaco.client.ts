import { shikiToMonaco } from '@shikijs/monaco'
import { createHighlighter } from 'shiki'

export default defineNuxtPlugin(async () => {
    const monaco = useMonaco()!

    const highlighter = await createHighlighter({
        themes: ['dracula', 'vitesse-light'],
        langs: ['json'],
    })

    monaco.languages.register({ id: 'json' })

    shikiToMonaco(highlighter, monaco)

    const siteStore = useSiteStore()

    watch(
        () => siteStore.theme,
        (newVal, oldValue) => {
            if (newVal === 'light') {
                monaco.editor.setTheme('vitesse-light')
            } else {
                monaco.editor.setTheme('dracula')
            }
        },
    )
})
