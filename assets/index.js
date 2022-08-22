fetch('http://localhost:3000/students')
  .then(response => response.json())
  .then(data => {
      console.log(data)
  data.forEach(student =>
      renderTitles(student))
      renderMovieDetails(data[0])
  })

// //renders movie titles to left side bar
// function renderTitles(movie) {
//   const movieSideMenu = document.querySelector("#films")

//   const movieTitle = document.createElement('li')
//   movieTitle.textContent = movie.title

//   movieSideMenu.append(movieTitle)

//   movieTitle.addEventListener('click', () => {
//       renderMovieDetails(movie)
//   })
// }

// //renders movie details to movie card
// function renderMovieDetails(movie) {
//   const movieImage = document.querySelector("#poster")
//   const movieTitle = document.querySelector("#title")
//   const movieDescription = document.querySelector("#film-info")
//   const movieRuntime = document.querySelector("#runtime")
//   const movieShowtime = document.querySelector("#showtime")
//   const ticketNum = document.querySelector("#ticket-num")

//   movieImage.src = movie.poster
//   movieTitle.textContent = movie.title
//   movieDescription.textContent = movie.description
//   movieRuntime.textContent = movie.runtime
//   movieShowtime.textContent = movie.showtime
 
//   //remaining tickets
//   ticketNum.textContent = movie.capacity - movie.tickets_sold


//   //sets Buy Ticket button click event   
//   const btn = document.querySelector('#buy-ticket')
//   btn.addEventListener('click', (e) => handleClick())
// }

// //sets Buy Ticket button click event alternative
// //document.querySelector("#buy-ticket").addEventListener('click', () => {
//   //const ticketNum = document.querySelector("#ticket-num")
//   //let ticketsAvailable = parseInt(ticketNum.textContent) <---use textContent to get the value out of the element
//       //console.log(ticketsAvailable)
// //})

// //deincrements remaining tickets
// function handleClick(event) {
//   const ticketNum = document.querySelector("#ticket-num")
//   const value = ticketNum.textContent
//   if(value > 0) {
//       const ticketRemaining = parseInt(value) -1
//       ticketNum.textContent = ticketRemaining
//   } else {
//       document.querySelector("#buy-ticket").disabled = true
//   }
// }
