function reverse() {
    var inputText=document.getElementById("userinput").value;
    if(inputText==""){
        alert("Please Type something to Reverse a String");
    }else{
        let result=inputText.split('').reverse().join('');
        // for(let  char of result){
        //     result=char+result;
        // }
        console.log(result);
        document.getElementById("result").innerHTML="Reversed String :"+result;
    }
}