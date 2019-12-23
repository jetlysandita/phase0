/*
  ===========
  HASIL UJIAN
  ===========

  Hasil Ujian adalah sebuah fungsi untuk mendapatkan informasi status lulus atau tidak lulus-nya student yang mengikuti ujian
  
  Fungsi ini akan mengembalikan sebuah object dengan jumlah student, nama-nama student yang lolos, nama-nama student yang gagal, nilai tertinggi dan nilai rata-rata student

  [RULES]

  - Student dinyatakan lulus jika nilainya lebih dari atau sama dengan 70, maka nilai dibawahnya dinyatakan gagal
  
  [RESTRICTION]:

  - TIDAK boleh menggunakan built in function max(), filter(), find(), sort()
  - TIDAK boleh menggunakan Regex
*/

function hasilUjian(students){
  // your code here
  if(Array.isArray(students)){
    if(students.length===0){
        return "TIDAK ADA PESERTA UJIAN"
    }
  }else{
    return "Invalid Input"
  }
  
  var obj={
    jumlahStudent: 0,
    lulus: [],
    gagal: [],
    nilaiTertinggi: 0,
    nilaiAverage: 0
  }

  for(var i=0;i<students.length;i++){
      obj.jumlahStudent+=1

      if(students[i].nilai>=70){
        obj.lulus.push(students[i].nama)
      }else{
        obj.gagal.push(students[i].nama)
      }
      if(obj.nilaiTertinggi<students[i].nilai){
          obj.nilaiTertinggi=students[i].nilai
      }

      obj.nilaiAverage+=students[i].nilai
  }

  obj.nilaiAverage=Math.round((obj.nilaiAverage/students.length))

  return obj
}

console.log(hasilUjian([
    {
        nama: "Arman",
        nilai: 90
    },
    {
        nama: "Budi",
        nilai: 70
    },
    {
        nama: "Caca",
        nilai: 50
    },
    {
        nama: "Dina",
        nilai: 60
    },
    {
        nama: "Erwin",
        nilai: 100
    },
]));

/* OUTPUT:
{
    jumlahStudent: 5,
    lulus: ["Arman", "Budi", "Erwin"],
    gagal: ["Caca", "Dina"]
    nilaiTertinggi: 100,
    nilaiAverage: 74
}
*/

console.log(hasilUjian([
    {
        nama: "Daniel",
        nilai: 23
    },
    {
        nama: "Bima",
        nilai: 69
    },
    {
        nama: "Karim",
        nilai: 97
    },
    {
        nama: "Armedi",
        nilai: 83
    },
    {
        nama: "Dimitri",
        nilai: 45
    },
    {
        nama: "Barry",
        nilai: 77
    },
]));

/* OUTPUT:
{ 
    jumlahStudent: 6,
    lulus: [ 'Karim', 'Armedi', 'Barry' ],
    gagal: [ 'Daniel', 'Bima', 'Dimitri' ],
    nilaiTertinggi: 97,
    nilaiAverage: 66 
}
*/

console.log(hasilUjian([]));
// "TIDAK ADA PESERTA UJIAN"

console.log(hasilUjian("Dito"));
// "Invalid Input"

console.log(hasilUjian(20));
// "Invalid Input"
