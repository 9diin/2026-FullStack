"use client"

// 1. useEffect - 컴포넌트의 사이드 이펙트를 제어하다
// 리액트에서 컴포넌트는 기본적으로 렌더링이라는 과정을 통해 화면을 갱신합니다.
// 그러나 단순히 화면을 그리는 것 외에도, 렌더링 이후에 특정 작업을 수행해야 하는 경우가 많습니다.
// 예를 들어, 데이터를 불러오거나(API 호출), 콘솔에 로그를 남기거나 하는 작업 등이 그렇습니다.
// 이를 관리하기 위해 리액트는 useEffect 훅(Hook)을 제공합니다.

import { useEffect, useState } from "react"

function App() {
    const [name, setName] = useState<string>("")
    const [nickname, setNickname] = useState<string>("")

    // 이 함수는 컴포넌트가 렌더링될 때마다 실행됩니다.
    // 즉, 상태(state)가 변경되면 페이지(혹은 컴포넌트)가 다시 렌더링 되기 때문에
    // 이 말은 useEffect의 안쪽 콜백 함수가 호출된다는 말과 동일하다.
    useEffect(() => {
        // 실행할 코드
        // 이 경우, 컴포넌트가 처음 렌더링될 때는 물론, state가 변경되어 재렌더링 될 때마마
        // 콘솔 메시지가 출력됩니다.
        console.log("useEffect 훅 실행")
        console.log("컴포넌트가 렌더링 될 때마다 실행됩니다.")
    })

    // 실행 시점을 제어하기 - 의존성 배열의 역할
    // 렌더링 때마다 실행되는 것이 항상 바람직한 것은 아닙니다.
    // 대부분의 경우에는 특정 시점이나 특성 상태가 바뀌었을 때만 코드가 실행되길 원합니다.
    // 이때, useEffect 두 번째 인자로 전달되는 의존성 배열(Dependency List)이 큰 역할을 한다.

    // 마운트 될 때, 한 번만 실행하기
    // 다음과 같이 두 번째 인자로 빈 배열([])을 전달하면,
    // 해당 useEffect는 컴포넌트가 마운트될 때 단 한 번만 실행됩니다.
    useEffect(() => {
        // 실행할 코드
        console.log("컴포넌트가 처음 렌더링 될 때만 실행됩니다.")
    }, [])

    // 특정 값이 변경될 때만 실행하기
    // useEffect 두 번째 인자 배열 안에 특정 상태 변수를 넣으면
    // 그 값이 바뀔 때만 콜백 함수가 실행됩니다.
    useEffect(() => {
        console.log("name 값이 변경될 때만 실행됩니다.")
    }, [name])

    // 위 코드에서는 name 상태 값이 바뀔 때만 함수가 실행됩니다.
    // nickname이 변경되더라도 이 useEffect는 동작하지 않습니다.
    // 이와 같은 방식으로 여러 상태를 구분에 필요한 시점에만 특정 작업을 실행할 수 있습니다.

    // 위 예제에서는 각 상태값이 변화할 때마다 해당하는 useEffect가 개별적으로 실행됩니다.
    // 이를 통해 상태 변화와 렌더링의 관계를 직관적으로 확인할 수 있습니다.

    // useEffect 실행 시점 정리
    // 의존성 배열 없음 : 실행 시점이 매 렌더링마다 실행
    // 의존성 배열 있음 - 빈 배열일 경우 : 최초 마운트 시 1회 실행
    // 의존성 배열 있음 - 특정 값 [state] : 해당 값이 변경될 때만 실행

    // 요약하자면, useEffect는 렌더링 이후의 작업을 제어하는 훅이며,
    // 의존성 배열을 통해 언제 실행할 지를 결정할 수 있습니다.

    return (
        <div>
            <input type="text" onChange={(event) => setName(event.target.value)} placeholder="이름을 입력하세요." />
            <input type="text" onChange={(event) => setNickname(event.target.value)} placeholder="별명을 입력하세요." />
            <br />
            <p>이름: {name}</p> <br />
            <p>별명: {nickname}</p>
        </div>
    )
}

export default App
