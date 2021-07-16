var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

function chrono(){
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours()-1
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }
    if(msec < 10){
        msec = "00" +msec
    }
    else if(msec < 100){
        msec = "0" +msec
    }
    document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
    timerID = setTimeout("chrono()", 10)
}
function Login(){
    
    document.chronoForm.reset.onclick = chronoReset
    start = new Date()
    chrono()
}
function scores(){ 
    console.log(diff.getSeconds())
    if (diff.getSeconds() <= 2){
    score = '50'
    console.log(score)
    } 
    if(diff.getSeconds() > 2 && diff.getSeconds() <= 9){
    score = '25'
    console.log(score)
    }
    if(diff.getSeconds() > 9){
    score = '10'
    console.log(score)
}}
function chronoContinue(){
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.reset.onclick = chronoReset
    start = new Date()-diff
    start = new Date(start)
    chrono()
}
function chronoReset(){
    document.getElementById("chronotime").value = "0:00:00:000"
    start = new Date()
}
function chronoStopReset(){
    document.getElementById("chronotime").value = "0:00:00:000"
    document.chronoForm.startstop.onclick = Login
}
function chronoStop(){
    document.chronoForm.startstop.value = "start!"
    document.chronoForm.startstop.onclick = chronoContinue
    document.chronoForm.reset.onclick = chronoStopReset
    clearTimeout(timerID)
}
window.addEventListener("load", Login);
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function togglImage(){
    var modal = document.getElementById("myModa");
    var btn = document.getElementById("myBt");
    var span = document.getElementsByClassName("clos")[0];
    modal.style.display = 'block';               
    let resultss = 8.43
    if (resultss == 10) {
    result = 'positive';
    console.log(result)
    } else {
    result = 'NOT positive';
    console.log(result)
    }
    return resultss;

    console.log(resultss)
}
function toggeImage(){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = 'block';
    span.onclick = function() {modal.style.display = "none";}
   
chronoStop()
scores()

}
function toggleImage(){
    var modal = document.getElementById("myModa");
    var btn = document.getElementById("myBt");
    var span = document.getElementsByClassName("clos")[0];
    modal.style.display = 'block';
    let results = 12.30;
    if (results == 10) {
    result = 'positive';
    console.log(result)
    } else {
    result = 'NOT positive';
    console.log(result)
    }
    return results;

    console.log(results)
}
    resultat = document.getElementById('myBtn'),
    resultat.addEventListener('click', () => {
        const scor = score.value
        let getScore = localStorage.getItem('score')
        getScore = JSON.parse(getScore)
        console.log(getScore)
        let scoreTotal = {
            total1: getScore.total1,
            total2:  getScore.total2,
            total3: score,
            total4: getScore.total4
        }
        console.log(scoreTotal)
        localStorage.setItem('score', JSON.stringify(scoreTotal))
    })