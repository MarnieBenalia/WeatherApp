let input = document.querySelector("input"),
    Button = document.querySelector("button"),
    cityEnter = document.querySelector("h1"),
    temps = document.querySelector(".temps"),
    icon01 = document.querySelector("img"),
    date = document.querySelector("h3")
    degre = document.querySelector(".degre")

Button.addEventListener('click',() =>{

    let city = input.value
    let search= (city) => fetch ('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=93470c9d125ec60da741809a54f81589')
    search(city)
    .then((r => r.json ()))
    .then((json)=>{

    if (city == '' ){

        window.alert("attention champ vide");
    }    
        cityEnter.textContent = json.name,
        temps.textContent = json.weather[0].description,
        icon01.src = json.weather[0].icon,
        date.textContent = json.dt
        degre.textContent = json.main.temp_max
    })
})

