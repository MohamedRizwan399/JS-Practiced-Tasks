function reverse() {
    let inputText = document.getElementById("userinput").value;
    if (inputText === "") {
        alert("Please Type something to Reverse a String");
    } else {
        let result=inputText.split('').reverse().join('');
        console.log(result);
        document.getElementById("result").innerHTML = "Reversed String : <b>"+result+ "</b>";
    }
}