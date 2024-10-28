let navbar = document.querySelector('.navbar');

document.getElementById('menu-btn').onclick = () =>{
    console.log(Math.random());
    console.log(navbar);
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    console.log("hello...");
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    document.getElementById("cartttt").style.display ="none";
   let chcek= localStorage.getItem("cart");
    if (chcek=="active") {
        localStorage.setItem("cart","unactive");
    document.getElementById("cartttt").style.display ="none";
    } else {
        localStorage.setItem("cart","active");
    document.getElementById("cartttt").style.display ="block";
    }
}



window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

