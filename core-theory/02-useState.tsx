"use client"

// 1. 리액트의 핵심: 컴포넌트와 상태(state)
// 리액트로 개발할 경우, 웹 페이지 전체를 한 번에 만들기보다, 화면을 작고 재사용 가능한 단위로 나눕니다.
// 이러한 단위를 컴포넌트(Component)라고 부릅니다.

// 컴포넌트는 화면을 구성하는 HTML 요소와, 그 요소를 구성하는 자바스크립트 로직을 하나의 단위로 묶은 것입니다.
// 컴포넌트는 재사용이 가능하며, 다른 컴포넌트 안에 포함될 수 있습니다.

// 1.1 컴포넌트의 상태(state)
// 컴포넌트는 상태(state)를 가질 수 있습니다. 상태는 컴포넌트가 가지고 있는 데이터이며, 이 데이터가 바뀌면 화면이 다시 렌더링됩니다.
// 리액트에서는 useState라는 훅(Hook)을 사용하여 상태를 관리합니다.

// 1.2 useState 훅
// useState 훅은 상태를 선언하고, 그 상태를 변경할 수 있는 함수를 반환합니다.
// useState 훅을 사용하면, 컴포넌트가 가지고 있는 데이터를 쉽게 관리할 수 있습니다.

// 예를 들어, 버튼을 클릭할 때마다 숫자가 증가하는 기능을 구현한다고 가정해보겠습니다.
// 이때, 숫자를 상태로 관리하면 버튼을 클릭할 때마가 상태가 바뀌고, 화면이 다시 렌더링됩니다.

// 1.3 비동기 폼 처리와 useActionState 훅
// 기존 리액트에서는 폼(form) 제출과 같은 비동기 작업을 처리할 때(서버와 통신할 때)
// 로딩 상태(isLoading)나 에러 상태를 처리하기 위해 수많은 상태(state)를 선언하고,
// try-catch 문을 사용하여 에러를 처리해야 했습니다.
// 이러한 방식은 코드가 복잡해지고, 상태 관리가 어려워지는 문제를 야기했습니다.

// useActionState 훅은 폼 제출과 같은 비동기 작업의 상태를 관리하는데 사용됩니다.
// 이 훅을 사용하면, 폼 제출 중 로딩 상태를 표시하거나 or 제출 성공/실패에 따른 UI 업데이트를 쉽게 처리할 수 있습니다.

// 예를 들어, 사용자가 폼을 제출하면 서버로 데이터를 전송하고, 그 결과에 따라 성공 메시지나 오류 메시지를 표시할 수 있습니다.
// useActionState 훅을 사용하면 이러한 상태 관리를 간단하게 구현할 수 있습니다.

import { useActionState, useState } from "react"
import { Button } from "@/components/ui"

async function updateNickname(previousState: string, formData: FormData) {
    const nickname = formData.get("nickname")

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (!nickname) {
        return "닉네임을 입력하세요."
    }
    return `환영합니다, ${nickname}님!`
}

function App() {
    console.log("App 컴포넌트 함수가 실행(렌더링) 되었습니다.")
    // useState 훅을 사용하여 count라는 상태를 선언하고, setCount라는 함수를 반환받습니다.
    const [count, setCount] = useState<number>(0)
    // state: 액션의 실행 결과, formAction: 폼에 연결할 액션 함수, isPending: 액션이 실행 중인지 여부
    const [state, formAction, isPending] = useActionState(updateNickname, "초깃값 할당")
    const [email, setEmail] = useState<string>("")

    // const handleSubmit = () => {
    //     setIsLoading(true)

    //     try {
    //         // API 호출
    //     } catch (error) {
    //         console.log(error)
    //         setIsError(error.message)
    //     }
    // }

    return (
        <div>
            <h2>숫자 카운터 - useState 훅 사용 실습</h2>
            <p>현재 숫자: {count}</p>
            {/* 상태가 바뀌면 리액트가 알아서 {count} 부분을 업데이트 해줍니다. (다시 렌더링합니다.) */}
            <Button onClick={() => setCount(count + 1)}>증가</Button>
            <Button onClick={() => setCount(count - 1)}>감소</Button>

            {/* <form action="">
                <input type="text" placeholder="이메일을 입력하세요." />
                <input type="password" placeholder="비밀번호를 입력하세요." />
                <button onClick={handleSubmit}>제출</button>
            </form>

            <div>{isLoading && <p>제출 중...</p>}</div> */}

            <h2>닉네임 변경 - useActionState 훅 실습</h2>
            <form action={formAction}>
                <input type="text" name="nickname" placeholder="닉네임을 입력하세요." />
                <Button type="submit" disabled={isPending}>
                    {isPending ? "닉네임 변경 중 ..." : "닉네임 변경"}
                </Button>
            </form>
            {state && <p>결과: {state}</p>}
        </div>
    )
}

export default App
