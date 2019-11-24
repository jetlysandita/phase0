/*set nama with 'mikeal'
set nama peran with 'Ksatria'
set hasil with ''
if nama is not '' Then
    if peran is not '' then
        hasil + 'selamat datang didunia proxytia' + nama
        if peran is ksatrian then
            hasil + hasil + 'halo ksatria' + nama + 'kamu dapat enyerang dengan senjatamu!'
        else if peran is tabib then
            hasil + hasil + 'halo tabib' + nama + 'kamu akan membantu temanmu yang terluka'
        else
            hasil + hasil + 'halo penyihir' + nama + 'ciptakan keajaiban yang membantu kemenanganmu'
        end if
    else
        hasil + hasil + Pilih peranmu untuk memulai game!
    end if
else
    set hasil with 'Nama harus disi!'
end if

display hasil
*/
function Proxytia(nama,peran){
    var hasil='';
    if(nama!==''){
        if(peran!==''){
            hasil+=`Selamat datang di Dunia Proxytia, ${nama}\n`
            if(peran==='Ksatria'){
                hasil+=`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`
            }else if(peran==='Tabib'){
                hasil+=`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`
            }else{
                hasil+=`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
            }
        }else{
            hasil=`Halo ${nama}, Pilih peranmu untuk memulai game!`
        }  
    }else{
        hasil='Nama harus disi!'
    }
    return hasil
}
console.log(Proxytia('',''))
console.log(Proxytia('Mikael',''))
console.log(Proxytia('Nina','Ksatria'))
console.log(Proxytia('Danu','Tabib'))
console.log(Proxytia('Zero','Penyihir'))