radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("SPEED")
    basic.showNumber(receivedNumber)
})
radio.onReceivedValue(function (name, value) {
    basic.showString("DIRECTION")
    basic.clearScreen()
    if (value == 0 || value == 360) {
        basic.showArrow(ArrowNames.North)
    } else if (value > 0 && value < 90) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (value == 90) {
        basic.showArrow(ArrowNames.East)
    } else if (value > 90 || value < 180) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (value == 180) {
        basic.showArrow(ArrowNames.South)
    } else if (value > 180 || value < 270) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (value == 270) {
        basic.showArrow(ArrowNames.West)
    } else if (value > 270 || value < 360) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
radio.setGroup(5)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . # . #
    . # . # .
    `)
