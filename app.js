console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// for (i = 1; i <=100; i++){
//     if (i % 2 != 0) {
//         console.log(i)
//     }}

// as while loop below
// let i =1 ;
// while (i < 100){
//     if (i % 2 != 0)
//     {console.log(i)}

//     i++;}

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n")

// for (i = 1; i <=100; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, 'FIZZBUZZ')
//     } else {
//         if (i % 3 == 0)
//         {console.log(i, "FIZZ")}

//         if (i % 5 == 0)
//         {console.log(i, "BUZZ")}
//     }}

//  EX 3 -------------------------------------
// let i = 1

// while (i <=100){
//     let output = "";

//     if (i % 3 == 0){
//         output == "FIZZ";
//     }

//     if (i % 5 == 0){
//         output == "BUZZ"
//     }

//     console.log(`${i} ${output}`);

//     i++;
// }

// EX 4 ---------------------------------------

// let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// for (let i = 1; i <= n; i++){
//     if (i == value){
//     console.log(`Found ${value}`)
//     break;}
//     if (i == n){
//     console.log(`Didn't find value bwtn 1-${n}`)}
// }

// EX5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= n; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(`${i} "FIZZBUZZ"`);
  } else {
    if (i % fizzDivisor == 0) {
      console.log(`${i} "FIZZ"`);
    }
    if (i % buzzDivisor == 0){
        console.log(`$q{i} "BUZZ"`);
    }
  }
}
