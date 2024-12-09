<template>
	<n-config-provider
		:theme="siteStore.theme === 'light' ? null : darkTheme"
		:theme-overrides="siteStore.theme === 'light' ? light : dark"
	>
		<n-message-provider>
			<LayoutElement>
				<LayoutContainer>
					<LayoutHeader></LayoutHeader>
					<LayoutMain>
						<div class="main-container" :style="style">
							<slot />
						</div>
						<LayoutFooter v-if="route.name === 'index'"></LayoutFooter>
					</LayoutMain>
				</LayoutContainer>
			</LayoutElement>
		</n-message-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import light from '~/assets/themes/light.json'
import dark from '~/assets/themes/dark.json'

const route = useRoute()
const siteStore = useSiteStore()

const { t } = useI18n()

useHead({
    titleTemplate: () => t(`pages.${route.name as string}.title`),
})

const customLayouts: (string | symbol | undefined)[] = ['jsonpath']

const style = computed(() => {
    const _style: Record<string, string> = {
        minHeight: '100%',
        height: '100%',
        maxWidth: 'var(--c-main-max-width)',
        padding: '1rem',
    }

    if (route.name === 'index') {
        _style['minHeight'] = 'calc(100% - var(--c-footer-height))'
        _style['height'] = 'auto'
    }

    if (customLayouts.includes(route.name)) {
        _style['maxWidth'] = '100%'
        _style['padding'] = '0'
    }

    return _style
})
</script>

<style lang="scss" scoped>
.main-container {
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
}
</style>