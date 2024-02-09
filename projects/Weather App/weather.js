
const load = document.querySelector(".load")
const form = document.querySelector('form')
const loct = document.querySelector(".location")
form.addEventListener('submit' , function(e){
    e.preventDefault()
    load.style.display = "block"
    document.querySelector(".flex2").style.display = "none"
    loct.style.display = "none"
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
    // console.log(data)
    setTimeout(() => {
 
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
    load.style.display = "none"
    document.querySelector(".flex2").style.display = "flex"
    loct.style.display = 'block'
}, 500);


document.querySelector(".tomorrow").onclick = function(){
    document.querySelector(".today2").style.borderBottom = "none";
    document.querySelector(".tomorrow").style.borderBottom = "1px solid";
    document.querySelector(".tomorrow").style.opacity = "1";
    document.querySelector(".today2").style.opacity = "0.7";

    // Update temperature and date for tomorrow
    document.querySelector("#temphead").innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}°C`;
    document.querySelector("#date").innerHTML = `${data.forecast.forecastday[1].date}`;
    let daynight = document.querySelector("#daynight")
    if (data.current.is_day == 1){
        daynight.innerHTML="Day"
    }
    if (data.current.is_day == 0){
        daynight.innerHTML="Night"
    }
    document.querySelector("#location").innerHTML = `${data.location.name} , ${data.location.country}`
    document.querySelector(".wind").innerHTML = `${data.forecast.forecastday[1].day.maxwind_kph}Km/h`
    document.querySelector(".winddirection").innerHTML = `${data.current.wind_dir}`
    document.querySelector(".humidity").innerHTML = `${data.forecast.forecastday[1].day.avghumidity}`

    document.querySelector(".uv").innerHTML = `${data.forecast.forecastday[1].day.uv}`

    if(data.forecast.forecastday[1].day.uv == 1 || data.forecast.forecastday[1].day.uv == 2){
        document.querySelector(".uvlow").innerHTML =   `Low`
    }
    if(data.forecast.forecastday[1].day.uv >=  3 && data.forecast.forecastday[1].day.uv <= 5 ){
        document.querySelector(".uvlow").innerHTML =   `Moderate`
    }
    if(data.forecast.forecastday[1].day.uv >= 6 && data.forecast.forecastday[1].day.uv <= 8 ){
        document.querySelector(".uvlow").innerHTML =   `High`
    }
    document.querySelector(".min").innerHTML = `${data.forecast.forecastday[1].day.mintemp_c}°C`
    document.querySelector(".max").innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}°C`
    document.querySelector(".sunrise").innerHTML = `Sunrise ${data.forecast.forecastday[1].astro.sunrise}`
    document.querySelector(".moonrise").innerHTML = `Moonrise ${data.forecast.forecastday[1].astro.moonrise}`
    document.querySelector(".sunset").innerHTML = `Sunset ${data.forecast.forecastday[1].astro.sunset}`
    document.querySelector(".moonset").innerHTML = `Moonset ${data.forecast.forecastday[1].astro.moonset}`
    document.querySelector(".phase").innerHTML = `${data.forecast.forecastday[1].astro.moon_phase}`
}


    
document.querySelector(".today2").onclick = function(){
    document.querySelector(".tomorrow").style.borderBottom = "none";
    document.querySelector(".today2").style.borderBottom = "1px solid";
    document.querySelector(".today2").style.opacity = "1";
    document.querySelector(".tomorrow").style.opacity = "0.7";

    // Update temperature and date for today
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
}


})
.catch( (error) => {
    console.log(error)
    load.style.display = "block"
})
       
})

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const body = document.body;
    const flex = document.querySelector(".flex2")
    const btntext = document.querySelector(".btntext")
    const todColor = document.querySelector(".today2")
    const tomColor = document.querySelector(".tomorrow")
    let isDarkTheme = false;
    const darkbox = document.querySelectorAll(".box")

    themeToggleBtn.addEventListener('click', function () {
        isDarkTheme = !isDarkTheme;

        if (isDarkTheme) {
            // Switch to dark theme
            body.classList.add('dark-theme');
            flex.classList.add("dark-theme");
            btntext.innerHTML = "Light Mode"
            darkbox.forEach( (e) => {
                e.classList.add("dark-theme")
            })
            todColor.classList.add("dark-theme")
            tomColor.classList.add("dark-theme")
        } else {
            // Switch to light theme
            body.classList.remove('dark-theme');
            flex.classList.remove("dark-theme")
            btntext.innerHTML = "Dark Mode"
            darkbox.forEach( (e) => {
                e.classList.remove("dark-theme")
            })
            todColor.classList.remove("dark-theme")
            tomColor.classList.remove("dark-theme")
        }

        // function date(){
        //     }
        // date()
    });
});
