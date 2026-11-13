import './App.css'
import { animals } from './animals'
import oceanImg from './assets/images/ocean.jpg'

const background = (
  <div>
    <img className="background" alt="ocean" src={oceanImg} />
  </div>
)

const title = ''
const animalFacts = (
  <div>
    <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
    <p id="fact"></p>
  </div>
)

const images = []
for (const animal in animals) {
  images.push(
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />,
  )
}

function displayFact(e) {
  const animal = e.target.alt
  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length)
  const fact = animals[animal].facts[randomIndex]
  document.getElementById('fact').innerHTML = fact
}

function App() {
  return (
    <>
      {animalFacts}
      {background}
      <div className="animals">{images}</div>
    </>
  )
}

export default App
