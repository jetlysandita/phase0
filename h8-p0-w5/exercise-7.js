function meleeRangedGrouping (str) {
    //your code here
    var array=[]
    var rule=["Ranged","Melee"]
    var arrGroup =group(str,',')
    for(var j=0;j<rule.length;j++){
        var temp=[]
        for(var i=0;i<arrGroup.length;i++){
            var solo=group(arrGroup[i],'-')
            if(solo[1]===rule[j]){
                temp.push(solo[0])
            }
        }
        array.push(temp)
    }
    return array
  }

function group(str,seperator){
    var array=[]
    var temp=''
    for(var i=0;i<=str.length;i++){
        if(str[i]===seperator||i===str.length){
            array.push(temp)
            temp=''
        }else{
            temp+=str[i]
        }
    }
    return array
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []