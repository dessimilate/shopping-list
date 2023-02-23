import { useState } from 'react';
import './App.scss'
import ShoppingListElem from './components/ShoppingListElem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

function App() {
  const [arrOfPlans, setArrOfPlans] = useState([])

  return (
    <div className="App">
      <h1>list</h1>
      <div className="shp-list">
        {arrOfPlans.map((el, i) =>
          <CSSTransition
            in={true}
            classNames="elem-trnz"
            appear
          >
            <ShoppingListElem key={i} plan={el} setPlans={setArrOfPlans} index={i} />
          </CSSTransition>
        )}
        <button onClick={() => setArrOfPlans(el => [...el, ''])}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

export default App;
