
function findrange() {
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var text="The range between "+a+ " and "+b;
    console.log("A is: "+a);
    console.log("B is: "+b);
    var list = [];
    var i;
    a++;
      //for not adding initial number to list
    for (i = a; i < b; i++) {
        if(i!='7'){
            list.push(i);
        }
    }
   
    console.log(list);
    document.getElementById("results").innerHTML= text+" is" +list;

}