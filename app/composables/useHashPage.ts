import { md5, sha1, sha256, sha512 } from '~/utils'
import { useClipboard } from '@vueuse/core'

const useHashPage = () => {
    const enc = ref('md5')
    const strIn = ref('')
    const strOut = ref('')

    const encode = () => {
        strOut.value = ''

        strIn.value = strIn.value.trim()

        switch (enc.value) {
            case 'md5':
                strOut.value = md5(strIn.value)
                return
            case 'sha1':
                strOut.value = sha1(strIn.value)
                return
            case 'sha256':
                strOut.value = sha256(strIn.value)
                return
            case 'sha512':
                strOut.value = sha512(strIn.value)
                return
        }
    }

    const clear = () => {
        strIn.value = ''
        strOut.value = ''
    }

    const { copy, copied } = useClipboard({
        source: strOut,
        copiedDuring: 2000,
    })

    const copyOutput = async () => {
        if (strOut.value.trim().length) {
            await copy(strOut.value)
        }
    }

    return {
        enc,
        strIn,
        strOut,
        encode,
        clear,
        copied,
        copyOutput,
    }
}

export default useHashPage
