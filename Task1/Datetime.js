
const date = new Date();

const n = date.toLocaleDateString("en-US");
const time = date.toLocaleTimeString();
const time1=date.toISOString();
const monthYear = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];

//for showing different Date & Time patterns
var country=[];
console.log('Date: ' + n);
console.log('Time: ' + time);
console.log('Date&Time: '+time1);
console.log(date.toLocaleDateString("en-US")); //9/20/2022
console.log(date.toUTCString());
// console.log(currentday.getFullYear());
// console.log(currentday.getDate());
var mon=monthYear[date.getMonth()];
console.log(mon + " " + date.getDate() + " " + date.getFullYear());
console.log(date.toLocaleDateString()); //19/9/2022



function showDay(){
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = "Today is "+day;
}



function showTime(){
const currentday = new Date();

var hour=currentday.getHours();
hour.toLocaleTimeString;
var minutes=currentday.getMinutes();
var seconds=currentday.getSeconds();
if (hour>=12) {
    var meridean="PM"
}else{
    var meridean="AM"
}

if(hour == 0){
    hour=12;
}
document.getElementById("time").innerHTML="Current time is:"+hour+ " " +meridean+" :"+minutes+": "+ seconds;



}



// var showMilliSeconds = document.getElementById("showText");
// var showResults = document.getElementById("result");

  
function milliSecondsToDate() {
    const time1 = new Date();
    let milliseconds = time1.getMilliseconds();
    var uiShow="MilliSeconds --- "+milliseconds;
    var a=document.getElementById("showtext").innerHTML=uiShow;

    console.log(uiShow);
    var date1 = new Date(time1);
    document.getElementById("result").innerHTML=date1;
    
}

function dateToMilliSeconds(){
    var date=new Date();            //09/15/2020 19:35:00
    var milliseconds=date.getTime();
    console.log(milliseconds);
    document.getElementById("result1").innerHTML=milliseconds;
}

//initialze global for using both function
var sec;



function dateToSeconds(){
    const date = new Date();
    document.getElementById("showtext3").innerHTML=date;
    const seconds = Math.floor(date.getTime() / 1000);  //for used to get the round number
    console.log(seconds); 
    sec=document.getElementById("result3").innerHTML=seconds;
}

function secondsToDate(){
    var a= 1663658418;
    document.getElementById("showtext2").innerHTML=a;
    const datenew= new Date(a * 1000);
    console.log("Seconds to Date Format: "+datenew);
    document.getElementById("result2").innerHTML=datenew;
}