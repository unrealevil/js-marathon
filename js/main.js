function countLetters(row, letter) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i) === letter) {
            ++count;
        }
    }
    return count;
}

function compareRows(row1, row2, letter) {
    const
        numberOfLetters1 = countLetters(row1, letter),
        numberOfLetters2 = countLetters(row2, letter);

    if (numberOfLetters1 === numberOfLetters2) {
        return row1 + ' === ' + row2;
    }

    if (numberOfLetters1 > numberOfLetters2) {
        return row1;
    }

    return row2;
}


const row1 = prompt('Enter first row');
const row2 = prompt('Enter second row');
const letter = prompt('Enter letter to count');

if (letter.length !== 1) {
    alert('Invalid letter length');
} else {
    alert(compareRows(row1, row2, letter));
}


/**
 * #2 Phones
 *
 * **/

function normalizePhoneNumber(phone) {
    let rawPhone = '';
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < phone.length; i++) {
        if (-1 !== digits.indexOf(phone.charAt(i))) { // специально не использовал регулярные выражения
            rawPhone += phone.charAt(i);
        }
    }
    if (rawPhone.length < 10 || rawPhone.length > 11) {
        return false;
    }
    if (rawPhone.length === 10) {
        return '7' + rawPhone;
    }
    if ('8' === rawPhone.charAt(0)) {
        return '7' + rawPhone.substr(1);
    }

    return rawPhone;
}

function formatPhoneNumber(phone) {
    const rawPhone = normalizePhoneNumber(phone);
    if (false === rawPhone) {
        return false;
    }

    return '+'
        + rawPhone.charAt(0)
        + ' ('
        + rawPhone.substr(1, 3)
        + ') '
        + rawPhone.substr(4, 3)
        + '-'
        + rawPhone.substr(7, 2)
        + '-'
        + rawPhone.substr(9, 2);
}

function assertEquals(expected, actual) {
    if (expected === actual) {
        console.log('assert ' + expected + ' is TRUE');
    } else {
        console.log('assert ' + expected + ' is FALSE!!! actual result ' + actual);
    }
}


let phone = '+71234567890';
assertEquals('71234567890', normalizePhoneNumber(phone));
assertEquals('+7 (123) 456-78-90', formatPhoneNumber(phone));

/**
 * Задание под *
 */
assertEquals('+7 (921) 123-45-67', formatPhoneNumber('89211234567'));
assertEquals('+7 (921) 123-45-67', formatPhoneNumber('9211234567'));

phone = prompt('Enter phone number');

const formattedPhone = formatPhoneNumber(phone);
if (false === formattedPhone) {
    alert('Invalid phone number');
} else {
    alert(formattedPhone);
}
