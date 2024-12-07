<template>
	<tr>
		<td>{{ name }}</td>
		<td>
			<n-space justify="space-between">
				<div class="text">{{ value }}</div>
				<n-button quaternary circle @click="copy(value as string)" size="small">
					<template #icon>
						<n-icon>
							<ClipboardCheck v-if="copied"></ClipboardCheck>
							<Copy v-else></Copy>
						</n-icon>
					</template>
				</n-button>
			</n-space>
		</td>
	</tr>
</template>

<script setup lang="ts">
import { ClipboardCheck, Copy } from 'lucide-vue-next'
import { useClipboard } from '@vueuse/core'

defineProps({
    name: String,
    value: String,
})

const { copy, copied } = useClipboard({
    copiedDuring: 2000,
})
</script>

<style scoped lang="scss">
.text {
	display: flex;
	align-items: center;
	height: 100%;
}
</style>