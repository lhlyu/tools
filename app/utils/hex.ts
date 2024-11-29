import * as CryptoJS from 'crypto-js'

export const hexEncode = (s: string): string => {
    if (!s.length) {
        return ''
    }
    return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(s))
}

export const hexDecode = (s: string): string => {
    if (!s.length) {
        return ''
    }
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Hex.parse(s))
}
