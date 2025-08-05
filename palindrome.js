let sentence1="malylam";


let sentence2=sentence1.split("").reverse().join("").toLowerCase();
if(sentence1===sentence2){
    console.log(" It is a Palindrome word=",sentence2);
}

else
console.log("It is not a palidrome number.",sentence2);