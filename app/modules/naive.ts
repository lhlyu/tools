import { addComponent, addImports, addPlugin, createResolver, defineNuxtModule, extendViteConfig } from 'nuxt/kit'
import naive from 'naive-ui'

export default defineNuxtModule({
    meta: {
        name: 'naive',
        version: '1.0.0',
    },
    hooks: {
        'prepare:types': ({ references }) => {
            references.push({
                types: 'naive-ui/volar',
            })
        },
    },
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        addPlugin(resolve('./runtime/plugins/naive.server'))

        const naiveComponents = Object.keys(naive).filter((name) => /^N[A-Z]|n-[a-z]/.test(name))

        const naiveClientOnlyComponents = ['NDrawer', 'NDrawerContent', 'NModal']

        naiveComponents.forEach((name) => {
            addComponent({
                export: name,
                name,
                filePath: 'naive-ui',
                mode: naiveClientOnlyComponents.includes(name) ? 'client' : 'all',
            })
        })

        const naiveComposables = [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            'useDialogReactiveList',
            'useThemeVars',
            'useModal',
        ]

        naiveComposables.forEach((name) => {
            addImports({
                name,
                as: name,
                from: 'naive-ui',
            })
        })

        if (process.env.NODE_ENV === 'development') {
            extendViteConfig((config) => {
                config.optimizeDeps ||= {}
                config.optimizeDeps.include ||= []
                config.optimizeDeps.include.push('naive-ui')
            })
        } else {
            nuxt.options.build.transpile.push('naive-ui', '@css-render/vue3-ssr')
        }
    },
})
