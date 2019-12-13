/**
 * =============
 * Rating review
 * =============
 *
 * Buatlah sebuah fungsi yang akan mengkalkulasikan rata rata dari jumlah rating yang diberikan oleh user dan menampikan array yang merupakan bintang yang dapat ditampilkan pada user.
 * Fungsi ini akan menerima sebuah array yang merupakan angka rating yang telah diberikan oleh setiap usernya dengan range dari 1 hingga 5.
 * Output dari fungsi ini adalah sebuah array berisi 5 bintang yang akan dibuat berdasarkan hasil rata-rata rating.
 *
 * Terdapat tiga tipe bintang yang dapat ditampilkan dalam 5 bintang output:
 * - 'fullStar'
 * - 'halfStar'
 * - 'emptyStar'
 *
 * Asumsi:
 *  - index 0 pada array mewakilkan bintang 1 pada output, index 1 pada array mewakilkan bintang 2 pada output dan selanjutnya.
 *
 * Contoh:
 *  Terdapat 3 user yang memberikan rating sebagai berikut: [ 1, 5, 5]
 *  Dari 3 data tersebut maka rata rata rating yang di dapatkan adalah 3.6666
 *  Maka bintang yang akan kita generate adalah 3 `fullStar` , 1 `halfStar` dan 1 `emptyStar`
 *  Proses pembuatan bintang
 *  1 -> Rata rata bintang adalah 3.6 maka 1 lebih kecil dari 3.6 oleh karena itu kita akan menampilkan fullStar pada bintang 1
 *  2 -> Rata rata bintang adalah 3.6 maka 2 lebih kecil dari 3.6 oleh karena itu kita akan menampilkan fullStar pada bintang 2
 *  3 -> Rata rata bintang adalah 3.6 maka 3 lebih kecil dari 3.6 oleh karena itu kita akan menampilkan fullStar pada bintang 3
 *  4 -> Rata rata bintang adalah 3.6 dan 4 lebih besar dari 3.6 tetapi dikarenakan masih ada bilangan koma pada rating kita akan menampilkan halfStar pada bintang 4
 *  5 -> Rata rata bintang adalah 3.6 maka 5 lebih besar dari 3.6 oleh karena itu kita akan menampilkan emptyStar pada bintang 5
 *  Output yang dihasilkan adalah [ 'fullstar', 'fullStar', 'fullStar', 'halfStar', 'emptyStar']
 *
 * Rules:
 *  - Built in function pada array yang boleh digunakan hanya `push`
 *  - Boleh mempergunakan seluruh built in function Number pada javascript
 */

function ratingReview(ratings) {
  // Insert your code here
  var hasil=0
  for(var i=0;i<ratings.length;i++){
    hasil+=ratings[i]
  }
  hasil=hasil/ratings.length
  var arr=[]
  for(var i=1;i<=5;i++){
    if(i<=hasil){
      arr.push('fullstar')
    }else if(i-hasil<1&&i-hasil>0){
      arr.push('halfstar')
    }else{
      arr.push('emptystar')
    }
  }
  return arr
}

console.log(ratingReview([1, 5, 5]));
// [ 'fullstar', 'fullStar', 'fullStar', 'halfStar', 'emptyStar']

console.log(ratingReview([5, 5, 5]));
// [ 'fullstar', 'fullStar', 'fullStar', 'fullStar', 'fullStar']

console.log(ratingReview([1, 2, 3, 4, 5]));
// [ 'fullStar', 'fullStar', 'fullStar', 'emptyStar', 'emptyStar' ]

console.log(ratingReview([3, 3, 3, 4, 5]));
// [ 'fullStar', 'fullStar', 'fullStar', 'halfStar', 'emptyStar' ]