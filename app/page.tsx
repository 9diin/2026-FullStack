import Image from "next/image"
import { Button } from "@/components/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"
import { Skeleton } from "@/components/ui"

// [요구 사항]
// ⭐️ 화면 명세서 => 기능 명세서 => 화면 설계서 => 컴포넌트 설계서 => 컴포넌트 구현
function page() {
    return (
        <div className="flex h-full w-full gap-2">
            {/* 프롬프트 작성 */}
            <Skeleton className="h-full w-72" />
            {/* 아이디어 구조화 / 사업계획서 도출 */}
            <Skeleton className="flex-1" />
        </div>
    )
}

export default page
