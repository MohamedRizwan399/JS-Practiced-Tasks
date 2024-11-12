let originalArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function removeNullValues() {
    arrayFilter = originalArr.filter(Boolean);
    console.log(arrayFilter);
    document.getElementById("result").innerHTML = "The values are: "+arrayFilter;
}

window.onload = function () {
    document.getElementById("originalArr").innerHTML += originalArr;
};