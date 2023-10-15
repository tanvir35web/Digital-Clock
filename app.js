let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let ampm = document.getElementById("ampm");

setInterval(() => {
    let currentTime = new Date();
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'];

    const monthName = currentTime.toLocaleString('default', {month: 'long'});

    ampm.innerHTML = currentTime.getHours >= 12 ? "AM" : "PM" 

    hr.innerHTML = ((currentTime.getHours() % 12) < 10 ? "0" : "") + (currentTime.getHours() % 12);
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    date.innerHTML = currentTime.getDate();
    // month.innerHTML = monthNames[currentTime.getMonth()];
    month.innerHTML = monthName;
    year.innerHTML = currentTime.getFullYear();

},1000)

