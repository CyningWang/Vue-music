export const commonParams = {
    g_tk: 5381,
    format: 'jsonp',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0
}

// jsonp模块传参要求之一，https://github.com/webmodules.jsonp
export const options = {
    param: 'jsonpCallback'
}

export const ERR_OK = 0