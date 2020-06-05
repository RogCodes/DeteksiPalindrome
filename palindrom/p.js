function palindrom(str) {
    if (str.length < 1) {
        console.log('Text Tidak Boleh Kosong');
        return false;
    }


    const stringReverse = str.split('').reverse().join('');

    if (str === stringReverse) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrom('ana'));