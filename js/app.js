// Navbar toggle

const nav = document.querySelector('.navbar');

const menu = document.querySelector('.menu')


menu.addEventListener('click', () => {
    nav.classList.toggle("active")
})





// Navbar Scroll Behaviour

const header = document.querySelector('.header')

const navLinks = document.querySelectorAll('.navbar a:not(:last-child)')

Array.from(navLinks).map(link => {

    link.addEventListener('click', (e) => {
        e.preventDefault()

        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop - 90;


        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        })

        nav.classList.remove('active')
    })
})
    
  

// Preloader

const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.display = "none"
    })
})




// ScrollTop 

const scrollTop = document.querySelector('.scrollTop')

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})

window.addEventListener('scroll', e => {
    const scrollHeight = window.pageYOffset

    if(scrollHeight > 300) {
        scrollTop.classList.add('active')
    }else{
        scrollTop.classList.remove('active')
    }
});