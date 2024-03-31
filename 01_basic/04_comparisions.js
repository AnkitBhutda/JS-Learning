// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // JS convert string to number before comparision

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); 

// The reason is equality check (==) & compatisions work differently
// Comparisions convert the null to a number , treating it as 0.
// That's why null >= 0 is true & null > 0 is false .

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined > 0);

// Strict check (===)

console.log("2" == 2); // Normal comparision - true
console.log("2" === 2); // Strict comparision -  false

// strict comparisison chcek both value & datatype 
