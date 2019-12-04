function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var array=[]
    if(arrPenumpang.length>0){
        for(var i=0;i<arrPenumpang.length;i++)
        {
            var temp={}
            
            temp.penumpang=arrPenumpang[i][0]
            temp.naikdari=arrPenumpang[i][1]
            temp.tujuan=arrPenumpang[i][2]
            for(var j=0;j<rute.length;j++){
                if(temp.naikdari===rute[j]){
                    temp.bayar=j
                }else if(temp.tujuan===rute[j]){
                    temp.bayar=2000*(j-temp.bayar)
                }
            }
            array.push(temp)
        }
    }
    return array
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]