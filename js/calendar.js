const isLeapYear = (year) => {
    return (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
    );
};
const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector('.calendar');
const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
};

const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
        31,
        getFebDays(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    let currentDate = new Date();

    month_picker.innerHTML = month_names[month];

    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month);


    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {

        let day = document.createElement('a');

        if (i >= first_day.getDay()) {
            day.innerHTML = i - first_day.getDay() + 1;

            if (i - first_day.getDay() + 1 === currentDate.getDate() &&
                year === currentDate.getFullYear() &&
                month === currentDate.getMonth()
            ) {
                day.classList.add('current-date');
            }
        }
        day.setAttribute("data-name", "days")
        calendar_days.appendChild(day);
    }
};

let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;

    month_list.append(month);
    month.onclick = () => {
        currentMonth.value = index;
        generateCalendar(currentMonth.value, currentYear.value);
        month_list.classList.replace('show', 'hide');
    };
});

(function () {
    month_list.classList.add('hideonce');
})();
document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');

const currshowDate = new Date();
const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};
const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
).format(currshowDate);



// Choosing a time slot on calendar
const title = document.querySelector('.modal-title')
const myModal = new bootstrap.Modal(document.getElementById('mymodal'))
const scheduleTime = document.querySelector('#schedule-btn')
const timeSelect = document.querySelector('#time')
const timeForm = document.querySelector('#schedule-time')
const formMonth = document.querySelector('#month')
const formDay = document.querySelector('#day')
const formName = document.querySelector('#name')
const formEmail = document.querySelector('#email')
const formService = document.querySelector('#service')
const formRedirect = document.querySelector('#redirect')
let selectedDay = ""
let selectedMonth = ""
let name = ""
let email = ""
let service = ""
let redirect = ""

//show modal with month and day upon clicking
document.addEventListener("click", e => {
    if (e.target.matches("a") && e.target.innerHTML) {
        selectedMonth = e.target.parentElement.parentElement.previousElementSibling.children[0].innerHTML
        selectedDay = e.target.innerHTML
        title.innerHTML = `${selectedMonth} ${selectedDay}`
        myModal.show();
    }
})

//identify correct redirect link
function findRedirect(service) {
    if (service == 1) {
        return 'https://buy.stripe.com/aEU4gO15Ve295UY8ww'
    } else if (service == 2) {
        return 'https://buy.stripe.com/bIY00y7uj5vD4QU6op'
    } else if (service == 3) {
        return 'https://buy.stripe.com/00gdRo5mbcY55UY3ce'
    }
}

//only accept form and hide modal if time slot selected
document.addEventListener("click", e => {
    if (e.target.matches('.schedule') && timeSelect.value > 0) {
        console.log(timeSelect.value);
        //set month and date values on form
        // formMonth.value = selectedMonth
        formMonth.value = selectedMonth
        formDay.value = selectedDay
        //grab name, email, and service from URL and add to form
        let url = document.location.href
        if (url.split('=').length == 4) {
            name = url.split('=')[1]
            name = name.split('&')[0]
            email = url.split('=')[2]
            email = email.split('&')[0]
            service = url.split('=')[3]
            redirect = findRedirect(service)
            formRedirect.value = redirect
            formService.value = service
            formName.value = name
            formEmail.value = email
        }
        else {
            formRedirect.value = 'none'
            formService.value = 'none'
            formName.value = 'none'
            formEmail.value = 'none'
        }
        myModal.hide();
        timeForm.submit()
    }
})

//reset modal form if close modal
document.addEventListener("click", e => {
    if (e.target.matches('.modal-close')) {
        timeForm.reset()
    }
})

