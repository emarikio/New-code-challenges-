let speedLimit = "70km/s";
let speedCar = 60;
if (speedCar > speedLimit){
    console.log('Ok');
}else if (speedCar > speedLimit) {
    let points = math.floor((speedCar - speedLimit) / 5);
    console.log('Points: ' + points);
    if (points >= 12) {
        console.log('License suspended');
    }
}