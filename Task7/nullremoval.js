function removeNullValues(){
    var arrayValue=[NaN, 0, 15, false, -22, '',undefined, 47, null];
    var arrayFilter=arrayValue.filter(Boolean);
    console.log(arrayFilter);

    document.getElementById("result").innerHTML="The values are: "+arrayFilter;
}