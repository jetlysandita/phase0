function hapusSimbol(str) {
    // you can only write your code here!
    var newStr=''
    for(var i=0;i<str.length;i++){
        if(!(str.charCodeAt(i)>=33&&str.charCodeAt(i)<=63&&!(str.charCodeAt(i)>=48&&str.charCodeAt(i)<=57))){
            newStr+=str[i]
        }
    }
    return newStr
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100