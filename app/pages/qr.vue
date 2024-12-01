<template>
	<Title>{{ $t('pages.qr.title') }}</Title>
	<div class="flex flex-col gap-4 h-full">
		<Textarea class="bg-background resize-none" :placeholder="$t('pages.qr.input')" maxlength="1024" v-model="strIn" @blur="genQrcode"></Textarea>
		<canvas :id="canvas" class="flex-shrink-0 h-[300px] w-[300px] bg-background"></canvas>
	</div>
</template>

<script setup lang="ts">
import QRCode from 'qrcode'
import {Textarea} from "~/components/ui/textarea";

const canvas = useId()

const strIn = ref('')

const genQrcode = () => {
	QRCode.toCanvas(document.getElementById(canvas), strIn.value, {
		errorCorrectionLevel: 'Q'
	}, error => {
		console.error(error)
	})
}
</script>

<style scoped lang="scss">

</style>