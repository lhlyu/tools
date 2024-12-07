<template>
	<Title>{{ $t('pages.color.title') }}</Title>
	
	<n-space vertical size="large">
		
		<n-input-group>
			<n-input v-model:value="strIn" :placeholder="$t('pages.color.input')" :maxlength="30" clearable show-count @keydown.enter="conversion" />
			<n-button type="primary" @click="conversion">
				{{ $t('pages.color.button') }}
			</n-button>
		</n-input-group>
		
		<div class="preview">
			<span>{{ $t('pages.color.preview') }}</span>
		</div>
		
		<n-table striped :single-line="false" size="small">
			<thead>
				<tr>
					<th>{{ $t('pages.color.format') }}</th>
					<th>{{ $t('pages.color.value') }}</th>
				</tr>
			</thead>
			<tbody>
				<TTr name="HEX" :value="colors[0]"></TTr>
				<TTr name="HEX8" :value="colors[1]"></TTr>
				<TTr name="RGB" :value="colors[2]"></TTr>
				<TTr name="RGBA" :value="colors[3]"></TTr>
				<TTr name="HSL" :value="colors[4]"></TTr>
				<TTr name="HSLA" :value="colors[5]"></TTr>
				<TTr name="HSV" :value="colors[6]"></TTr>
				<TTr name="HSVA" :value="colors[7]"></TTr>
				<TTr name="Name" :value="colors[8]"></TTr>
				<TTr :name="$t('pages.color.dark')" :value="colors[9]"></TTr>
			</tbody>
		</n-table>
	</n-space>
</template>

<script setup lang="ts">
import tinycolor from 'tinycolor2'
import TTr from '~/components/TTr.vue'

const { t } = useI18n()
const message = useMessage()

const strIn = ref('')

const defaultColors = [
    '#ff0000',
    '#ff0000ff',
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0, 1)',
    'hsl(0, 100%, 50%)',
    'hsla(0, 100%, 50%, 1)',
    'hsv(0, 100%, 100%)',
    'hsva(0, 100%, 100%, 1)',
    'red',
    'Yes',
]

const colors = ref(defaultColors)

const bg = ref('transparent')
const color = ref('inherit')

// d - 小数形式; p - 百分比
const nf = (val: number, percentage: boolean = false): string => {
    if (percentage) {
        return Math.round(val * 100) + '%'
    }
    return Math.round(val * 100) / 100 + ''
}

const conversion = () => {
    strIn.value = strIn.value.trim()

    const tc = tinycolor(strIn.value)

    if (!tc.isValid()) {
        bg.value = 'transparent'
        colors.value = defaultColors
        message.error(t('pages.color.error'))
        return
    }
    if (tc.isLight()) {
        color.value = 'black'
    } else {
        color.value = 'white'
    }

    bg.value = tc.toHex8String()

    const _colors = []

    // hex
    _colors.push(tc.toHexString())

    // hex8
    _colors.push(tc.toHex8String())

    // rgb
    const rgb = tc.toRgb()
    _colors.push(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)

    // rgba
    _colors.push(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nf(rgb.a)})`)

    // hsl
    const hsl = tc.toHsl()
    _colors.push(`hsl(${hsl.h.toFixed(0)}, ${nf(hsl.s, true)}, ${nf(hsl.l, true)})`)

    // hsla
    _colors.push(`hsla(${hsl.h.toFixed(0)}, ${nf(hsl.s, true)}, ${nf(hsl.l, true)}, ${nf(hsl.a)})`)

    // hsv
    const hsv = tc.toHsv()
    _colors.push(`hsv(${hsv.h.toFixed(0)}, ${nf(hsv.s, true)}, ${nf(hsv.v, true)})`)

    console.log(tc.toHsvString())

    // hsva
    _colors.push(`hsva(${hsv.h.toFixed(0)}, ${nf(hsv.s, true)}, ${nf(hsv.v, true)}, ${nf(hsv.a)})`)

    // name
    const name = tc.toName()
    if (name) {
        _colors.push(name)
    } else {
        _colors.push('')
    }

    // is dark
    _colors.push(tc.isDark() ? 'Yes' : 'No')

    colors.value = _colors
}
</script>

<style scoped lang="scss">
.preview {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	background: v-bind(bg);
	color: v-bind(color);
	border-radius: 0.2rem;
	border: 1px solid var(--border-color);
	box-sizing: border-box;
	transition: all 0.3s;
}
</style>