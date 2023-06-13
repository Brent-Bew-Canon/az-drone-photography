const cartSelect = document.querySelector('#photos')
const checkout = document.querySelector('#checkout')

window.onload = () => {
    if (window.location.search) {
        let val = window.location.search
        val = val.split('=')[1]
        cartSelect.value = val
    }
};

checkout.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cartSelect.value == 0) {
        document.querySelector('#selectError').setAttribute('style', 'display: block;')
    } else {
        document.querySelector('#selectError').setAttribute('style', 'display: none;')

        switch (cartSelect.value) {
            case '1':
                window.location.href = 'https://buy.stripe.com/aEU4gO15Ve295UY8ww';
                break;
            case '2':
                window.location.href = 'https://buy.stripe.com/bIY00y7uj5vD4QU6op';
                break;
            case '3':
                window.location.href = 'https://buy.stripe.com/00gdRo5mbcY55UY3ce';
                break;
            default:
                console.log(`Error`);
        }


    }
})