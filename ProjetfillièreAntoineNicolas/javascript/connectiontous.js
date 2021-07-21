let prenom = document.getElementById('Prenom')
let nom = document.getElementById('Nom')
let mail = document.getElementById('Adresse-mail')
let inscription = document.getElementById('inscri')
let id = document.getElementById('fakeid')
let voix = document.getElementById('vois')


inscription.addEventListener('click', () => {
const parent = {
   Prenom: prenom.value,
    Nom: nom.value,
   eMail: mail.value,
   id: id.value
}
if(localStorage.getItem('fakeID')){
   console.log('bon')
 if(localStorage.getItem('fakeID') == id){
    localStorage.getItem('fakeID')= 'positif'
console.log(localStorage.getItem('fakeID'))
 }else {
   localStorage.getItem('fakeID')= 'negatif'
   console.log(localStorage.getItem('fakeID'))
   voix.textContent = "le compte n'est pas trouvé veuillez recommencer"
 }

}

localStorage.setItem('Parent', JSON.stringify(parent))})
