<template>
	<div class="container">
		<div class="top">
			<n-input-group>
				<n-input v-model:value="jp" @keydown.enter="confirm" :placeholder="$t('pages.jsonpath.input')" clearable />
				<n-button strong secondary type="primary" @click="copyOutput">
					<template #icon>
						<n-icon>
							<ClipboardCheck v-if="copied"></ClipboardCheck>
							<Copy v-else></Copy>
						</n-icon>
					</template>
				</n-button>
				<n-button type="primary" @click="confirm">
					{{ $t('pages.jsonpath.button') }}
				</n-button>
			</n-input-group>
		</div>
		<div class="bottom">
			<n-split :direction="width > 900 ? 'horizontal' : 'vertical'" :resize-trigger-size="8" :max="width > 900 ? 0.8 : 0.5" :min="width > 900 ? 0.2 : 0.5">
				<template #1>
					<MonacoEditor v-model="strIn" lang="json" :options="options" class="editor"></MonacoEditor>
				</template>
				<template #2>
					<MonacoEditor v-model="strOut" lang="json" :options="options" class="editor"></MonacoEditor>
				</template>
			</n-split>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ClipboardCheck, Copy } from 'lucide-vue-next'
import { useClipboard } from '@vueuse/core'
import { JSONPath } from 'jsonpath-plus'

const { width } = useWindowSize()
const { options } = useEditor()

const jp = ref('')
const strIn = ref('')
const strOut = ref('')

const { copy, copied } = useClipboard({
    copiedDuring: 2000,
})

const copyOutput = async () => {
    if (jp.value.trim().length) {
        await copy(jp.value)
    }
}

const confirm = () => {
    if (jp.value.trim().length) {
        const j = JSON.parse(strIn.value)
        const result = JSONPath({ path: jp.value.trim(), json: j })
        strOut.value = JSON.stringify(result, null, 4)
    }
}
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	height: 100%;
	
	.top {
		flex-shrink: 0;
		height: 34px;
		width: 100%;
	}
	
	.bottom {
		flex: 1;
		height: 100%;
	}
	
	.editor {
		height: 100%;
	}
}
</style>