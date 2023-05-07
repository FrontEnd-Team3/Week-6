// useCallback 을 사용하여 최적화

// Average.js

// import React, { useState, useMemo, useCallback } from 'react';

// const getAverage = numbers => {
//   console.log('평균값 계산중..');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = useCallback(e => {
//     setNumber(e.target.value);
//   }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
//   const onInsert = useCallback(
//     e => {
//       const nextList = list.concat(parseInt(number));
//       setList(nextList);
//       setNumber('');
//     },
//     [number, list]
//   ); // number 혹은 list 가 바뀌었을 때만 함수 생성

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange}  />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

// 코드의 부가 설명
// useCallback 의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파라미터에는 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시해주어야 합니다.
// 만약에 onChange 처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때 단 한번만 함수가 생성되며, onInsert 처럼 배열 안에 number 와 list 를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가 될 때마다 함수가 생성됩니다.
// 함수 내부에서 기존의 상태 값을 의존해야 할 때는 꼭 두번째 파라미터 안에 포함을 시켜주어야 합니다.
// 예를 들어서 onChange 의 경우엔 기존의 값을 조회하는 일은 없고 바로 설정만 하기 때문에 배열이 비어있어도 상관이 없지만 onInsert 는 기존의 number 와 list 를 조회해서 nextList 를 생성하기 때문에 배열 안에 number 와 list 를 꼭 넣어주어야 합니다.
