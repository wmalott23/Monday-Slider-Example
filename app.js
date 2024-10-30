var sliderContainer = document.querySelector(".slider-container");
var cardContainer = document.querySelector(".card-container")
var cardList = cardContainer.querySelectorAll('.card')
var card = document.querySelector(".card");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var cardWidth = card.clientWidth
var currentCard = cardList.length

console.log(cardList)
console.log(cardContainer)
console.log(currentCard)

// Add cards to the end of the current list
for (var i = 0; i < cardList.length; i++) {
  cardContainer.appendChild(cardList[i].cloneNode(true))
}

// scroll to the middle
  cardContainer.style.transform = `translateX(${-608}px)`

function calculatePrevOnClick() {
  // identify which cards to add, and add two to the front
  for (var i = 0; i < 2; i++) {
    currentCard -= 1
    if (currentCard < 0) {
      currentCard = cardList.length-1
    }
    console.log(currentCard)
    let newCard = cardList[currentCard]
    console.log(newCard)
    cardContainer.insertBefore(newCard.cloneNode(true), cardContainer.firstElementChild)
  } 
  // get coordinates
  let coords = cardContainer.getBoundingClientRect()
  // adjust the container for the new additions
  cardContainer.style.transform = `translateX(${coords.left - 648}px)`
  // slide the card container 
  setTimeout(function(){cardContainer.style.transition = `transform 1s ease-in-out`}, 100)
  setTimeout(function(){cardContainer.style.transform = `translateX(${coords.left-8}px)`}, 100)
  // revert transition property for the next click
  setTimeout(function () { cardContainer.style.transition = `transform 0s` }, 1200)
  // remove last two elements after animating
  setTimeout(function(){for (var i = 0; i < 2; i++) {
    cardContainer.removeChild(cardContainer.lastChild)
  }
  }, 1200)
  console.log(cardContainer)
}

function calculateNextOnClick() {  
  // identify which cards to add, and add two to the back
  for (var i = 0; i < 2; i++) {
    currentCard += 1
    if (currentCard > cardList.length-1) {
      currentCard = 0
    }
    cardContainer.appendChild(cardList[currentCard].cloneNode(true))
  }
  // get coordinates
  let coords = cardContainer.getBoundingClientRect()
  // adjust the container for the new additions
  cardContainer.style.transform = `translateX(${coords.left}px)`   
  // slide the card container 
  setTimeout(function(){cardContainer.style.transition = `transform 1s ease-in-out`}, 100)
  setTimeout(function () { cardContainer.style.transform = `translateX(${coords.left - 648}px)` }, 100)
  // revert transition property for the next click
  setTimeout(function () { cardContainer.style.transition = `transform 0s` }, 1200)
  // remove first two elements after animating
  setTimeout(function(){for (var i = 0; i < 2; i++) {
    cardContainer.removeChild(cardContainer.firstElementChild)
    cardContainer.style.transform = `translateX(${coords.left - 8}px)`
  } },  1200)
}

function prevClick(){ 
  // disable buttons
  prev.disabled = true
  calculatePrevOnClick()
  // reenable buttons
  setTimeout(function () { prev.disabled = false }, 1300)
};

function nextClick(){
  // disable buttons
  next.disabled = true
  calculateNextOnClick()
  // reenable buttons
  setTimeout(function () { next.disabled = false }, 1300)
}