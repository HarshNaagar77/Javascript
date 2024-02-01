
const form = document.querySelector('form')
form.addEventListener('submit' , function(e){
    e.preventDefault()
    const cityName = document.querySelector("#city").value
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25c27d3856mshb1d6ade997a13ebp1e8d2cjsnce8b2004be5d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url ,options)
.then((response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
    document.querySelector("#temphead").innerHTML = `${data.current.temp_c}°C` 
    // document.querySelector("#image").src = `${data.current.condition.icon}` 
    document.querySelector("#date").innerHTML = `${data.current.last_updated}` 
    let daynight = document.querySelector("#daynight")
    if (data.current.is_day == 1){
        daynight.innerHTML="Day"
    }
    if (data.current.is_day == 0){
        daynight.innerHTML="Night"
    }
    document.querySelector("#location").innerHTML = `${data.location.name} , ${data.location.country}`
    document.querySelector(".wind").innerHTML = `${data.current.wind_kph}Km/h`
    document.querySelector(".winddirection").innerHTML = `${data.current.wind_dir}`
    document.querySelector(".humidity").innerHTML = `${data.current.humidity}`
    document.querySelector(".pressure").innerHTML = `${data.current.pressure_mb}mb`
    document.querySelector(".uv").innerHTML = `${data.current.uv}`

    if(data.current.uv == 1 || data.current.uv == 2){
        document.querySelector(".uvlow").innerHTML =   `Low`
    }
    if(data.current.uv >=  3 && data.current.uv <= 5 ){
        document.querySelector(".uvlow").innerHTML =   `Moderate`
    }
    if(data.current.uv >= 6 && data.current.uv <= 8 ){
        document.querySelector(".uvlow").innerHTML =   `High`
    }
    document.querySelector(".min").innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}°C`
    document.querySelector(".max").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}°C`
    document.querySelector(".sunrise").innerHTML = `Sunrise ${data.forecast.forecastday[0].astro.sunrise}`
    document.querySelector(".moonrise").innerHTML = `Moonrise ${data.forecast.forecastday[0].astro.moonrise}`
    document.querySelector(".sunset").innerHTML = `Sunset ${data.forecast.forecastday[0].astro.sunset}`
    document.querySelector(".moonset").innerHTML = `Moonset ${data.forecast.forecastday[0].astro.moonset}`
    document.querySelector(".phase").innerHTML = `${data.forecast.forecastday[0].astro.moon_phase}`
})
.catch( (error) => {
    console.log(error)
})
})

