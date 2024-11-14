input.onButtonPressed(Button.AB, function () {
    if (game.score() == 0) {
        game.setScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
game.setScore(0)
let SnakeX = 0
let FoodY = randint(0, 4)
let FoodX = randint(0, 4)
let SnakeY = 4
basic.showIcon(IconNames.Snake)
loops.everyInterval(500, function () {
    if (SnakeX == 4) {
        SnakeX = 0
    } else {
        SnakeX += 1
    }
    if (input.buttonIsPressed(Button.A)) {
        SnakeY = 4
    } else {
        SnakeY += -1
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
