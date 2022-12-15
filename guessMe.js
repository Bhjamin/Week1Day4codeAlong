
let guessMe = 54

let num = 0

while(guessMe < 100){
    console.log(`----------`)

    if(guessMe % 4 === 0 || guessMe % 5 === 0){
        console.log(`guessMe is divisible by 4 or 5. Added 25`)
        guessMe += 25
    } else if(guessMe % 3 === 0){
        console.log(`guessMe is divisble by 3. Subtracted 27`)
        guessMe -= 27
    } else {
        console.log(`guessMe is not divisible by 4, 5, or 3. Added 3`)
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22`)
    console.log(`guessMe is now ${guessMe}`)
    num++
}

console.log(guessMe)
console.log(num)