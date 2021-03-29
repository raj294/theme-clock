const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hourEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(min, 0, 59, 0, 360)}deg)`
    secEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(sec, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${min < 10 ? `0${min}`:
    min} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min)
    + out_min;
}

setTime()

setInterval(setTime, 1000)