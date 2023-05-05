# 2주차 과제 풀이

# 😎 Hook에 대한 정의

- Hook은 React 버전 16.8부터 React 요소로 새로 추가되었습니다. Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.

# 😎 Hook을 사용하는 이유

1. **컴포넌트 사이에서 상태로직을 재사용하기 어렵기 때문에**
    
    Hook은 계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줍니다.
    
2. **lifeCycle로 인한 중복로직을 피하기 위해서**
    
    생명주기 메서드에는 자주 관련 없는 로직이 섞여들어가고는 합니다. 예시로 componentDidMount 와 componentDidUpdate는 컴포넌트안에서 데이터를 가져오는 작업을 수행할 때 사용 되어야 하지만, 같은 componentDidMount에서 이벤트 리스너를 설정하는 것과 같은 관계없는 로직이 포함되기도 하며, componentWillUnmount에서 cleanup 로직을 수행하기도 합니다.
    
3. **class의 this키워드로 인한 문제**
    
    React 에서의 Class 사용을 위해서는 JavaScript의 this 키워드가 어떻게 작동하는지 알아야만 합니다.
    JavaScript의 this키워드는 대부분의 다른 언어에서와는 다르게 작동함으로 사용자에게 큰 혼란을 주었으며, 코드의 재사용성과 구성을 매우 어렵게 만들었습니다. 사용자들은 props, state, 그리고 top-down 데이터 흐름을 완벽하게 하고도, Class의 이해에는 어려움을 겪어왔습니다.
    
4. **복잡한 코드를 간단하게 나타낼 수 있습니다.**
    
    Hook을 통해 서로 비슷한 것을 작은 함수의 묶음으로 컴포넌트를 나누는 방법을 사용할 수 있습니다.
    
- 이러한 문제를 해결하기 위해, Hook은 Class없이 React 기능들을 사용하는 방법을 제시합니다.
- 개념적으로 React 컴포넌트는 함수에 더 가까워 사용자가 이해하기 쉽습니다.

# 😎 그래서 Hook이 뭔데?

> Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있게합니다.
> 

> Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 연동할 수 있게 해주는 함수 등이 있습니다.
> 

> Hook은 class 안에서는 동작하지 않습니다. 대신 class 없이 React를 사용할 수 있게 해주는 것입니다.
> 

# 😎 Hooks의 종류

- useState
    
    [state, setState] = 배열 형태로 리턴시켜 줍니다.
    
    useState는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공합니다.
    
    state: 현재 상태값  /  setState: 변경할 상태값
    
    setState 함수로 변경할때마다 컴포넌트는 재랜더링이 됩니다.
    
    state를 변경할때 새state가 이전 state와 연관이 되어있다면 콜백함수를 넣어주는게 좋습니다.
    
    ```jsx
    setState((prevState) => {
      return newState;
    });
    ```
    
    useState사용해서 초기값을 받아올때 무거운걸 받아오게 된다면 useState의 인자로 콜백함수를 넣어주면 맨 처음 랜더링 될때만 실행되게 할 수 있게 됩니다.
    
    ```jsx
    import { useState } from "react";
    
    function App() {
      const [names, setName] = useState(["박윤경", "Latte"]);
      const [input, setInput] = useState("");
      const handleInputChange = (e) => {
        setInput(e.target.value);
      };
    
      const handleUpload = () => {
        setName((prevState) => {
          return [input, ...prevState];
        });
      };
    
      return (
        <>
          <input type="text" value={input} onChange={handleInputChange} />
          <button onClick={handleUpload}>Upload</button>
          {names.map((name, i) => {
            return <p key={i}>{name}</p>;
          })}
        </>
      );
    }
    ```
    
- useRef
    
    함수형 컴포넌트에서 useRef를 부르면 ref의 object를 반환해줍니다.
    
    ```jsx
    const ref = useRef(value)
    ```
    
    일반적인 유스케이스는 자식에게 명령적으로 접근하는 경우입니다.
    
    ```jsx
    function TextInputWithFocusButton() {
      const inputEl = useRef(null);
      const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
      };
      return (
        <>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Focus the input</button>
        </>
      );
    }
    ```
    
    1. DOM에 접근하는 방법으로 사용됩니다.
    2. useRef()는 순수 자바스크립트 객체를 생성하기 때문하기 때문에 ref 속성보다 유용합니다.
    3. 본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 "상자"라고 표현합니다.
    
