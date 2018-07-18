basic.forever(() => {
    led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P0),
        1023
    );
    basic.pause(100)
});