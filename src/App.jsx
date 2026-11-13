import './App.css'
import { animals } from './animals'
import oceanImg from './assets/images/ocean.jpg'

const background = <img className="background" alt="ocean" src={oceanImg} />

const title = ''
const animalFacts = <h1>{title ? title : 'Click an animal for a fun fact'}</h1>

function App() {
  return (
    <div>
      {animalFacts}
      {background}
    </div>
  )
}

export default App
