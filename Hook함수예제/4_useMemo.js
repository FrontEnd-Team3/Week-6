// 리스트에 숫자들을 추가하면 해당 숫자들의 평균을 나타내는 함수형 컴포넌트
// 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용

// list 배열의 내용이 바뀔 때에만 getAverage 함수가 호출

// Average.js
// import React, { useState, useMemo } from 'react';

// const getAverage = numbers => {
//   console.log('평균값 계산중..');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = e => {
//     setNumber(e.target.value);
//   };
//   const onInsert = e => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   };

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균 값:</b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

// -----------------------------------------------------

// App.js
// import React from 'react';
// import Info from './Info';

// const App = () => {
//   return <Info />;
// };

// export default App;
