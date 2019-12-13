/**
 * ==================
 * Validate My Horse!
 * ==================
 *
 * ! Jika sudah paham dengan permainan catur, bisa langsung ke line 15
 *
 * Prologue
 * --------
 * Catur dimainkan diatas papan grid berukuran 8x8 dengan range koordinat 1-8 dan A-H.
 * Dalam permainan catur, kuda memiliki cara berjalan yang unik dengan membentuk huruf L
 * atau 2 langkah maju (ke 4 arah) + 1 langkah ke samping
 * contoh: https://www.expert-chess-strategies.com/images/knight-moves.gif
 *
 * Instruction
 * -----------
 * Buat sebuah function yang mengecek apakah langkah yang dibuat oleh kuda catur tersebut
 * valid atau tidak.
 * Function menerima 2 input berupa string, yaitu @lokasi dan @tujuan
 * Function mengembalikan nilai:
 * 1. true, jika @lokasi dan @tujuan merupakan langkah kuda yang valid
 * 2. false, jika @tujuan bukan langkah yang valid dari @lokasi
 * 3. invalid, jika koordinat @lokasi atau @tujuan berada di luar range koordinat papan
 *
 * Restrictions
 * ------------
 * 1. Input dianggap valid jika memiliki koordinat A1 sampai H8,
 *    Maka input seperti I6 atau F9 akan me-return Invalid
 *
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in funciton:
 *    map, filter, reduce, split, slice, splice, substring, substr
 */

function kuda(lokasi, tujuan) {
  // Write your code here
  if(lokasi[1]>8||tujuan[1]>8||lokasi.charCodeAt(0)>'H'.charCodeAt(0)||tujuan.charCodeAt(0)>'H'.charCodeAt(0)){
    return 'Invalid'
  }

  if(Math.abs(lokasi.charCodeAt(0)-tujuan.charCodeAt(0))===2&&Math.abs(lokasi[1]-tujuan[1])===1){
    return true
  }else if(Math.abs(lokasi.charCodeAt(0)-tujuan.charCodeAt(0))===1&&Math.abs(lokasi[1]-tujuan[1])===2){
    return true
  }
  else{
    return false
  }
}

console.log(kuda('F6', 'D5')) // true
console.log(kuda('D3', 'E2')) // false
console.log(kuda('H4', 'I4')) // Invalid
console.log(kuda('B8', 'C9')) // Invalid
console.log(kuda('D5', 'F4')) // true
console.log(kuda('A6', 'A1')) // false
console.log(kuda('J1', 'A1')) // Invalid
console.log(kuda('D5', 'E7')) // true
console.log(kuda('A4', 'C7')) // false