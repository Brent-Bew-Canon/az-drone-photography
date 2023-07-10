const cartSelect = document.querySelector('#photos')
const checkout = document.querySelector('#checkout')
const submit = document.querySelector('#submit')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let message = document.querySelector('#message')

window.onload = () => {
    if (window.location.search) {
        let val = window.location.search
        val = val.split('=')[1]
        cartSelect.value = val
    }
};


submit.addEventListener("click", (e) => {
    if (cartSelect.value == 0) {
        document.querySelector('#selectError').setAttribute('style', 'display: block;')
        e.preventDefault();
    } else {
        document.querySelector('#selectError').setAttribute('style', 'display: none;')

        if (name.value == "" || email.value == "" || phone.value == "") {

        }
        else {
            name = name.value
            email = email.value
            phone = phone.value
            message = message.value
            Email.send({
                SecureToken: "a65e13c0-37c8-41e0-9a6d-51f215fdcf8e",
                To: 'babuchanan1@gmail.com',
                From: "mrbuchmas@gmail.com",
                Subject: "New Cart Form",
                Body: `New cart form from ${name}. Email: ${email} and phone: ${phone} \n message: ${message}`,
            })
            this.trigger(e);
        }


        // switch (cartSelect.value) {
        //     case '1':
        //         window.location.href = 'https://buy.stripe.com/aEU4gO15Ve295UY8ww';
        //         break;
        //     case '2':
        //         window.location.href = 'https://buy.stripe.com/bIY00y7uj5vD4QU6op';
        //         break;
        //     case '3':
        //         window.location.href = 'https://buy.stripe.com/00gdRo5mbcY55UY3ce';
        //         break;
        //     default:
        //         console.log(`Error`);
        // }


    }
})
