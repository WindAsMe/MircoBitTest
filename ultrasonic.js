basic.forever(() => {
    if (grove.measureInCentimeters(DigitalPin.P0) >= 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(10)
});
