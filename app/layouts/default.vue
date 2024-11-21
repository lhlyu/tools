<template>
	<div class="container">
		<THeader></THeader>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;
	overflow: auto;
	scroll-behavior: smooth;
}
</style>