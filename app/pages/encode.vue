<template>
	<Title>{{ $t('pages.encode.title') }}</Title>
	<div class="container">
		<n-tabs type="segment" animated v-model:value="enc">
			<n-tab name="base">
				Base
			</n-tab>
			<n-tab name="url">
				Url
			</n-tab>
			<n-tab name="hex">
				Hex
			</n-tab>
			<n-tab name="unicode">
				Unicode
			</n-tab>
		</n-tabs>
		<n-input
			v-model:value="strIn"
			class="input"
			type="textarea"
			:placeholder="$t('pages.encode.input')"
			clearable
			show-count
		>
			<template #count="{ value }">
				{{ value.length ? value.length : '' }}
			</template>
		</n-input>
		
		<n-space justify="center">
			<n-select v-model:value="mode" :options="options" style="width: 100px" />
			<n-button strong secondary type="primary" @click="encode">
				{{ $t('pages.encode.encode') }}
			</n-button>
			<n-button strong secondary type="info" @click="decode">
				{{ $t('pages.encode.decode') }}
			</n-button>
			<n-button strong secondary type="error" @click="clear">
				<template #icon>
					<n-icon>
						<Trash2></Trash2>
					</n-icon>
				</template>
			</n-button>
			<n-button strong secondary type="info" @click="moveUp">
				<template #icon>
					<n-icon>
						<MoveUp></MoveUp>
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
			:placeholder="$t('pages.encode.output')"
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
import { Copy, ClipboardCheck, Trash2, MoveUp } from 'lucide-vue-next'

const { enc, mode, strIn, strOut, options, encode, decode, clear, moveUp, copied, copyOutput } = useEncodePage()
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