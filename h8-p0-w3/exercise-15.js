function groupAnimals(animals) {
    // you can only write your code here!
    var final=[];
    var str='abcdefghijklmnopqrstuvwxyz'
    for(var i=0;i<str.length;i++){
      var arr=[]
      for(var k=0;k<animals.length;k++){
        if(str[i]===animals[k][0]){
          arr.push(animals[k])
        }
      }
      if(arr.length>0){
        final.push(arr)
      }
    }
    return final;
  }
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]