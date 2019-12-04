function cariMedian(arr) {
    // you can only write your code here!
    var temp=0;
    for(var i=0;i<arr.length;i++){
        //buat tau total array nya
        for(var j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    //return arr
   if(arr.length%2===1){
        return arr[((arr.length+1)/2)-1]
   }else{
        return (arr[arr.length/2]+arr[(arr.length/2)-1])/2
   }
}
  
  // TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5