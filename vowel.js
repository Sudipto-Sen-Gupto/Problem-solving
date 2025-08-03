// Check whether a string contains all the vowels a, e, i, o, u

// let sentence="the brown fox jumps over the lazy dog. ";

// for(const letter of sentence){
//     if(letter==="a"|| letter==="e"||letter==="i"||letter==="o"||letter==="u"){
//         console.log("Vowel=",letter);
//     }
// }

let str = "Education is a powerful tool".toLowerCase();
let vowels = "aeiou";
let hasAll = true;

for (let i = 0; i < vowels.length; i++) {
  if (!str.includes(vowels[i])) {
    hasAll = false;
    break;
  }
}

if (hasAll) {
  console.log("The string contains all the vowels.");
} else {
  console.log("The string does NOT contain all the vowels.");
}



function containsAllVowels(str) {
  // Convert string to lowercase to handle uppercase letters
  str = str.toLowerCase();

  // Check for each vowel
  return ['a', 'e', 'i', 'o', 'u'].every(vowel => str.includes(vowel));
}

// Example usage
// let input = "Education is a powerful tool";
// if (containsAllVowels(input)) {
//   console.log("The string contains all the vowels.");
// } else {
//   console.log("The string does NOT contain all the vowels.");
// }
