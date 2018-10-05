let movieArray = []

class Movie{
  constructor(movieObj){
    this.id = movieObj.id
    this.name = movieObj.name
    this.showings = movieObj.showings
    movieArray.push(this)
  }

  // render(){
  //   debugger
  //   return(
  //     `html
  //     <div class="card">
  //       <div class="content">
  //         <div class="header">
  //           ${this.showings.film.title}
  //         </div>
  //         <div class="meta">
  //           ${this.showings.film.runtime} minutes
  //         </div>
  //         <div class="description">
  //           <span class="ui label">
  //             ${this.showings.showtime}
  //           </span>
  //           ${this.showings.tickets_sold}remaining tickets
  //         </div>
  //       </div>
  //       <div class="extra content">
  //         <div id="ticketBtn" class="ui blue button">Buy Ticket</div>
  //       </div>
  //     </div>`
  //   )
  // }
}
