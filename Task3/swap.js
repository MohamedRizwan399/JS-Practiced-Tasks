function swapText() {
    let input = document.getElementById("userinput").value;
    if (input == "") {
        alert("Please Type something");
    } else {
        const dataLength = input?.length;
        console.log(dataLength);
        let result = input.charAt(dataLength-1) + input.substring(1, dataLength - 1) + input.charAt(0);
        document.getElementById("result").innerHTML = "Your Result is <b>" + result + "</b>";
    }
}