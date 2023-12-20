var startbtn= document.getElementById("start").addEventListener("click",start); 
var stopbt= document.getElementById("stop").addEventListener("click",stoptimer);
var stpwatch= document.getElementById("timer");
var resetbt= document.getElementById("reset").addEventListener("click",resettimer);
var clearbt= document.getElementById("clear")
var lapButton=document.getElementById("lap").addEventListener("click",lap);
var viewButton=document.getElementById("view");
var lapTiming= document.getElementById("laptime").addEventListener("click",laptiming);
var clearLap=document.getElementById("clearLaps").addEventListener("click",clearLap);
viewButton.addEventListener("click",viewTime);
clearbt.addEventListener("click",clearTime);
var view;
var lt;
var interval;
var hours=0, minutes=0,seconds=0, milliseconds=0, lapCounter=0, displaySeconds, displayMinutes, displayHours, displayMs,interval=null,lapArray=[];
function starttimer(){
    milliseconds++;
    if(milliseconds == 100){
        milliseconds=0;
        seconds++;
    }
    if(seconds == 60)
    {
        seconds=0;
        minutes++;
    }
    if(minutes == 60)
    {
        minutes=0;
        hours++;
    }
    if(hours<10){
        displayHours="0"+hours.toString();
    }
    else{
        displayHours=hours;
    }
    if(minutes<10){
        displayMinutes="0"+minutes.toString();
    }
    else{
        displayMinutes=minutes;
    }
    if(seconds<10){
        displaySeconds="0"+seconds.toString();
    }
    else{
        displaySeconds=seconds;
    }
    if(milliseconds<10){
        displayMs="0"+milliseconds.toString();
    }
    else{
        displayMs=milliseconds;
    }
    stpwatch.textContent= displayHours+":"+displayMinutes+":"+displaySeconds+":"+displayMs;
}
function stoptimer(){
    clearInterval(interval);
}
function resettimer(){
    view=stpwatch.textContent;
    viewButton.style.visibility="visible";
    clearbt.style.visibility="visible";
    stpwatch.textContent="00:00:00:00";
    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
}
function start(){
        interval = window.setInterval(starttimer,10);
        
}
function viewTime(){
    alert(view);
    if(view === null){
        alert("No times are stored here");
    }
}
function clearTime(){
    if (view!=null) {
        view=null;    
    }
    else
    {
        alert("There are no times stored here");
    }
}
function lap(){
    lapCounter++;
    lt= stpwatch.textContent;
    document.getElementById("lapct").innerHTML="Number of Laps:"+lapCounter;
    lapArray.push(lt);
}
function laptiming(){
    alert(lapArray);
}
function clearLap(){
    lapArray=[];
    lapCounter=0;
    document.getElementById("lapct").innerHTML="Number of Laps:"+lapCounter;
}