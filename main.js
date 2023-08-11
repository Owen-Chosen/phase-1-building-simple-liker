// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener ('click', (event) => {
  if (event.target.className === 'like-glyph' || event.target.className === 'like-glyph activated-heart') {
    if (event.target.className === "like-glyph") {
      mimicServerCall()
      .then ( () => {
        document.querySelector ("#modal").classList.add('hidden')
        event.target.innerHTML = FULL_HEART
        event.target.classList.add ('activated-heart')
      })
      .catch(() => {
        document.querySelector ("#modal").classList.remove('hidden')
        setTimeout (() => {
          document.querySelector ("#modal").classList.add('hidden')
        }, 3000)
      })
    }
    else {
      document.querySelector ("#modal").classList.add('hidden')
      event.target.innerHTML = EMPTY_HEART
      event.target.classList.remove ('activated-heart')
    }

  }
})
    





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
