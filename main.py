@namespace
class SpriteKind:
    Button = SpriteKind.create()
    startingHole = SpriteKind.create()
    dieHole = SpriteKind.create()
    Challenge_1 = SpriteKind.create()
    Challenge_2 = SpriteKind.create()
    exitDoor = SpriteKind.create()
    Challenge_3 = SpriteKind.create()
    exitDoorFinal = SpriteKind.create()
    startingHopeTree = SpriteKind.create()

def on_on_overlap(sprite4, otherSprite3):
    if info.score() == 100:
        game.splash("Mathematics Master!",
            "Your Score is " + ("" + str(info.score())))
        game.set_game_over_playable(True, music.melody_playable(music.power_up), False)
        game.splash("Level Boss",
            "Mathematics Master!, Are you ready for final fight?")
        startGameLvl2()
    else:
        game.splash("Better Luck Next Time!",
            "Your Score is " + ("" + str(info.score())))
        game.game_over(False)
        game.set_game_over_playable(False, music.melody_playable(music.power_down), False)
sprites.on_overlap(SpriteKind.player, SpriteKind.exitDoor, on_on_overlap)

def on_up_pressed():
    global menuActive, menuAnswerNow
    if menuActive == True:
        Menu_Button.set_position(38, 66)
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.IN_BACKGROUND)
    if menuStartGame == True:
        menuActive = False
        music.play(music.melody_playable(music.jump_up),
            music.PlaybackMode.IN_BACKGROUND)
        if myHero.is_hitting_tile(CollisionDirection.BOTTOM):
            myHero.vy = -250
    if menuAnswerNow == True:
        if theCorrectAnswer == True:
            info.set_score(100)
            game.splash("Correct! You Win")
            menuAnswerNow = False
        else:
            info.set_score(0)
            game.splash("Incorrect! Continue your journey!")
            menuAnswerNow = False
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap2(sprite6, otherSprite6):
    global IsRespawning
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.IN_BACKGROUND)
    pause(200)
    if IsRespawning == False:
        IsRespawning = True
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.IN_BACKGROUND)
        info.change_life_by(-1)
        if info.life() > 0:
            RespawnChallenge()
        else:
            music.stop_all_sounds()
            game.set_game_over_effect(False, effects.blizzard)
            game.splash("Game Over")
            music.play(music.create_song(hex("""
                    002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a
                    """)),
                music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.Challenge_1, SpriteKind.player, on_on_overlap2)

def on_b_pressed():
    global menuAnswerNow, CorrectImposter, theCorrectAnswer
    menuAnswerNow = True
    pause(2000)
    CorrectImposter = randint(1, 2)
    if myHero.overlaps_with(Imposter_1):
        if CorrectImposter == 1:
            Imposter_1.say_text("Press UP if answer is correct else press DOWN:" + MathAnswerText_Correct,
                5000,
                False)
            theCorrectAnswer = True
        else:
            Imposter_1.say_text("Press UP if answer is correct else press DOWN:" + MathAnswerText_Wrong,
                5000,
                False)
            theCorrectAnswer = False
    if myHero.overlaps_with(Imposter_2):
        if CorrectImposter == 1:
            Imposter_2.say_text("Press UP if answer is correct else press DOWN:" + MathAnswerText_Correct,
                5000,
                False)
            theCorrectAnswer = True
        else:
            Imposter_2.say_text("Press UP if answer is correct else press DOWN:" + MathAnswerText_Wrong,
                5000,
                False)
            theCorrectAnswer = False
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap3(sprite, otherSprite):
    global IsRespawning
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.IN_BACKGROUND)
    pause(200)
    if IsRespawning == False:
        IsRespawning = True
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.IN_BACKGROUND)
        info.change_life_by(-1)
        if info.life() > 0:
            RespawnChallenge()
        else:
            music.stop_all_sounds()
            game.splash("Game Over")
            music.play(music.create_song(hex("""
                    002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a
                    """)),
                music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.Challenge_2, SpriteKind.player, on_on_overlap3)

def on_on_overlap4(sprite32, otherSprite4):
    sprites.destroy(startHole, effects.rings, 1000)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    pause(1000)
    myHero.set_position(84, 120)
