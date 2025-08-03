// Capitalize Every first Letter of each word in a String

let sentence="i am bigger than you.";

sentence=sentence.split(" ");
console.log(sentence);

let str = "capitalize every first letter";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let capitalized = word[0].toUpperCase() + word.slice(1);
  result += capitalized + " ";
}

console.log(result.trim());

