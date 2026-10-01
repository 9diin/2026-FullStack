import { Badge, Button, Separator, Skeleton, Textarea } from "@/components/ui"
import { ArrowUpRight, Paperclip } from "lucide-react"

// [요구 사항]
// ⭐️ 화면 명세서 => 기능 명세서 => 화면 설계서 => 컴포넌트 설계서 => 컴포넌트 구현
function page() {
    return (
        <div className="flex h-full w-full gap-2">
            <div className="flex h-full w-72 flex-col gap-2">
                <div className="h-[calc(100%-232px)] w-full rounded-md bg-card"></div>
                <Separator />
                {/* 프롬프트 작성 영역 */}
                <div className="flex w-full flex-col gap-2">
                    <div className="flex w-full flex-wrap items-center gap-2 overflow-x-scroll">
                        <div className="flex items-center gap-1 rounded-sm bg-card p-1 pr-1">
                            <Badge variant="outline" className="rounded-sm text-[10px]">
                                PDF
                            </Badge>
                            <span className="text-xs">시장정보 요구사항 인터뷰.pdf</span>
                        </div>
                        <div className="flex items-center gap-1 rounded-sm bg-card p-1 pr-1">
                            <Badge variant="outline" className="rounded-sm text-[10px]">
                                XLSX
                            </Badge>
                            <span className="text-xs">경쟁사 모니터링 자료.xlsx</span>
                        </div>
                    </div>
                    <Textarea placeholder="해결하고 싶은 문제나 떠오른 사업 아이디어를 자유롭게 적어보세요." className="h-30 resize-none" />
                    <div className="flex w-full items-center justify-between">
                        <Button size="icon">
                            <Paperclip />
                        </Button>
                        <Button size="icon" className="bg-linear-to-br from-blue-600 via-purple-500 to-pink-500">
                            <ArrowUpRight className="text-white" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* 아이디어 구조화 / 사업계획서 도출 */}
            <Skeleton className="flex-1" />
        </div>
    )
}

export default page
