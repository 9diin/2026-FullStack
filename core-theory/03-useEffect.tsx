// 1. useEffect - 컴포넌트의 사이드 이펙트를 제어하다
// 리액트에서 컴포넌트는 기본적으로 렌더링이라는 과정을 통해 화면을 갱신합니다.
// 그러나 단순히 화면을 그리는 것 외에도, 렌더링 이후에 특정 작업을 수행해야 하는 경우가 많습니다.
// 예를 들어, 데이터를 불러오거나(API 호출), 콘솔에 로그를 남기거나 하는 작업 등이 그렇습니다.
// 이를 관리하기 위해 리액트는 useEffect 훅(Hook)을 제공합니다.

import { useEffect } from "react"

function App() {
    useEffect(() => {
        // 실행할 코드
        console.log("useEffect 훅 실행")
    })

    return <div>App</div>
}

export default App
