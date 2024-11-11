function swapText(){
    var a=document.getElementById("userinput").value;
    if(a==""){
        alert("Please Type something");
    }else{
        // console.log(a);
    const dataLength=a.length;
    console.log(dataLength);

     var result=a.charAt(dataLength-1)+a.substring(1,dataLength-1)+a.charAt(0);

     document.getElementById("result").innerHTML="Your Result is "+result;
    }
    
}