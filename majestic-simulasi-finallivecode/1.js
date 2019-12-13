/**
 * ==========================
 * What is my email provider?
 * ==========================
 *
 * Description
 * -----------
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh
 * =======
 * @input => icha@hacktiv8.com
 * @output => Your email provider is hacktiv8 ( tidak menggunakan .com di belakang)
 *
 * Rules
 * =====
 * 1. Wajib menggunakan PESUDOCODE / ALGORITMA atau -50
 * 2. Tidak diperbolehkan menggunakan built-in function:
 *    .map .filter .reduce .split .join .indexOf .findIndex
 *
 */
/*
  read email
  set hasil with 'Your email provider is '
  set flag with false
  for set i with 0 to email's length
    if flag equal true then
      hasil sum with email index i
      if email index i plus 1 equal '.' then
        break
      end if
    end if
    if email index i equal '@' then
      set flag with true
    end if
  end for
*/
function emailProvider(email) {
  // Insert your code here
  var hasil='Your email provider is '
  var flag=false
  for(var i=0;i<email.length;i++){
    if(flag){
      hasil+=email[i]
      if(email[i+1]==='.'){
        break
      }
    }
    if(email[i]==='@'){
      flag=true
    }
  }
  return hasil
}

console.log(emailProvider('yusuf@gmail.com')) // Your email provider is gmail
console.log(emailProvider('icha@hacktiv8.com')) // Your email provider is hacktiv8
console.log(emailProvider('icha@yahoo.co.id')) // Your email provider is yahoo