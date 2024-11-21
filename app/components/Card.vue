<template>
	<div class="card">
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
		<div class="footer">
			<a :href="to" class="link">{{ $t('more') }} &rarr;</a>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: String,
	description: String,
	to: String,
})
</script>

<style scoped lang="scss">
$text-light: #1f2937;
.card {
	display: flex;
	flex-direction: column;
	background: var(--t-card-bg-color);
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: all 0.3s;
	
	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	}
	
	.content {
		flex: 1;
		padding: 24px;
		
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 64px;
			height: 64px;
			background-color: var(--t-primary-color-3);
			color: var(--t-primary-color);
			border-radius: 50%;
			margin: 0 auto 16px;
		}
		
		.title {
			font-size: 20px;
			font-weight: 600;
			text-align: center;
			margin-bottom: 12px;
		}
		
		.description {
			text-align: center;
			color: var(--t-text-color-7);
		}
	}
	
	.footer {
		padding: 16px 24px;
		transition: color 0.3s;
		background-color: var(--t-card-footer-bg-color);
		
		.link {
			display: block;
			text-align: center;
			color: var(--t-primary-color);
			font-weight: 500;
			text-decoration: none;
			
		}
	}
}
</style>