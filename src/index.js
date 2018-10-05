const theatreId = 6;
store = []
showingDisplay = document.getElementById('showings')
//event.target.parentNode.parentNode.children[0].children[2].innerText

//inital fetch request
fetch("https://evening-plateau-54365.herokuapp.com/theatres/6")
  .then((resp) => resp.json())
  .then(json => json.showings.forEach(showing => {
    store.push(showing)
    showingDisplay.innerHTML += `
    <div class="card">
      <div class="content">
        <div class="header">
          ${showing.film.title}
        </div>
        <div class="meta">
          ${showing.film.runtime}
        </div>
        <div class="description">
          <span class="ui label">
            ${showing.showtime}
          </span>

          <span id="${showing.id}">${showing.capacity - showing.tickets_sold}</span>
        </div>
      </div>
      <div class="extra content">
        <div id="${showing.id}buy" class="ui blue button">Buy Ticket</div>
      </div>
    </div>
    `
  })) //end of then

showingDisplay.addEventListener("click", event => {
  if (event.target.className === "ui blue button") {
    let id = parseInt(event.target.id)
    ticketRemain = document.getElementById(60).innerText


    if (ticketRemain > 0) {
      showingDisplay.innerHTML = ""
      fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            showing_id: id
          })
        }).then(resp => resp.json())
        .then(fetch("https://evening-plateau-54365.herokuapp.com/theatres/6")
          .then((resp) => resp.json())
          .then(json => json.showings.forEach(showing => {
            store.push(showing)
            showingDisplay.innerHTML += `
          <div class="card">
            <div class="content">
              <div class="header">
                ${showing.film.title}
              </div>
              <div class="meta">
                ${showing.film.runtime}
              </div>
              <div class="description">
                <span class="ui label">
                  ${showing.showtime}
                </span>
                ${showing.capacity - showing.tickets_sold}
              </div>
            </div>
            <div class="extra content">
              <div id="${showing.id}buy" class="ui blue button">Buy Ticket</div>
            </div>
          </div>
          `
          }))
        ) //end of then statement
    } //end of 1st if statement
  } //end of 2nd if statement
}) //end of event listener
