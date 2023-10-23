const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const menu = document.querySelector('.nav-menu')
const titles = document.querySelectorAll('.blog-title')

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active')
})

titles.forEach(title => {
  title.addEventListener('click', () => {
    title.parentElement.parentElement.classList.toggle('active')
  })
  
});
