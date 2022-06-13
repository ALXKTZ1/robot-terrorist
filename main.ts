basic.showLeds(`
    . # # # .
    # # # # #
    # . # . #
    # # # # #
    . # . # .
    `)
basic.pause(50)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(50)
basic.showLeds(`
    . # # # .
    # # # # #
    # . # . #
    # # # # #
    . # . # .
    `)
basic.pause(50)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(50)
basic.showLeds(`
    . # # # .
    # # # # #
    # . # . #
    # # # # #
    . # . # .
    `)
basic.pause(50)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(50)
basic.showLeds(`
    . # # # .
    # # # # #
    # . # . #
    # # # # #
    . # . # .
    `)
basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 100) {
        music.ringTone(131)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        basic.showLeds(`
            # # # # .
            . . . # .
            . . # # .
            # . . # .
            . # # . .
            `)
        basic.showLeds(`
            # # # # .
            . . . # .
            . # # . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # . # .
        `)
})
