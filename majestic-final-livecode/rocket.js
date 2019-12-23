/**
 * 
 * ==============
 * SORT RECURSIVE
 * ==============
 * 
 * Buatlah sebuah function untuk mensorting angka dari kecil ke besar dengan cara REKURSIF
 * 
 * contoh -> [7, 3, 6, 8, 2]
 * output: [2, 3, 6, 7, 8]
 * 
 * RULES: 
 *  1. WAJIB MENGGUNAKAN REKURSIF
 *  2. TIDAK BOLEH MENGGUNAKAN LOOPING
 *  3. BOLEH MENAMBAHKAN PARAMETER ATAU FUNCTION TAMBAHAN (JIKA DI PERLUKAN)
 * 
 */

function sortRec(numbers) {
    if(numbers.length===1){
        return numbers[0]
    }
    return numbers.splice(numbers.indexOf(Math.min(...numbers)),1).concat(sortRec(numbers))
}

console.log(sortRec([5, 3, 7, 1, 2, 6]))
// [1, 2, 3, 5, 6, 7]
console.log(sortRec([22, 21, 19, 25, 20, 24]))
// [19, 20, 21, 22, 24, 25]