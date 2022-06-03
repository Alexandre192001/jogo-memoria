const cards = document.querySelectorAll(".card");
let hasFlipperCard = false;
let fistCard,secondCard;
let lockOver = false;

function virarCarta() {
  if(lockOver) return;
  if(this === fistCard) return;
  this.classList.add("flip");
  if(!hasFlipperCard) {
      hasFlipperCard = true;
      fistCard = this;
      return
  }
  secondCard = this;
  hasFlipperCard = false;
  checkForMath();
}

function checkForMath() {
  if(fistCard.dataset.card === secondCard.dataset.card){
    disableCheck();
    return
  }
  unflipcards();
}

function disableCheck() {
  fistCard.removeEventListener("click",virarCarta);
  secondCard.removeEventListener("click",virarCarta);
  reset()
}

function unflipcards() {
  lockOver = true;

  setTimeout(()=>{
    fistCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockOver = false;

    reset()
  },1000)
}
(
  function randomCards(){
    cards.forEach((card)=>{
      let randomPosition = Math.floor(Math.random()*12);
      card.style.order = randomPosition
    })
  })();
  
function reset() {
  [hasFlipperCard,lockOver] = [false,false];
  [fistCard,secondCard] = [null,null];
}

cards.forEach((elemento)=>{
  elemento.addEventListener("click",virarCarta);
})

