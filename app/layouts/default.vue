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
						<div class="main-container" :style="{
				            minHeight: $route.path === '/' ? 'calc(100% - var(--c-footer-height))' : '100%',
				            height: $route.path === '/' ? 'auto' : '100%',
			        }">
							<slot />
						</div>
						<LayoutFooter v-if="$route.path === '/'"></LayoutFooter>
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

const siteStore = useSiteStore()
</script>

<style lang="scss" scoped>
.main-container {
	max-width: var(--c-main-max-width);
	width: 100%;
	margin: 0 auto;
	padding: 1rem;
	box-sizing: border-box;
}
</style>