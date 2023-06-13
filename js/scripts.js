/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

const serviceBtn = document.querySelectorAll('.package_button')

let val = 0

serviceBtn.forEach(btn => {
    btn.addEventListener("click", async (event) => {
        val = event.target.dataset.value
        window.location.href = (`/cart.html?service=${val}`)
    })
});

