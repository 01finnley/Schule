input.onButtonPressed(Button.A, function () {
    if (linksrechts == 0) {
        if (SnakeY == 0) {
            SnakeY = 4
        } else {
            SnakeY += -1
        }
        UpDown = 0
        linksrechts = 1
    } else {
        if (SnakeY == 0) {
            SnakeY = 4
        } else {
            SnakeY += -1
        }
        UpDown = 0
        linksrechts = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (game.score() == 0) {
        game.setScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    UpDown = 1
})
let UpDown = 0
let linksrechts = 0
let SnakeY = 0
game.setScore(0)
let SnakeX = 0
let FoodY = randint(0, 4)
let FoodX = randint(0, 4)
SnakeY = 4
basic.showIcon(IconNames.Snake)
loops.everyInterval(500, function () {
    if (UpDown == 0) {
        if (SnakeX == 4) {
            SnakeX = 0
        } else {
            SnakeX += 1
        }
    }
    if (UpDown == 1) {
        if (SnakeY == 0) {
            SnakeY = 4
        } else {
            SnakeY += -1
        }
    }
})
basic.forever(function () {
    if (game.score() == 1) {
        basic.clearScreen()
        led.plot(SnakeX, SnakeY)
        led.plot(FoodX, FoodY)
        if (SnakeY == FoodY && SnakeX == FoodX) {
            FoodY = randint(0, 4)
            FoodX = randint(0, 4)
        }
    }
})

