
function findrange() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    const text = "The range between " +a+ " and " +b;
    let list = [];
    let i;
    //for not adding initial number to list
    if (a < b) {
        a++;
        for (i = a; i < b; i++) {
            if (i !== 7) {
                list.push(i);
            }
        }
    } else if (a > b) {
        b++;
        for (i = b; i < a; i++) {
            list.push(i);
        }
    } else if (a == b) {
        alert("To find range, Both values should not be empty/same");
        return;
    }
    console.log(list);
    document.getElementById("results").innerHTML = text+ " is <b>" +list + "</b>";
 
}