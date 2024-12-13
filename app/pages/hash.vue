<template>
	
	<div class="container">
		<n-card content-style="padding: 0;">
			<n-tabs justify-content="space-evenly" v-model:value="enc">
				<n-tab name="md5">
					MD5
				</n-tab>
				<n-tab name="sha1">
					SHA1
				</n-tab>
				<n-tab name="sha256">
					SHA256
				</n-tab>
				<n-tab name="sha512">
					SHA512
				</n-tab>
			</n-tabs>
		</n-card>
		
		<n-input
			v-model:value="strIn"
			class="input"
			type="textarea"
			:placeholder="$t('pages.hash.input')"
			clearable
			show-count
		>
			<template #count="{ value }">
				{{ value.length ? value.length : '' }}
			</template>
		</n-input>
		
		<n-space justify="center">
			<n-button strong secondary type="primary" @click="encode">
				{{ $t('pages.hash.encode') }}
			</n-button>
			<n-button strong secondary type="error" @click="clear">
				<template #icon>
					<n-icon>
						<Trash2></Trash2>
					</n-icon>
				</template>
			</n-button>
			<n-button strong secondary type="info" @click="copyOutput">
				<template #icon>
					<n-icon>
						<ClipboardCheck v-if="copied"></ClipboardCheck>
						<Copy v-else></Copy>
					</n-icon>
				</template>
			</n-button>
		</n-space>
		
		<n-input
			v-model:value="strOut"
			class="output"
			type="textarea"
			:placeholder="$t('pages.hash.output')"
			clearable
			show-count
		>
			<template #count="{ value }">
				{{ value.length ? value.length : '' }}
			</template>
		</n-input>
	</div>
	
</template>

<script setup lang="ts">
import { Copy, ClipboardCheck, Trash2 } from 'lucide-vue-next'
import useHashPage from '~/composables/useHashPage'

const { enc, strIn, strOut, encode, clear, copied, copyOutput } = useHashPage()
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	
	.input, .output {
		flex: 1;
		height: 100%;
	}
}
</style>