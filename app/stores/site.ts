import { defineStore } from 'pinia'

interface SiteOptions {
    theme: 'light' | 'dark'
}

export const useSiteStore = defineStore('site', {
    state: () => {
        return {
            theme: 'light',
        }
    },
    persist: {
        storage: piniaPluginPersistedstate.cookies(),
    },
})
