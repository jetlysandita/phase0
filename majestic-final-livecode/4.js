/**
 * 
 * ==================
 * Razia Ganjil Genap
 * ==================
 * 
 * Function akan memfilter kendaraan mana saja yang boleh melewati jalan raya, 
 * sesuai tanggal yang di tetapkan, 
 * tanggal ganjil hanya boleh di lewati oleh kendaraan berplat ganjil,
 * tanggal genap hanya boleh di lewati oleh kendaraan berplat genap,
 * 
 * Peraturan di atas di terapkan untuk seluruh kendaraan, kecuali motor
 * 
 * contoh: 
 *  cars: [["B 339 AAP", "mobil"], ["B 2 OO", "mobil"], ["B 1212 AAD", "motor"]]
 *  tanggal: 23-12-2019
 *  maka output yang di harpkan adalah: [["B 339 AAP", "mobil"], ["B 1212 AAD", "motor"]]
 * 
 * Rules: 
 *  1. Tidak boleh menggunakan .split .filter .reduce .map .includes 
 *  
 */
function split(str,flag){
  var arr=[]
  var temp=''
  for(var i=0;i<=str.length;i++){
    if(str[i]===flag||i===str.length){
      arr.push(temp)
      temp=''
    }else{
      temp+=str[i]
    }
  }
  return arr
}
function raziaGanjilGenap (plate, date) {
  //your code here
  var date=split(date,'-')
  var arr=[]
  for(var i=0;i<plate.length;i++){
    if(plate[i][1]==='motor'){
      arr.push(plate[i])
    }else{
      var new_plat=split(plate[i][0],' ')
      if(date[0]%2===new_plat[1]%2){
        arr.push(plate[i])
      }
    }
  }
  return arr
}

var cars = [
  ["B 2283 UUP", "mobil"],
  ["B 1990 QQP", "motor"], 
  ["B 23 RI", "motor"], 
  ["B 46 US", "mobil"]
]

console.log(raziaGanjilGenap(cars, "14-10-2019"))
// [ [ 'B 1990 QQP', 'motor' ],
//   [ 'B 23 RI', 'motor' ],
//   [ 'B 46 US', 'mobil' ] ]

var cars2 = [
  ["B 7 UUP", "mobil"],
  ["B 2833 TYU", "mobil"], 
  ["B 332 GLF", "motor"], 
  ["B 332 IIQ", "mobil"]
]

console.log(raziaGanjilGenap(cars2, "21-03-2019"))
// [ [ 'B 7 UUP', 'mobil' ],
//   [ 'B 2833 TYU', 'mobil' ],
//   [ 'B 332 GLF', 'motor' ] ]