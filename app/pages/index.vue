<template>
	<Title>{{ $t('title') }}</Title>
	<div class="cards">
		<TCard v-for="tool in tools"
		       :key="tool.name"
		       :title="$t(tool.name)"
		       :description="$t(tool.description)"
		       :to="tool.link" >
			<component :is="tool.icon" class="icon" />
		</TCard>
	</div>
</template>

<script setup>
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
        name: 'pages.index.tools.qr.name',
        description: 'pages.index.tools.qr.desc',
        icon: QrCodeIcon,
        link: '/qr',
    },
    {
        name: 'pages.index.tools.color.name',
        description: 'pages.index.tools.color.desc',
        icon: DropletIcon,
        link: '/color',
    },
]
</script>

<style lang="scss" scoped>
.cards {
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	
	.icon {
		height: 2rem;
		width: 2rem;
	}
}
</style>