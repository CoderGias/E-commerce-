// Show cart
let Cart = document.querySelector('.Cart');
let cart_btn = document.querySelector('.cart-btn');
let close_btn = document.querySelector('.close-btn');

cart_btn.addEventListener('click',() => {
    Cart.classList.toggle("active");
},false)

close_btn.addEventListener('click', () => {
    Cart.classList.remove('active');
})

// Show menu
let SideBar = document.querySelector('.SideBar_menu');
let SideBar_btn = document.querySelector('.menu_bar');
let menu_close = document.querySelector(".btn-close");

SideBar_btn.addEventListener('click', () => {
    SideBar.classList.toggle('active');
})

menu_close.addEventListener('click', () => {
    SideBar.classList.remove('active')
})

//nav link dropdown
let link_btn = document.querySelector('#nav-link');
let link = document.querySelector('.dropdown-menu');
link_btn.addEventListener('click', () => {
    link.classList.toggle('active');
})

