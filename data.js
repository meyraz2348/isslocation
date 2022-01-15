const URL = 'https://api.wheretheiss.at/v1/satellites/25544'
const element = document.querySelector('div')
let interval = false
const elementChild = document.createElement('div')
const button = document.querySelector('button')
async function getData() {
  const response = await fetch(URL)
  const data = await response.json()
  const { latitude, longitude } = data
  return { latitude, longitude }
}
async function addToHtml() {
  const data = await getData()
  elementChild.innerHTML = `<h3>
   Latitude : ${data.latitude}</h3>
   <h3>Longitude : ${data.longitude}</h3>
   `
}
const displayData = () => {
  button.addEventListener('click', async () => {
    element.appendChild(elementChild)
    addToHtml()
    const interval = setInterval(() => addToHtml(), 3000)
  })
}
displayData()
