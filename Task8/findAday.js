function getResults(){
    for(var currentYear=2014;currentYear<=2050;currentYear++){
        var date=new Date(currentYear,0,1);
        if (date.getDay()==0) {
            console.log("1st January is besing a Sunday "+currentYear);
            document.getElementById("result").innerHTML="1st January is besing a Sunday "+currentYear.toString();

        }
    }

}