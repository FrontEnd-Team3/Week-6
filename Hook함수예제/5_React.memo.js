// import React, { useEffect, useMemo, useState } from "react";

// const TextView = ({ text }) => {
//   useEffect(() => {
//     console.log("text 변경됨");
//   });
//   return <div>{text}</div>;
// };

// const CountView = ({ count }) => {
//   useEffect(() => {
//     console.log("count가 변경됨");
//   });
//   return <div>{count}</div>;
// };

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("a");

//   return (
//     <div className="App">
//       <TextView text={text} />
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <br />
//       <CountView count={count} />
//       <button onClick={() => setCount(count + 1)}>count 1 증가</button>
//     </div>
//   );
// }

// export default App;

// -부가 설명
// TextView 컴포넌트와 CountView 컴포넌트를 만들면됩니다.
// 그 안에서는 useEffect()가 있는데 2번째 인자에 값이 없으므로 그 컴포넌트가 업데이트가 될때마다 실행이됩니다.
// 즉, 컴포넌트가 재렌더링될때마다 콘솔창에 출력을 하는 것입니다.
