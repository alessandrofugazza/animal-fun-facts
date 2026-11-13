import './App.css'
import { animals } from './animals'

const title = ''
const animalFacts = <h1>{title ? title : 'Click an animal for a fun fact'}</h1>

console.log(animalFacts)

function App() {
  return <>{animalFacts}</>
}

export default App
