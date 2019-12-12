/**
 * ============
 * Quest Logger
 * ============
 * 
 * Instruction
 * -----------
 * questLogger merupakan sebuah function yang mencatat progres dari semua quest
 * yang sedang dikerjakan oleh player.
 * 
 * Function menerima 2 parameter:
 * @quests => list quest yang perlu dikerjakan beserta requirements-nya
 * @actions => tindakan yang dilakukan player untuk memenuhi requirement dari quest yang diberikan
 * 
 * Example
 * -------
 * @quests = [
 *    { name: 'ngerjain PR', requirements: ['buka laptop', 'belajar'] },
 *    { name: 'nonton bioskop', requirements: ['beli tiket', 'jalan', 'makan popcorn'] },
 *    { name: 'menguasai dunia', requirements: ['punya duit banyak', 'jadi orang penting'] },
 * ]
 * @actions = [
 *    'beli tiket', 'buka laptop', 'belajar'
 * ]
 * 
 * Proses:
 * ngerjain PR -> selesai, karena memenuhi 2 requirements: buka laptop dan belajar
 * nonton bioskop -> on progress, karena belum memenuhi semua requirements
 * menguasai dunia -> gagal, karena tidak ada requirement yang terpenuhi
 * 
 * maka @output = [
 *    { quest: 'ngerjain PR', status: 'completed' },
 *    { quest: 'nonton bioskop', status: 'on progress' },
 *    { quest: 'menguasai dunia', status: 'failed'] },
 * ]
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan buit-in function:
 *    map, reduce, filter, includes, indexOf, lastIndexOf, some, every
 * 2. Dilarang menggunakan regex
 */

function questLogger(quests, actions) {
  // Write your code here
  var hasil=[]
  for(var i=0;i<quests.length;i++){
    var flag=0
    var obj={}
    obj.quest=quests[i].name
    obj.status='failed'
    for(var j=0;j<quests[i].requirements.length;j++){
      for(var k=0;k<actions.length;k++){
        if(actions[k]===quests[i].requirements[j]){
          flag+=1
        }
      }
    }
    if(flag===quests[i].requirements.length){
      obj.status='completed'
    }else if(flag!==0){
      obj.status='on progress'
    }
    hasil.push(obj)
  }
  return hasil
}

var quests1 = [
  { name: 'livecode', requirements: ['belajar', 'baca dokumentasi'] },
  { name: 'makan', requirements: ['beli bahan', 'masak'] },
  { name: 'rebahan', requirements: ['tidur', 'main hp'] },
  { name: 'nonton D Academy indosiar', requirements: ['nonton tv', 'pindah channel indosiar'] },
]
var actions1 = [
  'main twitter',
  'belajar',
  'masak',
  'nonton yutub',
  'baca dokumentasi',
  'tidur',
  'beli bahan'
]
console.log(questLogger(quests1, actions1))
// [
//   { quest: 'livecode', status: 'completed' },
//   { quest: 'makan', status: 'completed' },
//   { quest: 'rebahan', status: 'on progress' },
//   { quest: 'nonton D Academy indosiar', status: 'failed' },
// ]

var quests2 = [
  { name: 'beli baju', requirements: ['buka situs e-commerce', 'pilih baju', 'transfer uang'] },
  { name: 'main game', requirements: ['ke playstore', 'cari game', 'install'] },
  { name: 'nikah', requirements: ['punya pacar', 'lamaran', 'bridal shower', 'sewa tenda'] },
  { name: 'lulus hacktiv8', requirements: ['belajar', 'kerjain tugas', 'livecode', 'final project'] },
]
var actions2 = [
  'livecode',
  'kerjain tugas',
  'rebahan',
  'cari game',
  'ke playstore',
  'belajar',
  'install',
  'jajan somay',
  'nonton yutub',
  'buka situs e-commerce',
]
console.log(questLogger(quests2, actions2))
// [
//   { quest: 'beli baju', status: 'on progress' },
//   { quest: 'main game', status: 'completed' },
//   { quest: 'nikah', status: 'failed' },
//   { quest: 'lulus hacktiv8', status: 'on progress' }
// ]

var quests3 = [
  { name: 'berkuda', requirements: ['punya kuda'] },
  { name: 'kaya', requirements: ['cari duit'] },
  { name: 'minum kopi', requirements: ['order go-feed', 'menunggu'] },
  { name: 'menikmati senja', requirements: ['tunggu sore hari', 'foto matahari', 'tambahin quote galau'] },
]
var actions3 = []
console.log(questLogger(quests3, actions3))
// [
//   { quest: 'berkuda', status: 'failed'
//   { quest: 'kaya', status: 'failed'
//   { quest: 'minum kopi', status: 'failed'
//   { quest: 'menikmati senja', status: 'failed'
