document.addEventListener('DOMContentLoaded', () => {
  const theatreId = 4;

  fetch('https://evening-plateau-54365.herokuapp.com/theatres/4')
    .then(response => response.json())
    .then(movieData => {
      movieData.showings.map(function(movie) {
        // const newMovie = new Movie(movie)
        const capcity = movie.capacity
        const ticketsSold = movie.tickets_sold
        const ticketLeft = (capcity - ticketsSold)
        const listMovies = document.getElementById('movies')
        listMovies.innerHTML += `<div class="card" data-id="${movie.id}">
       <div class="content">
         <div class="header">
           ${movie.film.title}
         </div>
         <div class="meta">
           ${movie.film.runtime} minutes
         </div>
         <div id="description" class="description">
           <span class="ui label">
             ${movie.showtime}
           </span>
           ${ticketLeft} remaining tickets
         </div>
       </div>
       <div class="extra content">
         <div id="ticketBtn"data-id="${movie.id}"class="ui blue button">Buy Ticket</div>
       </div>
     </div>`
      })



      const getMovies = document.getElementById('movies')
      getMovies.addEventListener('click', function(event) {
        if (event.target.id == "ticketBtn") {
          const movieId = event.target.dataset.id
          fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              showing_id: movieId,

            })
          })
        }
        //   getDescription.innerTEXT = ticketsLeft
        //   debugger
      })

    })

    //My code is updating on the backend.. was in the process of trying to get the decrease to work on frontend.
    //choose to use a GET because my data was upating in the back end and I just wanted to pull it.  
  const getDescription = document.getElementById('description')
  fetch('https://evening-plateau-54365.herokuapp.com/theatres/tickets', {
  .then(response => response.json())
  .then(movieData => {
     const listMovies = document.getElementById('movies')
     listMovies.innerHTML += `<div class="card" data-id="${movie.id}">
    <div class="content">
      <div class="header">
        ${movie.film.title}
      </div>
      <div class="meta">
        ${movie.film.runtime} minutes
      </div>
      <div id="description" class="description">
        <span class="ui label">
          ${movie.showtime}
        </span>
        ${ticketLeft} remaining tickets
      </div>
    </div>
    <div class="extra content">
      <div id="ticketBtn"data-id="${movie.id}"class="ui blue button">Buy Ticket</div>
    </div>
  </div>`
})
