<template>
	<div class="card" @click="toLink">
		<div class="content">
			<div class="icon">
				<slot></slot>
			</div>
			<h3 class="title">
				{{ title }}
			</h3>
			<p class="description">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    description: String,
    to: String,
})

const toLink = () => {
    navigateTo(props.to)
}
</script>

<style scoped lang="scss">
.card {
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	overflow: hidden;
	background: var(--card-color);
	box-shadow: var(--box-shadow-1);
	transition: all 0.3s;
	cursor: pointer;
	
	&:hover {
		transform: translateY(-0.25rem);
		box-shadow: var(--box-shadow-3);
	}
	
	.content {
		flex: 1;
		padding: 1.5rem;
		
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 4rem;
			height: 4rem;
			background-color: rgb(from var(--primary-color) r g b / 0.2);
			color: var(--primary-color);
			border-radius: 50%;
			margin: 0 auto 1rem;
		}
		
		.title {
			font-size: 1.25rem;
			font-weight: 600;
			text-align: center;
			margin-bottom: 0.75rem;
		}
		
		.description {
			text-align: center;
			letter-spacing: 1px;
			line-height: 1.6;
			font-size: 0.8rem;
			color: var(--text-color-3);
			margin: 0;
		}
	}
}
</style>