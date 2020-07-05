let operation = "pickup"  //pickup or drop off
let currentDisk = null


const towerClick = function(event) {
  const tower = event.currentTarget
  if (operation === "pickup") {
    //pickup
    const disc = tower.lastElementChild
  
    if (disc) {
        console.log("You've picked up " + disc.id)
        currentDisc = disc
        operation = "drop"
    } else {
      console.log("There's no disc to pick up")
    }
  } else if (operation === "drop") {
    //drop
    console.log("current : " + currentDisc.dataset.width)
    
    operation = "pickup"
    if (!event.currentTarget.firstElementChild) {
      tower.append(currentDisc)
    }
  else if (currentDisc.dataset.width < event.currentTarget.lastElementChild.dataset.width) {
    tower.append(currentDisc)
  } else {
    alert("Sorry! That's an invalid move!")
    } if (tower3.childElementCount === 4) {
    alert("Congratulations! You've conquered the Tower of Hanoi!")

    }
  }
}
  



const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

tower1.addEventListener('click', towerClick)
tower2.addEventListener('click', towerClick)
tower3.addEventListener('click', towerClick)
