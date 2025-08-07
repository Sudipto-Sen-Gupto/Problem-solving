
console.clear();
const numbers = [12, 98, 5, 41, 23, 78, 46];

const newNumbers=[];

for(const even of numbers){
    if(even%2===0){
        newNumbers.push(even);
    }
}
console.log(newNumbers);
newNumbers.sort(function(a,b){ return a-b});
console.log("Sorted=",newNumbers);

// for(const even of numbers){
//     if(even%2==0){
//         console.log(even,"Is a odd number");
//     }

// }