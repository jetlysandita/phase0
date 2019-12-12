/*
=================
TUKAR KOLOM BARIS
=================
[INSTRUCTION]
  Function tukarKolomBaris menerima sebuah input berupa array multidimensi, 
  yang tiap elemen didalamnya memiliki panjang yang sama.
  Output dari function ini adalah array multidimensi yang sudah ditukar tiap elemen barisnya dengan tiap elemen kolomnya. 
[EXAMPLE]
  input: 
    [
      [4, 6, 7, 10],
      [9, 2, 1, 3],
      [1, 1, 2, 2],
      [4, 4, 4, 4],
      [5, 6, 7, 8]
    ]
  output:
    [ 
      [ 4, 9, 1, 4, 5 ],
      [ 6, 2, 1, 4, 6 ],
      [ 7, 1, 2, 4, 7 ],
      [ 10, 3, 2, 4, 8 ] 
    ]
[RULES]
- Hanya boleh menggunakan fungsi array .push dan .length
*/
function tukarKolomBaris(arr) {
  // your code here
  if(arr===''||arr.length===0){
    return 'Invalid input parameter'
  }
  var hasil=[]
    for(var i = 0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
        if(hasil[j]==null){
          hasil[j]=[arr[i][j]]
        }else{
          hasil[j].push(arr[i][j])
        }
      }
    }
  return hasil
}
console.log(tukarKolomBaris([
  [4, 6, 7, 10],
  [9, 2, 1, 3],
  [1, 1, 2, 2],
  [4, 4, 4, 4],
  [5, 6, 7, 8]
]));
/* output : 
[ 
  [ 4, 9, 1, 4, 5 ],
  [ 6, 2, 1, 4, 6 ],
  [ 7, 1, 2, 4, 7 ],
  [ 10, 3, 2, 4, 8 ] 
]
*/
console.log(tukarKolomBaris([
  [5, 3, 1, 1],
  [2, 1, 4, 1],
  [0, 2, 4, 1]
]));
/* output :
  [ 
    [ 5, 2, 0 ], 
    [ 3, 1, 2 ], 
    [ 1, 4, 4 ], 
    [ 1, 1, 1 ] 
  ]
*/
console.log(tukarKolomBaris([]));
// Invalid input parameter
console.log(tukarKolomBaris(''));
// Invalid input parameter
