/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convert = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

let btn = document.getElementById("btn")

btn.addEventListener("click", function listen(){
    const value = convert.value
    const meter = (value / 3.281).toFixed(3)
    const feet =  (value * 3.281).toFixed(3)
    const liter = (value / 0.264).toFixed(3)
    const gallon = (value * 0.264).toFixed(3)
    const kilogram = (value / 2.204).toFixed(3)
    const pound = (value * 2.204).toFixed(3)
    
    length.textContent =`${value} meters = ${feet} feet | ${value} feet = ${meter} meters` 
    console.log(meter, feet)
    
    volume.textContent =`${value} liter = ${gallon} gallons | ${value} gallons = ${liter} liters` 
    console.log(meter, feet)
    
    mass.textContent =`${value} kilogram = ${pound} pounds | ${value} pounds = ${kilogram} kilos` 
    
})

