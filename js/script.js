let input = document.querySelector("input")
    Button = document.querySelector("button")
    cityEnter = document.querySelector("h1")
//-----------------------------------------------//
    date01 = document.getElementById("d01")
    temps01 = document.getElementById("t01")
    icon01 = document.getElementById("icon01")
    deg01  = document.getElementById("deg01")
//-----------------------------------------------//
    date02 = document.getElementById("d02")
    temps02 = document.getElementById("t02")
    icon02 = document.getElementById("icon02")
    deg02  = document.getElementById("deg02")
//-----------------------------------------------//
    date03 = document.getElementById("d03")
    temps03 = document.getElementById("t03")
    icon03 = document.getElementById("icon03")
    deg03  = document.getElementById("deg03")
//-----------------------------------------------//
    date04 = document.getElementById("d04")
    temps04 = document.getElementById("t04")
    icon04 = document.getElementById("icon04")
    deg04  = document.getElementById("deg04")
//-----------------------------------------------//
    date05 = document.getElementById("d05"),
    temps05 = document.getElementById("t05"),
    icon05 = document.getElementById("icon05")
    deg05  = document.getElementById("deg05")
//------------------------------------------------------------------------------------------//

function date (month){

    const MONTH = [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ];

    let affmonth = new Date (month).getMonth();
    return MONTH [affmonth]

}

//--------------------------------------------------------------//  

Button.addEventListener('click',() =>{
    let cards =document.getElementsByClassName("cards")[0]

//--------------------------------------------------------------//   
 
    let city = input.value
    let search= (city) => fetch ('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&APPID=93470c9d125ec60da741809a54f81589')
    search(city)
    .then((r => r.json ()))
    .then((json)=>{
     console.log(json)
    if (city == '' ){

        window.alert("attention champ vide");

    }    

    else{

        cards.style.display="flex";
    }
        cityEnter.textContent = json.city.name

//--01------------------------------------------------------------//
        temps01.textContent = json.list[0].weather[0].description
        date01.textContent = json.list[0].dt_txt.split(" ")[0]

        let affmonth01 = date (date01.textContent)
        //console.log(affmonth01)
        document.getElementById('d01').innerHTML = date01.textContent + affmonth01

        icon01.src = "http://openweathermap.org/img/wn/"+json.list[0].weather[0].icon+"@2x.png"
        deg01.textContent = (json.list[0].main.temp_max.toFixed(0)+"c°")
//--02------------------------------------------------------------//
        temps02.textContent = json.list[10].weather[0].description
        date02.textContent = json.list[10].dt_txt.split(" ")[0]
        icon02.src = "http://openweathermap.org/img/wn/"+json.list[10].weather[0].icon+"@2x.png"
        deg02.textContent = (json.list[10].main.temp_max.toFixed(0)+"c°")
//--03------------------------------------------------------------//
        temps03.textContent = json.list[15].weather[0].description,
        date03.textContent = json.list[15].dt_txt.split(" ")[0]

        icon03.src = "http://openweathermap.org/img/wn/"+json.list[15].weather[0].icon+"@2x.png"
        deg03.textContent = (json.list[15].main.temp_max.toFixed(0)+"c°")
//--04------------------------------------------------------------//
        temps04.textContent = json.list[20].weather[0].description
        date04.textContent = json.list[20].dt_txt.split(" ")[0]

        icon04.src = "http://openweathermap.org/img/wn/"+json.list[20].weather[0].icon+"@2x.png"
        deg04.textContent = (json.list[20].main.temp_max.toFixed(0)+"c°")
//--05------------------------------------------------------------//
        temps05.textContent = json.list[30].weather[0].description
        date05.textContent = json.list[30].dt_txt.split(" ")[0]

        icon05.src = "http://openweathermap.org/img/wn/"+json.list[30].weather[0].icon+"@2x.png"
        deg05.textContent = (json.list[30].main.temp_max.toFixed(0)+"c°")

    })
})
