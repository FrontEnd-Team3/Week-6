import { useState } from "react";
import { MainButton } from "./MainButton";
import { Link } from "react-router-dom";

function UseState1() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const increment = () => {
    setCount(count + count1);
  };
  const a = () => {
    setCount1(count1 + 1);
  };
  return (
    <>
      <h1>useState 예시</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={a}>{count1}만큼 증가</button>
      <Link to="/useEffect">
        <MainButton>useState</MainButton>
      </Link>
    </>
  );
}
export default UseState1;
