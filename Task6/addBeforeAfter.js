function addBeforeAfter() {
    let inputText = document.getElementById("userinput").value;
    if (inputText=="") {
        alert("Please Enter some data!!");
    } else {
        let result = inputText.slice(-3);
        console.log(result);
        document.getElementById("result").innerHTML = "Result is: <b>"+result+ "</b>"+inputText+"<b>"+result+"</b>";
    }
}