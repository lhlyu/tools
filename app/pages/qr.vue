<template>
	
	<div class="container">
		<div class="left">
			<n-input
				v-model:value="strIn"
				class="input"
				type="textarea"
				:placeholder="$t('pages.qr.input')"
				:maxlength="1024"
				clearable
				show-count
			>
			</n-input>
		</div>
		<div class="right">
			<n-space vertical>
				<n-space justify="space-between">
					<n-radio-group v-model:value="errorCorrectionLevel">
						<n-radio-button
							v-for="errorCorrection in errorCorrectionOptions"
							:key="errorCorrection.value"
							:value="errorCorrection.value"
							:label="errorCorrection.label"
						/>
					</n-radio-group>
					<n-color-picker v-model:value="color" style="width: 120px" />
				</n-space>
				<n-qr-code
					:value="strIn"
					:size="300"
					:color="color"
					:error-correction-level="errorCorrectionLevel"
				/>
			</n-space>
		</div>
	</div>
</template>

<script setup lang="ts">
const errorCorrectionLevel = ref('M')
const errorCorrectionOptions = [
    { value: 'L', label: 'L' },
    { value: 'M', label: 'M' },
    { value: 'Q', label: 'Q' },
    { value: 'H', label: 'H' },
]

const color = ref('#000000ff')

const strIn = ref('')
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: row;
	gap: 1rem;
	height: 100%;
	width: 100%;
	
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
	
	.left {
		flex: 1;
		height: 100%;
		width: 100%;
		
		.input {
			height: 100%;
			width: 100%;
		}
	}
	
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 100%;
		width: 100%;
	}
	
}
</style>