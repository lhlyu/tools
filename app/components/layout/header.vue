<template>
	<header>
		<div class="header">
			<div class="left" @click="toHome">
				<Wrench class="icon" />
				<span>{{ $t('title') }}</span>
			</div>
			<div class="right">
				<n-space size="small">
					<n-button quaternary circle @click="toggleTheme">
						<template #icon>
							<n-icon>
								<Sun v-if="siteStore.theme === 'dark'"></Sun>
								<Moon v-else></Moon>
							</n-icon>
						</template>
					</n-button>
					<n-popselect :value="locale" :options="languageOptions" @update:value="languageChange">
						<n-button quaternary circle>
							<template #icon>
								<n-icon>
									<Languages></Languages>
								</n-icon>
							</template>
						</n-button>
					</n-popselect>
					<n-button quaternary circle @click="toGithub">
						<template #icon>
							<n-icon>
								<Github></Github>
							</n-icon>
						</template>
					</n-button>
				</n-space>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { Wrench, Sun, Moon, Languages, Github } from 'lucide-vue-next'

const siteStore = useSiteStore()
const { locale, setLocale } = useI18n()

const toHome = () => {
    navigateTo('/')
}

const toggleTheme = () => {
    siteStore.theme = siteStore.theme === 'dark' ? 'light' : 'dark'
}

const languageOptions = [
    {
        label: '中文',
        value: 'zh',
    },
    {
        label: 'English',
        value: 'en',
    },
]

const languageChange = (value: string) => {
    setLocale(value as 'zh' | 'en')
}

const toGithub = () => {
    window.open(`https://github.com/lhlyu/tools`, '_blank')
}
</script>

<style lang="scss" scoped>
header {
	position: sticky;
	top: 0;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	height: var(--c-header-height);
	background: var(--card-color);
	border-bottom: 1px solid var(--border-color);
	box-sizing: border-box;
	transition: all 0.3s;
	
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: var(--c-main-max-width);
		padding: 0 1rem;
		margin: 0 auto;
		box-sizing: border-box;
		
		.left {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			cursor: pointer;
			
			.icon {
				height: 1.25rem;
				width: 1.25rem;
			}
			
			span {
				font-weight: bold;
				font-size: 1.25rem;
			}
		}
		
		.right {
			display: flex;
		}
	}
}
</style>