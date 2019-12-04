function ubahHuruf(kata) {
    // you can only write your code here!
    var alpha='abcdefghijklmnopqrstuvwxyz'
    var final='';
    for(var i=0;i<kata.length;i++){
        for(var j=0;j<alpha.length;j++){
            if(kata[i]===alpha[j]){
                if(j===25){
                    final+=alpha[0]
                }else{
                    final+=alpha[j+1]
                }
            }
        }
    }
    return final
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu