namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const startingHole = SpriteKind.create()
    export const dieHole = SpriteKind.create()
    export const Challenge_1 = SpriteKind.create()
    export const Challenge_2 = SpriteKind.create()
    export const exitDoor = SpriteKind.create()
    export const Challenge_3 = SpriteKind.create()
    export const exitDoorFinal = SpriteKind.create()
    export const startingHopeTree = SpriteKind.create()
    export const powerUp = SpriteKind.create()
    export const killer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.exitDoor, function (sprite4, otherSprite3) {
    if (info.score() == 100) {
        game.splash("Mathematics Master!", "Your Score is " + ("" + info.score()))
        game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
        game.splash("Level Bonus", "Mathematics Master!, Are you ready for final fight?")
        startGameLvl2()
    } else {
        game.splash("Better Luck Next Time!", "Your Score is " + ("" + info.score()))
        game.gameOver(false)
        game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuActive == true) {
        Menu_Button.setPosition(38, 66)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
    if (menuStartGame == true) {
        menuActive = false
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        if (myHero.isHittingTile(CollisionDirection.Bottom)) {
            myHero.vy = -250
        }
    }
    if (menuAnswerNow == true) {
        if (theCorrectAnswer == true) {
            info.setScore(100)
            game.splash("Correct! You Win")
            menuAnswerNow = false
        } else {
            info.setScore(0)
            game.splash("Incorrect! Continue your journey!")
            menuAnswerNow = false
        }
    }
})
sprites.onOverlap(SpriteKind.Challenge_1, SpriteKind.Player, function (sprite6, otherSprite6) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(200)
    if (IsRespawning == false) {
        IsRespawning = true
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        info.changeLifeBy(-1)
        if (info.life() > 0) {
            RespawnChallenge()
        } else {
            music.stopAllSounds()
            game.setGameOverEffect(false, effects.blizzard)
            game.splash("Game Over")
            music.play(music.createSong(hex`002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a`), music.PlaybackMode.InBackground)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    menuAnswerNow = true
    pause(2000)
    CorrectImposter = randint(1, 2)
    if (myHero.overlapsWith(Imposter_1)) {
        if (CorrectImposter == 1) {
            Imposter_1.sayText("Press UP if answer is correct else press DOWN:" + MathAnswerText_Correct, 5000, false)
            theCorrectAnswer = true
        } else {
            Imposter_1.sayText("Press UP if answer is correct else press DOWN:" + MathAnswerText_Wrong, 5000, false)
            theCorrectAnswer = false
        }
    }
    if (myHero.overlapsWith(Imposter_2)) {
        if (CorrectImposter == 1) {
            Imposter_2.sayText("Press UP if answer is correct else press DOWN:" + MathAnswerText_Correct, 5000, false)
            theCorrectAnswer = true
        } else {
            Imposter_2.sayText("Press UP if answer is correct else press DOWN:" + MathAnswerText_Wrong, 5000, false)
            theCorrectAnswer = false
        }
    }
})
sprites.onOverlap(SpriteKind.Challenge_2, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(200)
    if (IsRespawning == false) {
        IsRespawning = true
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        info.changeLifeBy(-1)
        if (info.life() > 0) {
            RespawnChallenge()
        } else {
            music.stopAllSounds()
            game.splash("Game Over")
            music.play(music.createSong(hex`002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a`), music.PlaybackMode.InBackground)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.startingHole, function (sprite32, otherSprite4) {
    sprites.destroy(startHole, effects.rings, 1000)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(1000)
})
function RespawnChallenge () {
    myHero.setFlag(SpriteFlag.Ghost, true)
    myHero.setPosition(10, 10)
    myHero.vx = 0
    myHero.vy = 0
    pause(500)
    myHero.setFlag(SpriteFlag.Ghost, false)
    IsRespawning = false
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.exitDoorFinal, function (sprite, otherSprite) {
    game.splash("Mathematics Master!", "Well Done")
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.killer, SpriteKind.Player, function (sprite6, otherSprite6) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(200)
    if (IsRespawning == false) {
        IsRespawning = true
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        info.changeLifeBy(-1)
        if (info.life() > 0) {
            RespawnChallenge()
        } else {
            music.stopAllSounds()
            game.setGameOverEffect(false, effects.blizzard)
            game.splash("Game Over")
            music.play(music.createSong(hex`002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a`), music.PlaybackMode.InBackground)
        }
    }
})
function startGameLvl2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Challenge_1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Challenge_2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Challenge_3)
    sprites.destroyAllSpritesOfKind(SpriteKind.exitDoor)
    music.stopAllSounds()
    music.play(music.stringPlayable("C4:2 - - G3:2 - - A3:2 - - C4:2 - - E4:2 - G4:1 A4:1 B4:1 C5:2 B4:1 A4:1 G4:1 E4:2 C4:2 G3:2 C4:2", 120), music.PlaybackMode.LoopingInBackground)
    menuStartGame = true
    menuActive = false
    Menu_Button.setFlag(SpriteFlag.Invisible, true)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
        fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
        fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
        fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
        ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
        fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
        fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
        fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
        fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
        fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
        fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
        ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
        fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
        fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
        ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
        fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
        ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
        ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
        fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
        fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
        cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
        ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
        ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
        fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
        fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
        ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
        fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
        ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
        ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
        ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
        ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
        fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
        fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
        ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
        ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
        dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
        dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
        dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
        dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
        dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
        dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
        ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
        ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
        ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
        dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
        dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
        ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
        ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
        dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
        ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
        ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
        ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
        ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
        ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
        ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
        ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
        dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
        dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
        ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
        dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
        dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
        bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
        bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
        bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
        bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
        bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
        bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
        ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
        dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
        ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
        ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
        dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
        ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
        bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
        dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
        dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
        ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
        dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
        bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
        ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
        dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
        dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
        bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
        dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
        dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
        bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
        cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
        ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
        ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
        ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
        cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
        cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
        cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
        ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
        cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
        ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
        cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
        cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
        ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
        cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
        fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
        fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
        fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
        ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
        fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
        `)
    info.setLife(3)
    info.setScore(100)
    myHero.setFlag(SpriteFlag.Invisible, false)
    Imposter_1.setFlag(SpriteFlag.Invisible, true)
    Imposter_2.setFlag(SpriteFlag.Invisible, true)
    killer_1.setFlag(SpriteFlag.Ghost, false)
    killer_2.setFlag(SpriteFlag.Ghost, false)
    killer_3.setFlag(SpriteFlag.Ghost, false)
    killer_boss.setFlag(SpriteFlag.Ghost, false)
    killer_1.setFlag(SpriteFlag.Invisible, false)
    killer_2.setFlag(SpriteFlag.Invisible, false)
    killer_3.setFlag(SpriteFlag.Invisible, false)
    killer_boss.setFlag(SpriteFlag.Invisible, false)
    exitDoor2.setFlag(SpriteFlag.Invisible, true)
    exitDoor2.setFlag(SpriteFlag.Ghost, true)
    exitDoorFinal2.setFlag(SpriteFlag.Invisible, false)
    Challenge_12.setFlag(SpriteFlag.Invisible, true)
    Challenge_22.setFlag(SpriteFlag.Invisible, true)
    Challenge_32.setFlag(SpriteFlag.Invisible, true)
    hopeTree = sprites.create(img`
        .....445...4455....54...eeee.22.
        ...444455545e.445..455..e.2e52..
        ..45.474444.5e5.522222ee.225e222
        ..4..44444444464222264e27626.2ee
        .55.7554556564472.4424e27c2266e.
        e4d5.5e45.5555422.44..e2222ee2e.
        .4.5555455544452226464226622.ee2
        ..5.5655455.55442444622222266eee
        ..544564c4..44242262622262d22226
        ...45..455444422422225222d2c672e
        ..44554545554554422445222222222e
        7445444.44.e46442422462222256ee6
        .45544e4ee.64446246446226266e2e7
        .4544.d44d2222222264e62226262...
        ..5544.44.42244ee2ee262266e222ee
        .54.444.24.242dd224c422ee26ee2ee
        .54554.2244224dd24424222e26ee22e
        ..4455.4444224.dd6464eeeeeee22e2
        ....44444224424446e6ee2.eee22ee6
        ......74..224.5544e46e.eee.e2ee.
        ......57..2224222eeeeee..e6eee..
        ......7....2222.2e2eee.ee.......
        ............22222e6eee..........
        ................deeec...........
        ................deeec...........
        ...............edeece...........
        ...............eeeece...........
        ..............ddeeecce..........
        ............ddddeeeccc..........
        .........eeeddee.ececccec.......
        .......eeee.4ee..ece.cccec......
        ....eee....e......e...eee.ccee..
        `, SpriteKind.startingHopeTree)
    tiles.placeOnTile(killer_1, tiles.getTileLocation(57, 8))
    tiles.placeOnTile(killer_2, tiles.getTileLocation(49, 4))
    tiles.placeOnTile(killer_3, tiles.getTileLocation(37, 8))
    tiles.placeOnTile(killer_boss, tiles.getTileLocation(78, 3))
    tiles.placeOnTile(exitDoorFinal2, tiles.getTileLocation(89, 8))
    tiles.placeOnTile(hopeTree, tiles.getTileLocation(2, 8))
    tiles.placeOnTile(myHero, tiles.getTileLocation(7, 8))
    pause(3000)
    myHero.sayText("Let's win the fight!", 1000, false)
    controller.moveSprite(myHero, 100, 0)
    myHero.ay = 500
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.startingHole, function (sprite2, otherSprite2) {
    sprite2.startEffect(effects.warmRadial, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(1000)
    sprite2.setFlag(SpriteFlag.Invisible, true)
    sprite2.setFlag(SpriteFlag.Ghost, true)
})
function RespawnPlayer () {
    myHero.setFlag(SpriteFlag.Ghost, true)
    myHero.setPosition(10, 10)
    myHero.vx = 0
    myHero.vy = 0
    myHero.setFlag(SpriteFlag.Ghost, false)
    IsRespawning = false
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuActive == true) {
        if (Menu_Button.y == 66) {
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            game.splash("Start Now!")
            startGame()
        }
        if (Menu_Button.y == 83) {
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            game.splash("HOW TO PLAY", "Read the question. Find the Imposter with the correct answer! Don't pick the wrong answer. Good luck!")
        }
    }
})
function startGame () {
    menuStartGame = true
    menuActive = false
    Menu_Button.setFlag(SpriteFlag.Invisible, true)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333353333333333333333333333333333333333333333333333333333333333333333333333333333333533333333333
        3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
        3333333333333333333333555333333333333333333333333333333333333333335555533333333333333333333333333333335553333333333333333333333333333333333333333355555333333333
        3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
        3333333333333333333333333333333333333333333333333111333333333333333535333333333333333333333333333333333333333333333333333333333331113333333333333335353333333333
        33333d11d3333333333333333333333333333333333333331111133333333333333333333333333333333d11d33333333333333333333333333333333333333311111333333333333333333333333333
        33331111113333333333333333333333333333333331133111111d3333333333333333333333333333331111113333333333333333333333333333333331133111111d33333333333333333333333333
        3331111111d33333333333333333333333333333331111d1111111133333333333333333333333333331111111d33333333333333333333333333333331111d111111113333333333333333333333333
        33311111111d11333333333333333333333333333d1111111111111d33333333333333333333333333311111111d11333333333333333333333333333d1111111111111d333333333333333333333333
        331111111111111333333333333333333333333d11111111111111111d3333333333333333333333331111111111111333333333333333333333333d11111111111111111d3333333333333333333333
        1d1111111111111d31113333333333333333333333333333333333333333333366633333333333311d1111111111111d3111333333333333333333333333333333333333333333336663333333333331
        1111111111111111111113333333333333333333333333333333333333333336776633333333331111111111111111111111133333333333333333333333333333333333333333367766333333333311
        1111111111166666111113333333333333533333333333333333333333333366777633333333331111111111111666661111133333333333335333333333333333333333333333667776333333333311
        111111111166777661111111d333333335553333333333333333333333333367777663333333d111111111111166777661111111d333333335553333333333333333333333333367777663333333d111
        3333333336677777663333333333333355555333333333333333333333333367777763333333333333333333366777776633333333333333555553333333333333333333333333677777633333333333
        3333333336777777763333333333333335553333333333333333333333333367777763333333333333333333367777777633333333333333355533333333333333333333333333677777633333333333
        3333333366777777766333333333333335353333333333333333333333333367777763333333333333333333667777777663333333333333353533333333333333333333333333677777633333333333
        3333333367777777776333333333333333333333333333333335333333333367777763333333333333333333677777777763333333333333333333333333333333353333333333677777633333333333
        3333333367777777776333366333333333333333333333333355533333333367777763333333333333333333677777777763333663333333333333333333333333555333333333677777633333333333
        3333333367777777776333677633333333333333333333333335333336633367777763333333333333333333677777777763336776333333333333333333333333353333366333677777633333333333
        3333333367777777776336677663333333333333333333333333333367763367777763333333333333333333677777777763366776633333333333333333333333333333677633677777633333333333
        3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
        3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
        6666333367777777776666777763333333333666666333333333333367763367777763333333333666663333677777777766667777633333333336666663333333333333677633677777633333333336
        7776633367777777777777777763333333336666666633333333333367763367777763336633336677766333677777777777777777633333333366666666333333333333677633677777633366333366
        7777633367777777777777777633333333366666666663333333333367763367777763367663366777776333677777777777777776333333333666666666633333333333677633677777633676633667
        7777763367777777777777776633333333366666666663333333333367763367777763367763367777777633677777777777777766333333333666666666633333333333677633677777633677633677
        7777763367777777776666666333333333666666666663333333333367763367777763367763367777777633677777777766666663333333336666666666633333333333677633677777633677633677
        7777776367777777776333333333333333666666666663333333333367776667777763677763367777777763677777777763333333333333336666666666633333333333677766677777636777633677
        7777776367777777776333333333333333666666666666333333333366777777777766677766667777777763677777777763333333333333336666666666663333333333667777777777666777666677
        7777776367777777776333666666666333666666666666333333333336677777777776677666677777777763677777777763336666666663336666666666663333333333366777777777766776666777
        7777776667777777776366677777776663666666666666333333333333666677777777777666677777777766677777777763666777777766636666666666663333333333336666777777777776666777
        7777776667777777776667777777777766666666666666333366666633333677777777777666677777777766677777777766677777777777666666666666663333666666333336777777777776666777
        7777776667777777776677777777777776666666666666366677777666333677777777776666677777777766677777777766777777777777766666666666663666777776663336777777777766666777
        7777777667777777776777777777777777666666666666667777777776633677777766666666677777777776677777777767777777777777776666666666666677777777766336777777666666666777
        7777777667777777766777777777777777666666666666677777777777663677777766666666677777777776677777777667777777777777776666666666666777777777776636777777666666666777
        7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
        7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
        7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
        7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
        777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
        7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
        77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
        7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
        33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
        d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
        ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
        ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
        ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
        dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
        dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
        dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
        dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    myHero.setFlag(SpriteFlag.Invisible, false)
    myHeroUP.setFlag(SpriteFlag.Invisible, true)
    Challenge_12.setFlag(SpriteFlag.Invisible, false)
    Challenge_22.setFlag(SpriteFlag.Invisible, false)
    Challenge_32.setFlag(SpriteFlag.Invisible, true)
    Imposter_1.setFlag(SpriteFlag.Invisible, false)
    Imposter_2.setFlag(SpriteFlag.Invisible, false)
    exitDoor2.setFlag(SpriteFlag.Invisible, false)
    powerUp.setFlag(SpriteFlag.Invisible, true)
    startHole = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.startingHole)
    tiles.placeOnTile(Challenge_12, tiles.getTileLocation(33, 7))
    tiles.placeOnTile(Challenge_22, tiles.getTileLocation(49, 7))
    tiles.placeOnTile(exitDoor2, tiles.getTileLocation(85, 7))
    startHole.setPosition(84, 120)
    myHero.setPosition(80, 45)
    Imposter_1.setPosition(48, 87)
    Imposter_2.setPosition(116, 87)
    QuestionID = randint(1, 5)
    if (QuestionID == 1) {
        MathQuestionText = "2,5,8,11,_"
        MathAnswerText_Correct = "14"
        MathAnswerText_Wrong = "20"
    } else if (QuestionID == 2) {
        MathQuestionText = "30,27,24,21,_"
        MathAnswerText_Correct = "18"
        MathAnswerText_Wrong = "32"
    } else if (QuestionID == 3) {
        MathQuestionText = "3,6,12,24,_"
        MathAnswerText_Correct = "48"
        MathAnswerText_Wrong = "12"
    } else if (QuestionID == 4) {
        MathQuestionText = "1,4,9,16,25,_"
        MathAnswerText_Correct = "36"
        MathAnswerText_Wrong = "33"
    } else if (QuestionID == 5) {
        MathQuestionText = "1,1,2,3,5,8,13,_"
        MathAnswerText_Correct = "21"
        MathAnswerText_Wrong = "25"
    } else {
        MathQuestionText = "Error"
        MathAnswerText_Correct = "Error"
        MathAnswerText_Wrong = "Error"
    }
    myHero.sayText(MathQuestionText, 5000, false)
    pause(5000)
    Imposter_1.sayText(MathAnswerText_Correct, 2000, false)
    pause(500)
    Imposter_2.sayText(MathAnswerText_Wrong, 2000, false)
    pause(500)
    Imposter_1.sayText("Do you think you can find us?", 1000, false)
    pause(1000)
    Imposter_2.sayText("See You, Good Luck! Hahaha", 1000, false)
    pause(1000)
    scene.cameraFollowSprite(Imposter_1)
    animation.runMovementAnimation(
    Imposter_1,
    animation.animationPresets(animation.shake),
    100,
    false
    )
    Imposter_1.follow(startHole, 20)
    pause(3000)
    scene.cameraFollowSprite(Imposter_2)
    animation.runMovementAnimation(
    Imposter_2,
    animation.animationPresets(animation.shake),
    100,
    false
    )
    Imposter_2.follow(startHole, 20)
    pause(3000)
    scene.cameraFollowSprite(myHero)
    animation.runMovementAnimation(
    myHero,
    animation.animationPresets(animation.parachuteRight),
    2000,
    false
    )
    myHero.follow(startHole, 20)
    pause(3000)
    myHero.sayText("Oh No! They run away! Let's start our adventure seeking the correct answer!", 1000, false)
    music.stopAllSounds()
    music.play(music.stringPlayable("C5 B A G A B G F G A B C5 B A G F E D E F G E D C D E G E D C - G F E D C", 120), music.PlaybackMode.LoopingInBackground)
    controller.moveSprite(myHero, 100, 0)
    tiles.placeOnTile(Imposter_1, tiles.getTileLocation(61, 3))
    myHero.ay = 500
    Imposter_1.setFlag(SpriteFlag.Ghost, false)
    Imposter_1.setFlag(SpriteFlag.Invisible, false)
    tiles.placeOnTile(Imposter_2, tiles.getTileLocation(80, 7))
    Imposter_2.setFlag(SpriteFlag.Ghost, false)
    Imposter_2.setFlag(SpriteFlag.Invisible, false)
    info.setLife(3)
    info.setScore(0)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuStartGame == true) {
        if (powerUpState == true) {
            menuActive = false
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 2 5 5 6 f . . . . . 
                . . . f 6 6 6 6 1 6 6 f . . . . 
                . . . f 6 6 6 6 6 1 6 f . . . . 
                . . . f d f d 6 6 6 1 f . . . . 
                . . . f d f d 6 6 6 6 f f . . . 
                . . . f d 4 d d 6 6 6 f 8 f . . 
                . . . . f d d d f f 8 f f . . . 
                . . . . . f f 5 2 f 8 8 8 f . . 
                . . . . f 5 2 2 f f f f f . . . 
                . . . . f 2 2 f d f . . . . . . 
                . . . . . f 2 f d f . . . . . . 
                . . . . f 2 5 2 f d f . . . . . 
                . . . . f f 2 2 f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 4 d d 6 6 6 f 8 f . 
                . . . . . f d d d f f 8 f f . . 
                . . . . . . f f 2 2 f f 8 8 f . 
                . . . . . f d d d d f f f f . . 
                . . . . . f d d d f 2 f . . . . 
                . . . . . . f f f d 5 2 f . . . 
                . . . . . f f f 2 2 f f . . . . 
                . . . . . f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 4 d d 6 6 6 f 8 f . 
                . . . . . f d d d f f 8 f f . . 
                . . . . . . f f 2 2 f f 8 8 f . 
                . . . . . f 5 2 2 d d f f f . . 
                . . . . . f 2 2 2 f d d f . . . 
                . . . . . . f 2 5 f f f . . . . 
                . . . . . f 2 2 2 2 f . . . . . 
                . . . . . . f f f f f . . . . . 
                `],
            200,
            true
            )
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . 2 1 1 1 1 2 2 . . . . . . . 
                . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                . . 2 1 1 1 1 3 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, myHero, -100, 0)
        } else {
            menuActive = false
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 2 5 5 6 f . . . . . 
                . . . f 6 6 6 6 1 6 6 f . . . . 
                . . . f 6 6 6 6 6 1 6 f . . . . 
                . . . f d f d 6 6 6 1 f . . . . 
                . . . f d f d 6 6 6 6 f f . . . 
                . . . f d 3 d d 6 6 6 f 6 f . . 
                . . . . f d d d f f 6 f f . . . 
                . . . . . f f 5 3 f 6 6 6 f . . 
                . . . . f 5 3 3 f f f f f . . . 
                . . . . f 3 3 f d f . . . . . . 
                . . . . . f 3 f d f . . . . . . 
                . . . . f 3 5 3 f d f . . . . . 
                . . . . f f 3 3 f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 3 d d 6 6 6 f 6 f . 
                . . . . . f d d d f f 6 f f . . 
                . . . . . . f f 3 3 f f 6 6 f . 
                . . . . . f d d d d f f f f . . 
                . . . . . f d d d f 3 f . . . . 
                . . . . . . f f f d 5 3 f . . . 
                . . . . . f f f 3 3 f f . . . . 
                . . . . . f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 3 d d 6 6 6 f 6 f . 
                . . . . . f d d d f f 6 f f . . 
                . . . . . . f f 3 3 f f 6 6 f . 
                . . . . . f 5 3 3 d d f f f . . 
                . . . . . f 3 3 3 f d d f . . . 
                . . . . . . f 3 5 f f f . . . . 
                . . . . . f 3 3 3 3 f . . . . . 
                . . . . . . f f f f f . . . . . 
                `],
            200,
            true
            )
        }
    }
    if (menuAnswerNow == true) {
        game.splash("You must answer question before you can walk again!")
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (menuStartGame == true) {
        if (powerUpState == true) {
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . 5 . 5 . 5 . 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . f 5 5 2 5 5 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 4 d d 4 d f 6 f . . 
                . . f 8 8 f d d d d f 8 8 f . . 
                . f 8 8 f 2 f f f f 2 f 8 8 f . 
                . . f f d 2 5 2 2 5 2 d f f . . 
                . . f d d f 2 5 5 2 f d d f . . 
                . . . f f 2 2 2 2 2 2 f f . . . 
                . . . f 2 2 5 2 2 5 2 2 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . 5 . 5 . 5 . 5 . . . . . 
                . . . . 5 f 5 5 5 f 5 . . . . . 
                . . . . 5 5 5 2 5 5 5 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 4 d d 4 d f 6 f . . 
                . . f 8 8 f d d d d f 8 8 f . . 
                . f 8 8 f 2 f f f f 2 f 8 8 f . 
                . . f f 2 2 5 2 2 5 2 d f f . . 
                . . . f d f 2 5 5 2 f f d f . . 
                . . . f d f 2 2 2 2 2 f f . . . 
                . . . f f 2 5 2 2 5 2 2 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 3 f f . . 
                . . f d f f 3 5 5 3 f d f . . . 
                . . . f f 3 3 3 3 3 f d f . . . 
                . . . f 3 3 5 3 3 5 3 f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . . f f . . . . . . . . . 
                `],
            200,
            false
            )
        } else {
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f 3 3 5 3 3 5 3 d f f . . 
                . . . f d f 3 5 5 3 f f d f . . 
                . . . f d f 3 3 3 3 3 f f . . . 
                . . . f f 3 5 3 3 5 3 3 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 3 f f . . 
                . . f d f f 3 5 5 3 f d f . . . 
                . . . f f 3 3 3 3 3 f d f . . . 
                . . . f 3 3 5 3 3 5 3 f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . . f f . . . . . . . . . 
                `],
            200,
            false
            )
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (menuStartGame == true) {
        if (powerUpState == true) {
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . 5 . 5 . 5 . 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . f 5 5 2 5 5 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 4 d d 4 d f 6 f . . 
                . . f 8 8 f d d d d f 8 8 f . . 
                . f 8 8 f 2 f f f f 2 f 8 8 f . 
                . . f f d 2 5 2 2 5 2 d f f . . 
                . . f d d f 2 5 5 2 f d d f . . 
                . . . f f 2 2 2 2 2 2 f f . . . 
                . . . f 2 2 5 2 2 5 2 2 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . 5 . 5 . 5 . 5 . . . . . 
                . . . . 5 f 5 5 5 f 5 . . . . . 
                . . . . 5 5 5 2 5 5 5 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 4 d d 4 d f 6 f . . 
                . . f 8 8 f d d d d f 8 8 f . . 
                . f 8 8 f 2 f f f f 2 f 8 8 f . 
                . . f f 2 2 5 2 2 5 2 d f f . . 
                . . . f d f 2 5 5 2 f f d f . . 
                . . . f d f 2 2 2 2 2 f f . . . 
                . . . f f 2 5 2 2 5 2 2 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 3 f f . . 
                . . f d f f 3 5 5 3 f d f . . . 
                . . . f f 3 3 3 3 3 f d f . . . 
                . . . f 3 3 5 3 3 5 3 f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . . f f . . . . . . . . . 
                `],
            200,
            false
            )
        } else {
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f 3 3 5 3 3 5 3 d f f . . 
                . . . f d f 3 5 5 3 f f d f . . 
                . . . f d f 3 3 3 3 3 f f . . . 
                . . . f f 3 5 3 3 5 3 3 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 3 f f . . 
                . . f d f f 3 5 5 3 f d f . . . 
                . . . f f 3 3 3 3 3 f d f . . . 
                . . . f 3 3 5 3 3 5 3 f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . . f f . . . . . . . . . 
                `],
            200,
            false
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.startingHopeTree, function (sprite22, otherSprite22) {
    sprite22.startEffect(effects.starField, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(1000)
    sprite22.setFlag(SpriteFlag.Invisible, true)
    sprite22.setFlag(SpriteFlag.Ghost, true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuStartGame == true) {
        if (powerUpState == true) {
            menuActive = false
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 5 5 2 6 f . . . . 
                . . . . f 6 6 1 6 6 6 6 f . . . 
                . . . . f 6 1 6 6 6 6 6 f . . . 
                . . . . f 1 6 6 6 d f d f . . . 
                . . . f f 6 6 6 6 d f d f . . . 
                . . f 8 f 6 6 6 d d 4 d f . . . 
                . . . f f 8 f f d d d f . . . . 
                . . f 8 8 8 f 2 5 f f . . . . . 
                . . . f f f f f 2 2 5 f . . . . 
                . . . . . . f d f 2 2 f . . . . 
                . . . . . . f d f 2 f . . . . . 
                . . . . . f d f 2 5 2 f . . . . 
                . . . . . . f f 2 2 f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 8 f 6 6 6 d d 4 d f . . . . 
                . . f f 8 f f d d d f . . . . . 
                . f 8 8 f f 8 8 f f . . . . . . 
                . . f f f f d d d d f . . . . . 
                . . . . f 8 f d d d f . . . . . 
                . . . f 8 5 d f f f . . . . . . 
                . . . . f f 8 8 f f f . . . . . 
                . . . . f f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 8 f 6 6 6 d d 4 d f . . . . 
                . . f f 8 f f d d d f . . . . . 
                . f 8 8 f f 2 2 f f . . . . . . 
                . . f f f d d 2 2 5 f . . . . . 
                . . . f d d f 2 2 2 f . . . . . 
                . . . . f f f 5 2 f . . . . . . 
                . . . . . f 2 2 2 2 f . . . . . 
                . . . . . f f f f f . . . . . . 
                `],
            200,
            true
            )
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 1 1 1 1 2 . . 
                . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                . . . . . . 2 2 3 1 1 1 1 2 . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, myHero, 100, 0)
        } else {
            menuActive = false
            animation.runImageAnimation(
            myHero,
            [img`
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 5 5 2 6 f . . . . 
                . . . . f 6 6 1 6 6 6 6 f . . . 
                . . . . f 6 1 6 6 6 6 6 f . . . 
                . . . . f 1 6 6 6 d f d f . . . 
                . . . f f 6 6 6 6 d f d f . . . 
                . . f 6 f 6 6 6 d d 3 d f . . . 
                . . . f f 6 f f d d d f . . . . 
                . . f 6 6 6 f 3 5 f f . . . . . 
                . . . f f f f f 3 3 5 f . . . . 
                . . . . . . f d f 3 3 f . . . . 
                . . . . . . f d f 3 f . . . . . 
                . . . . . f d f 3 5 3 f . . . . 
                . . . . . . f f 3 3 f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 6 f 6 6 6 d d 3 d f . . . . 
                . . f f 6 f f d d d f . . . . . 
                . f 6 6 f f 3 3 f f . . . . . . 
                . . f f f f d d d d f . . . . . 
                . . . . f 3 f d d d f . . . . . 
                . . . f 3 5 d f f f . . . . . . 
                . . . . f f 3 3 f f f . . . . . 
                . . . . f f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 6 f 6 6 6 d d 3 d f . . . . 
                . . f f 6 f f d d d f . . . . . 
                . f 6 6 f f 3 3 f f . . . . . . 
                . . f f f d d 3 3 5 f . . . . . 
                . . . f d d f 3 3 3 f . . . . . 
                . . . . f f f 5 3 f . . . . . . 
                . . . . . f 3 3 3 3 f . . . . . 
                . . . . . f f f f f . . . . . . 
                `],
            200,
            true
            )
        }
    }
    if (menuAnswerNow == true) {
        game.splash("You must answer question before you can walk again!")
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuActive == true) {
        Menu_Button.setPosition(38, 83)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
    if (menuAnswerNow == true) {
        if (theCorrectAnswer == false) {
            info.setScore(50)
            game.splash("Good Job! It is wrong")
            menuAnswerNow = false
        } else {
            info.setScore(0)
            game.splash("Actually it is correct!")
            menuAnswerNow = false
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuStartGame == false) {
        menuActive = true
        Menu_Button.setFlag(SpriteFlag.Invisible, false)
        Menu_Button.setPosition(38, 66)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava1`, function (sprite3, location) {
    if (IsRespawning == false) {
        IsRespawning = true
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        info.changeLifeBy(-1)
        if (info.life() > 0) {
            RespawnPlayer()
        } else {
            music.stopAllSounds()
            game.splash("Game Over")
            music.play(music.createSong(hex`002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a`), music.PlaybackMode.InBackground)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.startingHopeTree, function (sprite32, otherSprite4) {
    sprites.destroy(hopeTree, effects.rings, 1000)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(1000)
    powerUp.setFlag(SpriteFlag.Invisible, false)
    powerUp.sayText("new power UP!", 500, false)
    powerUp.startEffect(effects.coolRadial, 2000)
    animation.runImageAnimation(
    powerUp,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    powerUp.follow(myHero, 70)
    pause(5000)
    if (myHero.overlapsWith(powerUp)) {
        powerUpState = true
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        myHero.setImage(img`
            . . . . 5 . 5 . 5 . 5 . . . . . 
            . . . . 5 5 5 5 5 5 f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 4 d d 4 d f 6 f . . 
            . . f 8 8 f d d d d f 8 8 f . . 
            . f 8 8 f 2 f f f f 2 f 8 8 f . 
            . . f f d 2 5 2 2 5 2 d f f . . 
            . . f d d f 2 5 5 2 f d d f . . 
            . . . f f 2 2 2 2 2 2 f f . . . 
            . . . f 2 2 5 2 2 5 2 2 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `)
        sprites.destroy(powerUp, effects.fire, 5000)
        pause(1000)
        myHero.sayText("I fill energetic!", 500, false)
        myHero.startEffect(effects.coolRadial, 2000)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.killer, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 1000)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite5, otherSprite5) {
    pause(5000)
    if (myHero.overlapsWith(Imposter_1) || myHero.overlapsWith(Imposter_2)) {
        if (menuAnswerNow == false) {
            menuAnswerNow = true
            if (myHero.overlapsWith(Imposter_1)) {
                Imposter_1.sayText("Press B if you want to answer?", 1000, false)
            }
            if (myHero.overlapsWith(Imposter_2)) {
                Imposter_2.sayText("Press B if you want to answer?", 1000, false)
            }
        }
    }
})
let projectile: Sprite = null
let MathQuestionText = ""
let QuestionID = 0
let hopeTree: Sprite = null
let startHole: Sprite = null
let MathAnswerText_Wrong = ""
let MathAnswerText_Correct = ""
let CorrectImposter = 0
let theCorrectAnswer = false
let powerUp: Sprite = null
let exitDoorFinal2: Sprite = null
let exitDoor2: Sprite = null
let killer_boss: Sprite = null
let killer_3: Sprite = null
let killer_2: Sprite = null
let killer_1: Sprite = null
let Imposter_2: Sprite = null
let Imposter_1: Sprite = null
let Challenge_22: Sprite = null
let Challenge_32: Sprite = null
let Challenge_12: Sprite = null
let myHeroUP: Sprite = null
let myHero: Sprite = null
let IsRespawning = false
let menuAnswerNow = false
let menuStartGame = false
let powerUpState = false
let menuActive = false
let Menu_Button: Sprite = null
music.play(music.createSong(hex`0036010408200800001c00010a006400f401640000040000000000000000000000000005000004780018002000012c20002500012a28002f0001293800610001259800a00001a8a000a8000127a800b0000125b800e90001a118012001012c20012801012a28013001012938014001012548014e01012558016001012768017001012578018d0101a890019a010127a001a6010125a801af0101a3b801dc0101a101001c000f05001202c102c201000405002800000064002800031400060200048a00e801f0010118f001f801019af8012102019c28023002019c30023602011d38025e02019f68027002019f700276020120780284020122a802af020122b002b8020124b802c0020125e802ef020124f002f8020125f8020003012228032f03012430033803012538034003012268036f0301247003780301257803800301278c03910301279803b103012704001c00100500640000041e000004000000000000000000000000000a040004380118001c00011920002500012028002d00011958005d00011960006500012068006d00011998009c000195a000a500019ca800ad000195d800dd000195e000e500019ce800ee00019518011d01011920012501012028012d01011958015d01011960016601012068016e01011998019d010195a001a501019ca801ae010195d801dd010195e001e501019ce801ec010195f001f701019cf801fc01019500020502011818021d02011820022502019f28022d02011858025d02011860026602019f68026e02011898029d02011ba002a5020122a802ae02011bd402d502011bd802dd02011be002e7020122e802ee02011b18031d03011b20032603012228032f03011b58035e03011b60036603012268037203011b8003860301208c03910301209803b3030120c003c703011ecc03d403011dd803f803011b05001c000f0a006400f4010a0000040000000000000000000000000000000002030118012001014420012801014228013001014138014001013d48014e01013d58016001013f68017001013d78018d01010090019a01013fa001a601013da801af0101bbb801dc0101b988028d0201339002950201b798029e020133c802cd020133d002d60201b7d802df02013308030c0302a33310031703013618031d03013348034f03013350035703013658035d03013360036503013668036c0301b77003730302a8388003880301388c03940301389803a4030138bf03c00301abc003c10303303031c103c30302b736cb03d2030138d803f4030138f403f6030133f603f70301adf703f803012cf803f90301abf903fa0302a625fa03fc03029f20fc03fd03019a06001c00010a006400f401640000040000000000000000000000000000000002db0200000800012508000f00012910001800012c18002000012520002600013128003000012530003800012c38004000012940004600012548004f00012c50005800012558005f00012960006800013168007000012970007800012c78007c0001258000880001a18800900001259000980001a89800a0000125a000a80001ada800b0000125b000b80001a8b800c00001a1c000c8000125c800d00001add000d8000125d800e00001a8e000e80001a1e800f0000125f000f80001a8f800fc0001a100010801012508011001012910011801012c18011f01012920012801013628013001012930013801013538014001013140014801012548014f01012950015701013158016001013660016601012968016e01013570017701012578017f0101318001870101a18801900101259001980101a89801a0010125a001a80101b2a801b0010125b001b8010131b801c00101adc001c8010125c801cf0101a1d001d80101a8d801e0010125e001e80101ade801f00101a1f001f5010125f801000201a80102090201240902110201a81202180201ab18021e0201a81f02260201302602300201a83002370201243802410201ab4102480201a848024f02012450025802013058025f0201246002680201ab6902700201a870027802012478027e0201ab80028802012788028f0201ab90029702012e9802a00201aba002a8020133a802b00201abb002b8020127b802c002012ec002c80201abc802d0020133d002d80201abd802e002012ee002e8020127e802f00201abf002f802012ef802ff02012700030803012708031003012e10031803012a18031f03012720032803013128032f03012730033803012e38034003012a40034703012748035003013350035803012758036003013160036803012a68036f03012770037803012e78037f03013180038703042c3033368c039103042c3033369803b503042c303633c003c803042c303338cc03d203042c303338d403d803022c30d803f50302333807001c00020a006400f401640000040000000000000000000000000000000003410110001400030d141930003400030d191450005500030d191470007600030d19149000960003899095b000b60003899590d000d50003899095f000f7000389909510011701030d141930013501030d191450015601030d141970017701030d14199001980103899095b001b50103899095d001d60103899095e801ec01038995901002220203930c1827022802020c9328023002011851026402030c931868026f02030c931890029102020f169102a202011ba702a8020116a802ae02020f1bd002e202030f161be802f002030f161b0f03210303160f1b26032e0303160f1b5003510302161b51036103010f68037703030f161b820387030314201b8d039203031b20149703b903031b1420b903bb03021b8ebb03bc030195bc03bd030114bd03bf030114bf03c003011bc003c4030120cc03d303031b1420d703fb0303201b1408001c000e050046006603320000040a002d00000064001400013200020100028c0100001000010d18001b00010d20003000010d38003e00010d48005400010d68007000010870007500010c78007f00010d80009100018998009b000189a000b3000189b800bf000189c800cf00019000010401010d04010501010618011b01010d20012b01010d30013601010838014001010d48015201010d68016f01010870017801010d78018001010880019001018998019d010189a001a7010190a801b2010195b801c1010189c801d1010189d801e0010189e001e7010190e801f0010195f0010002018900021202010c18022002010c20022802019328023102010c38024202011848025302010c68027002010c70027802019378027c02010c80029102010f9802a002010fa002a8020116a802ae02010fb802c302011bc802d002010fe802ef02010ff002f8020116f802fb02010f00031103010f18032003010f20032803011628032e03010f38034203011b48035203010f68037003010f70037803011678037c03010f8003880301148c03950301149803b9030114c003c8030112cc03d4030111d803f603010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004d0400000800040203061608000b0002060c1000160004060a070918001a0002060d20002600040302060d28002c00040302060c300036000406070a0938003c00050302060c0d40004300010648004d000503020c060d5000570004060a070958005a0002060d6000680002060d68006c00040302060c7000750004060a07097800790001067c00800003040d0a800086000303020688008b0002060c9000950004060a070998009a0002060da000a600040302060da800ac00040302060cb000b500040607090ab800bd000503020c060dc000c2000106c800cd00050302060c0dd000d6000406070a09d800d90002060ddc00de0002070de000e40002060de400e700020709e800ed000403020c06f000f500050607090a0df800fa0003060d0cfc00ff0002090a00010801040302061608010b0102060c1001160104060a070918011a0102060d20012601040302060d28012c01040302060c300136010406070a0938013c01050302060c0d40014301010648014d010503020c060d5001570104060a070958015a0102060d6001680102060d68016c01040302060c7001750104060a07097c01800103040d0a800186010303020688018b0102060c9001950104060a070998019a0102060da001a601040302060da801ac01040302060cb001b501040607090ab801bd010503020c060dc001c2010106c801cd01050302060c0dd001d6010406070a09d801d90102060ddc01df0103070a0de001e40103060a0de401e7010307090ae801ec010403020c06ec01f001010ff001f501050607090a0df801fa0104060d0c0efc01ff0102090a000206020303020608020b0202060c1002160204060a070918021a0202060d20022602040302060d28022c02040302060c300236020406070a0938023c02050302060c0d40024302010648024d020503020c060d5002570204060a070958025a0202060d6002680202060d68026c02040302060c7002750204060a07097802790201067c02800203040d0a800286020303020688028b0202060c9002950204060a070998029a0202060da002a602040302060da802ac02040302060cb002b502040607090ab802bd020503020c060dc002c2020106c802cd02050302060c0dd002d6020406070a09d802d90202060ddc02de0202070de002e40202060de402e702020709e802ed020403020c06f002f502050607090a0df802fa0203060d0cfc02ff0202090a000306030303020608030b0302060c1003160304060a070918031a0302060d20032603040302060d28032c03040302060c300336030406070a0938033c03050302060c0d40034303010648034d030503020c060d5003570304060a070958035a0302060d6003680302060d68036c03040302060c7003750304060a07097c03800303040d0a800384030203078c0390030203079803a303020307b803ba030106bc03be030106c003c403020307cc03d003020307d803de03020307e403e6030106ec03ef03020607f803fa030106fc030004020607007f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f015151515151515151515151515151515151515151515151044a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a05656565656565656565656565656565656565656565656565656565656565656565656565656565656565067f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f0745454545454545454545454545454545454545454545454545454545454545454545454545454545454545085d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d097f4d65607f607f7f3b7f757f7f667f22447f3d794676767b6a2e746f21527f4d7f6544607f4d65607f607f7f3b7f757f7f667f447f3d794676767b6a2e746f21527f4d7f4d654d607f4d65607f607f7f3b7f757f7f667f22447f3d794676767b6a2e746f21527f4d7f6544607f4d65607f607f7f3b7f757f7f667f44787f7f7d6a7f7f7f797f7f7f`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffccfffcfffffcffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffcffffffffffffffffffffffffffffff
    ffffffffffcccffccfffffcfcfcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffcfffffffffffffffffffffffffffff
    ffffffffffccffccfffffccfffcccccffffffffdbbbdbffcdbbbdcfffbbbbbdcfdbbbbbbbbbbddbbbbcdbbbdcffeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffcccffccffffffffffffffffffffffffffff
    fffffffffcccffffffffccfcfcccccffffffffbbeeeedcfdeeeeedffbbeeeeebdeeeeeeeeeeeeeeeeedeeeeedfebebbbbbbbbbbbbbbbbbbbeeeeeeeecffffccfcffcffffcfffffffffffffffffffffff
    fffffffffcccfffffffcccfcfcccccffffffffbe555efbbeed5deeccdf5555eedf5555555555fe555eef555eeeeefffffffffffffffffffffffffffeefffffffccfffffccccfffffffffffffffffffff
    fffffcfffffffffffffccfffffccccffffffffbe5554eebf4555efbdee5555efef5555555555fe555fff555eeeeefffffffffffffffffffffffffffeefffffffccfffffcccccffffffffffffffffffff
    fffffffcfccffffffffffccffcfccfffffffffbe55554ffe5555efdef555555eff5555555555fe555eff555eeeefffffffffffffffffffffffffffffefffffffffcfffffcccccfffcfffffffffffffff
    fffffffcfccfffffcfffcccffccccfffffffffbe55554ee45555efdee555555effeee4554eeefe555fff555eeeefffffffffffffffffffffffffffffeffffffffcccfffffcccfffffcffffffcfffffff
    ffffffffccfffffcccfccccffccccfffffffffbe555554455555efbf5554e555fffff4554ffffe555eee555eeeefffffffffffffffffffffffffffffeffffffffccccffffcccffffffffccfffcffffff
    ffffffccccffffccccccccffffcccfffffffffbe555555555555efef555ee455effff4554ffffe555555555eeeefffffffffffffffffffffffffffffefffffffffccffffffffffffffffcccfffcfffff
    ffffffccccffffccccfccfffffccffffffffffbe455555555555effe554ffe555ffff4554ffffe555555555eeeefffffffffffffffffffffffffffffefffffffffccffcfffffffffffffccccffffffff
    fffffcccccffffffcccfffffffccffffffffffbe444ee444e444eff4444444444ffff4444ffffe444444444eeeefffffffffffffffffffffffffffffeffffffffffffccccffffffffffffffcffffffff
    fffffcfccfffccccfccfffffffffffffffffffbe444ee44ee444eff4444444444ffff4444ffffe444eee444eeeefffffffffffffffffffffffffffffeffffffffffffcccccffcffffffffccccfffffff
    ffffffcccffffcccccffffffffffffffffffffbe444efeeff444efe4444444444efff4444ffffe444eff444eeeefffffffffffffffffffffffffffffeffffffffffffcccccffccfffffffcccffffffff
    ffffffcccffcccccccffffffffffffffffffffbe444efffff444efe444eeee4444fff4444ffffe444eff444eeeefffffffffffffffffffffffffffffeffffffffffffccccccffccccfcffffcffffffff
    ffffffcccffcccfcccffffffffffffffffffffbe444efffff444efe444efff4444fff4444ffffe444fff444eeeefffffffffffffffffffffffffffffefffffffffffffffcccffccccccfffffffffffff
    ffffffccffffcfcccfffffffffffffffffffffbfeeeefffffeeeefeeeeffffeeeefffeeeefffffeeefffeeefbeccccccccccccffffffffffffffffffefffffffffffffccffffffcccccccfffffffffff
    ffffffccffffffccffffffffffffffffffffcdbfffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbdcffffffffffffffffefffffffffffffcccffffffccccccccfffffffff
    fffffffcfffffccffffffcfccfffffffffffbbfcccfffcccffcccffffcccffcccffffcccffccccccccccfccccccccffccccccfcdcfffffffffffffffeffffffffffffffcccffffffcccfcfffffffffff
    fffffffffccfccccfffffcffcfffffffffffbfb99bffc999cf999cffc999cf999cffc999cf9999999996fb9999999fc999999bccdcffffffffffffffeffffffffffffffccccffffffcfffffffccfffff
    ffffffffccfcccccffffffffffffffffffffbc6666fff666cf6666ffc666cf6666fff666cf6666666666f66666666ff66666666fcbffffffffffffffefffffffffffffffcccfffffffffffffccccffff
    ffffffffcfcccccffffcffffffffffffffffbc6666fff666cf6666ffc666cf66666fc666cf6666666666f66666666ff666666666cbffffffffffffffefffffffffffffffccfffcfffffcffffccccffff
    fffffffffffcccffffffffeecfffffffffffbc6666fff666cf6666ffc666cf66666ff666cfcc666666ccf6666ccccff6666f6666cbfffffffffffffeeffffffffffffffffffffffffffcccffccccffff
    fffffffffffcccfffcfffeeeeffcffffffffbc6666fff666cf6666ffc666cf666666c666cffff6666ffff6666ffffff666cff666cbeeeeeeeeeeeeeeefffffffffffffffffffffcffffcccffcccfffff
    ffffffffffcccfffcffceeeeeecfcfffffffbc6666666666cf6666ffc666cf6666666666cffff6666ffff6666666cff6666f8666cbeeffffffeeeeeefffffffcffffffffffffffcfffffcccfffcfffff
    fffffffffccccfffcfffffeeeeffcfffffffbc6666666666cf6666ffc666cf6666666666cffff6666ffff6666666cff666666666fbffeeeeefffffffffffffcccffffffffffffffcffffffffffffffff
    ffffffffffcccffffcffeeeeeefccfffffffbc6666666666cf6666ff8666cf6666666666cfccf6666fccf6666666cff66666666fcdfeeecceeeffffffffffffccfffffffffffffffffffffccffffffff
    fffffffccfccfffffcce44554efccfffffffbc6666666666cf6668ff8666cf6668666666cfbbf6666fbcf6666ccffff66666668fdeeeecbbceeecffffffffffcfffffffffffffffffffffccccfffffff
    fffffcfccfccffffccce445544fcccffffffbc6666888666cf6666ff6666cf666cf66666cfbcf6666fbcf6666ffffff66666666fbceeb99996ceccffffffffffffffffffcffffffffffffccccfffffff
    ffffffccffccffffccce445544ecccffffffbc6666fff666cf6666666666cf6668f66666cfbcf6666fbcf66666666ff666886666fcee999999ceccfffffffffffffffffcccfffffffffffcccfffcffff
    ffffffccffffffffccce445544eccfffffffbc6666fff666cf8666666668ff666cfc6666cfbcf6666fbcf66666666ff6668f6666fcee9999999eccfffffcfffffffffffccfffffffffffffccfffcffff
    fffffccfffffffffcccee4444efccfffffffbc8666fff666cffc6666668fff666fffc666cfbbfc66cfdcf66666666ff666cf8666fcee9999999eccfffffcfffffffffffccfffffffffffffccffffcfff
    fffffccfffffffffccffeeeeeefccfffffffbc6666fff666cfffc6888cffffffffffffffffbcffffffbcffcccccccffc66cff666ccee9999999eccfffffffffffffffffccfffffffffffffffffcfcfff
    ffffcccfffffffffccffffffeeffcfffffffbcc68cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc86cfee9999999eccffffffffffffffffccffffffffffffffffffccffff
    fffccccffffffffffccffceeffccffffffffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee9999beefbfffffffffffffffffffccccccfffffffffffccffff
    fffffcffffffffffffccfffffccfffffffffbcfffffccffffcdbfcffccfffffcfffcffcfffffffffffcffffffffffffffffffffffffeee6bceefbcfffffffffffffffffcccccffcccfffffffffccffff
    ffffccffffffffffffcccffffccfffffffffcdccccbbdbbbbdbccdbcbbcbffbbcfbdbcbbcbcbffcbbcbfcbbcbbcbcbbcbcbfccccffeeeeeeeefccffffffffffffffffcfccffcffccffcffffffffccfff
    ffffccffffffffffffffccccccfffffffffffccccccfcccccccfbbbbccbbfcbbbfbcbbbbbddbffcbbcbfcbbcbbdccbbbdbbfbbebfeeffeeeefcbffffffffffffffffccfccffccfcfffccffffffffcfff
    ffffcffffffffffffffffffffffffffffffffffffffffffffccfbdccbbbbccddbfbbbbdbbbdbfcbbbbbcbbbcbbbccddbbbbfcccfeefffffffccffffffffffffffffcccfffccccccffcffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffccfccffbbcbbbcccfbdccccbccbfcdccdccdccdcccbbcccccbfcdfeeeffcffffffffffffffffffffffccfcfcfffffffcfffcfffffffffff
    fffcfffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffcefeeffbcffffffffffffffffffffffccfcfffeeeeefccffccffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffccffcfcfccffffccfeefcffffcfccfffffffffcbfeeefbcffffffffffffffffffffffcccccfeeeeeeeeeecffcffffffffff
    ffffffffffffffffffffffcffffffffffffffffffffffffffffddbdbbddcedbee4eeebeeeeebbeb4ebee4eefebccddbdddbdcfeefcbffffffffffffffffffffffccffccfeee555555eeffcffffffffff
    fffcfffffffffffffffffcccfffffffffffffffffffffffffffffffffcbffefee44eeeeedee4eeeeeeee44effeefbcfffffcbfffcbfffffffffffffffffffffffccffcfee55555555eecfccfffffffff
    fffcffffffffffffffffffcfffffffffffffffffffffffffffffffffffbffeeeeee4ee4eeee44eeee44ee4efeeefbcffffffbbfcbffffffffffffffffffffffffccfcffee555555555eccccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffeffeefefeeefeefefffffeeefefeeffbcfffffffbcbcfffffffffffcffffffffffffccfcfee5555555555eecccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffffffffffffffffffffffccffffffffffffffffffffffccffffffffffffccfcfee5555555555eecfffffffffff
    ffffffffffffcfffffffffffffffffffffffffcffffffffffffffffffffcdddddddddddddddddddddddddddddddbffffffffffffffffffffffccccffffffffffffffcfee5555555555eeffffffffffff
    ffffcfffffffcffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffee5555555555eefccfffffffff
    fffccfffffffccffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffccfcfee5555555555eeecccffffffff
    fffffffffffffcffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfee5555555555eeecccffffffff
    fffffcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffefee5555555555eeecfcffffffff
    fffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffccffffcffeeee5555555555eeecfcffffcfff
    fffffffffffffcfffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffcfcfffcffeeee5555555555eeecfcffffcfff
    fffffffffffffffffffffffffffffffffffffffffffffffffdd777777777777777777777777777777777777777777777777777777777ddfffffffffffffcfcffffcfceee5555555555eeefffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdd777ff77777777777777777777777777777777777777777777777777777ddffffffffffffcfffffffffeee5555555555eeecffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777fff7777777777777777777777777777777777777777777777777777ddffffffffffcfffffffffffeee5555555555eeeccfffffcfff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f1ff7777777777777777777777777777777777777777777777777777dffffffffffcffcffffccfceee5555555555eeeffcfffcffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f11cff77777777777711111111171111711117111117777777777777dffffffffffcfffffffcffceee5555555555eeecfffffcffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f1111f77777777777117777717771771717717771777777777777777dfffffffffcfcffffffccfceee5555555555eeecffffccffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f1111ff7777777777117777717771771717717771777777777777777dffffffffffffffffffcffceee5555555555eeefffffcfffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f11111f7777777777711777717771111711117771777777777777777dffffffffffffffffffcffcfee5555555555eeefffffcfffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f1111ff7777777777771177717771771717177771777777777777777dfffffffffffffffffffffcfee5555555555eeefffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f11ff777777777711111177717771771717717771777777777777777dffffffffffffffffffffffeee5555555555eeefffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777f1ff7777777777777777777777777777777777777777777777777777dfffffffffffffffffcccceeeeeeeeeeeeeeeecfccccfcffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd7777fff77777777777777777777777777777777777777777777777777777dffffffffffffffffccfccefceeefeefeefccccfccccfcccff
    fffffffffffffffffffffffffffffffffffffffffffffffffd77777777777777777777777777777777777777777777777777777777777ddfffffffffffffffffffffcfffcffccffcfcfffcfffcffcfff
    fffffffffffffffffffffffffffffffffffffffffffffffffdd777777777777777777777777777777777777777777777777777777777ddffffffffffffffffffffffffffffffcffffcfffcfffcffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffeefffffffffffffffffffcfffffffcffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccffccfcccccfcfffffffffffffffcbeefffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffeeeeeeeeeeeeeeeeeffffcfffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffd8888888888888888888888888888888888888888888888888888888888dffffffeeeeeeeeeeeeeeeeeecffccfffffecffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdd8888888888888888888888888888888888888888888888888888888888ddfffffeeeeeeeeeeeeeeeeeefffffffffceffffffffcffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd888888888888888888888888888888888888888888888888888888888888dfffffeeeeeeeeeeeeeeeeeefffffffffcffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd888ccccccccc888888888888888888888888888888888888888888888888dfffffeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cdddccdddc888188181118188818811181118888111818881118181888dfffffeeeeeeeeeeeeeeeeeeffffffffffffffffcfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cdddcd1ddc888188181818188818811181118888111818881118181888dfffffeeeeeeeeeeeeeeeeeefffffffffffffffcbfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cddddddddc888188181818188818881881818888181818881818181888dfffffeeeeeeeeeeeeeeeeeefffffffffffffff998ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cddddddddc888111181818181818881881818888111818881118811888dfffffeeeeeeeeeeeeeeeeeeffffffffffffff6966cfffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cddddddddc888188181818118118881881818888188818881118818888dffffffeeeeeeeeeeeeeeeeeffffffcffffffc99966fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cbbbbdbbbc888188181118188818881881118888188811181818818888dffffffffffffffffffffffffffffcbcffffff66666fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd88cccccccccc888888888888888888888888888888888888888888888888dfffffffffffffffffffffffffffcbbccfffff66686fffffff
    fffffcccfffffffffffffffffffffffffffffffffffffffffd88cccccccccc888888888888888888888888888888888888888888888888dfffffffffffffeeffffffffffffc3accffcff66688fffffff
    ffffcccccffffffffffffffffffffffffffffffffffffffffdd88888888888888888888888888888888888888888888888888888888888dfffffffffffffeeefffffffffffcaaccffb6886688fffffff
    fffccfccfccffffffffffffffffffffffffffffffffffffffcdc888888888888888888888888888888888888888888888888888888888dffffffffffffffeeeffffffffbbfcaaccff6688668fc6fffff
    ffffffffffccffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffeeeffffffffcbacaacccff68888886cfffff
    ffffffffffccfffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffffffffeefffffffffcccccccccff88fccf86cfffff
    fffffffffffffffff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffffffffffffffffffffffff
    ff77777777777777777777777777777777777777777cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777eee7777cccccccceeccccccccccccff
    ffc7777e77777777eeeeee77ee77eee77eee77e7777effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe777eee7eeeee7eee7eeeeeee7eeeeeeeee7eeeeeecceeccff
    fffcefefeeeefeefeefefeeeeeeeeeeeeeffeeeeeee7cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77eeeefeefeffeeefeefeeeffeefeffeeefeffeeeefccfccff
    ffffffccfffecffcecffeeffeecfeecffceffc7efceecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffeeffeecffcecffeefceeffceffccfccfcecffcccffcfff
    fffffffcfffccfffccffccfffcfffccffccffceffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccfffcffffcfffccffccffccfffccffffcffffcfffffff
    fffffffcfffccffffffffcfffcfffcffffcfffcffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfffcffffcffffcffccfffcffffcffffcffffcfffffff
    fffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffcfffcfffcfffffffffcfeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcefefffffffffcfffffffffffccfffffffffffffcffffffff
    fffffffffffffffffffffcffffffffcfffcffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeffffffffcccfffffffffffffffffffffffffcffffffff
    fffffffffffccfffffffffffffffffffffeefffffccffffcfffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffccfffffffffcffffffffffffffffffffffffffcfffffffff
    fffffcfffffffcffffffffffffcffffffffecffffffffffcffffffffffffffffffffffffffffffffffffffffffffffccffffffffffccfffffffffccffffffffffffffffffffffccfffffffffffffffff
    ffffffcffffffffffffffffffcccffffffffcfffffffffcccffffffffffffffffffffffffffffffffffffffffffffccccfffffffffcffffffffffcffffffffffffffffffffffeeffffffffffffffffff
    ffffffffffffffffffcffffffcfffffffffffffffcffffcccffffffffffffffffffffffffffffffffffffffffffffccccffffffffcccfffffcfffffffffffffffffffffffffeefffffffffffffffffff
    ffffffffffffffffffecfffffffffffffffffffffcfffffccffffffffffffffffffffffffffffffffffffffffffffccccffffffffcccfffffecfffffffffffffffffffffffceffffffffffffffffffff
    fffffffffffffffffffecfffffffffffffffffffffffffcccfffffccfffffffffffccffffffffffffffffffffffffcccccfffffffcccffffcffcffffffffffffffffcffffffcffffffffffffffffffff
    ffffffffffffffffffffffffffffcfffffffffffffffffcfccffffccfffffffffffccffffffffffffffffffffffffccfccfffffffcccfffccfffffffffffcefffffccfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffeecfffffffcfffffffffccffffcccfffffffffffccffffffffffffffffffccffcccccfffffffccccffffcfffcffffffcfffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffcfffffffcecfffffccccffffcccfffffffffffccffffffffffffffffffccffccccccffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffeeffffffccccfffcccffffffffffcccfffffffffffffffffcccfffcccfcffcffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffcffffffcfccfffcccffffffffffffcfffffffffffffffffcccfffccffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffcffcfcccfffffffffffcfffffffffffffffffccfffccfffffffffccffcffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffccffffffffffffffffffffffffffffcccfffccfffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
Menu_Button = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Button)
animation.runImageAnimation(
Menu_Button,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . 2 2 1 1 1 1 2 . . 
    . . . . 2 2 3 3 1 1 1 1 1 1 . . 
    . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
    . . . . . . 2 2 3 1 1 1 1 2 . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 3 . . . . . . 
    . . . . . . 1 3 . 3 3 . . . . . 
    . . . . . . 1 . . . 3 2 2 3 . . 
    . . . . . 1 3 . . . 2 2 1 3 3 . 
    . . . . . 1 3 . 2 2 3 1 1 1 3 . 
    . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
    . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
    . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
    . . . . . 1 3 . 2 2 3 1 1 1 3 . 
    . . . . . 1 3 . . . 2 2 1 3 3 . 
    . . . . . . 1 . . . 3 2 2 3 . . 
    . . . . . . 1 3 . 3 3 . . . . . 
    . . . . . . . 1 1 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . . 3 . . . . . 
    . . . . 3 3 . . . . 3 3 . . . . 
    . . . . 3 . . . . . . 3 3 . . . 
    . . . . . . . . . . . . 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 . . . . . . . . . . . . . 
    . . 3 . . . . . . . . . . 3 . . 
    . . 3 . . . . . . . . . . 3 . . 
    . . . . . . . . . . . . . 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 3 . . . . . . 3 . . . . 
    . . . . 3 3 . . . . 3 3 . . . . 
    . . . . . . . . . 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Menu_Button.setPosition(38, 66)
menuActive = false
powerUpState = false
Menu_Button.setFlag(SpriteFlag.Invisible, true)
menuStartGame = false
menuAnswerNow = false
IsRespawning = false
myHero = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
myHeroUP = sprites.create(img`
    . . . . 5 . 5 . 5 . 5 . . . . . 
    . . . . 5 5 5 5 5 5 f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 4 d d 4 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 2 f f f f 2 f 6 6 f . 
    . . f f d 2 5 2 2 5 2 d f f . . 
    . . f d d f 2 5 5 2 f d d f . . 
    . . . f f 2 2 2 2 2 2 f f . . . 
    . . . f 2 2 5 2 2 5 2 2 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Challenge_12 = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Challenge_1)
Challenge_32 = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Challenge_3)
Challenge_22 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Challenge_2)
Imposter_1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Imposter_2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
killer_1 = sprites.create(img`
    .......fff......
    ......fbbf......
    .....fbbcbf.....
    ....fc1bbbf.....
    ...fcc11bbbf....
    ..f31c11bbbf....
    ..f33311bbbf....
    .c1c1311bbbf....
    .c11cc1ffbbf....
    .c111c1ffbbf....
    .c111111bbbcf...
    .cfc11bbbcbccc..
    .fbbbbbccbbccdc.
    fbdbbbbbbcbcbddc
    fdbbbbbccbbcbbdc
    fbbfcbbbbbbccbbf
    fbfdccbbbbbfffbf
    ffddcccbbbcf..ff
    .cddccccccf.....
    ..cdccccccf.....
    ..cdbcccccf.....
    ...cdccccf......
    ...cbccccf......
    ....ccccf.......
    .....fccf.......
    .....fcbfc......
    .....fbbddc.....
    ....fbcbbddc....
    ...fbbccbbbc....
    ..fbbcfffbbbc...
    ..fbff...fcbc...
    ..ff.......cc...
    `, SpriteKind.killer)
