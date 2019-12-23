/*
   Uppercase sentence
   
   Diberikan sebuah paragraph, buatlah huruf pertama dari paragraph dan huruf pertama setelah tanda baca titik menjadi huruf besar.
   
   BUATLAH JUGA PSEUDOCODE -nya

   Rules: 
    - Dilarang menggunakan regex, .reduce .indexOf .lastIndexOf .split
    - Wajib menggunakan pseudocode
*/
/*
  read paragraph
  set flag with true
  set hasil with ''
  for i with 0 to paragraph's length 
    if flag equal true and char code paragraph index i between 33 and 126  than
      set hasil with hasil plus uppercase paragraph index i
      set flag with false
    else
      set hasil with hasil plus paragraph index i
      if paragraph index i equal '.' than
        set flag with true
      end if
    end if
  end for
  display hasil
*/
function properUppercase(paragraph) {
  //your code here
  var flag=true
  var hasil=''
  for(var i=0;i<paragraph.length;i++){
    if(flag&&(paragraph.charCodeAt(i)>=33&&paragraph.charCodeAt(i)<=126)){
      hasil+=paragraph[i].toUpperCase()
      flag=false
    }else{
      hasil+=paragraph[i]
      if(paragraph[i]==='.'){
        flag=true
      }
    }
  }
  return hasil
}

//TEST CASE
var paragraph1 = `we know it’s important that DevTools load quickly. 
we have automation in place to help ensure we keep driving this time down. in 71 we got some help from the JavaScript team, 
when their improvements to caching scripts for startup not only made Firefox start faster, 
but DevTools too. one Console test got an astonishing 40% improvement while times across every panel were boosted by 8-15%!`

console.log(properUppercase(paragraph1));
console.log("======================")
// 
// `We know it’s important that DevTools load quickly. 
// We have automation in place to help ensure we keep driving this time down. In 71 we got some help from the JavaScript team, 
// when their improvements to caching scripts for startup not only made Firefox start faster, 
// but DevTools too. One Console test got an astonishing 40% improvement while times across every panel were boosted by 8-15%!`
// 

var paragraph2 = `git push updates remote refs using local refs, while sending objects necessary to complete the given refs.
you can make interesting things happen to a repository every time you push into it, by setting up hooks there. see documentation for git-receive-pack(1).
when the command line does not specify where to push with the <repository> argument, branch"*"remote configuration for the current branch is consulted to determine where to push. if the configuration is missing, it defaults to origin.`

console.log(properUppercase(paragraph2))
// `Git push updates remote refs using local refs, while sending objects necessary to complete the given refs.
// You can make interesting things happen to a repository every time you push into it, by setting up hooks there. See documentation for git-receive-pack(1).
// When the command line does not specify where to push with the <repository> argument, branch"*"remote configuration for the current branch is consulted to determine where to push. If the configuration is missing, it defaults to origin.`