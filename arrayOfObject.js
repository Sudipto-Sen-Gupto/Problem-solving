// Task 6
// Given an array of student objects, print each student’s name and marks.

let student=[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for(let item of student){
    console.log(item.name.concat(" scored"),item.marks);
}