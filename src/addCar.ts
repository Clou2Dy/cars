export default function addingCars() {
    let i = 0
    document.querySelector('.create').addEventListener('click', () =>{
        i++
        let road = `<div class="blockCar"><div class="settInfo"><button class="select${i}">Select</button><button class="remove" id="${i}">Remove</button><div class="namCar${i}"></div></div><div class="road"><div class="startStop${i}"><button class="start" id="${i}">A</button><button class="stop" id="${i}" disabled/>B</button></div><div class="way"> <img class="carImg carColor${i}" src="assets/car.png" alt="car"><img class="flag" src="assets/flag.png" alt="flag"></div></div></div>`
        let cars = document.createElement(`blockcar`)
        cars.classList.add(`blockcar${i}`)
        cars.innerHTML = road 
        document.querySelector(".cars").appendChild(cars) 
        document.querySelector(`.namCar${i}`).textContent =  document.querySelector<HTMLInputElement>('.inpCreat').value
        document.querySelector<HTMLInputElement>(`.carColor${i}`).style.backgroundColor =  document.querySelector<HTMLInputElement>(".createColor").value
    })
}


