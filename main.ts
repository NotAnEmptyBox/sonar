let distance = 0
basic.forever(function () {
    distance = Math.ceil(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    for (let index = 0; index <= 25; index++) {
        if (distance > index) {
            led.plot(index - 5 * Math.idiv(index, 5), Math.idiv(index, 5))
        }
    }
})
