import { useDispatch, useSelector } from 'react-redux';
import './App.css'
// import Counters from './features/counters/Counters';
import CounterTotal from './features/countersTotal/CounterTotal';
import { decrement, increment } from './features/countersTotal/counterTotalSlice';
import Total from './features/countersTotal/Total';

function App() {

  const countersTotalArr = useSelector((state) => state.countersTotal)
  // const countersTotal = useSelector((state) => state)
  // console.log(countersTotal);
  
  const dispatch = useDispatch()

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))
  }

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  }

  const totalCount = countersTotalArr.reduce((sum, currentVal) => sum + currentVal.value, 0)


  return (
    <>
      {/* <Counters/>  */}
      {
        countersTotalArr && countersTotalArr.map((counterTotal) => (
          <CounterTotal 
            key={counterTotal.id} 
            count={counterTotal.value}
            onIncrement={()=> handleIncrement(counterTotal.id)}
            onDecrement={()=> handleDecrement(counterTotal.id)}
          />
        ))
      }
      <Total totalCount={totalCount}/>
    </>
  )
}

export default App
