function cariModus(arr) {
    // you can only write your code here!
    var final=[-1,0];
    var temp;
    for(var i=0;i<arr.length;i++){
        temp=0;
        for(var j=0;j<arr.length;j++){
            if(i!=j){
                if(arr[i]===arr[j]){
                    temp+=1
                }
            }
        }
        if(temp>0&&temp!==(arr.length-1)&&(final[0]>arr[i]||final[0]===-1||final[1]<temp)){
            final[0]=arr[i]
            final[1]=temp
        }
    }
    return final[0];
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 5, 6, 10])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1