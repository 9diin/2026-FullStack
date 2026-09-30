// 1. useMemo - 불필요한 계산을 피하는 최적화 전략
// - 컴포넌트가 렌더링될 때마다 단순한 콘솔 출력이 실행되는 것은 성능에 큰 지장을 주지 않습니다.
// - 그러나 렌더링할 때마다 복잡하고 무거운 계산을 수행해야 하는 로직이 있다면 성능 저하가 발생할 수 있습니다.
// - 이때 사용할 수 있는 훅이 바로 useMemo 입니다.

import { useMemo, useState } from "react"

// 1.1 useMemo의 개념
// - useMemo는 "값(value)을 기억(memoization)"하기 위한 훅입니다.
// - 즉, 이전에 계산된 결과값을 저장해 두었다가, 의존하는 값이 바뀌지 않았다면
//   다시 계산하지 않고 기존 결과값을 그대로 재사용합니다.

// useMemo는 다음과 같은 형태로 사용합니다.
/* 
const memoizedValue = useMemo(() => {
    // 연산이 오래 걸리는 복잡한 작업
    return 계산할 값
}, [의존성배열])
*/

// - 여기서 의존성 배열 안에 명시한 값이 변경될 때만 '계산할값'을 다시 계산합니다.
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
        setInputValue("")
    }

    // 1.2 평균값 계산 예제와 useMemo 적용
    // - 만약 이 평균 계산을 useMemo 없이 그냥 호출했다면,
    //   아래의 '다른 상태 변경(otherState)' 버튼을 누를 때마다
    //   리스트가 전혀 변하지 않았음에도 getAverage 함수가 매번 다시 실행되어 성능을 갉아먹습니다.
    // - 따라서 useMemo를 이용하여 [list]가 변경될 때만 평균을 다시 계산하도록 최적화합니다.
    const average = useMemo(() => getAverage(list), [list])

    // 1.3 정리 및 비교 (useEffect vs useMemo)
    // - useEffect는 "언제 실행할 것인가?"를 제어합니다. (렌더링 후 부수 효과 처리)
    // - useMemo는 "무엇을 다시 계산할 것인가?"를 최적화합니다. (렌더링 중 불필요한 연산 방지)

    // - useCallback은 함수를 기억 / 메모이제이션된 함수 / 이벤트 핸들러 재사용 / useCallback(fn, deps)
    // - useMemo는 값(결과)를 기억 / 메모이제이션 된 값 / 연산량이 많은 계산 결과 저장 / useMemo(fn, deps)

    return (
        <div>
            <h2>useMemo 학습 예제</h2>
            {/* 1. 숫자 입력 및 등록 영역 */}
            <div>
                <input type="number" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="숫자를 입력하세요." />
                <button onClick={handleInsert}>등록</button>
            </div>
            {/* 2. 등록된 숫자 리스트 */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* 3. useMemo로 최적화된 연산 결과 출력 */}
            <div>
                <b>평균 값: {average}</b>
            </div>
            {/* 4. 다른 상태(State) 변경 테스트 버튼 */}
            <div>
                <p>다른 상태 값: {otherState.toString()}</p>
                {/* 이 버튼을 누르면 App 전체가 리렌더링되지만, list가 안 바뀌었으므로 average는 재계산되지 않음! */}
                <button onClick={() => setOtherState(!otherState)}>다른 상태 변경하기 (리렌더링 유발)</button>
            </div>
        </div>
    )
}

export default App
