function potionPower (Eye_of_Newt: number, Ghost_Dust: number, Frog_Legs: number) {
    total = total + Ghost_Dust + Eye_of_Newt + Frog_Legs
    return total
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Total Power is: " + potionPower(5, 3, 7))
})
let total = 0
game.splash("Total Power is: " + potionPower(5, 3, 7))
total = 0
