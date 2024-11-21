<template>
	<Dropdown :items="languages" :selected="locale" @change="selectLanguage">
		<template #action>
			<button>
				<LucideLanguages></LucideLanguages>
				<LucideChevronDown :size="18"></LucideChevronDown>
			</button>
		</template>
	</Dropdown>
</template>

<script setup>
const { setLocale, locale } = useI18n()

const languages = [
    { label: '简体中文', value: 'zh' },
    { label: 'English', value: 'en' },
]

const selectLanguage = (value) => {
    setLocale(value)
}
</script>

<style lang="scss" scoped>
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


</style>

