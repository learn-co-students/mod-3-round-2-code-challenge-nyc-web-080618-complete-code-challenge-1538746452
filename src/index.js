document.addEventListener("DOMContentLoaded", function(){
  const theatreId = 9;

//step 1, GET shows;
  fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
  .then(response => response.json())
  .then(showData => {
    document.getElementById("show-card").innerHTML = showData.showings.map(show => {
      // debugger
      let newShow = new Show(show);
      return newShow.render();
    }).join("")
  })

  function updatePage(){
    document.getElementById("show-card").innerHTML = ""
    fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
    .then(response => response.json())
    .then(showData => {
      document.getElementById("show-card").innerHTML = showData.showings.map(show => {
        // debugger
        let newShow = new Show(show);
        return newShow.render();
      }).join("")
    })
  }

//step 2, POST ticket;
  const buyTicket = document.getElementById("show-card");

  buyTicket.addEventListener("click", (event) => {
    if (event.target.className === "ui blue button"){
      let showId = +event.target.id;
      // let targetShow = allShows.find(show => show.id == showId);
      // targetShow.tickets_sold++;
      // no need to keep line 34, 35 if no using optimitic rendering;
      
      fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          showing_id: showId
        })
      }).then(updatePage)// using callback to do this step, so updatePage will only run after the post fetch request.
    }

  })


})
