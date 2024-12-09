// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    srcDir: 'app/',
    devtools: { enabled: false },
    imports: {
        dirs: ['stores'],
    },
    app: {
        keepalive: true,
        rootTag: 'body',
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/seo',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        'nuxt-monaco-editor',
    ],
    monacoEditor: { removeSourceMaps: true },
    site: {
        url: 'https://tools.tatakai.top/',
        name: '工具集'
    },
    i18n: {
        locales: [
            {
                code: "zh",
                iso: "zh-CN",
                file: "zh.json",
                name: "简体中文",
            },
            {
                code: "en",
                iso: "en-US",
                file: "en.json",
                name: "English",
            },
        ],
        strategy: "no_prefix",
        langDir: "",
        defaultLocale: "zh",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            alwaysRedirect: true
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                }
            }
        },
    },
})