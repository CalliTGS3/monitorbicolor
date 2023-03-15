input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    T = Math.trunc(randint(0, 30))
    F = Math.trunc(randint(35, 90))
    C = Math.trunc(randint(500, 3000))
    G = Math.trunc(randint(20, 800))
})
radio.onReceivedValue(function (name, value) {
    if (name == "T") {
        T = value
    } else if (name == "F") {
        F = value
    } else if (name == "C") {
        C = value
    } else if (name == "G") {
        G = value
    }
})
let G = 0
let C = 0
let F = 0
let T = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.pause(100)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
OLED12864_I2C.init(60)
radio.setGroup(1)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "T:" + T,
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "F:" + F,
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "C:" + C,
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "G:" + G,
    1
    )
})
