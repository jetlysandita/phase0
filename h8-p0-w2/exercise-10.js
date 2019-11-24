function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    if(angka1===angka2){
        return -1;
    }else{
        return  angka2>angka1?true:false;
    }
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false