// Count how many times a string has the letter a or A

let sentence="Antara is my fiance.";
let count=0;

for(const letter of sentence){
    if(letter==="a"||letter==="A")
    {
        count++;
    }
}
console.log(count);