const theatreId = 7;


// create DOM content load
document.addEventListener('DOMContentLoaded', () => {

// declare any global variables here
const movieShowCards = document.getElementById('ui cards showings')


// Deliverable #1 -> Render Content from API onto the DOM
// create the initial fetch request from the API
  fetch('https://evening-plateau-54365.herokuapp.com/theatres/7')
    .then(response => response.json())
    .then(movieJsonObject => {
// console log the returned json object to verify correct data
// console.log(movieJsonObject);
// render the title for the movie showing
      movieJsonObject.showings.map((movie) => {
// added a div and parseInt the capacity minus the tickets sold to get the remaining tickets
        const movieShowings = (`
            <div class="card">
              <div class="content">
                <div id="film-title" class="header">
                  ${movie.film.title}
                </div>
                <div class="meta">
                  ${movie.film.runtime} minutes
                </div>
                <div class="description">
                  <span class="ui label">
                    ${movie.showtime}
                  </span>
                  <div>Capacity</div>
                    <div id="capacity" data-id=${movie.id}>${parseInt(movie.capacity)}</div>
                  <div>Tickets Sold</div>
                    <div id="tickets_sold" data-id=${movie.id}>${parseInt(movie.tickets_sold)}</div>
                  <div>Remaining Tickets</div>
                    <div id="remaining_tickets" data-id=${movie.id}>${parseInt(movie.capacity - movie.tickets_sold)}</div>
                </div>
              </div>
              <div class="extra content">
                <div data-id=${movie.id} id="buy_tickets" class="ui blue button">Buy Ticket</div>
                </div>
              </div>
        `)
        //debugger
        movieShowCards.innerHTML += movieShowings
      })
    }) // end of fetch request

// Deliverable #2 -> Clicking the Purchase Button should decrement the ticket count (not below zero)
  document.addEventListener('click', (event) => {
    event.preventDefault()
//  console.log(event.target.dataset.id); -> verified that I'm clicking the right button
// clicking the button should decrement the number
    if (event.target.id === "buy_tickets") {
      const ticketId = event.target.dataset.id
// console.log(ticketId);
// optimistically render the remaining tickets
      const decreaseTicketCount = document.getElementById('remaining_tickets')
      const increaseTicketsSold = document.getElementById('tickets_sold')
      if (decreaseTicketCount.innerText > 0 && increaseTicketsSold.innerText <= 20){
        decreaseTicketCount.innerText--
        increaseTicketsSold.innerText++
        const updatedTicketsSold = increaseTicketsSold.innerText
// create the POST request to presist the changes to the database
  fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
    body: JSON.stringify({
      showing_id: 7
// I know I need to pass in the updatedTicketsSold variable that I created here in the body
// but every time I try it breaks my code -> I know that I'm messing up by finding the correct ticket ID
// I ran out of time but to solve this problem I would have now created a ticket class and created a static method
// to find the ticket by it's ID to update it that way.
//    tickets_sold: updatedTicketsSold
      })
  })// end of fetch request
      } // end of if decreaseTicketCount.innerText > 0
    } // end of event.target.id
  }) // end of purchase event listener
}) // end of DOM Content Load
