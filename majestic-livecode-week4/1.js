/*
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib menggunakan pseudocode
 *  
 */
/*
  read numbers
  set hasil with ''
  if numbers's length smaller than 10 then
    hasil equal "Invalid phone number"
  else
    for i equal 0 to numbers's length
      if i smaller than numbers'length and i greater or same than number's length minus 5
        hasil sum with '*'
      else
        hasil sum with numbers index i
      end if
    end for
  end if
  display hasil 
*/ 
function secretPhoneNumber(numbers){
  // your code here
  var hasil=''
  if(numbers.length<10){
    hasil="Invalid phone number"
  }else{
    for(var i=0;i<numbers.length;i++){
      if(i<numbers.length&&i>=numbers.length-5){
        hasil+='*'
      }else{
        hasil+=numbers[i]
      }
    }
  }
  return hasil
}
console.log(secretPhoneNumber("081267465370"))
// 0812674*****
console.log(secretPhoneNumber("08537582711"))
// 085375*****
console.log(secretPhoneNumber("085758271523"))
// 0857582*****
console.log(secretPhoneNumber("0811739915"))
// 08117*****
console.log(secretPhoneNumber("08238797"))
// "Invalid phone number"