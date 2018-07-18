let N = 0;
//let Display: grove.TM1637 = null;
input.onGesture(Gesture.Shake, () => {
    N += 1
    Display.show(N);
    basic.pause(100)
});
Display = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
