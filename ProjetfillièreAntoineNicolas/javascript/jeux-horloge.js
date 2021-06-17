const horloges = [ 
    {img:"imagehorloge/aiguilles/horloge10h00.png", reponse:"10h00" }
    
]
console.log(horloges)
let horlog = horloges.map(horloge => {
    return `<img  src= ${horloge.img}>`
} ) 


document.getElementById("hor").innerHTML = horlog.join("") 


const horlogess = [ 
    {im:"imagehorloge/numériques/numérique8h43.jpg", reponse:"8h43" }
    
]

let horlo = horlogess.map(horloge4 => {
    return `<img  src= ${horloge4.im}>`
} ) 

document.getElementById("montre").innerHTML = horlo.join("") 

const horlogesss = [ 
    {img:"imagehorloge/numériques/numérique10h00.jpg", reponse:"10h00" }
    
]

let horl = horlogesss.map(horloge1 => {
    return `<img  src= ${horloge1.img}>`
} ) 


document.getElementById("montre1").innerHTML = horl.join("") 

const horloge1s = [ 
    {img:"imagehorloge/numériques/numérique12h30.png", reponse:"12h30" },
      
]
 
let horl1 = horloge1s.map(horloge11 => {
    return `<img  src= ${horloge11.img}>`
} ) 

document.getElementById("montre2").innerHTML = horl1.join("") 