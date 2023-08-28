import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { decrement, increase, increment, toggleCounter } from '../utils/helpers';


const Counter = () => {
  //decleretion function ------------------------
  // const counter = useSelector(function(state) {
  //   return state.counter
  // })

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const toggle = useSelector((state) => state.toggleCounter)
  console.log(counter);

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  };

  const increaseHandler = () => {
    dispatch(increase(20))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>increase by 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
