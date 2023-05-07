import { useEffect, useRef, useState } from "react";
import { MainButton } from "./MainButton";
import Timer from "./Timer";
import { Link } from "react-router-dom";

function UseEffect() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const value = (e) => {
    setName(e.target.value);
  };

  const Addnum = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("🍉🍉🍉");
  });
  //랜더링 될때마다 실행해줌

  useEffect(() => {
    console.log("🍇🍇🍇🍇");
  }, [count]);
  //count만 랜더링 될때 실행해줌

  useEffect(() => {
    console.log("🥝🥝🥝🥝");
  }, [name]);
  //name만 랜더링 될때 실행해줌

  useEffect(() => {
    console.log("🍓🍓🍓");
  }, []);
  //처음 랜더링 이후에 실행 안함

  const [showTimer, setShowTimer] = useState(false);

  const show = () => {
    setShowTimer(!showTimer);
  };
  //-----------------------------------
  const [count1, setCount1] = useState(0);
  const countRef = useRef(0);
  // countRef를 콘솔로 찍으면 {current:0} current속성과 useRef함수 기본값이 있다

  console.log("랜더링");

  const increaseCountState = () => {
    setCount1(count1 + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  };
  return (
    <>
      <h1>useEffect 예시</h1>
      <Link to="/">
        <MainButton>hooks</MainButton>
      </Link>
      <input onChange={value} value={name} />
      <p>input value : {name}</p>
      <p>---------------------</p>
      <button onClick={Addnum}>추가</button>
      <p>{count}</p>
      <p>---------------------</p>
      <button onClick={show}>Timer</button>
      {showTimer && <Timer />}
      <p>
        --------------------------------------------------------------------------
      </p>
      <h1>useRef 예시</h1>
      <p>State: {count1}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      {/* Ref 올려 버튼을 클릭해도 콘솔창에만 올라갈 뿐 UI상으로는 올라가지 않는다
         그 이유는 useState의 경우 값이 바뀔때마다 리랜더링이 되지만 Ref는 리랜더링이 안된다.
         따라서 State 올려 버튼을 클릭하고 나서야 랜더링이 되서 UI상으로 보여지는 것이다.

         여기서 알아야할 점은 랜더링이 될때 초기값인 0은 반환되지 않는다.(변수를 쓰면 랜더링이 될때 초기값을 반환)
      */}
      <p>----------------------------------------------</p>
      <input ref={inputRef} placeholder="username" />
      <button onClick={login}>로그인</button>
    </>
  );
}
export default UseEffect;
