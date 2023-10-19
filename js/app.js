document.addEventListener(“scroll”, lazyload);


window.addEventListener(“resize”, lazyload);


window.addEventListener(“orientationChange”, lazyload);


const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const menu = document.querySelector('.nav-menu')
const titles = document.querySelectorAll('.blog-title')

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active')
})

titles.forEach(title => {
  title.addEventListener('click', () => {
    console.log(title.parentElement.parentElement)
    title.parentElement.parentElement.classList.toggle('active')
  })
  
});
