<template>
	<main>
		<slot></slot>
	</main>
</template>

<style scoped lang="scss">
main {
	position: relative;
	flex: 1;
	height: 100%;
	overflow: auto;
	background-color: var(--body-color);
}
</style>