const btn = document.querySelector('button');
const details = document.querySelector(".details");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const tempC = document.querySelector(".temp");
const iconHolder = document.querySelector('.icon');

// API key
const apiKey = "6f4002d4bb0fe7b0a40a6ee0224602b3";

const input = document.querySelector('#query');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const query = input.value;
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

    fetch(apiurl)
        .then((res) => res.json())
        .then((data) => {
            const temp = data.main.temp;
            const place = data.name;
            const icon = data.weather[0].icon;
            const speed = data.wind.speed;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            tempC.textContent = `${temp}°C`;
            name.textContent = `${place}`;
             desc.textContent = `${speed}`;
            iconHolder.src = iconUrl;
            details.style.visibility = "visible";
        })
        .catch((err) => console.error("Enter valid address!"));
});