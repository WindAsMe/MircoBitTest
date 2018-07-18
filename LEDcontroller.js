input.onButtonPressed(Button.A, () => {
    pins.digitalWritePin(DigitalPin.P0, 1)
});
input.onButtonPressed(Button.B, () => {
    pins.digitalWritePin(DigitalPin.P0, 0)
});
