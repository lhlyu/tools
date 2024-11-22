<template>
	<Title>{{ $t('title') }}</Title>
	<main>
		<div class="cards">
			<Card v-for="tool in tools"
			      :key="tool.name"
			      :title="$t(tool.name)"
			      :description="$t(tool.description)"
			      :to="tool.link"
			>
				<component :is="tool.icon" :size="32"  />
			</Card>
		</div>
	</main>
	<TFooter></TFooter>
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
    DropletIcon,
} from 'lucide-vue-next'

const tools = [
    {
        name: 'pages.index.tools.encode.name',
        description: 'pages.index.tools.encode.desc',
        icon: CodeIcon,
        link: '/encode',
    },
    {
        name: 'pages.index.tools.encrypt.name',
        description: 'pages.index.tools.encrypt.desc',
        icon: ShieldIcon,
        link: '#encrypt-decrypt',
    },
    {
        name: 'pages.index.tools.time.name',
        description: 'pages.index.tools.time.desc',
        icon: ClockIcon,
        link: '#time-conversion',
    },
    {
        name: 'pages.index.tools.short.name',
        description: 'pages.index.tools.short.desc',
        icon: LinkIcon,
        link: '#short-link-generation',
    },
    {
        name: 'pages.index.tools.qr.name',
        description: 'pages.index.tools.qr.desc',
        icon: QrCodeIcon,
        link: '#qr-code-generation',
    },
    {
        name: 'pages.index.tools.jsonPath.name',
        description: 'pages.index.tools.jsonPath.desc',
        icon: DatabaseIcon,
        link: '#jsonpath',
    },
    {
        name: 'pages.index.tools.random.name',
        description: 'pages.index.tools.random.desc',
        icon: RefreshCwIcon,
        link: '#random-generation',
    },
    {
        name: 'pages.index.tools.image.name',
        description: 'pages.index.tools.image.desc',
        icon: ImageIcon,
        link: '#image-format-conversion',
    },
    {
        name: 'pages.index.tools.color.name',
        description: 'pages.index.tools.color.desc',
        icon: DropletIcon,
        link: '#color-conversion',
    },
]
</script>

<style lang="scss" scoped>
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
</style>
