/**
 * 
 * ================== 
 *  CHECK COORDINATE
 * ==================
 * 
 *  Function ini akan mencatat koordinat item 'x', 'y' 'z' pada board yang telah di sediakan.
 *  koordinat di dapatkan berdasarkan dia terletak di kolom apa + baris ke berapa.
 *  
 *  Function ini akan mereturn array multidimensi yang mencatat koordinat item tersebut, 
 *  dengan format index ke 0 adalah kumpulan koordinat 'x', index ke 1 adalah kumpulan koordinat 'z',
 *  dan index ke 2 adalah kumpulan koordinat 'y'
 * 
 *  contoh:
 *    1. input: [
 *          [" ", "A", "B", "C"],
 *          ["1", "y", " ", "z"],
 *          ["2", "x", " ", "y"],
 *          ["3", "x", " ", " "]
 *        ] 
 *     maka output yang di harapkan adalah:
 *       output: [["A2", "A3"], ["C3"], ["A1", "C2"]]
 *  
 *  Jika salah satu item tidak di temukan, maka array yang mengisi kumpulan koordinat tersebut,
 *  menjadi array kosong
 *  
 *  contoh:
 *    1. input: [
 *          [" ", "A", "B", "C"],
 *          ["1", " ", "x", " "],
 *          ["2", "z", " ", " "],
 *          ["3", "x", " ", " "],
 *        ]
 *      maka output yang di harapkan adalah:
 *        output: [["B1", "A3"], ["A2"], []]
 *     disini array pada index ke 2 yang digunakan untuk menampung koordinat y kosong,
 *     karena tidak ada item y pada board tersebut
 * 
 *   RULES: 
 *    - Dilarang menggunakan .indexOf() .lastIndexOf() .findIndex() .reduce()
 */

function checkCoordinate (board) {
  // your code here]
  var x=[]
  var y=[]
  var z=[]
  for(var i=1;i<board.length;i++){
    for(var j=1;j<board[i].length;j++){
      if(board[i][j]==='x'){
        x.push(board[0][j]+''+board[i][0])
      }else if(board[i][j]==='y'){
        y.push(board[0][j]+''+board[i][0])
      }
      else if(board[i][j]==='z'){
        z.push(board[0][j]+''+board[i][0])
      }
    }
  }
  return [x,z,y]
}

var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", "z", "x", "y"],
  ["3", "x", " ", " "],
]
console.log(checkCoordinate(array))
// [["B1", "B2", "A3"], ["A2"], ["C2"]]

var array1 = [
  [" ", "A", "B", "C", "D"],
  ["1", "x", " ", "z", "x"],
  ["2", " ", "x", " ", " "],
  ["3", "y", " ", " ", " "],
  ["4", " ", "z", " ", "z"],
]
console.log(checkCoordinate(array1))
// [ [ 'A1', 'D1', 'B2' ], [ 'C1', 'B4', 'D4' ], [ 'A3' ] ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", "x", "y"],
  ["3", "x", " ", " "],
]
console.log(checkCoordinate(array2))
// [ [ 'B1', 'B2', 'A3' ], [], [ 'C2' ] ]