function calc () {
let dist_km = document.getElementById("dist_km").value;
let  time_day= document.getElementById("period_of_day").value;
let train_price = 0;
let bus_price = 0;
let taxi_price = 0
    // taxi price computation
if (dist_km >= 100) {
        if (time_day === 'day' || time_day === 'night') { 
            train_rate=0.06;
            train_price = dist_km * train_rate;
        }
}
else if (dist_km >= 20) {
    if (time_day === 'day' || time_day === 'night') { 
    // bus price computation
        bus_rate=0.09;
        bus_price= dist_km * bus_rate;
    }
}
else {
       if (time_day === 'day') {
            taxi_rate = 0.79;
            taxi_price = dist_km * taxi_rate;
        } 
        else if (time_day === 'night') {
           taxi_rate = 0.90;
           taxi_price = dist_km * taxi_rate
        } else {
            taxi_rate = 0.70;    
            taxi_price = dist_km * taxi_rate;
        } 
    }
//results displayed
document.getElementById("train").innerHTML = ("TRAIN PRICE :", train_price.toFixed(2));
document.getElementById("bus").innerHTML = bus_price.toFixed(2);
document.getElementById("taxi").innerHTML = taxi_price.toFixed(2);
}