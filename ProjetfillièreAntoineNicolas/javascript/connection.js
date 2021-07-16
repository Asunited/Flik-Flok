let pseudo = document.getElementById('pseudo'),
jeux = document.getElementById('jeux')
jeux.addEventListener('click', () => {
const player = pseudo.value

localStorage.setItem('pseudo', JSON.stringify(player))
localStorage.setItem('score', JSON.stringify({
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0
}))
})