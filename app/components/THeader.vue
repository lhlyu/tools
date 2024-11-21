<template>
	<header>
		<div class="header">
			<div class="logo">
				<LucideWrench class="icon" @click="toHome" />
				<div class="title" @click="toHome">{{ $t('title') }}</div>
			</div>
			<div class="actions">
				<button @click="toggleThemeMode" class="button-icon">
					<LucideMonitor v-if="$colorMode.preference === 'system'" />
					<LucideSun v-else-if="$colorMode.preference === 'light'" />
					<LucideMoon v-else />
				</button>
				<LanguageSelector></LanguageSelector>
				<a href="https://github.com/lhlyu/tools" target="_blank" class="button-icon">
					<LucideGithub />
				</a>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleThemeMode = () => {
    if (colorMode.preference === 'system') {
        colorMode.preference = 'light'
    } else if (colorMode.preference === 'light') {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'system'
    }
}

const toHome = () => {
    navigateTo('/')
}
</script>

<style scoped lang="scss">
header {
	position: sticky;
	top: 0;
	z-index: 1;
	height: var(--t-header-height);
	width: 100%;
	background: var(--t-header-bg-color);
	color: var(--t-header-text-color);
	box-shadow: 0 1px 3px var(--t-border-color);
	transition: all 0.3s;
	
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		max-width: var(--t-max-width);
		margin: 0 auto;
		padding: 0 16px;
		
		.logo {
			display: flex;
			align-items: center;
			gap: 8px;
			cursor: pointer;
			
			.icon {
				width: 32px;
				height: 32px;
				color: var(--t-primary-color);
			}
			
			.title {
				font-size: 24px;
				font-weight: bold;
			}
		}
		
		.actions {
			display: flex;
			align-items: center;
			gap: 20px;
			
			.button-icon {
				background: none;
				border: none;
				cursor: pointer;
				color: var(--t-text-color);
				transition: color 0.3s;
				
				&:hover {
					color: var(--t-primary-color);
				}
			}
		}
	}
}
</style>