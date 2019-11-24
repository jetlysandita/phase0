/*
    set hari with 21
    set bulan with 1
    set tahun with 2012
    case bulan of
        condition bulan is 1
            set bulan with 'januari'
        condition bulan is 2
            set bulan with 'febuari'
        condition bulan is 3
            set bulan with 'maret'
        condition bulan is 4
            set bulan with 'april'
        condition bulan is 5
            set bulan with 'mei'
        condition bulan is 6
            set bulan with 'juni'
        condition bulan is 7
            set bulan with 'juli'
        condition bulan is 8
            set bulan with 'agustus'
        condition bulan is 9
            set bulan with 'september'
        condition bulan is 10
            set bulan with 'oktober'
        condition bulan is 11
            set bulan with 'november'
        condition bulan is 12
            set bulan with 'desember'
        default 
            set bulan with 'tidak dikenali'
display hari + bulan + tahun

*/
function switchcase(hari,bulan,tahun) {
    switch (bulan) {
        case 1:
                bulan='Januari'
            break;
        case 2:
                bulan='Febuari'
            break;
        case 3:
                bulan='Maret'
            break;
        case 4:
                bulan='April'
            break;
        case 5:
                bulan='Mei'
            break;
        case 6:
                bulan='Juni'
            break;
        case 7:
                bulan='Juli'
            break;
        case 8:
                bulan='Agustus'
            break;
        case 9:
                bulan='September'
            break;
        case 10:
                bulan=' Oktober '
            break;
        case 11:
                bulan='November'
            break;
        case 12:
                bulan='Desember'
            break;
        default:
            break;
    }
    return hari+' '+bulan+' '+tahun
}
console.log(switchcase(21,1,1990))