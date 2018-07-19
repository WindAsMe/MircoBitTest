//let Rainbow: neopixel.Strip = null
Rainbow = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB);
basic.forever(() => {
    Rainbow.showRainbow(1, pins.map(
        pins.analogReadPin(AnalogPin.P0),
        0,
        1023,
        0,
        360
    ))
});
