import { Badge, Button, Separator, Textarea } from "@/components/ui"
import { ArrowUpRight, Brain, File, Paperclip, ScanSearch } from "lucide-react"
import { ContextLayout } from "../main"

function AppContext() {
    return (
        <div className="flex h-full w-72 flex-col gap-2">
            <div className="h-[calc(100%-232px)] w-full rounded-md bg-card">
                <ContextLayout label="참조 소스 컨텍스트" icon={<File size={16} />} isBadgeVisible={true}>
                    <span>참조 소스 컨텍스트 1</span>
                </ContextLayout>
                <ContextLayout label="구조화 포커스 레이어" icon={<ScanSearch size={16} />}>
                    <span>참조 소스 컨텍스트 2</span>
                </ContextLayout>
                <ContextLayout label="핵심 분석 아이디어" icon={<Brain size={16} />}>
                    <span>참조 소스 컨텍스트 3</span>
                </ContextLayout>
            </div>
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
    )
}

export default AppContext
