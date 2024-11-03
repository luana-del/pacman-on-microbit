let pacman: game.LedSprite = null
let comida: game.LedSprite = null
let fantasma: game.LedSprite = null
input.onButtonPressed(Button.AB, function () {
    pacman = game.createSprite(2, 2)
    comida = game.createSprite(4, 4)
    fantasma = game.createSprite(0, 0)
    fantasma.change(LedSpriteProperty.Blink, 50)
    comida.change(LedSpriteProperty.Brightness, 8)
    while (true) {
        basic.pause(400)
        if (fantasma.get(LedSpriteProperty.X) < pacman.get(LedSpriteProperty.X)) {
            fantasma.change(LedSpriteProperty.X, 1)
        } else if (fantasma.get(LedSpriteProperty.X) > pacman.get(LedSpriteProperty.X)) {
            fantasma.change(LedSpriteProperty.X, -1)
        } else if (fantasma.get(LedSpriteProperty.Y) < pacman.get(LedSpriteProperty.Y)) {
            fantasma.change(LedSpriteProperty.Y, 1)
        } else if (fantasma.get(LedSpriteProperty.Y) > pacman.get(LedSpriteProperty.Y)) {
            fantasma.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.X) > 200) {
            pacman.change(LedSpriteProperty.X, 1)
        } else if (input.acceleration(Dimension.X) < -200) {
            pacman.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) > 200) {
            pacman.change(LedSpriteProperty.Y, 1)
        } else if (input.acceleration(Dimension.Y) > -200) {
            pacman.change(LedSpriteProperty.Y, -1)
        }
        if (pacman.isTouching(comida)) {
            game.addScore(1)
            comida.change(LedSpriteProperty.X, randint(0, 5))
            comida.change(LedSpriteProperty.Y, randint(0, 5))
        }
        if (comida.get(LedSpriteProperty.X) < 2 && comida.get(LedSpriteProperty.Y) < 2) {
            game.addScore(1)
            fantasma.change(LedSpriteProperty.X, 4)
            fantasma.change(LedSpriteProperty.Y, 4)
        } else if (comida.get(LedSpriteProperty.X) > 2 && comida.get(LedSpriteProperty.Y) < 2) {
            fantasma.change(LedSpriteProperty.X, 0)
            fantasma.change(LedSpriteProperty.Y, 4)
        } else if (comida.get(LedSpriteProperty.X) < 2 && comida.get(LedSpriteProperty.Y) > 2) {
            fantasma.change(LedSpriteProperty.X, 4)
            fantasma.change(LedSpriteProperty.Y, 0)
        } else {
            fantasma.change(LedSpriteProperty.Y, 0)
            fantasma.change(LedSpriteProperty.Y, 0)
        }
        if (pacman.isTouching(fantasma)) {
            game.gameOver()
        }
    }
})
