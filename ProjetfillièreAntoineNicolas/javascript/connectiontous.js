let prenom = document.getElementById('Prenom')
let nom = document.getElementById('Nom')
let mail = document.getElementById('Adresse-mail')
let inscription = document.getElementById('inscri')
console.log(inscription)

inscription.addEventListener('click', () => {
const parent = {
   Prenom: prenom.value,
    Nom: nom.value,
   eMail: mail.value,
}
localStorage.setItem('Parent', JSON.stringify(parent))})