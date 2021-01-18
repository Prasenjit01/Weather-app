
function showTime(){

    var date= new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session ="Am";
    if(h==0){
        h=12;
    }
    if(h>12){
         h= h-12;
            session="Pm";
    }
    
    h= (h<10)? "0"+ h: h;
    m= (m<10)? "0"+ m: m;
    s= (s<10)? "0"+ s: s;
    var time= h +":" +m + ":" +s + "" + session;
    document.getElementById("myclock").innerText = time;
    document.getElementById("myclock").textContent = time;
    setTimeout(showTime , 1000);
    }
    
    showTime();
    

$(document).ready(function() {

    var typed = new Typed('.typed', {
        strings: ['Hello,', 'You can find some weather info'],
        smartBackspace: true,
        loop: true,
        typeSpeed: 100,
    });
    $("#searchInput").on("keyup", function(e) {
        var cityname = e.target.value;
        const APIKey = "425f263559720f69b73a57832858bdea";

        //make a request to the server

        $.ajax({

            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,

        }).done(function(weatherdata) {
            $("#profile").html(`
            <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                            <p class="card-text">The Temperatur at ${cityname} is = ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451;</p>
                            <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this place</a>
                        </div>
                </div>
            </div>
            </div>`);
        });

    })


})