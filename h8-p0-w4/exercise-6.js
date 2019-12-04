function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var final='';
    var temp=0;
    for(var i=1;i<=angka;i++){
        temp=angka/i
        if((temp%1)===0){
            if(final===''){
                final=i+''+temp
            }else{
                if(final.length>(i+''+temp).length){
                    final=i+''+temp
                }
            }
        }
    }
    return final.length
  }
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

 