input.onButtonPressed(Button.A, function () {
    if (paddle_A.get(LedSpriteProperty.X) > 0) {
        paddle_A.change(LedSpriteProperty.X, -1)
        paddle_B.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddle_A.get(LedSpriteProperty.X) < 3) {
        paddle_A.change(LedSpriteProperty.X, 1)
        paddle_B.change(LedSpriteProperty.X, 1)
    }
})
let paddle_B: game.LedSprite = null
let paddle_A: game.LedSprite = null
paddle_A = game.createSprite(2, 4)
paddle_B = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let direction_y = 1
let direction_x = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, direction_x)
    ball.change(LedSpriteProperty.Y, direction_y)
    if (ball.isTouching(paddle_A) || ball.isTouching(paddle_B)) {
        ball.change(LedSpriteProperty.X, direction_x * -1)
        ball.change(LedSpriteProperty.Y, -1)
        direction_y = -1
        direction_x = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) < 0) {
            direction_y = 1
            direction_x = randint(-1, 1)
        } else if (ball.get(LedSpriteProperty.Y) > 4) {
            ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (ball.get(LedSpriteProperty.X) < 0) {
            direction_x = 1
        } else if (ball.get(LedSpriteProperty.X) > 4) {
            direction_x = -1
        }
        basic.pause(500)
    }
})
