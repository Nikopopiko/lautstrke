basic.forever(function () {
    if (input.soundLevel() < 20) {
        basic.setLedColors(0x000000, 0x000000, 0x00ff00)
    } else if (input.soundLevel() > 19 && input.soundLevel() < 99) {
        basic.setLedColors(0x000000, 0xffff00, 0x000000)
    } else if (input.soundLevel() > 100) {
        basic.setLedColors(0xff0000, 0x000000, 0x000000)
    }
    basic.pause(100)
})
