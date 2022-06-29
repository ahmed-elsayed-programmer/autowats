function changeNavBg () {
  var navbar = document.getElementById("navbar")
  var scrollVal = window.scrollY
  if(scrollVal > 145){
    navbar.classList.add('bg-scroll')
  }else {
    navbar.classList.remove('bg-scroll')
  }
}


window.addEventListener('scroll' , changeNavBg)

let user = document.getElementById('user')

user.addEventListener("click" , () => {
  document.getElementById("review").style.visibility = "visible"
})