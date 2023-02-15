import Dog from './Dog.js'
import dogsData from './data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

document.getElementById("reject-button").addEventListener('click', reject)
document.getElementById("accept-button").addEventListener('click', yes)

render()

function render() {
    document.getElementById("card").innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex === dogsData.length-1 ? currentDogIndex=0 : currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function reject() {
    currentDog.setMatchStatus(true)
    document.getElementById("nope").classList.add("nope")
    setTimeout(getNewDog, 2000)
}

function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById("like").classList.add("like")
    setTimeout(getNewDog, 2000)
}