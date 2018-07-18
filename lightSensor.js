basic.forever(() => {
    led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P0),
        255
    );
    basic.pause(10)
});