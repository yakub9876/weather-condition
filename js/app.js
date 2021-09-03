const API_KEY = `2bbdc2c6a049dd3295ec5dbfaf390f51`;
const searchTemparature = () => {
    const cityName = document.getElementById('city-input').value 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

const displayTemparature = temparature => {
    setInnerText('city', temparature.name)
    setInnerText('temp', temparature.main.temp)
    setInnerText('weather', temparature.weather[0].main)
    console.log(temparature)
    const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
    const icon =document.getElementById('icon');
    icon.setAttribute('src', url)
}