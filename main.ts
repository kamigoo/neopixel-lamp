let A_released = false
let strip = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && A_released) {
        A_released = false
        led.toggle(0, 0)
    }
    A_released = !(input.buttonIsPressed(Button.A))
})
