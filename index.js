const createNewProjectframework = (title, imageUrl, text) => {
  const newframework = document.createElement('div')
  newframework.classList.add('framework')

  const frameworkTitle = document.createElement('h3')
  frameworkTitle.classList.add('framework__title')
  frameworkTitle.innerText = title
  newframework.appendChild(frameworkTitle)

  const frameworkImage = document.createElement('img')
  frameworkImage.classList.add('framework__img')
  frameworkImage.src = imageUrl
  frameworkImage.alt = ''
  newframework.appendChild(frameworkImage)

  const frameworkDescription = document.createElement('p')
  frameworkDescription.classList.add('framework__text')
  frameworkDescription.innerText = text
  newframework.appendChild(frameworkDescription)

  return newframework
} 

const resetForm = () => {
  document.querySelector('#project-title').value = ''
  document.querySelector('#project-img-link').value = ''
  document.querySelector('#project-text').value = ''
}

const handleSubmit = (event) => {
  event.preventDefault()
  const formTitle = document.querySelector('#project-title').value
  const formImageUrl = document.querySelector('#project-img-link').value
  const formText = document.querySelector('#project-text').value
  const newProjectframework = createNewProjectframework(formTitle, formImageUrl, formText)
  document.querySelector('#frameworks').appendChild(newProjectframework)
  resetForm()
}
