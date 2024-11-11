var numOne, numTwo, res, temp;

//for addition operation
function doOperationAdd()
{
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  console.log(numOne+numTwo);
  if(numOne && numTwo)
  {
    // temp = document.getElementById("res1");
    // temp.style.display = "block";

    res = numOne + numTwo;
    document.getElementById("add").innerHTML = "Result is: "+res;

  }else{
    alert("Enter values to do add");
  }
}
//for subtraction operation
function doOperationSub() {
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  if(numOne && numTwo)
  {

    res = numOne - numTwo;
    document.getElementById("sub").innerHTML = "Result is: "+res;
}else{
  alert("Enter values to do subtract");
}
}
//for multiply operation
function doOperationMul() {
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  if(numOne && numTwo)
  {
  
     res = numOne * numTwo;
    document.getElementById("mul").innerHTML = "Result is: "+res;
  
}else{
  alert("Enter values to do multiply");
}
}
//for division operation
function doOperationDiv() {
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  if(numOne && numTwo)
  {
   
    res = numOne / numTwo;
    document.getElementById("div").innerHTML = "Result is: "+res;
}else{
  alert("Enter values to do division");
}
}