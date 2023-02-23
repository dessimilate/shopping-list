import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

const ShoppingListElem = ({ plan, setPlans, index }) => {
  const [changeText, setChangeText] = useState(false)

  return (
    <>
      <div className="shp-list-elem">
        {changeText ?
          <input
            value={plan}
            onChange={(e) => setPlans((el) => [...el.slice(0, index), e.target.value, ...el.slice(index+1)])}
            placeholder="enter text"
            className="shp-list-elem-text"
          /> : 
          <p className="shp-list-elem-text">{plan === '' ? 'Planning...' : plan}</p>}
        <div className="shp-list-elem-btns">
          <button onClick={() => setChangeText((e) => !e)}>
            <CSSTransition
              in={!changeText}
              timeout={200}
              classNames="shp-list-elem-btn-transition"
              unmountOnExit
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </CSSTransition>
            <CSSTransition
              in={changeText}
              timeout={200}
              classNames="shp-list-elem-btn-transition"
              unmountOnExit
            >
              <FontAwesomeIcon icon={faCheck} />
            </CSSTransition>
          </button>
          <button onClick={() => setPlans(el => [...el.slice(0, index), ...el.slice(index+1)])}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  )
}

export default ShoppingListElem
