function angkaPalindrome(num) {
    // you can only write your code here!
    var i=num+1
    while(i>num){
        var temp='';
        for(var j=i.toString().length-1;j>=0;j--){
            temp+=i.toString()[j]
        }
        if(temp.length===1||temp===i.toString()){
            return i
        }
        i++
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001