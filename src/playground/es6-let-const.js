// variable definitions in es5 & es6

var newVar = "Praveen";
var newVar = "Praveen";
console.log("newVar:", newVar);

let nameLet = "praveen";
//let nameLet = "praveen"; // will throw duplicate declaration error
nameLet = "babu";
console.log("nameLet:", nameLet);

const nameConst = "praveen";
//const nameConst = "praveen1"; // will throw duplicate declaration error
//nameConst = "praveen1"; // will throw invalid assignment
console.log("nameconst:", nameConst);

var fullName = "Praveen Babu";

if (fullName) {
  /**
   *  var firstName -> is in function scope even though its inside the if block
   *                    Right now this is in global function
   */
  //var firstName = fullName.split(" ")[0];

  /**
   * const firstName -> will be in block scope
   * let firstName -> will be in block scope
   */
  //const firstName = fullName.split(" ")[0];
  let firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
