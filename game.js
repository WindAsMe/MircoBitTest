let ans = "";
let mark = false;
let gesture = "";
input.onGesture(Gesture.ScreenUp, () => {
    if (mark) {
        radio.sendString("p");
        gesture = "p";
    }
});
input.onGesture(Gesture.ScreenDown, () => {
    if (mark) {
        radio.sendString("st");
        gesture = "st";
    }
});
input.onGesture(Gesture.Shake, () => {
    if (mark) {
        radio.sendString("sc");
        gesture = "sc";
    }
});
radio.onDataPacketReceived(({ receivedString }) => {
    basic.showString(receivedString);
    ans = receivedString;
    if (gesture == "p" && ans == "p") {
        basic.showIcon(IconNames.Asleep);
        radio.sendString("e")
    }
    if (gesture == "p" && ans == "sc") {
        basic.showIcon(IconNames.Sad);
        radio.sendString("w");
    }
    if (gesture == "p" && ans == "st") {
        basic.showIcon(IconNames.Happy);
        radio.sendString("d")
    }
    if (gesture == "sc" && ans == "p") {
        basic.showIcon(IconNames.Happy);
        radio.sendString("d")
    }
    if (gesture == "sc" && ans == "sc") {
        basic.showIcon(IconNames.Asleep);
        radio.sendString("e")
    }
    if (gesture == "sc" && ans == "st") {
        basic.showIcon(IconNames.Sad);
        radio.sendString("w")
    }
    if (gesture == "st" && ans == "p") {
        basic.showIcon(IconNames.Sad);
        radio.sendString("w")
    }
    if (gesture == "st" && ans == "sc") {
        basic.showIcon(IconNames.Happy);
        radio.sendString("d")
    }
    if (gesture == "st" && ans == "st") {
        basic.showIcon(IconNames.Asleep);
        radio.sendString("e")
    }
});
input.onButtonPressed(Button.A, () => {
    basic.showString("...");
    radio.sendString("Ac");
    mark = true
});
input.onButtonPressed(Button.B, () => {
    basic.showString("...");
    radio.sendString("Re");
    mark = false
});
gesture = "p";
ans = "p";
radio.setGroup(10);
radio.setTransmitPower(7);
radio.setTransmitSerialNumber(true);