sprites.on_overlap(SpriteKind.player, SpriteKind.startingHole, on_on_overlap4)

def RespawnChallenge():
    global IsRespawning
    myHero.set_flag(SpriteFlag.GHOST, True)
    myHero.set_position(10, 10)
    myHero.vx = 0
    myHero.vy = 0
    pause(500)
    myHero.set_flag(SpriteFlag.GHOST, False)
    IsRespawning = False
def startGameLvl2():
    global menuStartGame, menuActive, hopeTree, QuestionID, MathQuestionText, MathAnswerText_Correct, MathAnswerText_Wrong
    music.stop_all_sounds()
    music.play(music.string_playable("C4:2 - - G3:2 - - A3:2 - - C4:2 - - E4:2 - G4:1 A4:1 B4:1 C5:2 B4:1 A4:1 G4:1 E4:2 C4:2 G3:2 C4:2",
            120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    menuStartGame = True
    menuActive = False
    Menu_Button.set_flag(SpriteFlag.INVISIBLE, True)
    tiles.set_current_tilemap(tilemap("""
        level2
        """))
    scene.set_background_image(img("""
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
        """))
    myHero.set_flag(SpriteFlag.INVISIBLE, False)
    Imposter_1.set_flag(SpriteFlag.INVISIBLE, True)
    Imposter_2.set_flag(SpriteFlag.INVISIBLE, True)
    Imposter3.set_flag(SpriteFlag.INVISIBLE, False)
    Imposter4.set_flag(SpriteFlag.INVISIBLE, False)
    exitDoor2.set_flag(SpriteFlag.INVISIBLE, True)
    exitDoorFinal2.set_flag(SpriteFlag.INVISIBLE, False)
    Challenge_12.set_flag(SpriteFlag.INVISIBLE, True)
    Challenge_22.set_flag(SpriteFlag.INVISIBLE, True)
    Challenge_32.set_flag(SpriteFlag.INVISIBLE, True)
    hopeTree = sprites.create(img("""
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
            """),
        SpriteKind.startingHopeTree)
    tiles.place_on_tile(exitDoorFinal2, tiles.get_tile_location(89, 8))
    tiles.place_on_tile(hopeTree, tiles.get_tile_location(2, 8))
    tiles.place_on_tile(myHero, tiles.get_tile_location(1, 8))
    tiles.place_on_tile(Imposter3, tiles.get_tile_location(5, 4))
    tiles.place_on_tile(Imposter4, tiles.get_tile_location(2, 4))
    QuestionID = randint(1, 5)
    if QuestionID == 1:
        MathQuestionText = "2,5,8,11,_"
        MathAnswerText_Correct = "14"
        MathAnswerText_Wrong = "20"
    elif QuestionID == 2:
        MathQuestionText = "30,27,24,21,_"
        MathAnswerText_Correct = "18"
        MathAnswerText_Wrong = "32"
    elif QuestionID == 3:
        MathQuestionText = "3,6,12,24,_"
        MathAnswerText_Correct = "48"
        MathAnswerText_Wrong = "12"
    elif QuestionID == 4:
        MathQuestionText = "1,4,9,16,25,_"
        MathAnswerText_Correct = "36"
        MathAnswerText_Wrong = "33"
    elif QuestionID == 5:
        MathQuestionText = "1,1,2,3,5,8,13,_"
        MathAnswerText_Correct = "21"
        MathAnswerText_Wrong = "25"
    else:
        MathQuestionText = "Error"
        MathAnswerText_Correct = "Error"
        MathAnswerText_Wrong = "Error"
    myHero.say_text(MathQuestionText, 5000, False)
    pause(500)
    Imposter3.say_text(MathAnswerText_Correct, 2000, False)
    pause(500)
    Imposter4.say_text(MathAnswerText_Wrong, 2000, False)
    pause(500)
    Imposter3.say_text("Do you think you can find fight BOSS?", 1000, False)
    pause(1000)
    Imposter4.say_text("See You, Good Luck! Hahaha", 1000, False)
    pause(1000)
    scene.camera_follow_sprite(Imposter3)
    animation.run_image_animation(Imposter3,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        False)
    Imposter3.follow(hopeTree, 20)
    pause(3000)
    scene.camera_follow_sprite(Imposter4)
    animation.run_image_animation(Imposter4,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        False)
    Imposter4.follow(hopeTree, 20)
    pause(3000)
    scene.camera_follow_sprite(myHero)
    myHero.follow(hopeTree, 20)
    pause(3000)
    myHero.say_text("Again! They run away! Let's fight the BOSS!", 1000, False)
    music.stop_all_sounds()
    music.play(music.string_playable("C5 B A G A B G F G A B C5 B A G F E D E F G E D C D E G E D C - G F E D C",
            120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    controller.move_sprite(myHero, 100, 0)
    tiles.place_on_tile(Imposter_1, tiles.get_tile_location(61, 3))
    myHero.ay = 500
    Imposter_1.set_flag(SpriteFlag.GHOST, False)
    Imposter_1.set_flag(SpriteFlag.INVISIBLE, False)
    tiles.place_on_tile(Imposter_2, tiles.get_tile_location(80, 7))
    Imposter_2.set_flag(SpriteFlag.GHOST, False)
    Imposter_2.set_flag(SpriteFlag.INVISIBLE, False)
    info.set_life(3)
    info.set_score(0)

def on_on_overlap5(sprite2, otherSprite2):
    sprite2.start_effect(effects.warm_radial, 500)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    pause(1000)
    sprite2.set_flag(SpriteFlag.INVISIBLE, True)
    sprite2.set_flag(SpriteFlag.GHOST, True)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.startingHole, on_on_overlap5)

def RespawnPlayer():
    global IsRespawning
    myHero.set_flag(SpriteFlag.GHOST, True)
    myHero.set_position(10, 10)
    myHero.vx = 0
    myHero.vy = 0
    myHero.set_flag(SpriteFlag.GHOST, False)
    IsRespawning = False

def on_a_pressed():
    if menuActive == True:
        if Menu_Button.y == 66:
            music.play(music.melody_playable(music.zapped),
                music.PlaybackMode.IN_BACKGROUND)
            game.splash("Start Now!")
            startGame()
        if Menu_Button.y == 83:
            music.play(music.melody_playable(music.zapped),
                music.PlaybackMode.IN_BACKGROUND)
            game.splash("HOW TO PLAY",
                "Read the question. Find the Imposter with the correct answer! Don't pick the wrong answer. Good luck!")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def startGame():
    global menuStartGame, menuActive, startHole, QuestionID, MathQuestionText, MathAnswerText_Correct, MathAnswerText_Wrong
    menuStartGame = True
    menuActive = False
    Menu_Button.set_flag(SpriteFlag.INVISIBLE, True)
    tiles.set_current_tilemap(tilemap("""
        level1
        """))
    scene.set_background_image(img("""
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
        """))
    myHero.set_flag(SpriteFlag.INVISIBLE, False)
    Challenge_12.set_flag(SpriteFlag.INVISIBLE, False)
    Challenge_22.set_flag(SpriteFlag.INVISIBLE, False)
    Challenge_32.set_flag(SpriteFlag.INVISIBLE, True)
    Imposter_1.set_flag(SpriteFlag.INVISIBLE, False)
    Imposter_2.set_flag(SpriteFlag.INVISIBLE, False)
    Imposter3.set_flag(SpriteFlag.INVISIBLE, True)
    Imposter4.set_flag(SpriteFlag.INVISIBLE, True)
    exitDoor2.set_flag(SpriteFlag.INVISIBLE, False)
    startHole = sprites.create(img("""
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
            """),
        SpriteKind.startingHole)
    tiles.place_on_tile(Challenge_12, tiles.get_tile_location(33, 7))
    tiles.place_on_tile(Challenge_22, tiles.get_tile_location(49, 7))
    tiles.place_on_tile(exitDoor2, tiles.get_tile_location(85, 7))
    startHole.set_position(84, 120)
    myHero.set_position(80, 45)
    Imposter_1.set_position(48, 87)
    Imposter_2.set_position(116, 87)
    QuestionID = randint(1, 5)
    if QuestionID == 1:
        MathQuestionText = "2,5,8,11,_"
        MathAnswerText_Correct = "14"
        MathAnswerText_Wrong = "20"
    elif QuestionID == 2:
        MathQuestionText = "30,27,24,21,_"
        MathAnswerText_Correct = "18"
        MathAnswerText_Wrong = "32"
    elif QuestionID == 3:
        MathQuestionText = "3,6,12,24,_"
        MathAnswerText_Correct = "48"
        MathAnswerText_Wrong = "12"
    elif QuestionID == 4:
        MathQuestionText = "1,4,9,16,25,_"
        MathAnswerText_Correct = "36"
        MathAnswerText_Wrong = "33"
    elif QuestionID == 5:
        MathQuestionText = "1,1,2,3,5,8,13,_"
        MathAnswerText_Correct = "21"
        MathAnswerText_Wrong = "25"
    else:
        MathQuestionText = "Error"
        MathAnswerText_Correct = "Error"
        MathAnswerText_Wrong = "Error"
    myHero.say_text(MathQuestionText, 5000, False)
    pause(500)
    Imposter_1.say_text(MathAnswerText_Correct, 2000, False)
    pause(500)
    Imposter_2.say_text(MathAnswerText_Wrong, 2000, False)
    pause(500)
    Imposter_1.say_text("Do you think you can find us?", 1000, False)
    pause(1000)
    Imposter_2.say_text("See You, Good Luck! Hahaha", 1000, False)
    pause(1000)
    scene.camera_follow_sprite(Imposter_1)
    animation.run_movement_animation(Imposter_1,
        animation.animation_presets(animation.shake),
        100,
        False)
    Imposter_1.follow(startHole, 20)
    pause(3000)
    scene.camera_follow_sprite(Imposter_2)
    animation.run_movement_animation(Imposter_2,
        animation.animation_presets(animation.shake),
        100,
        False)
    Imposter_2.follow(startHole, 20)
    pause(3000)
    scene.camera_follow_sprite(myHero)
    animation.run_movement_animation(myHero,
        animation.animation_presets(animation.parachute_right),
        2000,
        False)
    myHero.follow(startHole, 20)
    pause(3000)
    myHero.say_text("Oh No! They run away! Let's start our adventure seeking the correct answer!",
        1000,
        False)
    music.stop_all_sounds()
    music.play(music.string_playable("C5 B A G A B G F G A B C5 B A G F E D E F G E D C D E G E D C - G F E D C",
            120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    controller.move_sprite(myHero, 100, 0)
    tiles.place_on_tile(Imposter_1, tiles.get_tile_location(61, 3))
    myHero.ay = 500
    Imposter_1.set_flag(SpriteFlag.GHOST, False)
    Imposter_1.set_flag(SpriteFlag.INVISIBLE, False)
    tiles.place_on_tile(Imposter_2, tiles.get_tile_location(80, 7))
    Imposter_2.set_flag(SpriteFlag.GHOST, False)
    Imposter_2.set_flag(SpriteFlag.INVISIBLE, False)
    info.set_life(3)
    info.set_score(0)

def on_left_pressed():
    global menuActive
    if menuStartGame == True:
        menuActive = False
        animation.run_image_animation(myHero,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            200,
            True)
    if menuAnswerNow == True:
        game.splash("You must answer question before you can walk again!")
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    if menuStartGame == True:
        animation.run_image_animation(myHero,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            200,
            False)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    if menuStartGame == True:
        animation.run_image_animation(myHero,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            200,
            False)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    global menuActive
    if menuStartGame == True:
        menuActive = False
        animation.run_image_animation(myHero,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            200,
            True)
    if menuAnswerNow == True:
        game.splash("You must answer question before you can walk again!")
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap6(sprite22, otherSprite22):
    sprite22.start_effect(effects.star_field, 500)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    pause(1000)
    sprite22.set_flag(SpriteFlag.INVISIBLE, True)
    sprite22.set_flag(SpriteFlag.GHOST, True)
sprites.on_overlap(SpriteKind.enemy,
    SpriteKind.startingHopeTree,
    on_on_overlap6)

def on_down_pressed():
    global menuAnswerNow
    if menuActive == True:
        Menu_Button.set_position(38, 83)
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.IN_BACKGROUND)
    if menuAnswerNow == True:
        if theCorrectAnswer == False:
            info.set_score(50)
            game.splash("Good Job! It is wrong")
            menuAnswerNow = False
        else:
            info.set_score(0)
            game.splash("Actually it is correct!")
            menuAnswerNow = False
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_menu_pressed():
    global menuActive
    if menuStartGame == False:
        menuActive = True
        Menu_Button.set_flag(SpriteFlag.INVISIBLE, False)
        Menu_Button.set_position(38, 66)
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.IN_BACKGROUND)
controller.menu.on_event(ControllerButtonEvent.PRESSED, on_menu_pressed)

def on_overlap_tile(sprite3, location):
    global IsRespawning
    if IsRespawning == False:
        IsRespawning = True
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.IN_BACKGROUND)
        info.change_life_by(-1)
        if info.life() > 0:
            RespawnPlayer()
        else:
            music.stop_all_sounds()
            game.splash("Game Over")
            music.play(music.create_song(hex("""
                    002c010408060302001c000c960064006d019001000478002c010000640032000000000a06000506008000a000010c03001c0001dc00690000045e01000400000000000000000000056400010400033100100020000224182000300002201430004100021d11500060000225196000700002a19570008000021e128000a000021d1106001c00010a006400f401640000040000000000000000000000000000000002d00000000800022c300800100002252910001800022c301800200002252920002800022c302800300002252930003800022c30380040000225294000480002313548005000022a2e5000580002313558006000022a2e6000680003313c3568007000022aad7000780002303a78007e00032aad3680009e000525292c30359e009f000224b49f00a10002a333a100a2000222b2a200a30002a131a300a500022030a500a600029fafa600a700021e2ea800a900021dada900aa00029c2caa00ac00021babac00ad00029a2aad00ae000219290250037f7f487f437f7f063b3d3e3b4d3f4f365836432d4f34465b4d5334344343413a344343413a
                    """)),
                music.PlaybackMode.IN_BACKGROUND)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        hazardLava1
        """),
    on_overlap_tile)

def on_on_overlap7(sprite5, otherSprite5):
    global menuAnswerNow
    pause(5000)
    if myHero.overlaps_with(Imposter_1) or myHero.overlaps_with(Imposter_2):
        if menuAnswerNow == False:
            menuAnswerNow = True
            if myHero.overlaps_with(Imposter_1):
                Imposter_1.say_text("Press B if you want to answer?", 1000, False)
            if myHero.overlaps_with(Imposter_2):
                Imposter_2.say_text("Press B if you want to answer?", 1000, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap7)

MathQuestionText = ""
QuestionID = 0
hopeTree: Sprite = None
startHole: Sprite = None
MathAnswerText_Wrong = ""
MathAnswerText_Correct = ""
CorrectImposter = 0
theCorrectAnswer = False
exitDoorFinal2: Sprite = None
exitDoor2: Sprite = None
Imposter4: Sprite = None
Imposter3: Sprite = None
Imposter_2: Sprite = None
Imposter_1: Sprite = None
Challenge_22: Sprite = None
Challenge_32: Sprite = None
Challenge_12: Sprite = None
myHero: Sprite = None
IsRespawning = False
menuAnswerNow = False
menuStartGame = False
menuActive = False
Menu_Button: Sprite = None
music.play(music.create_song(hex("""
        0036010408200800001c00010a006400f401640000040000000000000000000000000005000004780018002000012c20002500012a28002f0001293800610001259800a00001a8a000a8000127a800b0000125b800e90001a118012001012c20012801012a28013001012938014001012548014e01012558016001012768017001012578018d0101a890019a010127a001a6010125a801af0101a3b801dc0101a101001c000f05001202c102c201000405002800000064002800031400060200048a00e801f0010118f001f801019af8012102019c28023002019c30023602011d38025e02019f68027002019f700276020120780284020122a802af020122b002b8020124b802c0020125e802ef020124f002f8020125f8020003012228032f03012430033803012538034003012268036f0301247003780301257803800301278c03910301279803b103012704001c00100500640000041e000004000000000000000000000000000a040004380118001c00011920002500012028002d00011958005d00011960006500012068006d00011998009c000195a000a500019ca800ad000195d800dd000195e000e500019ce800ee00019518011d01011920012501012028012d01011958015d01011960016601012068016e01011998019d010195a001a501019ca801ae010195d801dd010195e001e501019ce801ec010195f001f701019cf801fc01019500020502011818021d02011820022502019f28022d02011858025d02011860026602019f68026e02011898029d02011ba002a5020122a802ae02011bd402d502011bd802dd02011be002e7020122e802ee02011b18031d03011b20032603012228032f03011b58035e03011b60036603012268037203011b8003860301208c03910301209803b3030120c003c703011ecc03d403011dd803f803011b05001c000f0a006400f4010a0000040000000000000000000000000000000002030118012001014420012801014228013001014138014001013d48014e01013d58016001013f68017001013d78018d01010090019a01013fa001a601013da801af0101bbb801dc0101b988028d0201339002950201b798029e020133c802cd020133d002d60201b7d802df02013308030c0302a33310031703013618031d03013348034f03013350035703013658035d03013360036503013668036c0301b77003730302a8388003880301388c03940301389803a4030138bf03c00301abc003c10303303031c103c30302b736cb03d2030138d803f4030138f403f6030133f603f70301adf703f803012cf803f90301abf903fa0302a625fa03fc03029f20fc03fd03019a06001c00010a006400f401640000040000000000000000000000000000000002db0200000800012508000f00012910001800012c18002000012520002600013128003000012530003800012c38004000012940004600012548004f00012c50005800012558005f00012960006800013168007000012970007800012c78007c0001258000880001a18800900001259000980001a89800a0000125a000a80001ada800b0000125b000b80001a8b800c00001a1c000c8000125c800d00001add000d8000125d800e00001a8e000e80001a1e800f0000125f000f80001a8f800fc0001a100010801012508011001012910011801012c18011f01012920012801013628013001012930013801013538014001013140014801012548014f01012950015701013158016001013660016601012968016e01013570017701012578017f0101318001870101a18801900101259001980101a89801a0010125a001a80101b2a801b0010125b001b8010131b801c00101adc001c8010125c801cf0101a1d001d80101a8d801e0010125e001e80101ade801f00101a1f001f5010125f801000201a80102090201240902110201a81202180201ab18021e0201a81f02260201302602300201a83002370201243802410201ab4102480201a848024f02012450025802013058025f0201246002680201ab6902700201a870027802012478027e0201ab80028802012788028f0201ab90029702012e9802a00201aba002a8020133a802b00201abb002b8020127b802c002012ec002c80201abc802d0020133d002d80201abd802e002012ee002e8020127e802f00201abf002f802012ef802ff02012700030803012708031003012e10031803012a18031f03012720032803013128032f03012730033803012e38034003012a40034703012748035003013350035803012758036003013160036803012a68036f03012770037803012e78037f03013180038703042c3033368c039103042c3033369803b503042c303633c003c803042c303338cc03d203042c303338d403d803022c30d803f50302333807001c00020a006400f401640000040000000000000000000000000000000003410110001400030d141930003400030d191450005500030d191470007600030d19149000960003899095b000b60003899590d000d50003899095f000f7000389909510011701030d141930013501030d191450015601030d141970017701030d14199001980103899095b001b50103899095d001d60103899095e801ec01038995901002220203930c1827022802020c9328023002011851026402030c931868026f02030c931890029102020f169102a202011ba702a8020116a802ae02020f1bd002e202030f161be802f002030f161b0f03210303160f1b26032e0303160f1b5003510302161b51036103010f68037703030f161b820387030314201b8d039203031b20149703b903031b1420b903bb03021b8ebb03bc030195bc03bd030114bd03bf030114bf03c003011bc003c4030120cc03d303031b1420d703fb0303201b1408001c000e050046006603320000040a002d00000064001400013200020100028c0100001000010d18001b00010d20003000010d38003e00010d48005400010d68007000010870007500010c78007f00010d80009100018998009b000189a000b3000189b800bf000189c800cf00019000010401010d04010501010618011b01010d20012b01010d30013601010838014001010d48015201010d68016f01010870017801010d78018001010880019001018998019d010189a001a7010190a801b2010195b801c1010189c801d1010189d801e0010189e001e7010190e801f0010195f0010002018900021202010c18022002010c20022802019328023102010c38024202011848025302010c68027002010c70027802019378027c02010c80029102010f9802a002010fa002a8020116a802ae02010fb802c302011bc802d002010fe802ef02010ff002f8020116f802fb02010f00031103010f18032003010f20032803011628032e03010f38034203011b48035203010f68037003010f70037803011678037c03010f8003880301148c03950301149803b9030114c003c8030112cc03d4030111d803f603010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004d0400000800040203061608000b0002060c1000160004060a070918001a0002060d20002600040302060d28002c00040302060c300036000406070a0938003c00050302060c0d40004300010648004d000503020c060d5000570004060a070958005a0002060d6000680002060d68006c00040302060c7000750004060a07097800790001067c00800003040d0a800086000303020688008b0002060c9000950004060a070998009a0002060da000a600040302060da800ac00040302060cb000b500040607090ab800bd000503020c060dc000c2000106c800cd00050302060c0dd000d6000406070a09d800d90002060ddc00de0002070de000e40002060de400e700020709e800ed000403020c06f000f500050607090a0df800fa0003060d0cfc00ff0002090a00010801040302061608010b0102060c1001160104060a070918011a0102060d20012601040302060d28012c01040302060c300136010406070a0938013c01050302060c0d40014301010648014d010503020c060d5001570104060a070958015a0102060d6001680102060d68016c01040302060c7001750104060a07097c01800103040d0a800186010303020688018b0102060c9001950104060a070998019a0102060da001a601040302060da801ac01040302060cb001b501040607090ab801bd010503020c060dc001c2010106c801cd01050302060c0dd001d6010406070a09d801d90102060ddc01df0103070a0de001e40103060a0de401e7010307090ae801ec010403020c06ec01f001010ff001f501050607090a0df801fa0104060d0c0efc01ff0102090a000206020303020608020b0202060c1002160204060a070918021a0202060d20022602040302060d28022c02040302060c300236020406070a0938023c02050302060c0d40024302010648024d020503020c060d5002570204060a070958025a0202060d6002680202060d68026c02040302060c7002750204060a07097802790201067c02800203040d0a800286020303020688028b0202060c9002950204060a070998029a0202060da002a602040302060da802ac02040302060cb002b502040607090ab802bd020503020c060dc002c2020106c802cd02050302060c0dd002d6020406070a09d802d90202060ddc02de0202070de002e40202060de402e702020709e802ed020403020c06f002f502050607090a0df802fa0203060d0cfc02ff0202090a000306030303020608030b0302060c1003160304060a070918031a0302060d20032603040302060d28032c03040302060c300336030406070a0938033c03050302060c0d40034303010648034d030503020c060d5003570304060a070958035a0302060d6003680302060d68036c03040302060c7003750304060a07097c03800303040d0a800384030203078c0390030203079803a303020307b803ba030106bc03be030106c003c403020307cc03d003020307d803de03020307e403e6030106ec03ef03020607f803fa030106fc030004020607007f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f015151515151515151515151515151515151515151515151044a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a05656565656565656565656565656565656565656565656565656565656565656565656565656565656565067f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f0745454545454545454545454545454545454545454545454545454545454545454545454545454545454545085d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d097f4d65607f607f7f3b7f757f7f667f22447f3d794676767b6a2e746f21527f4d7f6544607f4d65607f607f7f3b7f757f7f667f447f3d794676767b6a2e746f21527f4d7f4d654d607f4d65607f607f7f3b7f757f7f667f22447f3d794676767b6a2e746f21527f4d7f6544607f4d65607f607f7f3b7f757f7f667f44787f7f7d6a7f7f7f797f7f7f
        """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
scene.set_background_image(img("""
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
    """))
Menu_Button = sprites.create(img("""
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
        """),
    SpriteKind.Button)
animation.run_image_animation(Menu_Button,
    [img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """)],
    500,
    True)
