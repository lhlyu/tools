<template>
	<Card class="hover:shadow-lg hover:-translate-y-1 transition-shadow transition-transform duration-300 shadow-md cursor-pointer" @click="toLink">
		<CardContent class="flex flex-col items-center text-center p-6">
			<div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
				<slot></slot>
			</div>
			<h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
			<p class="text-sm text-gray-400">{{ description }}</p>
		</CardContent>
	</Card>
</template>

<script setup lang="ts">
import { Card, CardContent } from '~/components/ui/card'

const props = defineProps({
    title: String,
    description: String,
    to: String,
})

const toLink = () => {
    navigateTo(props.to)
}
</script>