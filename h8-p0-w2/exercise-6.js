//soal 1

console.log('pertama')
console.log('LOOPING PERTAMA')
var i=2
while (i <= 20) {
    console.log(i + ' - I love coding')
    i+=2;
}
console.log('LOOPING KEDUA')
while (i > 0) {
    i-=2;
    console.log(i + ' - I will become fullstack developer')
    
}

//soal 2
console.log('kedua')
console.log('LOOPING PERTAMA')
var i=1;
for(i;i<=20;i++){
    console.log(i + ' - I love coding')
}
console.log('LOOPING KEDUA')
for(i-=1;i>=1;i--){
    console.log(i + ' - I will become fullstack developer')
}

//soal 3
console.log('ketiga')

//ganjil genap
for(i+=1;i<=100;i++){
    if(i%2){
        console.log('ganjil')
    }else{
        console.log('genap')
    }
}

//kelipatan 3
for(i=1;i<=100;i++){
    if(i%3===0){
        console.log(i +' kelipatan 3')
    }
    i+=1;
}

//kelipatan 6
for(i=1;i<=100;i++){
    if(i%6===0){
        console.log(i +' kelipatan 6')
    }
    i+=4;
}

//kelipatan 10
for(i=1;i<=100;i++){
    if(i%10===0){
        console.log(i +' kelipatan 10')
    }
    i+=8;
}