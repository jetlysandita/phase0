function changeVocals (str) {
    //code di sini
    var hasil=''
    for(var i=0;i<str.length;i++){
        if(str[i]==='a'||str[i]==='i'||str[i]==='u'||str[i]==='e'||str[i]==='o'||str[i]==='A'||str[i]==='I'||str[i]==='U'||str[i]==='E'||str[i]==='O'){
            hasil+=String.fromCharCode(str.charCodeAt(i)+1)
        }else{
            hasil+=str[i]
        }
    }
    return hasil
  }
  
  function reverseWord (str) {
    //code di sini
    var hasil=''
    for(var i=str.length-1;i>=0;i--){
        hasil+=str[i]
    }
    return hasil
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var hasil=''
    for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122){
            hasil+=String.fromCharCode(str.charCodeAt(i)-32)
        }else if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
                hasil+=String.fromCharCode(str.charCodeAt(i)+32)
        }else{
            hasil+=str[i]
        }
    }
    return hasil
  }
  
  function removeSpaces (str) {
    //code di sini
    var hasil=''
    for(var i=0;i<str.length;i++){
        if(str[i]!==' '){
            hasil+=str[i]
        }
    }
    return hasil
  }
  
  function passwordGenerator (name) {
    //code di sini
    name=changeVocals(name)
    name=reverseWord(name)
    name=setLowerUpperCase(name)
    name=removeSpaces(name)
    if(name.length<5){
        name='Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return name
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'