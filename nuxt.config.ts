// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    srcDir: 'app/',
    devtools: { enabled: false },
    css: ['assets/styles/index.scss'],
    app: {
        keepalive: true,
        head: {
            htmlAttrs: {
                lang: 'zh-cmn-Hans',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: '工具集',
        },
        rootTag: 'body',
    },
    modules: ['nuxt-lucide-icons', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
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

        precompile: {
            strictMessage: false,
        },
    },

})
