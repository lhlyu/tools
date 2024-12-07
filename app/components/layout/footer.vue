<template>
	<footer>
		© 2024 谕℃. All rights reserved.
	</footer>
</template>

<script setup lang="ts">
import dark from '~/assets/themes/dark.json'

const color = dark.common.textColorBase
const bg = dark.common.cardColor
</script>

<style lang="scss" scoped>
footer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: var(--c-footer-height);
	width: 100%;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: v-bind(color);
	background-color: v-bind(bg);
}
</style>