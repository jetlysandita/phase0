//soal 1
function shoutOut(){
    return "Halo Function!"
}
console.log(shoutOut())
//soal 2
function calculateMultiply(a,b){
    return a*b;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
//soal 3
function processSentence(name,age,address,hobby){
    name='Nama saya '+name
    age='umur saya '+age
    address='alamat saya di '+address
    hobby='dan saya punya hobby yaitu '+hobby +' !'
    return name+', '+age+', '+address+', '+hobby;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"