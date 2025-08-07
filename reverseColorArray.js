console.clear();
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// console.log(colors);
// colors.reverse();
// console.log(colors);

// alternate methode 1
// let rev=[];
// for(const item of colors){
//     rev.unshift(item);
   
// }
//  console.log(rev);

// alternate method two

let rev=[];
for(let i=colors.length-1;i>=0;i--){
    rev.push(colors[i]);
}
console.log(rev);