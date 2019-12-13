function totalDigitRekursif(angka) {
    // you can only write your code here!
    angka=String(angka)
    if(angka.length===1){
        return Number(angka)
    }

    return Number(angka[0]) + totalDigitRekursif(Number(angka.slice(1)))
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5