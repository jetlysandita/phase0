function pasanganTerbesar(num) {
    // you can only write your code here!
    num=num.toString();
    var temp=0;
    for(var i=0;i<num.length-1;i++){
        if(parseInt(num[i]+num[i+1])>temp){
            temp=parseInt(num[i]+num[i+1])
        }   
    }
    return temp;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99