Menu_Button.set_position(38, 66)
menuActive = False
Menu_Button.set_flag(SpriteFlag.INVISIBLE, True)
menuStartGame = False
menuAnswerNow = False
IsRespawning = False
myHero = sprites.create(img("""
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
        """),
    SpriteKind.player)
Challenge_12 = sprites.create(img("""
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
        """),
    SpriteKind.Challenge_1)
Challenge_32 = sprites.create(img("""
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
        """),
    SpriteKind.Challenge_3)
Challenge_22 = sprites.create(img("""
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
        """),
    SpriteKind.Challenge_2)
Imposter_1 = sprites.create(img("""
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
        """),
    SpriteKind.enemy)
Imposter_2 = sprites.create(img("""
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
        """),
    SpriteKind.enemy)
Imposter3 = sprites.create(img("""
        . . f f f . . . . . . . . f f f
        . f f c c . . . . . . f c b b c
        f f c c . . . . . . f c b b c .
        f c f c . . . . . . f b c c c .
        f f f c c . c c . f c b b c c .
        f f c 3 c c 3 c c f b c b b c .
        f f b 3 b c 3 b c f b c c b c .
        . c b b b b b b c b b c c c . .
        . c 1 b b b 1 b b c c c c . . .
        c b b b b b b b b b c c . . . .
        c b c b b b c b b b b f . . . .
        f b 1 f f f 1 b b b b f c . . .
        f b b b b b b b b b b f c c . .
        . f b b b b b b b b c f . . . .
        . . f b b b b b b c f . . . . .
        . . . f f f f f f f . . . . . .
        """),
    SpriteKind.enemy)
