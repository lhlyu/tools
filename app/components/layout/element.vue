<template>
	<n-element :style="customCssVars">
		<slot></slot>
	</n-element>
</template>

<script setup lang="ts">
const customCssVars = {
    '--c-main-max-width': '1200px',
    '--c-header-height': '4rem',
    '--c-footer-height': '3.5rem',
}
</script>
