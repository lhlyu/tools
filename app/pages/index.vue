<template>
	<div class="container">
		<THeader></THeader>
		<main>
			<div class="cards">
				<Card v-for="tool in tools"
				      :key="tool.name"
				      :title="tool.name"
				      :description="tool.description"
				      :to="tool.link"
				>
					<component :is="tool.icon" :size="32"  />
				</Card>
			</div>
		</main>
		<TFooter></TFooter>
	</div>
</template>

<script setup lang="ts">
import {
	CodeIcon,
	ShieldIcon,
	ClockIcon,
	LinkIcon,
	QrCodeIcon,
	DatabaseIcon,
	RefreshCwIcon,
	ImageIcon,
	DropletIcon
} from "lucide-vue-next";

const { t } = useI18n()

const tools = [
	{
		name: t('tools.encode.name'),
		description: t('tools.encode.desc'),
		icon: CodeIcon,
		link: '#encode-decode'
	},
	{
		name: t('tools.encrypt.name'),
		description: t('tools.encrypt.desc'),
		icon: ShieldIcon,
		link: '#encrypt-decrypt'
	},
	{
		name: t('tools.time.name'),
		description: t('tools.time.desc'),
		icon: ClockIcon,
		link: '#time-conversion'
	},
	{
		name: t('tools.short.name'),
		description: t('tools.short.desc'),
		icon: LinkIcon,
		link: '#short-link-generation'
	},
	{
		name: t('tools.qr.name'),
		description: t('tools.qr.desc'),
		icon: QrCodeIcon,
		link: '#qr-code-generation'
	},
	{
		name: t('tools.jsonPath.name'),
		description: t('tools.jsonPath.desc'),
		icon: DatabaseIcon,
		link: '#jsonpath'
	},
	{
		name: t('tools.random.name'),
		description: t('tools.random.desc'),
		icon: RefreshCwIcon,
		link: '#random-generation'
	},
	{
		name: t('tools.image.name'),
		description: t('tools.image.desc'),
		icon: ImageIcon,
		link: '#image-format-conversion'
	},
	{
		name: t('tools.color.name'),
		description: t('tools.color.desc'),
		icon: DropletIcon,
		link: '#color-conversion'
	}
];

</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
	overflow: auto;
	
	main {
		min-height: calc(100% - var(--t-header-height) - var(--t-footer-height));
		max-width: var(--t-max-width);
		width: 100%;
		margin: 0 auto;
		padding: 32px 16px;
		
		
		.cards {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(var(--t-card-min-width), 1fr));
			gap: 32px;
		}
	}
}
</style>
