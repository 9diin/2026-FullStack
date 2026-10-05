import { Badge, Button, Card, Separator, Textarea } from "@/components/ui"
import { ArrowUpRight, Brain, Check, File, Paperclip, ScanSearch } from "lucide-react"
import { AssetCard, ContextLayout } from "../main"

function AppContext() {
    return (
        <div className="flex h-full w-72 flex-col gap-2">
            <div className="flex h-[calc(100%-232px)] w-full flex-col gap-6 rounded-md bg-card/50 p-3">
                <ContextLayout label="참조 소스 컨텍스트" icon={<File size={16} />}>
                    <div className="flex flex-col gap-1">
                        <AssetCard type="PDF" name="시장정보 요구사항 인터뷰" />
                        <AssetCard type="XLSX" name="경쟁사 모니터링 자료" />
                        <AssetCard type="PPTX" name="사업계획서 발표자료" />
                    </div>
                </ContextLayout>
                <ContextLayout label="구조화 포커스 레이어" icon={<ScanSearch size={16} />}>
                    <div className="flex flex-wrap items-center gap-1">
                        <Badge className="bg-amber-900/30 text-[10px] text-amber-500"># 비즈니스 모델</Badge>
                        <Badge className="bg-amber-900/30 text-[10px] text-amber-500"># 기술 아키텍처</Badge>
                        <Badge className="bg-amber-900/30 text-[10px] text-amber-500"># UX/UI</Badge>
                        <Badge className="bg-amber-900/30 text-[10px] text-amber-500"># 수익화 전략</Badge>
                        <Badge className="bg-amber-900/30 text-[10px] text-amber-500"># 리스크 진단</Badge>
                    </div>
                </ContextLayout>
                <ContextLayout label="핵심 분석 아이디어" icon={<Brain size={16} />}>
                    <Card className="gap-1 border p-0">
                        <div className="flex flex-col gap-2 bg-muted/20 px-3 py-2">
                            <div className="flex items-center justify-between">
                                <Badge variant="secondary" className="text-[10px]">
                                    추천 아이디어
                                </Badge>
                                <div className="flex items-center gap-1">
                                    <Check className="w-3 text-green-500" />
                                    <span className="text-[10px] text-green-500">선택됨</span>
                                </div>
                            </div>
                            <p className="text-xs">"1인 가구 및 직장인을 위한 스마트 냉장고 잔여 식재료 기반 실시간 레시피 생성 및 자동 장보기 연동 서비스"</p>
                        </div>
                        <div className="flex flex-col gap-1.5 bg-black/30 px-3 py-2">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
                                <span className="text-xs text-neutral-400">유통기한 임박 식재료 우선 소진 알고리즘</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
                                <span className="text-xs text-neutral-400">배민 B마트, 쿠팡이츠 퀵커머스 부재료 원클릭 결제 API</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
                                <span className="text-xs text-neutral-400">초개인화된 15분 완성 저염&middot;고단백 다이닝 </span>
                            </div>
                        </div>
                    </Card>
                </ContextLayout>
            </div>
            <div className="flex flex-col gap-1">
                <Separator />
                <Separator />
            </div>
            {/* 프롬프트 작성 영역 */}
            <div className="flex w-full flex-col gap-2">
                <div className="flex w-full flex-wrap items-center gap-2">
                    <AssetCard type="PDF" name="시장정보 요구사항 인터뷰" />
                    <AssetCard type="PPTX" name="사업계획서 발표자료" />
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
