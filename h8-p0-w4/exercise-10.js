function changeMe(arr) {
    // you can only write your code here!
    var final='';
    var temp;
    var date = new Date()
    if(arr.length>0){
        final={}
    }
    for(var i=0;i<arr.length;i++){
        temp=[]
        for(var j=0;j<arr[i].length;j++){
            temp[j]=arr[i][j]
        }
        if(temp[3]==null||temp[3]>date.getFullYear()){
            temp[3]='Invalid Birth Year'
        }else{
            temp[3]=date.getFullYear()-temp[3]
        }
        final[i+1+'. '+temp[0]+' '+temp[1]]={
            temp
        }
        
    } 
    return final
  }
  
// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])) // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""