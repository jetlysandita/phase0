function cariPelaku(str) {
    // you can only write your code here!
    var pelaku=0;
    for(var i=0;i<str.length-2;i++){
        var temp=''
        for(var j=i;j<i+3;j++){
            temp+=str[j]
        }
        if(temp==='abc'){
            pelaku+=1
        }
    }
    return pelaku
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2