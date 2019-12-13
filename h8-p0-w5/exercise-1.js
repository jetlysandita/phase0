function sorting(arrNumber) {
    // code di sini
    var arrayGroup=[];
    var temp=''
    for(var i=0;i<arrNumber.length;i++){
        for(var j=i;j<arrNumber.length;j++){
            if(arrNumber[i]>arrNumber[j]){
                temp=arrNumber[i]
                arrNumber[i]=arrNumber[j]
                arrNumber[j]=temp
            }
        }
    }
  
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var number='',banyakNumber=0,temp
    var totalNumber=0
    while (totalNumber<arrNumber.length){
        temp=0
        for(var i=0;i<arrNumber.length;i++){
            if(arrNumber[totalNumber]===arrNumber[i]){
                temp+=1
            }
        }
        if(temp>banyakNumber){
            number=arrNumber[totalNumber]
            banyakNumber=temp
        }
        totalNumber+=banyakNumber
    }
   return number
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''