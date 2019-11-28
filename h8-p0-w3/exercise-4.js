var input=["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 
function dataHandling2(arr){
    var dates=[];
    var bulan='';
    var temp=arr.splice(1,4,'Roman Alamsyah Elsharawy',"Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(arr)
    dates=arr[3].split('/')
    switch (dates[1]) {
        case '01':
            bulan='Januari'
            break;
        case '02':
            bulan='Febuari'
            break;
        case '03':
            bulan='Maret'
            break;
        case '04':
            bulan='April'
            break;
        case '05':
            bulan='Mei'
            break;
        case '06':
            bulan='Juni'
            break;
        case '07':
            bulan='Juli'
            break;
        case '08':
            bulan='Agustus'
            break;
        case '09':
            bulan='September'
            break;
        case '10':
            bulan=' Oktober '
            break;
        case '11':
            bulan='November'
            break;
        case '12':
            bulan='Desember'
            break;
        default:
            break;
    }
    console.log(bulan)
    console.log([dates[2],dates[1],dates[0]])
    console.log(dates[0]+'-'+dates[1]+'-'+dates[2])
    return temp[0];
}
console.log(dataHandling2(input))