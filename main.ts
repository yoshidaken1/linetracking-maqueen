// 止まる
function maqStop() {
    //  maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
    //  maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

// 前に進む
function maqForward(kyori: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 253)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 180)
    if (kyori > 0) {
        basic.pause(6500 * kyori)
        maqStop()
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 253)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 180)
    }
    
}

// 後ろに下がる
function maqBackward(kyori: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 253)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 180)
    if (kyori > 0) {
        basic.pause(6500 * kyori)
        maqStop()
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 253)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 180)
    }
    
}

// 右のLEDが点滅
function maqBlinkLedR() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(Note.C, 100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(500)
    }
}

// 左のLEDが点滅
function maqBlinkLedL() {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(Note.E, 100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    
}

// 右に曲がる
function maqTurnRight() {
    maqBlinkLedR()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 253)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(750)
    maqStop()
    
}

// ステアリングで右に曲がる
function maqSteerRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    
}

// 旋回して右に曲がる　未加工
function maqTurnSteerRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    
}

// 左に曲がる
function maqTurnLeft() {
    maqBlinkLedL()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 185)
    basic.pause(750)
    maqStop()
    
}

// ステアリングで左に曲がる
function maqSteerLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 170)
    
}

// 旋回して左に曲がる　未加工
function maqTurnSteerLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 170)
    
}

function maqSlightRight() {
    
}

function maqSlightLeft() {
    
}

// #################
// 左に曲がりたい
basic.forever(function on_forever() {
    
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        
        basic.showString("S")
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // センサー両方が黒に(線)なったとき
        
        maqSlightRight()
        //  右
        basic.showString("R")
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        // 右に曲がりたい
        
        maqSlightLeft()
        //  左
        basic.showString("L")
    }
    
})
