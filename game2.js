// let Display: grove.TM1637 = null;
let gestureCreate = "";
let num = 0;
let N = 0;
let time = 0;
let gestureInput = "";
grove.onGesture(GroveGesture.Right, () => {
    gestureInput = "R"
});
grove.onGesture(GroveGesture.Left, () => {
    gestureInput = "L"
});
grove.onGesture(GroveGesture.Up, () => {
    gestureInput = "U"
});
grove.onGesture(GroveGesture.Down, () => {
    gestureInput = "D"
});
time = 0;
gestureInput = "";
gestureCreate = "";
num = 1;
Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.showString("Ready?");
basic.forever(() => {
    time = input.runningTime();
    if (time < 180 * 1000) {
        num = Math.random(3);
        if (num == 0) {
            gestureCreate = "U";
            basic.showString("U")
        }
        if (num == 1) {
            gestureCreate = "D";
            basic.showString("D")
        }
        if (num == 2) {
            gestureCreate = "L";
            basic.showString("L")
        }
        if (num == 3) {
            gestureCreate = "R";
            basic.showString("R")
        }
        basic.pause(3000)
        if (gestureCreate == gestureInput) {
            N += 1;
            Display.show(N)
        }
    }
    if (grove.measureInCentimeters(DigitalPin.P0) > 100) {
        music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once);
        N = 0;
        Display.show(N)
    }
});