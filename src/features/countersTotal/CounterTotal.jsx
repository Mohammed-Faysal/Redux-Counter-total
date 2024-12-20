const CounterTotal = ({count, onIncrement, onDecrement}) => {

    return (
        <div>
            <h1>Counter1: {count}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
};

export default CounterTotal;