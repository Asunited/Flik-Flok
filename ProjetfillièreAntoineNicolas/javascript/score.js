
let score = localStorage.getItem('score')
score = JSON.parse(score)
total1.innerHTML=`${score.total1}`
total2.innerHTML=`${score.total2}`
total3.innerHTML=`${score.total3}`
total4.innerHTML=`${score.total4}`

let cal = document.getElementById('calcul')
let sT = parseInt(score.total1) + parseInt(score.total2) + parseInt(score.total3) + parseInt(score.total4)
cal.innerHTML = `${sT}`
