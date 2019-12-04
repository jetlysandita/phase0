function checkAB(num) {
    // you can only write your code here!
    var temp='';
    for(var j=0;j<num.length;j++){
        if(num[j]==='a'||num[j]==='b'){
            if(temp===''){
                temp=j
            }else{   
                if(Math.abs(j-temp)===4){
                    return true
                }
            }
        }
    }   
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false