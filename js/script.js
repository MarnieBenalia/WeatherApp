let input = document.querySelector("input"),
    Button = document.querySelector("button"),
    cityEnter = document.querySelector("h1"),
    temps = document.querySelector(".temps"),
    icon01 = document.querySelector("img"),
    date = document.querySelector("h3")
    degre = document.querySelector(".degre")

Button.addEventListener('click',() =>{

    let city = input.value
    let search= (city) => fetch ('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&APPID=93470c9d125ec60da741809a54f81589')
    search(city)
    .then((r => r.json ()))
    .then((json)=>{
    console.log(json)
    if (city == '' ){

        window.alert("attention champ vide");
    }    
        cityEnter.textContent = json.city.name,
        temps.textContent = json.list[0].weather[0].description,
        date.textContent = json.list[0].dt_txt.split(" ")[0],
        icon01.src = "http://openweathermap.org/img/wn/"+json.list[0].weather[0].icon+"@2x.png",
        degre.textContent = (json.list[0].main.temp_max.toFixed(0))
    })
})

//----------------------------POUR L'API WEATHER--------------------------------//
    /*
        cityEnter.textContent = json.name,
        temps.textContent = json.weather[0].description,
        icon01.src = "http://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png",
        date.textContent = json.dt,
        degre.textContent = (json.main.temp_max.toFixed(0))
    */

//----------------------------POUR L'API WEATHER--------------------------------//