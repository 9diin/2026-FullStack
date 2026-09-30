"use client"

// 1. useCallback이란 무엇인가?
// useCallback은 함수를 메모이제이션(Memoization)을 하기 위한 Hook 입니다.
// 즉, "한 번 만든 함수를 재사용 할 수 있도록 기억하는 기능"입니다.

import { Button } from "@/components/ui"
import { useCallback, useState, memo, useMemo } from "react"

// 컴포넌트가 다시 렌더링(re-render) 될 때마다 내부에 선언된 함수들도 새로 만들어집니다.
// 리액트는 함수가 새로 만들어지면 "새로운 참조(reference)값"으로 인식하기 때문에,
// 이 불필요한 재생성과 렌더링 문제를 방지하기 위해 useCallback을 사용합니다.

const ChildComponent = memo(({ name, onClick }: { name: string; onClick: () => void }) => {
    console.log("자식 컴포넌트가 렌더링 되었습니다.")

    return (
        <div>
            <p>안녕, {name}</p>
            <Button onClick={onClick}>자식 컴포넌트 버튼</Button>
        </div>
    )
})

function App() {
    const [count, setCount] = useState<number>(0)
    const [text, setText] = useState<string>("")

    // 2. useCallback의 기본 사용법
    // useCallback은 다음과 같은 형태로 사용합니다.

    // - 첫 번째 인자: 기억하고 싶은 함수 (() => {...})
    // - 두 번째 인자(배열): 이 배열 안에 포함된 값이 바뀔 때만 함수를 새로 생성 ([])

    // 즉, 의존성 배열이 비어 있다면
    // useCallback은 컴포넌트가 처음 렌더링 될 때 한 번만 함수를 생성하고,
    // 그 이후에는 컴포넌트가 몇 번 리렌더링 되든 같은 함수를 계속 재사용합니다.
    const memorizedFunction = useCallback(() => {
        // 실행할 코드
        console.log("메모이제이션된 함수가 실행되었습니다.")
    }, []) // 의존성 배열이 비어 있음

    // 3. 왜 useCallback이 필요한가?
    // 컴포넌트가 렌더링 될 때마다 매번 새로운 함수가 만들어지면, 다음과 같은 문제가 생깁니다.
    // - 성능 낭비: 불필요한 함수 재생성 반복
    // - 불필요한 하위 컴포넌트 렌더링
    //   props로 전달한 함수가 매번 새로 만들어지므로,
    //   React.memo 등으로 최적화된 하위 컴포넌트도 "props가 바뀌었네?" 하고 오인하여
    //   불필요하게 다시 렌더링되게 합니다.

    // * React.memo란 무엇인가?
    // 리액트에서는 기본적으로 부모 컴포넌트가 다시 렌더링되면, 그 안에 있는 모든 자식 컴포넌트들도 무조건 함께 리렌더링됩니다.
    // (자식 컴포넌트의 내용이 바뀌지 않았음에도 불구하고)
    // 이때, 자식 컴포넌트 React.memo로 감싸주면, "전달받은 props가 이전과 똑같다면 리렌더링을 건너뛰고(skip)"
    // 이전에 그려둔 화면을 그대로 재사용해라"라고 리액트에게 명령할 수 있습니다.

    // * 목적: 불필요한 렌더링을 막하 성능을 최적화하기 위함

    // 부모 컴포넌트가 렌더링 될 때마다 handleClick 함수가 새로 만들어짐
    const handleClick = () => console.log("클릭!")
    // 부모 컴포넌트가 리렌더링될 때 함수가 새로 만들어지면,
    // React.memo는 "props로 받은 함수가 옛날과 달라졌네? 다른 컴포넌트인가?" 하고 착각해서
    // 자식 컴포넌트를 또 렌더링합니다.

    // 해결책: 이때 함수를 useCallback으로 감싸서 주소값이 안 바뀌게 고정해 주면,
    // React.memo가 완벽하게 작동하여 불필요한 렌더링을 막을 수 있게 됩니다.

    return (
        <>
            <div>
                App
                <h1>카운드: {count}</h1>
                {/* 버튼을 누르면 state가 바뀌면서 App 컴포넌트가 리렌더링 됩니다. */}
                <Button onClick={() => setCount(count + 1)}>카운트 증가 (+1)</Button>
                {/* 부모의 count가 바뀌어도 props로 넘겨주는 name은 "철수"로 똑같습니다. */}
                <ChildComponent name="철수" onClick={handleClick} />
                {/* 동작 방식 */}
                {/* 버튼을 눌러서 부모 컴포넌트의 count가 바뀌면 부모는 리렌더링 됩니다. */}
                {/* 이때, ChildComponent도 원래라면 같이 리렌더링 되어야 하지만, */}
                {/* React.memo가 "name props가 '철수'로 예전과 똑같네?" 라고 판단하여 */}
                {/* 리렌더링을 생략하고 콘솔 창에 "자식 컴포넌트가 렌더링되었습니다."도 찍히지 않습니다. */}
            </div>
            <div>
                <h1>useCallback 학습 예제</h1>
                <p>
                    입력값: <strong>{text}</strong>
                </p>
                <input type="text" placeholder="텍스트를 입력하세요." value={text} onChange={(event) => setText(event.target.value)} />
                <ChildComponent name="철수" onClick={memorizedFunction} />
            </div>
        </>
    )
}

export default App
