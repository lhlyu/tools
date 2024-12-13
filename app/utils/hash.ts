import * as CryptoJS from 'crypto-js'

export const md5 = (s: string) => {
    return CryptoJS.MD5(s).toString()
}

export const sha1 = (s: string) => {
    return CryptoJS.SHA1(s).toString()
}

export const sha256 = (s: string) => {
    return CryptoJS.SHA256(s).toString()
}

export const sha512 = (s: string) => {
    return CryptoJS.SHA512(s).toString()
}
