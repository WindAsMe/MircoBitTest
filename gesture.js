grove.onGesture(GroveGesture.Right, () => {
    basic.showString("Right")
});
grove.onGesture(GroveGesture.Left, () => {
    basic.showString("Left")
});
grove.onGesture(GroveGesture.Clockwise, () => {
    basic.showIcon(IconNames.Heart)
});
