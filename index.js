
export const multiply = (a,b) => a * b

export const getRandom = (a) => Math.floor(Math.random() * a)

export const convertToString = (a) => {
    if (isNaN(a)) {
        return 'NaN'
    } else if (a == 42) {
        return 'the meaning of life and the universe'
    } else {
        return String(a)
    }
}

export const reverse = (a) => {
    let rezult = ''

    for (let i = a.length-1; i >= 0; i--) {
        rezult = rezult + a[i] 
    }

    return rezult
}

export const countSyllables = (a) => {
    if (a == '') {
        return 0
    } else if (a == null) {
        return 0
    } else {
        return a.split('-').length
    }
}

