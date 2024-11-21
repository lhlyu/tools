<template>
	<div class="language-selector">
		<button @click="isOpen = !isOpen">
			<LucideLanguages></LucideLanguages>
			<LucideChevronDown :size="18"></LucideChevronDown>
		</button>
		
		<transition name="dropdown">
			<div v-if="isOpen" class="dropdown">
				<ul>
					<li
						v-for="(language) in languages"
						:key="language.value"
						@click="selectLanguage(language.value)"
						:class="{ 'selected': locale === language.value }"
					>
						{{ language.label }}
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script setup>
const { setLocale, locale } = useI18n()

const languages = [
    { label: '简体中文', value: 'zh' },
    { label: 'English', value: 'en' },
]

const isOpen = ref(false)

const selectLanguage = (value) => {
    setLocale(value)
    isOpen.value = false
}
</script>

<style lang="scss" scoped>
.language-selector {
	position: relative;
	
	button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 46px;
		background-color: var(--t-header-bg-color);
		border: none;
		outline: none;
		font-size: 14px;
		color: var(--t-text-color);
		cursor: pointer;
		transition: all 0.3s;
		
		&:hover {
			color: var(--t-primary-color);
		}
	}
	
	.dropdown {
		position: absolute;
		top: 100%;
		left: -120%;
		width: 140px;
		margin-top: 4px;
		z-index: 10;
		border-radius: 12px;
		padding: 12px;
		min-width: 128px;
		border: 1px solid var(--t-divider-color);
		background-color: var(--t-elv-bg-color);
		box-shadow: var(--t-shadow-3);
		transition: background-color 0.3s;
		
		ul {
			list-style-type: none;
			
			li {
				cursor: pointer;
				display: block;
				border-radius: 4px;
				padding: 0 12px;
				line-height: 32px;
				font-size: 14px;
				font-weight: 500;
				color: var(--t-text-color);
				white-space: nowrap;
				transition: background-color 0.3s, color 0.3s;
				
				&:hover,
				&.selected {
					color: var(--t-selected-color);
					background-color: var(--t-hover-bg-color);
				}
				
				&.selected {
					font-weight: 600;
					background-color: var(--t-selected-bg-color);
				}
			}
		}
	}
}

.dropdown-enter-active,
.dropdown-leave-active {
	transition: all 0.3s;
}

.dropdown-enter-from,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>

