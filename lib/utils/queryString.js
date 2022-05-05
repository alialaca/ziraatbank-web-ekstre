module.exports.stringfy = (data) => {
    if (typeof data !== "object" || Array.isArray(data)) throw new Error('Data must be object')

    const keys = Object.keys(data).map( key => `${key}=${data[key]}`)
    return keys.join('&')
}