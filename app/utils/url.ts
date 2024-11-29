export const urlEncode = (s: string): string => {
    if (!s.length) {
        return ''
    }
    return encodeURIComponent(s)
}

export const urlDecode = (s: string): string => {
    if (!s.length) {
        return ''
    }
    return decodeURIComponent(s)
}
