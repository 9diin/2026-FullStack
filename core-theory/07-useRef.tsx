// 1. useRef란 무엇인가?
// - useRef는 리액트 컴포넌트 안에서 "특정 박스(저장 공간)"를 만들어주는 훅입니다.
// - useState와 비슷하게 값을 저장할 수 있지만, 가장 큰 결정적 차이가 있습니다.

import { useRef, useState } from "react"

// ⭐️ useState vs useRef 결정적 차이
// 1) useState: 값이 바뀌면 컴포넌트가 다시 렌더링(re-render)됩니다.
// 2) useRef: 값이 바뀌어도 컴포넌트가 다시 렌더링 되지 않습니다.

// ⭐️ useRef의 대표적인 두 가지 용도
// 1) DOM 요소에 직접 접근할 때 (예: input에 자동으로 포커스 주기, 스크롤 위치 제어 등)
// 2) 렌더링과 상관없이 "값"을 기억해두고 싶을 때 (예: 타이머 ID, 몇 번 렌더링되었는지 카운트 등)
function App() {
    const [renderCount, setRenderCount] = useState<number>(0)
    // 2. DOM 조작을 위한 useRef 예제
    // 초기값을 null로 설정하고, 나중에 HTML 태그의 ref 속성과 연결합니다.
    const inputRef = useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        // inputRef.current는 연결된 실제 HTML input 요소를 가리킵니다.
        // .focus()를 통해 해당 input에 강제로 커서를 깜박이게 만듭니다.
        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.style.backgroundColor = "yellow" // 스타일도 직접 변경 가능!
        }
    }

    // 3. 렌더링과 무관한 값 저장을 위한 useRef 예제 (변수처럼 활용)
    // 이 값이 바뀔 때는 화면이 리렌더링되지 않습니다.
    const clickCountRef = useRef<number>(0)
    const handleIncreaseRefClick = () => {
        clickCountRef.current += 1
        console.log(`useRef 값 증가: ${clickCountRef.current} (하지만 화면은 안 바뀜!)`)
    }

    return (
        <div>
            <h2>1. DOM 요소에 접근하기 (Focus)</h2>
            {/* ref 속성에 inputRef를 연결합니다. */}
            <input ref={inputRef} type="text" placeholder="버튼을 누르면 집중됩니다." />
            <button onClick={handleFocus}>input에 포커스 주기</button>

            <h2>2. useState vs useRef 값 변화 비교</h2>
            {/* state를 바꾸는 버튼 (화면이 리렌더링됨) */}
            <button onClick={() => setRenderCount(renderCount + 1)}>전체 리렌더링 유발하기 (현재: {renderCount})</button>

            {/* useRef 값을 바꾸는 버튼 (화면은 안 바뀜) */}
            <button onClick={handleIncreaseRefClick}>useRef 값만 1 증가시키기 (콘솔 확인)</button>
        </div>
    )
}

export default App
