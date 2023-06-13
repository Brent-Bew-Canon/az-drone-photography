const cartSelect = document.querySelector('#photos')

window.onload = (event) => {
    if (!window.location.search) {

    } else {
        let val = window.location.search
        val = val.split('=')[1]
        cartSelect.value = val
    }

};