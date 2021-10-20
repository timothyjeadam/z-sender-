basic.showString("Z sender")
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
