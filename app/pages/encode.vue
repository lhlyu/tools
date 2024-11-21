<template>
	<div class="encode">
		<div class="input">
			<textarea placeholder="输入..."></textarea>
		</div>
		<div class="actions">
			操作
		</div>
		<div class="output">
			<textarea placeholder="输出..."></textarea>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.encode {
	display: flex;
	flex-direction: column;
	height: calc(100% - var(--t-header-height));
	width: 100%;
	padding: 16px;
	
	textarea {
		border: none;
		outline: none;
		background: transparent;
		padding: 16px;
		width: 100%;
		height: 100%;
		color: var(--t-text-color);
		line-height: 1.8;
		letter-spacing: 1px;
	}
	
	.input {
		flex: 1;
		background-color: var(--t-card-bg-color);
		border: 1px solid var(--t-border-color);
		border-radius: 4px;
	}
	
	.actions {
		height: 40px;
		flex-shrink: 0;
		background-color: var(--t-card-bg-color);
		border: 1px solid var(--t-border-color);
		margin: 16px 0;
	}
	
	.output {
		flex: 1;
		background-color: var(--t-card-bg-color);
		border: 1px solid var(--t-border-color);
		border-radius: 4px;
	}
}
</style>