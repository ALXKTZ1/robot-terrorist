input.onButtonPressed(Button.A, function () {
    music.setTempo(160)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # . # .
        `)
    music.playTone(147, music.beat(BeatFraction.Eighth))
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # . # .
        `)
    music.playTone(147, music.beat(BeatFraction.Eighth))
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # . # .
        `)
    index = 1
})
input.onButtonPressed(Button.AB, function () {
    index = 0
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Surprised)
    Tinybit.Music_Car(Tinybit.enMusic.baddy)
    basic.pause(3000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.playTone(131, music.beat(BeatFraction.Double))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoDown, function () {
    index = 0
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    music.stopAllSounds()
})
let index = 0
Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
index = 0
basic.showIcon(IconNames.Happy)
basic.pause(5000)
basic.showLeds(`
    . . . . .
    # # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(500)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (index == 1) {
    	
    }
})
