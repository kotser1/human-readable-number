module.exports = function toReadable (number) {
    const onesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    const tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
    
    const numString = number.toString();
    
    if (number < 0) {
        throw new Error('Ошибка - введено отрицательное число. Число должно быть больше или равно 0');
    }

    if (number === 0) {
        return 'zero';
    } 
    
    if (number < 20) {
        return onesArray[number];
    }
    
    if (numString.length === 2) { 
        return (tensArray[numString[0]] + ' ' + onesArray[numString[1]]).trim();
    }
    
    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0') {
            return onesArray[numString[0]] + ' hundred';
        } else {
            return onesArray[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
        }
    }
}
