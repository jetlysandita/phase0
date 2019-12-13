/**
 * ================
 * String Evaluator
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function untuk menghitung kalkulasi dari input yang bentuknya berupa string
 * Operator yang digunakan adalah + - * /
 * 
 * Rules
 * -----
 * 1. WAJIB dilakukan dengan rekursif
 * 2. dilarang menggunakan built-in function eval
 * 3. Dilarang menambah dan merubah tipe data parameter
 * 4. Dilarang membuat function lain selain evaluate
 */

function evaluate(str) {
  // Write your code here
  var hitung=''
  var flag=''
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=0){
      hitung+=str[i]
    }else{
      flag=str[i]
      break
    }
  }
  if(flag==='+'){
    return Number(hitung) + evaluate(str.slice(i+1))
  }else if(flag==='-'){
    return Number(hitung) - evaluate(str.slice(i+1))
  }
  else if(flag==='*'){
    return Number(hitung) * evaluate(str.slice(i+1))
  }
  else if(flag==='/'){
    return Number(hitung) / evaluate(str.slice(i+1))
  }else{
    return Number(hitung)
  }
}

console.log(evaluate('1+2+3+4+5')) // 15
console.log(evaluate('1*2*3*4*5')) // 120
console.log(evaluate('20/4')) // 5
console.log(evaluate('20-6')) // 14