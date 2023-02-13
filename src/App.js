import { useState } from 'react';
import './App.scss'
import ShoppingListElem from './components/ShoppingListElem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [arrOfPlans, setArrOfPlans] = useState([''])

  return (
    <div className="App">
      <h1>shopping list</h1>
      <div className="shp-list">
        {arrOfPlans.map((el, i) => 
        <ShoppingListElem key={i} plan={el} setPlans={setArrOfPlans} index={i} />)}
        <button onClick={() => setArrOfPlans(el => [...el, ''])}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

export default App;
