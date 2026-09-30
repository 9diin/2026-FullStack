// 1. useMemo - 불필요한 계산을 피하는 최적화 전략
// - 컴포넌트가 렌더링 될 때마다 단순한 콘솔 출력이 실행되는 것은 성능에 큰 지장을 주지 않습니다.
// - 그러나 렌더링할 때마다 복잡하고 무거운 계산을 수행해야 하는 로직이 있다면 성능 저하가 발생할 수 있습니다.
// - 이때 사용할 수 있는 훅이 useMemo 입니다.

// 1.1 useMemo의 개념
// - useMemo는 "값(value)를 기억(memoization)"하기 위한 훅입니다.
// - 즉, 이전에 계산된 결과값을 저장해 두었다가, 의존하는 값이 바뀌지 않았다면
//   다시 계산하지 않고 기존 결과값을 그대로 재사용합니다.

import { Button } from "@/components/ui"
import { useState } from "react"

// useMemo는 다음과 같은 형태로 사용합니다.
/*
const memorizedValue = useMemo(() => {
    // 연산이 오래 걸리는 복잡한 작업
    return 계산된 값
}, [의존성배열])
*/

// - 여기서 의존성 배열 안에 명시한 값이 변경될 때만 '계산할 값'을 다시 계산합니다.
// - 의존성 배열이 비어 있다면([]), 컴포넌트가 처음 렌더링될 때 딱 한 번만 계산하고 그 값을 계속 재사용합니다.

const getAverage = (numbers: number[]) => {
    console.log("[무거운 연산] - 평균 값을 계산 중입니다.")

    if (numbers.length === 0) return 0

    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum / numbers.length
}

function App() {
    const [list, setList] = useState<number[]>([])
    const [inputValue, setInputValue] = useState<string>("")
    const [otherState, setOtherState] = useState<boolean>(false) // 리렌더링 유발용 state

    const handleInsert = () => {
        const nextList = list.concat(parseInt(inputValue) || 0)
        setList(nextList)
        setInputValue("") // input field 초기화
    }

    const average = getAverage(list)

    return (
        <>
            <div>
                <h2>useMemo 학습 예제</h2>
                {/* 1. 숫자 입력 및 등록 영역 */}
                <input type="number" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="숫자를 입력하세요." />
                <Button onClick={handleInsert}>등록</Button>
            </div>

            {/* 등록된 숫자 리스트 */}
            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

            {/* useMemo로 최적화된 연산 결과 출력 */}
            <div>
                <b>평균 값: {average}</b>
            </div>
        </>
    )
}

export default App
