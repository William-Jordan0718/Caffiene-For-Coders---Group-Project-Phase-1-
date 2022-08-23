fetch("http://localhost:3000/students")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    data.forEach(student =>
        renderNames(student))
        renderDetails(data[0])
    })

//render student name and image
function renderNames(student) {
  const newImg = document.createElement('img')
  newImg.src = student.image

  newImg.addEventListener('click', () => renderDetails(student))

  document.getElementById('students').append(newImg)
}

//render student details
function renderDetails(student) {
  // grab the image to replace
  const img = document.querySelector('.student-image')
  img.src = student.image

  // add the student name
  const name = document.querySelector('.name')
  name.textContent = student.name

  //add student about section
  const about = document.querySelector('.about')
  about.textContent = student.about

  // add the likes
  const likes = document.querySelector('#likes-display')
  likes.textContent = student.likes
}

const newStudentForm = document.querySelector('#new-student')

newStudentForm.addEventListener('submit', (event) => handleFormSubmit(event))

function handleFormSubmit(event) {
  event.preventDefault()

  // create an object with the values from the form (event)
  const studentObject = {
    name: event.target.name.value,
    image: event.target.image.value,
    comment: event.target["new-comment"].value
  }

  // add the new object to the DOM
  renderNames(studentObject)

  // clear the form
  event.target.reset() // same
}