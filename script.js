var city = "london"; 




$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=381645180f017e358ec5ee583ed7a70e",function(data){





    console.log(data);
    var location = data.name;
    console.log(data.name);
    var weatherDescription = data.weather[0].description;
    var temperature = data.main.temp;
    var icon = "http://api.openweathermap.org/img/w/" +data.weather[0].icon +".png";
    console.log(icon)
    $('.icon').attr('src',icon);
    var temperature = Math.floor(temperature- 273.15);
    $('.temp').append(temperature);
    $('.location').append(location);

    console.log(data.getDate)
    console.log(data.dt);
    console.log(data.timezone);
    var time = new Date(data.dt*1000 +(data.timezone*1000)); 
    console.log(time)
    $('.time').append(time);

    console.log(weatherDescription)
    $('.weatherDescription').append(weatherDescription)

    console.log(typeof(time));

    let time_stringified = JSON.stringify(time);
    console.log(time_stringified.slice(12,14))
    //"2022-09-30T16:56:21.000Z"
    console.log(time_stringified);
    let time_hour = time_stringified.slice(12,14);


    if (time_hour < 12) {
        $('.greet').append('Good Morning ☀️')
    } else if (time_hour < 18) {
        $('.greet').append('Good Evening 🌄')
    } else {
        $('.greet').append('Good Afternoon 🌃')
    }




}
);




