function calculateDays() {
    let today = new Date();
    let diwaliYear = today.getFullYear();

    if (today.getMonth() === 8 && today.getDate() > 24) //month starts from 0
    {
        diwaliYear = diwaliYear+1;
    }

    //fot next diwali
    let diwaliDate = new Date(diwaliYear, 9, 31);
    let dayMilliseconds = 1000*60*60*24;
    let remainingDays = Math.ceil(diwaliDate.getTime()-today.getTime()) / (dayMilliseconds);
    let roundoff = Math.round(remainingDays);

    console.log(roundoff);
    document.getElementById("result").innerHTML = "<b>" +roundoff+"</b> days to Diwali"
}