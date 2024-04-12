// Function that calculates speed

function calculateSpeed(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log("OK");
    }else {
        demeritPoints = Math.floor(speed - speedLimit / 5);
        console.log("Points:", demeritPoints);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
