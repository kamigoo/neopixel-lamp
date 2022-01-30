input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        strip.rotate(1)
        strip.show()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        led2 = randint(0, 9)
        color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
        strip.setPixelColor(led2, color)
        strip.show()
        basic.pause(100)
    }
    strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
})
let color = 0
let led2 = 0
let strip: neopixel.Strip = null
basic.showString("L")
strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
