import classes from './Counter.module.css';

const Counter = (props) => {
  const toggleCounterHandler = () => {
    props.toggleCounter();
  };
  const incrementHandler = () => {
    console.log('+');
    props.increment();
  };
  const decrementHandler = () => {
    console.log('_');
    props.decrement();
  };

  const incrementByFiveHandler = (val) => {
    console.log('_');
    props.incrementByFive(val);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!props.isShow && <div className={classes.value}>- -{props.counter} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={() => incrementByFiveHandler(5)}>Increment by Five</button>
    </main>
  );
};

export default Counter;
