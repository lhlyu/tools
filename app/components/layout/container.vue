<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.container {
	position: fixed;
	inset: 0;
	display: flex;
	flex-direction: column;
	background-color: var(--body-color);
	color: var(--text-color-base);
	transition: all 0.3s;
}
</style>