// let business = 500;
// let govt = 400;
// let army = 700;

// let height = Math.max(business, govt,army);
// console.log(height);

 function findHeight(first, second){

    let theNumber = Math.max(first,second);
    return theNumber;
 }
 const heightNumber = findHeight(10, 0,200);
 console.log("the number is ", heightNumber);