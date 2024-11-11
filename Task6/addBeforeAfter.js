function addBeforeAfter(){
    var inputText=document.getElementById("userinput").value;
    if(inputText==""){
        alert("Please Enter some data!!");
    }else{
        var result=inputText.slice(-3);
        console.log(result);
        document.getElementById("result").innerHTML="Result is: "+result+inputText+result;
    }
}