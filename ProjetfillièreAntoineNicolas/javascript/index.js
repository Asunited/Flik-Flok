let hrefC = document.getElementById('hrefConnect')
hrefC.setAttribute('href','./parent-enfant.html')
let cont = document.getElementById('contentConnect')
cont.textContent = 'connexion'
let arr = document.getElementById('arrive')
arr.textContent = 'Bienvenue'
if (localStorage.getItem("Parent").length <[]){
    hrefC.setAttribute('href','./acceuil-jeux.html')
    cont.textContent = 'Jouer'
    arr.textContent = 'Bonjour'
} else {
console.log("Création du joueur")
let initPlayer = []
localStorage.setItem("Parent", JSON.stringify(initPlayer))
}
if (localStorage.getItem("pseudo")){
    if(localStorage.getItem('pseudo').length > 0 ){
        hrefC.setAttribute('href','./acceuil-jeux.html')
        cont.textContent = 'Jouer'
        arr.textContent = 'Bonjour'
        
    }
console.log('Le joueur est present')
}   else {
console.log("Création des joueurs")
localStorage.setItem("pseudo", '')
}