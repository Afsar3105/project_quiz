const setting_menu = document.querySelector(".settings-menu");
const nav_icon = document.querySelector(".nav-user-icon online");

nav_icon.onclick =()=>{
    setting_menu.classList.remove("inactive");
    nav_icon.classList.add("inactive");
}