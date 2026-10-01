import { AppContext } from "@/components/common"
import { Skeleton } from "@/components/ui"

// [요구 사항]
// ⭐️ 화면 명세서 => 기능 명세서 => 화면 설계서 => 컴포넌트 설계서 => 컴포넌트 구현
function Home() {
    return (
        <div className="flex h-full w-full gap-2">
            <AppContext />
            {/* 아이디어 구조화 / 사업계획서 도출 */}
            <Skeleton className="flex-1" />
        </div>
    )
}

export default Home
