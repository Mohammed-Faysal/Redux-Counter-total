import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incBy, reset } from './counterSlice';

const Counters = () => {

    // const count = useSelector((state) => console.log(state))
    const {count} = useSelector((state) => state.singleCounter)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incBy(3))}>IncrementBy3</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
        </div>
    );
};

export default Counters;