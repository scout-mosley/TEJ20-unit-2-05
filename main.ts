/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: Sep 2025
 * This program gets the curent temperature. in K.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// our variable for a temperature
let temperature: number
let temperatureValueKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get temperature value
   temperature = input.temperature()
   temperatureValueKelvin = (temperature + 273.15)
   temperatureValueKelvin = Math.round (temperatureValueKelvin)


// show output
basic.clearScreen()
basic.showString('The temperature is: ' + temperatureValueKelvin.toString()+ 'K' )

    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})