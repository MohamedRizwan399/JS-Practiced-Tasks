myArray=[1,3,5,7,11,13,17,19,23,27,29];
//push and pop
myArray.push(31);
console.log(myArray.length);
console.log(myArray);
console.log("The POP element from the array is: "+myArray.pop());
console.log(myArray);

//shift and unshift
console.log(myArray.shift()); //remove the element from start
console.log("After shift: "+myArray);

console.log(myArray.unshift(0));
console.log("After unshift: "+myArray);

//slice and splice
console.log(myArray.slice(4,7));
console.log("After slice: "+myArray);

console.log(myArray.splice(4,3));    //it overrides the original array //from index 4, it removes 3 items (i.e)(4,3)
console.log("After splice: "+myArray);

//for filter from array
myarrayFilter=['zero','one','two','three','four','five','six','seven','eight','nine'];
console.log("After Filtering array: "+myarrayFilter.filter((value) =>{
    return value.length==4
}
))