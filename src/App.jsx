import './App.css'
import { animals } from './animals'
import oceanImg from './assets/images/ocean.jpg'

const background = <img className="background" alt="ocean" src={oceanImg} />

const title = ''
const animalFacts = <h1>{title ? title : 'Click an animal for a fun fact'}</h1>

const images = []
for (const animal in animals) {
  images.push(
    <img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" />,
  )
}

function displayFact(e) {
  const animal = e.target.alt
  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length)
  const fact = animals[animal].facts[randomIndex]
  console.log(fact)
}

function App() {
  return (
    <>
      <div>{animalFacts}</div>
      <div>{background}</div>
      <div className="animals">{images}</div>
    </>
  )
}

export default App
