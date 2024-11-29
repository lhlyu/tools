// 字符串转Unicode
export const unicodeEncode = (s: string, method: string): string => {
    if (!s.length) {
        return ''
    }

    switch (method) {
        case 'hex':
            return Array.from(s)
                .map((char) => `U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`)
                .join(' ')

        case 'decimal':
            return Array.from(s)
                .map((char) => `U+${char.charCodeAt(0).toString(10)}`)
                .join(' ')

        case 'escape':
            return Array.from(s)
                .map((char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`)
                .join('')

        case 'html':
            return Array.from(s)
                .map((char) => `&#x${char.charCodeAt(0).toString(16).toUpperCase()};`)
                .join('')

        case 'url':
            return Array.from(s)
                .map((char) => `%u${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`)
                .join('')

        default:
            return s
    }
}

// Unicode转字符串
export const unicodeDecode = (s: string, method: string): string => {
    if (!s.length) {
        return ''
    }

    switch (method) {
        case 'hex':
            return s.replace(/U\+([0-9a-fA-F]{4})/g, (match, group) => {
                return String.fromCharCode(parseInt(group, 16))
            })

        case 'decimal':
            return s.replace(/U\+([0-9]{1,5})/g, (match, group) => {
                return String.fromCharCode(parseInt(group, 10))
            })

        case 'escape':
            return s.replace(/\\u([0-9a-fA-F]{4})/g, (match, group) => {
                return String.fromCharCode(parseInt(group, 16))
            })

        case 'html':
            return s.replace(/&#x([0-9a-fA-F]{4});/g, (match, group) => {
                return String.fromCharCode(parseInt(group, 16))
            })

        case 'url':
            return s.replace(/%u([0-9a-fA-F]{4})/g, (match, group) => {
                return String.fromCharCode(parseInt(group, 16))
            })

        default:
            return s
    }
}
