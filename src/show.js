class Show {
  constructor(show){
    this.id = show.id;
    this.film = show.film;
    this.capacity = show.capacity;
    this.showtime = show.showtime;
    this.tickets_sold = show.tickets_sold;
    allShows.push(this)
  }

  remainTicket(){
    return this.capacity - this.tickets_sold;
  }

  render(){
    if (this.remainTicket() === 0){
      return `<div class="card">
        <div class="content">
          <div class="header">
            ${this.film.title}
          </div>
          <div class="meta">
            ${this.film.runtime} minutes
          </div>
          <div class="description" id="ticketRemain-${this.id}">
            <span class="ui label">
              ${this.showtime}
            </span>
            ${this.remainTicket()} remaining tickets
          </div>
        </div>
        <div class="extra content">
          <div id="${this.id}">Sold Out</div>
        </div>
      </div>`
    } else {
    return `<div class="card">
      <div class="content">
        <div class="header">
          ${this.film.title}
        </div>
        <div class="meta">
          ${this.film.runtime} minutes
        </div>
        <div class="description" id="ticketRemain-${this.id}">
          <span class="ui label">
            ${this.showtime}
          </span>
          ${this.remainTicket()} remaining tickets
        </div>
      </div>
      <div class="extra content">
        <div class="ui blue button" id="${this.id}">Buy Ticket</div>
      </div>
    </div>`
    }
  }
}

let allShows = [];
