// import React, { useState } from "react";

// Info.js
// const Counter = () => {
//   const [value, setValue] = useState(0); //현재 카운터의 기본값을 0 으로 설정
//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{value}</b> 입니다.
//       </p>
//       <button onClick={() => setValue(value + 1)}>+1</button>
//       <button onClick={() => setValue(value - 1)}>-1</button>
//     </div>
//   );
// };

// 이 함수가 호출되고 나면 배열을 반환하는데요, 그 배열의 첫번째 원소는 상태 값이고, 두번째 원소는 상태를 설정하는 함수입니다.
// 이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상적으로 리렌더링 됩니다.

// useState 를 사용 할 땐 코드의 상단에서 import 구문을 통하여 불러오고, 아래와 같이 사용합니다.
// const [value, setValue] = useState(0) - 배열 비구조화 할당

// ---------------------------------------------------------------------

// -App.js코드
// import React from "react";
// import Counter from "./Counter";

// const App = () => {
//   return <Counter />;
// };

// export default App;
