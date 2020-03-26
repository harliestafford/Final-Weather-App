//VARIABLES
$(".submitBtn").click(function() {
searchTerm = $("#cityName")
      .val()
      .trim();
    console.log(searchTerm);


    // $('.location').html(seachTerm);
    $('.humidity').css("visibility", "visible")
    $('.windspeed').css("visibility", "visible")
    $('.searchBar').css("visibility", "hidden")
    $('.newCityBTN').css("visibility", "visible")


    //API
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&units=imperial&APPID=6b123ca2526e3becc9c4e7113fa187e8", function(data){
        // console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var forecast = data.weather[0].main;
        console.log(icon);
        
        var tempLow = Math.floor(data.main.temp_min);
        var tempHigh = Math.floor(data.main.temp_max);
        var humidity = data.main.humidity;
        var windspeed = data.wind.speed;

        $('.icon').attr('src', icon);
        $('.temperature-low').append(tempLow + "&#8457;");
        $('.temperature-feels').append(temp + "&#8457;");
        $('.forecast').append(forecast); 
        $('.temperature-high').append(tempHigh + "&#8457;");
        $('.humidityNum').append(humidity) + "g/m3";
        $('.windNum').append(windspeed) + "mph";

    });

    $(".newCityBTN").click(function() {
        $(document).ready(function(){
            location.reload(true);
        });
    });

});