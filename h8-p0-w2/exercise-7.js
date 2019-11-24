//soal 1
console.log("pertama")
var rows1=5;
for(var i=0;i<rows1;i++){
    console.log('*')
}
//soal 2
console.log("kedua")
var rows2=5;
for(var i=0;i<rows2;i++){
    var temp='';
    for(var j=0;j<rows2;j++){
        temp+='*';
    }
    console.log(temp)
}
//soal 3
console.log("ketiga")
var rows3=5;
for(var i=0;i<rows3;i++){
    var temp='';
    for(var j=0;j<i+1;j++){
        temp+='*';
    }
    console.log(temp)
}