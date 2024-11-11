function convertAlpha(){
    var a=document.getElementById("userinput").value;
    if(a==""){
        alert("Please Type something");
    }else{
        var b=a.toLowerCase();
        var result=b.split("").sort().join("");
        console.log(result);

     document.getElementById("result").innerHTML="Your Result is "+result;
    }
}