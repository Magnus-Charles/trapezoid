game.splash("Let's calculate the area of a trapezoid")
let a = game.askForNumber("Enter the length of side a (cm)")
let b = game.askForNumber("Enter the length of side b (cm)")
let h = game.askForNumber("Enter the height of the trapezoid (cm)")
let ab = a + b
let d = ab / 2
let Area = d * h
game.splash("The area of your Trapezoid in dimensions:\" " + ab + "cm divided by 2" + "cm times" + h + "cm is" + convertToText(Area) + "cm")
