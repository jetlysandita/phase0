/*
===============
Boot Pair Count
===============
[INSTRUCTION]
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan boot-boot yang warnanya harus dipasangkan agar dapat dijual.
Bila array yang berisi angka-angka masing-masing mewakili suatu warna, tentukanlah ada berapa banyak pasang boot yang siap dijual oleh Jack!
[EXAMPLE]
Bila input array adalah [12, 14, 12, 12, 18, 14, 14, 12] maka:
hasilnya adalah 3, karena ada dua pasang 12 dan satu pasang 14.
- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"
[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/
function bootPairCount(arr) {
  //your code here
  if(arr.length===0){
    return 'Tidak ada sepatu boot mohon cek kembali input anda'
  }
  var obj={}
  var hasil=0
  for(var i=0;i<arr.length;i++){
    if(obj[arr[i]]==null){
      obj[arr[i]]=1
    }else{
      obj[arr[i]]+=1
    }
    if(obj[arr[i]]%2===0){
      hasil+=1
    }
  }
  if(hasil===0){
    return 'Tidak ada pasangan sepatu boot ditemukan'
  }else{
    return hasil
  }
}
//TEST CASES
console.log(bootPairCount([10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
console.log(bootPairCount([15, 23, 23, 30, 30, 10, 15, 10])) // 4
console.log(bootPairCount([1, 2, 3, 4, 5])) // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount([])) // Tidak ada sepatu boot mohon cek kembali input anda