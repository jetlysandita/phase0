function targetTerdekat(arr) {
    // you can only write your code here!
    var flag=[]
    for(var i=0;i<arr.length;i++){
        if((arr[i]==='x'||arr[i]==='o')&&flag.length===0){
            flag=[arr[i],i,0]
        }else if(arr[i]==='x'||arr[i]==='o'){
            if(arr[i]!==flag[0]){ 
                if(flag[2]===0||flag[2]>Math.abs(i-flag[1])){
                    flag[2]=Math.abs(i-flag[1])
                }
            }else{
                flag=[arr[i],i,0]
            }
        }
    }
    return flag[2];
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2