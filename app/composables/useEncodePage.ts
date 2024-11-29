import {
    baseEncode,
    hexEncode,
    urlEncode,
    unicodeEncode,
    baseDecode,
    urlDecode,
    hexDecode,
    unicodeDecode,
} from '~/utils'

const encodes: Record<string, string[]> = {
    base: [
        'base64',
        'base32',
        'base58',
        'base2',
        'base3',
        'base4',
        'base5',
        'base6',
        'base7',
        'base8',
        'base9',
        'base10',
        'base11',
        'base12',
        'base13',
        'base14',
        'base15',
        'base16',
        'base36',
        'base62',
        'base67',
    ],
    url: ['url'],
    hex: ['utf8'],
    unicode: ['hex', 'decimal', 'escape', 'html', 'url'],
}

const useEncodePage = () => {
    const enc = ref('base')
    const mode = ref('base64')
    const strIn = ref('')
    const strOut = ref('')

    watch(enc, (newValue, oldValue) => {
        mode.value = encodes[newValue].at(0) as string
    })

    const encode = () => {
        strOut.value = ''

        switch (enc.value) {
            case 'base':
                strOut.value = baseEncode(strIn.value, mode.value)
                return
            case 'url':
                strOut.value = urlEncode(strIn.value)
                return
            case 'hex':
                strOut.value = hexEncode(strIn.value)
                return
            case 'unicode':
                strOut.value = unicodeEncode(strIn.value, mode.value)
                return
        }
    }

    const decode = () => {
        strOut.value = ''

        switch (enc.value) {
            case 'base':
                strOut.value = baseDecode(strIn.value, mode.value)
                return
            case 'url':
                strOut.value = urlDecode(strIn.value)
                return
            case 'hex':
                strOut.value = hexDecode(strIn.value)
                return
            case 'unicode':
                strOut.value = unicodeDecode(strIn.value, mode.value)
                return
        }
    }

    const clear = () => {
        strIn.value = ''
        strOut.value = ''
    }

    const moveUp = () => {
        strIn.value = strOut.value
        strOut.value = ''
    }

    return {
        encodes,
        enc,
        mode,
        strIn,
        strOut,
        encode,
        decode,
        clear,
        moveUp,
    }
}

export default useEncodePage
