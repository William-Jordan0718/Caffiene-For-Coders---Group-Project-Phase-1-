let currentStudent;

fetch("http://localhost:3000/students")
    .then(response => response.json())
    .then(data => {
    data.forEach(student =>
        renderImages(student))
        renderDetails(data[0])
    })

//render student images
function renderImages(student) {
  const newImg = document.createElement('img')
  newImg.src = student.image

  newImg.addEventListener('click', () => renderDetails(student))

  document.getElementById('students').append(newImg)
}

//render student details
function renderDetails(student) {
  currentStudent = student

  const img = document.querySelector('.student-image')
  img.src = student.image

  const name = document.querySelector('.name')
  name.textContent = student.name

  const about = document.querySelector('.about')
  about.textContent = student.about

  const donationAmount = document.querySelector('#donation-amount')
  donationAmount.textContent = student.donation

}

const donationForm = document.querySelector('#donation-form')
donationForm.addEventListener('submit', (event) => handleDonationSubmit(event))

function handleDonationSubmit(event) {  
  event.preventDefault()

  const userInput = event.target["donation-amount"].value
  currentStudent.donation += parseInt(userInput)
  document.querySelector('#amount').textContent = currentStudent.donation

  event.target.reset()
}

const newStudentForm = document.querySelector('#new-student')
newStudentForm.addEventListener('submit', (event) => handleFormSubmit(event))

function handleFormSubmit(event) {
  event.preventDefault()

  // create an object with the values from the form (event)
  const studentObject = {
    name: event.target.name.value,
    image: event.target.image.value,
    about: event.target.comment.value
  }

  // add the new object to the DOM
  renderImages(studentObject)

  // clear the form
  event.target.reset() 
}