import basex from 'base-x'

const bases: Record<string, ReturnType<typeof basex>> = {
    base2: basex('01'),
    base3: basex('012'),
    base4: basex('0123'),
    base5: basex('01234'),
    base6: basex('012345'),
    base7: basex('0123456'),
    base8: basex('01234567'),
    base9: basex('012345678'),
    base10: basex('012345679'),
    base11: basex('012345679a'),
    base12: basex('012345679ab'),
    base13: basex('012345679abc'),
    base14: basex('012345679abcd'),
    base15: basex('012345679abcde'),
    base16: basex('012345679abcdef'),
    base32: basex('0123456789abcdefghjkmnpqrstvwxyz'),
    base36: basex('0123456789abcdefghijklmnopqrstuvwxyz'),
    base58: basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'),
    base62: basex('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    base64: basex('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
    base67: basex('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~'),
}

export const baseItems = Object.keys(bases)

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const baseEncode = (s: string, bs: string = 'base64'): string => {
    if (!s.length) {
        return ''
    }
    const b = bases[bs]
    return b.encode(encoder.encode(s))
}

export const baseDecode = (s: string, bs: string = 'base64'): string => {
    if (!s.length) {
        return ''
    }
    const b = bases[bs]
    return decoder.decode(b.decode(s))
}