- useCallback
    
    ```jsx
    const memoizedCallback = useCallback(
      () => {
        doSomething(a, b);
      },
      [a, b],
    );
    ```
    
    - **메모이제이션**된 콜백을 반환합니다.
        
        ***메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 동적 계획법의 핵심이 되는 기술이다.***
        
    - 불필요한 렌더링을 방지하기 위해 참조의 동일성에 의족적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용합니다
- useMemo
    
    ```jsx
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```
    
    1. 메모이제이션된 값을 반환합니다.
    2. useMemo는 의존성이 변경되었을 때만 메모이제이션된 값을 다시 계산하여 모든 렌더링 시 고비용 계산을 방지해 최적화 해줍니다.
    3. useMemo로 전달된 함수는 렌더링 중에 실행된다는 것을 기억하세요. 통상적으로 렌더링 중에는 하지 않는 것을 이 함수 내에서 적용하면 안됩니다.
    
    📌 사용방법
    
    1. react에서 useMemo를 import 한다.
    2. 함수를를 useMemo로 감싼다.
    
    ```jsx
    function Component({ a, b }) {
    	const result = useMemo(() => compute(a, b), [a, b]);
    	
    	return <div>{result}</div>
    }
    ```
    
- React.memo
    
    <aside>
    💡 React.memo는 [고차 컴포넌트(Higher Order Component)](https://ko.reactjs.org/docs/higher-order-components.html)입니다.
    
    </aside>
    
    1. 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있습니다. 즉, React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용합니다.
    2. 부모 컴포넌트가 렌더링 되면 모든 자식 컴포넌트 또한 렌더링 되는데 props가 변경되지 않았다면 자식 컴포넌트는 렌더링 될 필요가 없다. 이때 React.memo 함수를 사용해 불필요한 렌더링을 방지해 줍니다.
    - React.memo는 props 변화에만 영향을 준다.
    - props가 복잡한 객체인 경우 React.memo는 얕은 비교만 한다.
    - 다른 비교를 원하면 React.memo의 두 번째 인자로 비교할 수 있는 함수를 넘겨주면 된다.
    
    📌 React.memo를 사용하는 경우?
    
    - 함수형 컴포넌트인 경우
    - 컴포넌트가 같은 props로 자주 렌더링 되는 경우
    - 무겁고 복잡한 연산이 있는 경우
    
    📌  React.memo를 사용할 필요가 없는 경우?
    
    - 클래스형 컴포넌트인 경우 pure컴포넌트를 확장해서 사용하거나 shouldComponentUpdate()함수를 사용한다.
    - 컴포넌트가 다른 props로 자주 렌더링 되는 경우
    - 가벼운 프로젝트인 경우
    
    📌 사용방법
    
    1. react에서 React를 import 한다.
    2. 컴포넌트를 React.memo로 감싼다.
    
    📌  React.memo와 use.Memo의 공통점
    
    - props가 변하지 않으면 리렌더링 되지 않고 이전의 메모이즈된 결과를 반환한다.
    
    📌  React.memo와 use.Memo의 차이점
    
    - React.memo는 고차 컴포넌트, useMemo는 React Hook이다.
    - React.memo는 클래스형 함수형 컴포넌트 모두 사용 가능하지만 useMemo는 함수형 컴포넌트에서만 사용 가능하다.
- useEffect
    
    ```jsx
    import React, { useState, useEffect } from 'react';
    
    function FriendStatus(props) {
      const [isOnline, setIsOnline] = useState(null);
    
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }
    
      useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });
    
      if (isOnline === null) {
        return 'Loading...';
      }
      return isOnline ? 'Online' : 'Offline';
    }
    ```
    
    - useEffect는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해줍니다.
    - useEffect를 사용하면, React는 DOM을 바꾼 뒤에 “effect” 함수를 실행할 것입니다
    - Effect를 “해제”할 필요가 있다면, 해제하는 함수를 반환해주면 됩니다.
    - class 컴포넌트에서는 생명주기 메서드를 사용해 각각 쪼개서 넣어야만 했다면 Hook를 사용하면 코드를 한군데에 모아서 작성 할 수 있게 됩니다.

# 😎 Hook 사용 규칙

- 최상위에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
- React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 일반 Javascript 함수에서는 Hook을 호출하면 안됩니다.