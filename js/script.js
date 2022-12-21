let input = document.querySelector("input"),
    Button = document.querySelector("button"),
    cityEnter = document.querySelector("h1");

Button.addEventListener('click',() =>{

    let city = input.value
    let search= (city) => fetch ('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=93470c9d125ec60da741809a54f81589')
    search(city)
    .then((r => r.json ()))
    .then((json)=>{
    cityEnter.textContent = json.name

    })
})

/*description: "broken clouds"
​​​
icon: "04d"
​​​
id: 803
​​​
main: "Clouds"*/

/*fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=93470c9d125ec60da741809a54f81589')
    .then(r =>r.json())
    .then(json => console.log(json))*/
