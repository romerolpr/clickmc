function randomLetter(size, type) {
    var str = '';
    var character = type == undefined ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' : type;
    for (var i = 0; i < size; i++) {
        str += character.charAt(Math.floor(Math.random() * character.length));
    }
    return str;
}

function convertToLetter(l) {
    l = parseInt(l) == 0 ? parseInt(randomLetter(1, '123456789')) : parseInt(l)
    return String.fromCharCode(l+64)
}

export const getUrlCode = (now) => {
    try {
        const timestamp = now.getTime().toString()
        const numbers = {
            a: parseInt(timestamp[timestamp.length-1]),
            b: parseInt(timestamp[timestamp.length-2]),
            c: parseInt(timestamp[timestamp.length-3]),
            d: parseInt(timestamp[timestamp.length-4]),
            e: parseInt(timestamp[timestamp.length-5])
        }
        const alfa = [convertToLetter(numbers.a),convertToLetter(numbers.b),convertToLetter(numbers.c)].join('')
        const bravo = [convertToLetter(numbers.d),convertToLetter(numbers.e)].join('')
        const result = [[alfa, numbers.a].join(''), [bravo, numbers.a, numbers.b].join(''), randomLetter(6)].join('-')
        return result.match(/(\D{3}\d{1})-(\D{2}\d{2})-([A-Z0-9]{6})/) ? result : getUrlCode()
    } catch {
        throw 'Invalid timestmap.'
    }
}