import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { useState } from "react";
export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const addValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>

        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button
            onClick={() => {
              dispatch(incrementByAmount(addValue));
            }}
          >
            Add amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </section>
    </div>
  );
}
