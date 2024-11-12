function convertAlpha() {
    let input = document.getElementById("userinput").value;
    if (input === "") {
        alert("Please Type something");
    } else {
        let b = input.toLowerCase();
        let result = b.split("").sort().join("");
        console.log(result);
        document.getElementById("result").innerHTML="Your Result is <b>"+result+ "</b>";
    }
}