// useState 를 여러번 사용하기

// 하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용하시면 됩니다.

// import React, { useState } from "react";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

// -----------------------------------------------------------

// -App.js코드

// import React from 'react';
// import Info from './Info';

// const App = () => {
//   return <Info />;
// };

// export default App;
