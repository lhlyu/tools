<template>
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
        name: 'tools.encode.name',
        description: 'tools.encode.desc',
        icon: CodeIcon,
        link: '/encode',
    },
    {
        name: 'tools.encrypt.name',
        description: 'tools.encrypt.desc',
        icon: ShieldIcon,
        link: '#encrypt-decrypt',
    },
    {
        name: 'tools.time.name',
        description: 'tools.time.desc',
        icon: ClockIcon,
        link: '#time-conversion',
    },
    {
        name: 'tools.short.name',
        description: 'tools.short.desc',
        icon: LinkIcon,
        link: '#short-link-generation',
    },
    {
        name: 'tools.qr.name',
        description: 'tools.qr.desc',
        icon: QrCodeIcon,
        link: '#qr-code-generation',
    },
    {
        name: 'tools.jsonPath.name',
        description: 'tools.jsonPath.desc',
        icon: DatabaseIcon,
        link: '#jsonpath',
    },
    {
        name: 'tools.random.name',
        description: 'tools.random.desc',
        icon: RefreshCwIcon,
        link: '#random-generation',
    },
    {
        name: 'tools.image.name',
        description: 'tools.image.desc',
        icon: ImageIcon,
        link: '#image-format-conversion',
    },
    {
        name: 'tools.color.name',
        description: 'tools.color.desc',
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
