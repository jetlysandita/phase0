// // var arr=[1,4,3,2]
// // var x=0
// // while(x<arr.length){
// //     for(var i=0;i<arr.length-x;i++){
// //         if(arr[i]>arr[i+1]){
// //             var temp=arr[i]
// //             arr[i]=arr[i+1]
// //             arr[i+1]=temp
// //         }
// //     }
// //     x++
// // }
// var arr=[]
// arr.push([1])
// console.log(arr)
// var data=[
//     ['yusuf','13-05-1990'],
//     ['tony','13-05-1988'],
//     ['adiel','13-11-1997'],
//     ['wika','13-02-1990'],
//     ['hardim','25-03-1994']
// ]
// function ymd(str,part){
//     var temp=''
//     str+=part
//     var hasil=[]
//     for(var i=0;i<str.length;i++){
//         if(str[i]===part){
//             hasil.push(parseInt(temp))
//             temp=''
//         }else{
//             temp+=str[i]
//         }
//     } 
//     console.log(hasil)
//     return hasil
// }
// function sort(data){
//     for(var i=0;i<data.length;i++){
//         for(var j=i;j<data.length;j++){
//             if(ymd(data[i][1],'-')[2]>=ymd(data[j][1],'-')[2]){
//                 if(ymd(data[i][1],'-')[2]>ymd(data[j][1],'-')[2]){
//                     var temp=data[i]
//                     data[i]=data[j]
//                     data[j]=temp
//                 }else if(ymd(data[i][1],'-')[1]>ymd(data[j][1],'-')[1]){
//                     var temp=data[i]
//                     data[i]=data[j]
//                     data[j]=temp
//                 }else if(ymd(data[i][1],'-')[0]>ymd(data[j][1],'-')[0]){
//                     var temp=data[i]
//                     data[i]=data[j]
//                     data[j]=temp
//                 }
//             }
//         }
//         data[i].push(new Date().getFullYear()-ymd(data[i][1],'-')[2])
//     }
//     return data
// }
// console.log(sort(data))

var x=5
var temp=''
var hasil=''
for(var i=0;i<x;i++){
    hasil+=temp
    for(var j=1+i;j<=x;j++){
        hasil+=j
    }
    temp+=' '
    // console.log(hasil)
    hasil=''
}

function make(x){
    var arr=[]
    for(var i=0;i<x;i++){
        arr[i]=[]
        var temp=0
        for(var j=x-i;j<=x;j++){
            temp+=j
            arr[i].push(temp)
            temp=0
        } 
    }
    return arr
}
// console.log(make(x))

var arr = [1,2,3,4,6,7,8,5,4,3,2,9,2,3,4,5]
/*
[
    [1, total]
]
 */
// [1,2,3,4,5,4,3,2,2,3,4,5]
// [1,2,3,4,5]
function unique(arr){
    var hasil = []
    for(var i=0;i<arr.length;i++){
        var flag=true
        for(var j=0;j<hasil.length;j++){
            if(arr[i]===arr[j]){
                flag=false
            }
        }
        if(flag){
            hasil.push(arr[i])
        }
    }
    return hasil
}
// console.log(unique(arr))
function uniquedual(arr){
    var hasil=[]
    for(var i=0;i<arr.length;i++){
        var total=0
        for(var j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1
            }
        }
        if(total>1){
            var flag=true
            for(var k=0;k<hasil.length;k++){
                if(arr[i]==hasil[k]){
                    flag=false
                    break
                }
            }
            if(flag){
                hasil.push(arr[i])
            }
        }
    }
    return hasil
}
//console.log(uniquedual(arr))

function eraseunique(arr){
    var hasil=[]
    for(var i=0;i<arr.length;i++){
        var total=0
        for(var j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1
            }
        }
        if(total>1){
            hasil.push(arr[i])
        }
    }
    return hasil
}
//console.log(eraseunique(arr))
// console.log(arr)
function countarr(arr){
    var hasil = []
    for(var i = 0; i < arr.length ; i++){
        var flag = true
        for(var j = 0 ; j < hasil.length ; j++){
            var temp = hasil[j] == null ? false : hasil[j][0]
            if(arr[i] === temp){
                flag = false
                hasil[j][1] += 1
            }
        }
        if(flag){
            hasil.push([arr[i],1])
        }
    }
    return hasil
}
// console.log(countarr(arr))



var arr = [

    [11, 'November'],
  
    [3, 'March'],
  
    [2, 'February'],
  
    [1, 'January'],
  
    [7, 'July'],
  
    [10, 'October'],
  
    [9, 'September'],
  
    [5, 'May'],
  
    [12, 'December'],
  
    [6, 'June'],
  
    [4, 'April'],
  
    [8, 'August'],
  
  ]
  function sortmonth(arr){
      for(var i=0;i<arr.length;i++){
          for(var j=i;j<arr.length;j++){
              if(arr[i][0]>arr[j][0]){
                  var temp=arr[i]
                  arr[i]=arr[j]
                  arr[j]=temp
              }
          }
      }
      return arr
  }
//   console.log(sortmonth(arr))
  
  let result = [
  
    [6951, 'Rotterdam', 'NLD', 'Zuid-Holland', 593321],
  
    [3878, 'Scottsdale', 'USA', 'Arizona', 202705],
  
    [3965, 'Corona', 'USA', 'California', 124966],
  
    [3973, 'Concord', 'USA', 'California', 121780],
  
    [3977, 'Cedar Rapids', 'USA', 'Iowa', 120758],
  
    [3982, 'Coral Springs', 'USA', 'Florida', 117549],
  
    [4054, 'Fairfield', 'USA', 'California', 92256],
  
    [4058, 'Boulder', 'USA', 'Colorado', 91238],
  
    [4061, 'Fall River', 'USA', 'Massachusetts', 90555],
  
  ]
//   console.log(typeof result[0][0]==='number')
function sortwith(arr,param=1){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            var temp
            if(typeof arr[i][param-1]==='number'){
                if(arr[i][param-1]>arr[j][param-1]){
                    temp=arr[i]
                    arr[i]=arr[j]
                    arr[j]=temp
                }
            }else if(typeof arr[i][param-1]==='string'){
                var k=0
                while(typeof k==='number'&&(k<arr[j][param-1].length||k<arr[i][param-1].length)){
                    if(arr[i][param-1][k]===arr[j][param-1][k]){
                        k+=1
                    }else if(arr[i][param-1].charCodeAt(k)>arr[j][param-1].charCodeAt(k)){
                        temp=arr[i]
                        arr[i]=arr[j]
                        arr[j]=temp
                        k=false
                    }else {
                        k=false
                    }
                }
            }
        }
    }
    return arr
}
console.log(sortwith(result,2))
  /* 
  
  [
  
    [4058, 'Boulder', 'USA', 'Colorado', 91238]
  
    [3977, 'Cedar Rapids', 'USA', 'Iowa', 120758]
  
    [3973, 'Concord', 'USA', 'California', 121780]
  
    [3982, 'Coral Springs', 'USA', 'Florida', 117549]
  
    [3965, 'Corona', 'USA', 'California', 124966]
  
    [4054, 'Fairfield', 'USA', 'California', 92256]
  
    [4061, 'Fall River', 'USA', 'Massachusetts', 90555]
  
    [6951, 'Rotterdam', 'NLD', 'Zuid-Holland', 593321]
  
    [3878, 'Scottsdale', 'USA', 'Arizona', 202705]
  
  ]
  
  */
  
  