/*
================
Format Uang (KBBI)
================
[INSTRUCTIONS]
  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00
[RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
  formatUang(2000)
  output: Rp2.000,00
*/

function formatUang(number) {
  //code here
  var hasil=''
  number=String(number)
  var temp=3
  for(var i=number.length-1;i>=0;i--){
    if(temp===0){
      hasil=number[i]+'.'+hasil
      temp=3
    }else{
      hasil=number[i]+hasil
    }
    temp--
  }
  
  return 'Rp'+hasil+',00'
}
console.log(formatUang(9000)); // Rp9.000,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(250000)); // Rp250.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(5867938)); // Rp5.867.938,00
