// Capitalize Every first Letter of each word in a String

 let sentence="i am bigger than you.";
 let words=sentence.split(" ");
 let output="";

 for(let i=0;i<words.length;i++){

  let word=words[i];
  let capitalLetter=word[0].toUpperCase()+word.slice(1);
  output=output+capitalLetter+" ";
 }
 console.log(output);
 













