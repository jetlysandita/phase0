//input "hello world!"
//output"!dlrow olleh"
function balikString(str){
    var temp='';
    for(var i=str.length-1;i>=0;i--){
        temp+=str[i]
    }
    return temp
}
console.log(balikString("hello world!"))