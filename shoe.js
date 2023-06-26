var sliderimg = document.querySelector(`.shoe`)
var images = [`image-product-1.jpg`, `image-product-2.jpg`, `image-product-3.jpg`, `image-product-4.jpg`]
var i = 0;

function prev(){
    if(i <= 0) i = images.length
    i--;
    return setImg();
}

function next(){
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg()
}

function setImg(){
    return sliderimg.setAttribute(`src`,`images/`+ images[i]);
}

var ham = document.getElementById("toggle")
var menu = document.querySelector(".list")

ham.addEventListener('click',function(){
    if(menu.style.display === "block"){
        menu.style.display = "none"
        ham.innerHTML = "&#97776"
    }

    else {
            menu.style.display = "block"
                ham.innerHTML = "X"
            }
})


var plus = document.querySelector(".plus")
var minus = document.querySelector(".minus")
var num = document.getElementById("num")
let a = 0;

plus.addEventListener("click",function(){
    a++;
    num.innerText= a;
});

minus.addEventListener("click",function(){
    if(a > 0){
        a--;
        num.innerText=a;
    }
});

var con =document.getElementById("con")
var pick = document.getElementById("pick")


pick.addEventListener("click",function(){
  con.innerText=a;
})

var cart = document.querySelector(".item")
var basket = document.querySelector(".cart")
