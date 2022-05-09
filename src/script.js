
/* Data to Show*/
const data = [
  {
   quote: `"Time for the charm bomb to explode." – Tina Belcher`, 
   emoji: '🤯', 
  image: 'url(https://assets.codepen.io/6057684/Tina-outline.svg)'
  }, 
  {
   quote: `"You're my family and I love you, but you're terrible. You're all terrible." - Bob Belcher'`, 
   emoji: '😐', 
   image: 'url(https://assets.codepen.io/6057684/Bob-outline.jpg)'
  },  
  {
   quote: `"I don't appreciate your lack of sarcasm." - Louise Belcher`, 
   emoji: '🤦🏻‍♀️' , 
   image: 'url(https://assets.codepen.io/6057684/Louise-outline.jpg)'
  },
  {
    quote: `“No matter what I say, stop me when I've had sixteen.” - Linda Belcher`, 
    emoji: '🥐', 
    image: 'url(https://assets.codepen.io/6057684/Linda-outline.jpg)'
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "For the love of Bob's Burgers";
// Check-Check: change emoji text
emoji.innerHTML = "🍔";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(https://assets.codepen.io/6057684/Bobs-Burgers-outline2.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function(){
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
});
