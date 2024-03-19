// Set the date we're counting down to
var countDownDate = new Date('Mar 17, 2023 08:00:00').getTime()

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the element with id="count-down"
  document.getElementById('count-down').innerHTML = `
    <div class="ct-x">
        <div style="display: flex; flex-direction: column">
            <p>${days}</p>
            <small>days</small>
        </div>
        <section>:</section>
        <div class="ct-y">
            <p>${hours}</p>
            <small>hours</small>
        </div>
        <section>:</section>
        <div class="ct-y">
            <p>${minutes}</p>
            <small>minutes</small>
        </div>
        <section>:</section>
        <div class="ct-y">
            <p>${seconds}</p>
            <small>seconds</small>
        </div>
    </div>
        `
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById('count-down').innerHTML = 'EXPIRED'
  }
}, 1000)

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}




