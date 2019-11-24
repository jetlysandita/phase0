function xo(str) {
    // you can only write your code here!
    var hasil=0;
    for(var i=0;i<str.length;i++){
        hasil+=1;
        if(str[i]==='x'){
            hasil-=2;
        }
    }
    if(hasil===0){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true