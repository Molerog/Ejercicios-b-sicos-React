import './App.css';
import Person from "./components/Person/Personmap"
import Data from "./components/Data/Data"


function App() {
  const person = [
    {
    id: 1,
    name: 'Germán',
    surname: 'Molero',
    age: 34
    },
    {
    id: 2,
    name: 'Sofía' ,
    surname: 'Pinilla',
    age: 24
    },
    {
    id: 3,
    name: 'Iván',
    surname: 'Nolose',
    age: 25
    }
  ]
  const german = {
    name: 'Germán',
    surname: 'Molero',
    age: 34
  }
  return(
    <div>     
        <Person object = {person}/>    
        <Data object = {german} />
    </div>
  )
}

export default App;
