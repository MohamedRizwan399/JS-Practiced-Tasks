
const date = new Date();
const n = date.toLocaleDateString("en-US");
const time = date.toLocaleTimeString();
const time1 = date.toISOString();
const monthYear = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];

//for showing different Date & Time patterns
let country = [];
console.log('Date: ' + n);
console.log('Time: ' + time);
console.log('Date&Time: '+time1);
console.log(date.toLocaleDateString("en-US")); //9/20/2022
console.log(date.toUTCString());
// console.log(currentday.getDate());
let getMonth = monthYear[date.getMonth()];
console.log(getMonth + " " + date.getDate() + " " + date.getFullYear());
console.log(date.toLocaleDateString()); //19/9/2022



function showDay() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("day").innerHTML = "Today is "+day;
}

function showTime() {
    const currentday = new Date();
    let hour = currentday.getHours();
    hour.toLocaleString();
    let minutes = currentday.getMinutes();
    let seconds = currentday.getSeconds();
    let meridian = "";
    if (hour >= 12) { meridian = "PM" }
    else { meridian = "AM" }

    if (hour === 0) { hour = 12; }
    document.getElementById("time").innerHTML="Current time is:"+hour+ " " +meridian+" :"+minutes+": "+ seconds;
}
  
function milliSecondsToDate() {
    const time1 = new Date();
    let milliseconds = time1.getMilliseconds();
    let uiShow = "MilliSeconds --- "+milliseconds;
    document.getElementById("showtext").innerHTML = uiShow;

    console.log(uiShow);
    let date1 = new Date(time1);
    document.getElementById("result").innerHTML = date1;
}

function dateToMilliSeconds() {
    let date = new Date();
    let milliseconds = date.getTime();
    console.log(milliseconds);
    document.getElementById("result1").innerHTML = milliseconds;
}

function dateToSeconds() {
    const date = new Date();
    document.getElementById("showtext3").innerHTML = date;
    const seconds = Math.floor(date.getTime() / 1000);  //for used to get the round number
    console.log(seconds); 
    document.getElementById("result3").innerHTML = seconds;
}

function secondsToDate() {
    let seconds = 1663658418;
    document.getElementById("showtext2").innerHTML = seconds;
    const datenew= new Date(seconds * 1000);
    console.log("Seconds to Date Format: " +datenew);
    document.getElementById("result2").innerHTML = datenew;
}