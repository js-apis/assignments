$("document").ready(function(){
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=ef3e268cbe387a39c451c064de7ff0c1",
      success: function(data) {
        console.log(data);
        handleData(data)
      }
    })
    
    function handleData(data){
    
        $('.weather').html(data.weather[0].main)
      $(".temperature").html("the current temperature is " + data.main.temp + "°")
      $(".wind").html("the current wind speed is " + data.wind.speed + " mph")
        
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".icon").html("<img src='" + iconUrl  + "'>");

    }
    
})