killer_2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.killer)
killer_3 = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
    c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
    b 5 4 b 4 4 4 c 5 5 5 b c c . . 
    c 4 5 5 b 4 4 c 5 5 5 c b b . . 
    c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
    c 5 5 5 5 c 4 c c c c c c 5 c . 
    . c c c c c c . . . . . c c c . 
    `, SpriteKind.killer)
killer_boss = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.killer)
exitDoor2 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.exitDoor)
exitDoorFinal2 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.exitDoorFinal)
powerUp = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerUp)
killer_1.setFlag(SpriteFlag.Ghost, true)
killer_2.setFlag(SpriteFlag.Ghost, true)
killer_3.setFlag(SpriteFlag.Ghost, true)
killer_boss.setFlag(SpriteFlag.Ghost, true)
killer_1.setFlag(SpriteFlag.Invisible, true)
killer_2.setFlag(SpriteFlag.Invisible, true)
killer_3.setFlag(SpriteFlag.Invisible, true)
killer_boss.setFlag(SpriteFlag.Invisible, true)
killer_1.setPosition(160, 120)
killer_2.setPosition(160, 120)
killer_3.setPosition(160, 120)
killer_boss.setPosition(160, 120)
myHero.setFlag(SpriteFlag.Invisible, true)
myHeroUP.setFlag(SpriteFlag.Invisible, true)
Challenge_12.setFlag(SpriteFlag.Invisible, true)
Challenge_22.setFlag(SpriteFlag.Invisible, true)
Challenge_32.setFlag(SpriteFlag.Invisible, false)
Imposter_1.setFlag(SpriteFlag.Invisible, true)
Imposter_2.setFlag(SpriteFlag.Invisible, true)
exitDoor2.setFlag(SpriteFlag.Invisible, true)
exitDoorFinal2.setFlag(SpriteFlag.Invisible, true)
powerUp.setFlag(SpriteFlag.Invisible, true)
Challenge_32.setPosition(146, 21)
myHero.setPosition(0, 0)
myHeroUP.setPosition(0, 0)
forever(function () {
    animation.runImageAnimation(
    Challenge_12,
    [img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `],
    200,
    false
    )
    Challenge_12.vx = -100
    pause(2000)
    animation.runImageAnimation(
    Challenge_12,
    [img`
        . . . . c c c c c c c . . . . . 
        . . . c 6 7 7 7 7 7 6 c . . . . 
        . . c 6 7 c 6 6 6 6 c 7 c . . . 
        . . c 7 7 6 f 6 6 f 6 7 6 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 7 7 6 1 f f 1 8 7 f . . 
        . . f 7 7 7 f 1 f f 1 f 6 f . . 
        . . f 6 7 7 f 2 2 2 2 f f . . . 
        . . c f 6 7 7 2 2 2 2 f c c . . 
        . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
        c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
        c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 1 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `],
    200,
    false
    )
    Challenge_12.vx = 100
    pause(2000)
})
forever(function () {
    animation.runImageAnimation(
    Challenge_32,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    500,
    false
    )
    Challenge_32.vx = -50
    pause(2000)
    animation.runImageAnimation(
    Challenge_32,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b 1 b b b 1 c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b b 2 2 2 2 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . f f b b b b b b b b c f 
        . . . . f f b b b 1 b b b 1 c c 
        . . . f f f c b b b b b b b b c 
        . . . f f f f b b c 1 f f 1 b c 
        . . . b b b c c b f 1 f f 1 f f 
        . . . c c c c f b f f f f f f f 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c b b c c f f b 2 2 2 f . . 
        . c c c c c f f f f f f f . . . 
        c c c c . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b 1 1 b b b 1 1 c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
    500,
    false
    )
    Challenge_32.vx = 50
    pause(2000)
})
forever(function () {
    animation.runImageAnimation(
    Challenge_22,
    [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    200,
    false
    )
    Challenge_22.vx = -30
    pause(2000)
    animation.runImageAnimation(
    Challenge_22,
    [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    200,
    false
    )
    Challenge_22.vx = 30
    pause(2000)
})
forever(function () {
    animation.runImageAnimation(
    killer_1,
    [img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        ..............fccbbcf............ccc
        ........ffffffccccccff.........ccbbc
        ......ffbbbbbbbbbbbbbcfff.....cdbbc.
        ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
        ....fbbb1111ff1bcbcbbbcccccccbbbcf..
        .....fb11111111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `,img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        .........ffffffccbbcf...............
        ......fffbbbbbbbbcccff..............
        .....fbbbbbbbbbbbbbbbcfff......ccccc
        .....bcbbbbbffbcbcbbbbcccff...cdbbbc
        .....bbb1111ffbbcbcbbbcccccffcddbbc.
        .....fb11111111bcbcbbbcccccccbdbbf..
        ......fccc33c11bbbbbbcccccccccbbcf..
        .......fc131cc11bbbbccccccccffbccf..
        ........f33c1111bbbcccccbdbc..fbbcf.
        .........ff1111cbbbfdddddcc....fbbf.
        ...........ccc1fbdbbfddcc.......fbbf
        ..............ccfbdbbfc..........fff
        .................fffff..............
        `,img`
        ..................ccfff.............
        .................cddbbf.............
        ........fffffffffddbbf..............
        .......fbbbbbbbbbfcbcf..............
        .......fbbc111bffbbccffff...........
        .......fb111111ffbbbbbcccff....ccccc
        ........f1cc3311bbcbcbbccccf..cdbbbc
        ........fcc131c1bbbcbcbcccccfcddbbc.
        .........f111111bbbcbcbccccccbdbbf..
        .........f1111111bbbbbccccccccbbcf..
        ..........f111111bbbbcccccccffbccf..
        ...........c1111cbbbcccccbdbc.fbbcf.
        ............cc11cbbbfddddddc...fbbf.
        ..............cffbdbbfdddcc.....fbbf
        .................fbdbbfcc........fff
        ..................fffff.............
        `,img`
        ....................ccfff...........
        ..........fffffffffcbbbbf...........
        .........fbbbbbbbbbfffbf............
        .........fbb111bffbbbbff............
        .........fb11111ffbbbbbcff..........
        .........f1cccc11bbcbcbcccf.........
        ..........fc1c1c1bbbcbcbcccf...ccccc
        ............c3331bbbcbcbccccfccddbbc
        ...........c333c1bbbbbbbcccccbddbcc.
        ...........c331c11bbbbbcccccccbbcc..
        ..........cc13c111bbbbccccccffbccf..
        ..........c111111cbbbcccccbbc.fccf..
        ...........cc1111cbbbfdddddc..fbbcf.
        .............cccffbdbbfdddc....fbbf.
        ..................fbdbbfcc......fbbf
        ...................fffff.........fff
        `,img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `,img`
        ....................................
        ....................................
        ....................................
        ...............ccffff...............
        ..............cddbbbf...............
        .......ffffffcddbbbf................
        .....ffbbbbbbbbbbbbbcfff.......ccccc
        ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
        ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
        .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
        .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
        .ffbb1111fffbbcbbbbcccccccbcffbccf..
        ..ff111111111bbbbccccccbbbcc..fbbcf.
        ....ccccccc111bdbbbfddbccc.....ffbbf
        ........ccccccfbdbbbfcc..........fff
        ...............ffffff...............
        `],
    200,
    false
    )
    killer_1.vy = -100
    pause(2000)
    animation.runImageAnimation(
    killer_1,
    [img`
        ..............fffcc.................
        ..............fbbddc................
        ...............fbbddc...............
        ccc............fcbbccf..............
        cbbcc.........ffccccccffffff........
        .cbbdc.....fffcbbbbbbbbbbbbbff......
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff....
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf....
        ..fcbbbcccccccbbbcbcb1ff1111bbbf....
        ..fccbcccccccccbbbbbb11111111bf.....
        .fcbbfffccccccccbbbb11cc33cccf......
        .fbbf...cbdbcccccbbb111c131cf.......
        fbbf.....ccdddddfbbbc111c33f........
        fff........ccddfbbdbf1111ff.........
        .............cfbbdbfccccc...........
        ..............fffff.................
        `,img`
        ..............fffcc.................
        ..............fbbddc................
        ...............fbbddc...............
        ...............fcbbccffffff.........
        ..............ffcccbbbbbbbbfff......
        ccccc......fffcbbbbbbbbbbbbbbbf.....
        cbbbdc...ffcccbbbbcbcbffbbbbbcb.....
        .cbbddcffcccccbbbcbcbbff1111bbb.....
        ..fbbdbcccccccbbbcbcb11111111bf.....
        ..fcbbcccccccccbbbbbb11c33cccf......
        ..fccbffccccccccbbbb11cc131cf.......
        .fcbbf..cbdbcccccbbb1111c33f........
        .fbbf....ccdddddfbbbc1111ff.........
        fbbf.......ccddfbbdbf1ccc...........
        fff..........cfbbdbfcc..............
        ..............fffff.................
        `,img`
        .............fffcc..................
        .............fbbddc.................
        ..............fbbddfffffffff........
        ..............fcbcfbbbbbbbbbf.......
        ...........ffffccbbffb111cbbf.......
        ccccc....ffcccbbbbbff111111bf.......
        cbbbdc..fccccbbcbcbb1133cc1f........
        .cbbddcfcccccbcbcbbb1c131ccf........
        ..fbbdbccccccbcbcbbb111111f.........
        ..fcbbccccccccbbbbb1111111f.........
        ..fccbffcccccccbbbb111111f..........
        .fcbbf.cbdbcccccbbbc1111c...........
        .fbbf...cddddddfbbbc11cc............
        fbbf.....ccdddfbbdbffc..............
        fff........ccfbbdbf.................
        .............fffff..................
        `,img`
        ...........fffcc....................
        ...........fbbbbcfffffffff..........
        ............fbfffbbbbbbbbbf.........
        ............ffbbbbffb111bbf.........
        ..........ffcbbbbbff11111bf.........
        .........fcccbcbcbb11cccc1f.........
        ccccc...fcccbcbcbbb1c1c1cf..........
        cbbddccfccccbcbcbbb1333c............
        .ccbddbcccccbbbbbbb1c333c...........
        ..ccbbcccccccbbbbb11c133c...........
        ..fccbffccccccbbbb111c31cc..........
        ..fccf.cbbcccccbbbc111111c..........
        .fcbbf..cdddddfbbbc1111cc...........
        .fbbf....cdddfbbdbffccc.............
        fbbf......ccfbbdbf..................
        fff.........fffff...................
        `,img`
        ..........fffcc...fffffff...........
        ..........fbbbbcffbbbbbbbf..........
        ...........fbffbbbbb111bbf..........
        ...........ffbbbbff11111bf..........
        .........ffcbbbbbff1cccc1f..........
        ........fcccbcbcbb1c1c1cff..........
        ccccc..fcccbcbcbbb1333ccf...........
        cbbddcfccccbcbcbbb1c333c............
        .ccbddcccccbbbbbbb1c333c............
        ..ccbbccccccbbbbb11c333c............
        ..fccbfccccccbbbb11c133cc...........
        ..fccfcbbcccccbbbc11c31cc...........
        .fcbbf.cdddddfbbbc111111c...........
        .fbbf...cdddfbbdbf1111cc............
        fbbf.....ccfbbdbfffccc..............
        fff........fffff....................
        `,img`
        ....................................
        ....................................
        ....................................
        ...............ffffcc...............
        ...............fbbbddc..............
        ................fbbbddcffffff.......
        ccccc.......fffcbbbbbbbbbbbbbff.....
        cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
        .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
        ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
        ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
        ..fccbffcbcccccccbbbbcbbfff1111bbff.
        .fcbbf..ccbbbccccccbbbb111111111ff..
        fbbff.....cccbddfbbbdb111ccccccc....
        fff..........ccfbbbdbfcccccc........
        ...............ffffff...............
        `],
    200,
    false
    )
    killer_1.vy = 100
    pause(2000)
})
forever(function () {
    animation.runImageAnimation(
    killer_2,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff1111bff.......
        .......fb1111111bf......
        .......f111111111f......
        ......fd1111111ffff.....
        ......fd111dd1c111bf....
        ......fb11fcdf1b1bff....
        ......f11111bfbfbff.....
        ......f1b1bdfcffff......
        ......fbfbfcfcccf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    killer_2.vx = -100
    pause(2000)
    animation.runImageAnimation(
    killer_2,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    killer_2.vx = 100
    pause(2000)
})
forever(function () {
    animation.runImageAnimation(
    killer_3,
    [img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ..........cc.c6cc33333c.
        .........b55c6c55c33333c
        .........ff5c6c5ff33333c
        .........ff5c6c5ff6333cc
        .........b553c355c6666cc
        ..........b55355c333333c
        .........cc55555bcc3333c
        ........c5545554b55c33c.
        ........b54b4444bb5cbb..
        ........c455b4b5554c45b.
        ........c555c4c555c4c5c.
        ........c5555c5555c4c5c.
        .........ccccccccc..ccc.
        `,img`
        ........................
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        .............c66333333c.
        ..........bccc66cc33333c
        ..........b55c6c55c3333c
        ..........ff5c6c5ff333cc
        ..........ff5ccc5ff666cc
        ...........b55355c33333c
        ..........cc55555bcc333c
        .........c5cccccccc5c3c.
        .........c5555c55555cb..
        .........c555c4c5554c5b.
        .........c455c4c555c45c.
        ..........ccc444ccccccc.
        `,img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ............ccccccc333c.
        ...........c555c555c333c
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........cc55ccc555c3cc
        .........c55c5c55c55c6cc
        .........ff5ccc5ffc4c33c
        .........ff5ccc5ffc5c33c
        .........c553c355c45ccc.
        ..........c55555c44c45c.
        ..........cc55554cccc5c.
        ...........cc5554cccc5c.
        ............cccccc..ccc.
        `,img`
        ....................cc..
        ............cccccccc63c.
        ...........c555c555c36cc
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........cc55ccc555c3cc
        .........ff5ccc5ff55c6cc
        .........ff5ccc5ffc4c33c
        .........c55ccc55cc5c33c
        .........c55ccc55cc5c33c
        .........c553c355c45ccc.
        ..........c55555c44c45c.
        ..........cc55554cccc5c.
        ...........cc5554cccc5c.
        ............cccccc..ccc.
        `,img`
        ........................
        ........................
        ........................
        .................cc.....
        .............cccc63c....
        ...........cc633336cc...
        ..........c6666333333c..
        ..........c6666633333c..
        .......cc.cccc666333cc..
        ......c55ccc55c66666cc..
        ......ff5ccc5ff663333c..
        ......ff5ccc5ff633333c..
        ..bbbbbbbb5555c333333c..
        .c55c555554ccccc3c45c...
        c55c55555545554cccc5c...
        ccccccccccccccccc.ccc...
        `,img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        .............c66333333c.
        ............c6666333333c
        .........bccc66cc633333c
        .........b55c6c55c6333cc
        .........ff5c6c5ff6666cc
        .........ff53cc5ff33333c
        ..........b553555c33333c
        ..........c45554c33333c.
        .......bbbbbb44bccccbb..
        ......c5b555bbc55ccc45b.
        ......c5c5555455ccccc5c.
        .....c5c5555545cc...c5c.
        .....ccccccccccc....ccc.
        `],
    200,
    false
    )
    killer_3.vx = -100
    pause(2000)
    animation.runImageAnimation(
    killer_3,
    [img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333cc6c.cc..........
        c33333c55c6c55b.........
        c33333ff5c6c5ff.........
        cc3336ff5c6c5ff.........
        cc6666c553c355b.........
        c333333c55355b..........
        c3333ccb55555cc.........
        .c33c55b4555455c........
        ..bbc5bb4444b45b........
        .b54c4555b4b554c........
        .c5c4c555c4c555c........
        .c5c4c5555c5555c........
        .ccc..ccccccccc.........
        `,img`
        ........................
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c33333cc66cccb..........
        c3333c55c6c55b..........
        cc333ff5c6c5ff..........
        cc666ff5ccc5ff..........
        c33333c55355b...........
        c333ccb55555cc..........
        .c3c5cccccccc5c.........
        ..bc55555c5555c.........
        .b5c4555c4c555c.........
        .c54c555c4c554c.........
        .ccccccc444ccc..........
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c333ccccccc............
        c333c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55c55c5c55c.........
        c33c4cff5ccc5ff.........
        c33c5cff5ccc5ff.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ..cc....................
        .c36cccccccc............
        cc63c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55ff5ccc5ff.........
        c33c4cff5ccc5ff.........
        c33c5cc55ccc55c.........
        c33c5cc55ccc55c.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ........................
        ........................
        ........................
        .....cc.................
        ....c36cccc.............
        ...cc633336cc...........
        ..c3333336666c..........
        ..c3333366666c..........
        ..cc333666cccc.cc.......
        ..cc66666c55ccc55c......
        ..c333366ff5ccc5ff......
        ..c333336ff5ccc5ff......
        ..c333333c5555bbbbbbbb..
        ...c54c3ccccc455555c55c.
        ...c5cccc45554555555c55c
        ...ccc.ccccccccccccccccc
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c3333336666c............
        c333336cc66cccb.........
        cc3336c55c6c55b.........
        cc6666ff5c6c5ff.........
        c33333ff5cc35ff.........
        c33333c555355b..........
        .c33333c45554c..........
        ..bbccccb44bbbbbb.......
        .b54ccc55cbb555b5c......
        .c5ccccc5545555c5c......
        .c5c...cc5455555c5c.....
        .ccc....ccccccccccc.....
        `],
    200,
    false
    )
    killer_3.vx = 100
    pause(2000)
})
forever(function () {
    animation.runImageAnimation(
    killer_boss,
    [img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        .........ccc............
        .........cccccccc.......
        ......cc..cc55555cc.....
        ......cccc555555555c....
        ......ccb55555555555c...
        ...cc..b55555ff155555c..
        ...cccb5555555ff55d55c..
        ....ccb55555d55555555c..
        .....b55555d5555d5555c..
        ..cc.b555ddd55555bbbbc..
        ..cccd55ddddd5555d555c..
        ...ccdd5dbdddbbbd555c...
        ....bdddb555bbbbbccc....
        ..cccdddb555cbbbbbbc....
        ...ccddddb555cbbbbbbc...
        ....cdddddb555cbbbbbc...
        ...ccddddddb55cbbbbbcc..
        ..ccbddddd55bcbbbbbbcc..
        ccdddddddd5555bbbbbbc...
        cdddddddbdd555bbbbbc....
        .ccddddbbbdd55cbbccc....
        ...cccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........ccc.............
        ........cccccccc........
        .....cc..cc55555cc......
        .....cccc555555555c.....
        .....ccb55555555555c....
        ...cc.b5555bcc555555c...
        ...ccb55555555c55d55c...
        ....cb5555dd55555555c...
        .....5555dd5555d5555c...
        ..cc.555dd555555dbbbc...
        ..ccc55ddd555555d555c...
        ...ccd5dbdd5555d555c....
        ....bdddb555bbbbbccc....
        ..cccdddb555cbbbbbbbc...
        ...ccddddb555cbbbbbbbc..
        ....cdddddb555cbbbbbbc..
        ...ccddddddb55cbbbbbbcc.
        ...cbddddd55bcbbbbbbbcc.
        ..cbdddddd5555bbbbbbbc..
        .cddddddbdd555bbbbbbc...
        cddddddbbbdd55cbbccc....
        ccccccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bbb335c.
        cdcccdddddb55bb5bb3335c.
        cddbddddddb555bb5b3335c.
        cddddddddddb5555b53335c.
        ccddddddbd55bb55c5555c..
        .ccddddbbbdd55cccbccc...
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bb3335c.
        cdcccdddddb55bb55b3335c.
        cddbddddddb555bb553335c.
        cddddddddddb5555b5555c..
        ccddddddbd55bb55cbccc...
        .ccddddbbbdd55ccbbc.....
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd55bbb335c.
        ...ccbddddddddd5bb3335c.
        .ccccdddddddddd55b3335c.
        cdcccdddddb55bbd553335c.
        cddbddddddb555bb55555c..
        cddddddddddb5555bbccc...
        ccddddddbd55bb55cbc.....
        .ccddddbbbdd55ccbdc.....
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `],
    200,
    false
    )
    killer_boss.vx = -100
    pause(2000)
    animation.runImageAnimation(
    killer_boss,
    [img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ............ccc.........
        .......cccccccc.........
        .....cc55555cc..cc......
        ....c555555555cccc......
        ...c55555555555bcc......
        ..c555551ff55555b..cc...
        ..c55d55ff5555555bccc...
        ..c55555555d55555bcc....
        ..c5555d5555d55555b.....
        ..cbbbb55555ddd555b.cc..
        ..c555d5555ddddd55dccc..
        ...c555dbbbdddbd5ddcc...
        ....cccbbbbb555bdddb....
        ....cbbbbbbc555bdddccc..
        ...cbbbbbbc555bddddcc...
        ...cbbbbbc555bdddddc....
        ..ccbbbbbc55bddddddcc...
        ..ccbbbbbbcb55dddddbcc..
        ...cbbbbbb5555ddddddddcc
        ....cbbbbb555ddbdddddddc
        ....cccbbc55ddbbbddddcc.
        ...ccdddccddddbcbbccc...
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        .............ccc........
        ........cccccccc........
        ......cc55555cc..cc.....
        .....c555555555cccc.....
        ....c55555555555bcc.....
        ...c555555ccb5555b.cc...
        ...c55d55c55555555bcc...
        ...c55555555dd5555bc....
        ...c5555d5555dd5555.....
        ...cbbbd555555dd555.cc..
        ...c555d555555ddd55ccc..
        ....c555d5555ddbd5dcc...
        ....cccbbbbb555bdddb....
        ...cbbbbbbbc555bdddccc..
        ..cbbbbbbbc555bddddcc...
        ..cbbbbbbc555bdddddc....
        .ccbbbbbbc55bddddddcc...
        .ccbbbbbbbcb55dddddbc...
        ..cbbbbbbb5555ddddddbc..
        ...cbbbbbb555ddbddddddc.
        ....cccbbc55ddbbbddddddc
        ...ccdddccddddbcbbcccccc
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555555ccb55555bccc.....
        c55d55c555555555bc......
        c5555555555555555b......
        .cbbb1bb5555dd555b.cc...
        .c533bbbb5ddddd55dcc....
        .c533bbbb5ddddddddbcc...
        .c533bbb55dddddddddcccc.
        .c5333bb5bb55bdddddcccdc
        .c5333b5bb555bddddddbddc
        .c53335b5555bddddddddddc
        ..c5555c55bb55dbddddddcc
        ...cccbccc55ddbbbddddcc.
        ....cdddccddddbcbbbcc...
        ....cccccd555ddcccc.....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555555ccb55555bccc.....
        c55d55c555555555bc......
        c5555555555555555b......
        .cbbb1bb5555dd555b.cc...
        .c533bbbb5ddddd55dcc....
        .c533bbbb5ddddddddbcc...
        .c5333bb55dddddddddcccc.
        .c5333b55bb55bdddddcccdc
        .c533355bb555bddddddbddc
        ..c5555b5555bddddddddddc
        ...cccbc55bb55dbddddddcc
        .....cbbcc55ddbbbddddcc.
        ....cdddccddddbcbbbcc...
        ....cccccd555ddcccc.....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555555ccb55555bccc.....
        c55d55c555555555bc......
        c5555555555555555b......
        .cbbb1bb5555dd555b.cc...
        .c533bbb55ddddd55dcc....
        .c5333bb5dddddddddbcc...
        .c5333b55ddddddddddcccc.
        .c533355dbb55bdddddcccdc
        ..c55555bb555bddddddbddc
        ...cccbb5555bddddddddddc
        .....cbc55bb55dbddddddcc
        .....cdbcc55ddbbbddddcc.
        ....cdddccddddbcbbbcc...
        ....cccccd555ddcccc.....
        ........cccccccc........
        `],
    200,
    false
    )
    killer_boss.vx = 100
    pause(2000)
})
