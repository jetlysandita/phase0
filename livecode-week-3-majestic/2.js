/**
 * =============
 * Word Triangle
 * =============
 * 
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 * 
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input = 'adiel'
// Write your code here
for(var i=0;i<input.length;i++){
    var temp=''
    for(var j=0;j<=i;j++){
        temp+=input[j]
    }
    console.log(temp)
}