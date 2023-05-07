// import React, { useState, useEffect } from 'react';

// Info.js
// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');
//   useEffect(() => {
//     console.log('렌더링이 완료되었습니다!');
//     console.log({
//       name,
//       nickname
//     });
//   });

//   const onChangeName = e => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = e => {
//     setNickname(e.target.value);
//   };

//   return (
//     ( ... )
//   );
// };

// export default Info;

// - 마운트 될 때만 실행하고 싶을 때
// 만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다.

// 기존의 useEffect 코드를 다음과 같이 변경

// useEffect(() => {
//     console.log('마운트 될 때만 실행됩니다.');
//   }, []);

// --------------------------------------------------------------------------

// - 특정 값이 업데이트 될 때만 실행하고 싶을 때

// 기존의 useEffect 코드를 다음과 같이 변경

// useEffect(() => {
//     console.log(name);
//   }, [name]);

// --------------------------------------------------------------------------

// 뒷정리하기 - 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행

// 기존의 useEffect 코드를 다음과 같이 변경

// useEffect(() => {
//     console.log('effect');
//     console.log(name);
//     return () => {
//       console.log('cleanup');
//       console.log(name);
//     };
//   });

// -App.js - 뒷정리
// import React, { useState } from 'react';
// import Info from './Info';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------------------------------
