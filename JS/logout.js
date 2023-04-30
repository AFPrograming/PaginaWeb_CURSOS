
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = '../html/pagina_principal.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = '../html/index.html'
})

