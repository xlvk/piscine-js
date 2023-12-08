let newCircle = document.createElement('div')
newCircle.className = 'circle'
newCircle.style.background = 'white'

export const createCircle = () => {
  document.body.addEventListener('click', (e) => createElementCircle(e))
  document.body.removeEventListener('click', (e) => createElementCircle(e))
}

const createElementCircle = (event) => {
  newCircle.style.top = event.clientY + 'px'
  newCircle.style.left = event.clientX + 'px'
  document.body.appendChild(newCircle)
  moveCircle()
}

export const moveCircle = () => {
  document.body.addEventListener('mousemove', (e) => {
    newCircle.style.top = e.clientY + 'px'
    newCircle.style.left = e.clientX + 'px'
  })
}
export const setBox = () => {
}