Imposter4 = sprites.create(img("""
        . . f f f . . . . . . . . f f f
        . f f c c . . . . . . f c b b c
        f f c c . . . . . . f c b b c .
        f c f c . . . . . . f b c c c .
        f f f c c . c c . f c b b c c .
        f f c 3 c c 3 c c f b c b b c .
        f f b 3 b c 3 b c f b c c b c .
        . c b b b b b b c b b c c c . .
        . c 1 b b b 1 b b c c c c . . .
        c b b b b b b b b b c c . . . .
        c b c b b b c b b b b f . . . .
        f b 1 f f f 1 b b b b f c . . .
        f b b b b b b b b b b f c c . .
        . f b b b b b b b b c f . . . .
        . . f b b b b b b c f . . . . .
        . . . f f f f f f f . . . . . .
        """),
    SpriteKind.enemy)
exitDoor2 = sprites.create(img("""
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
        """),
    SpriteKind.exitDoor)
exitDoorFinal2 = sprites.create(img("""
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
        """),
    SpriteKind.exitDoorFinal)
myHero.set_flag(SpriteFlag.INVISIBLE, True)
Challenge_12.set_flag(SpriteFlag.INVISIBLE, True)
Challenge_22.set_flag(SpriteFlag.INVISIBLE, True)
Challenge_32.set_flag(SpriteFlag.INVISIBLE, False)
Imposter_1.set_flag(SpriteFlag.INVISIBLE, True)
Imposter_2.set_flag(SpriteFlag.INVISIBLE, True)
Imposter3.set_flag(SpriteFlag.INVISIBLE, True)
Imposter4.set_flag(SpriteFlag.INVISIBLE, True)
exitDoor2.set_flag(SpriteFlag.INVISIBLE, True)
exitDoorFinal2.set_flag(SpriteFlag.INVISIBLE, True)
Challenge_32.set_position(146, 21)
myHero.set_position(0, 0)

def on_forever():
    animation.run_image_animation(Challenge_12,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        200,
        False)
    Challenge_12.vx = -100
    pause(2000)
    animation.run_image_animation(Challenge_12,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        200,
        False)
    Challenge_12.vx = 100
    pause(2000)
forever(on_forever)

def on_forever2():
    animation.run_image_animation(Challenge_22,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        200,
        False)
    Challenge_22.vx = -30
    pause(2000)
    animation.run_image_animation(Challenge_22,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        200,
        False)
    Challenge_22.vx = 30
    pause(2000)
forever(on_forever2)

def on_forever3():
    animation.run_image_animation(Challenge_32,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        False)
    Challenge_32.vx = -50
    pause(2000)
    animation.run_image_animation(Challenge_32,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        False)
    Challenge_32.vx = 50
    pause(2000)
forever(on_forever3)
