const URL = 'https://api.wheretheiss.at/v1/satellites/25544'
const element = document.querySelector('div')
const elementChild = document.createElement('div')
const button = document.querySelector('button')
async function getData() {
  const response = await fetch(URL)
  const data = await response.json()
  const { latitude, longitude } = data
  return { latitude, longitude }
}
const displayData = async () => {
  const data = await getData()
  button.addEventListener('click', () => {
    element.appendChild(elementChild)
    elementChild.innerHTML = `<h3>
    Latitude : ${data.latitude}</h3>
    <h3>Longitude : ${data.longitude}</h3>
    `
    console.log(data)
  })
}
displayData()
