var city = "london"; 

//use your own api key
//change city variable to view different locations

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=YOUR_API_KEY",function(data){
    
    var location = data.name;

    var weatherDescription = data.weather[0].description;
    var temperature = data.main.temp;
    var icon = "http://api.openweathermap.org/img/w/" +data.weather[0].icon +".png";
    var time = new Date(data.dt*1000 +(data.timezone*1000)); 
    var temperature = Math.floor(temperature- 273.15);
    $('.icon').attr('src',icon);
    $('.temp').append(temperature);
    $('.location').append(location);
    $('.time').append(time);
    $('.weatherDescription').append(weatherDescription)


    let time_stringified = JSON.stringify(time);
    let time_hour = time_stringified.slice(12,14);


    if (time_hour < 12) {
        $('.greet').append('Good Morning ☀️')
    } else if (time_hour < 18) {
        $('.greet').append('Good Evening 🌄')
    } else {
        $('.greet').append('Good Afternoon 🌃')
    }
    
    //console.log(data);
    //console.log(time)
    //console.log(data.getDate)
    //console.log(data.dt);
    //console.log(data.timezone);
    //console.log(weatherDescription);
    //console.log(data.name);
    //"2022-09-30T16:56:21.000Z"
    //console.log(time_stringified.slice(12,14))
    //console.log(time_stringified);


}
);




