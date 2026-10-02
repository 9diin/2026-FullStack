import { AppContext } from "@/components/common"
import { Badge, Card, Separator, Skeleton } from "@/components/ui"
import { ArrowRight, Check, ChevronRight, CornerDownRight } from "lucide-react"

// [요구 사항]
// ⭐️ 화면 명세서 => 기능 명세서 => 화면 설계서 => 컴포넌트 설계서 => 컴포넌트 구현
function Home() {
    return (
        <div className="flex h-full w-full gap-2">
            <AppContext />
            {/* 아이디어 구조화 / 사업계획서 도출 */}
            <div className="flex flex-1 flex-col gap-4 rounded-md border border-card bg-card/50 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[16px_16px] p-4 text-card-foreground">
                {/* 콘텐츠 영역 */}
                <div>
                    <div className="flex items-center gap-1">
                        <span className="text-[10px] text-neutral-400">프로젝트 워크스페이스</span>
                        <ChevronRight className="w-4 text-neutral-400" />
                        <span className="text-[10px] text-violet-400">PSST 프레임워크 구조화 진단</span>
                    </div>
                    <h1 className="text-2xl font-bold">
                        1인 가구 및 직장인을 위한 스마트 냉장고 잔여 식재료 기반 실시간 레시피 생성 및 자동 장보기 연동 서비스
                    </h1>
                </div>
                <Card className="h-29.25 flex-row px-4">
                    {/* 차트 & 점수 표기 영역 */}
                    <div>
                        {/* 차트 */}
                        <div></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">구체화 성숙도</span>
                                <Badge className="bg-violet-900/50 text-[10px] text-violet-500">TIPS B+등급</Badge>
                            </div>
                            <span className="text-xs text-neutral-400">정량 데이터와 페인포인트 맵핑 우수</span>
                        </div>
                    </div>
                    <Separator orientation="vertical" />
                    {/* 문제인식 - 솔루션 - 성장전략 - 팀 빌딩 선택 카드 영역 */}
                    <div className="flex flex-1 items-center justify-between">
                        <Card className="w-full gap-2 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-green-900/50 font-semibold text-green-500">P</Badge>
                                    <span className="font-medium">문제인식</span>
                                </div>
                                <span className="font-semibold text-green-500">92점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">통계청 800만 가구 데이터 ...</p>
                            <div className="flex items-center gap-1">
                                <Check className="w-3 text-green-500" />
                                <span className="text-[10px] text-green-500">논리 구조 완벽</span>
                            </div>
                        </Card>
                        <ArrowRight className="mx-1.5 w-20 text-neutral-400" />
                        <Card className="w-full gap-2 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-green-900/50 font-semibold text-green-500">P</Badge>
                                    <span className="font-medium">문제인식</span>
                                </div>
                                <span className="font-semibold text-green-500">92점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">통계청 800만 가구 데이터 ...</p>
                            <div className="flex items-center gap-1">
                                <Check className="w-3 text-green-500" />
                                <span className="text-[10px] text-green-500">논리 구조 완벽</span>
                            </div>
                        </Card>
                        <ArrowRight className="mx-1.5 w-20 text-neutral-400" />
                        <Card className="w-full gap-2 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-green-900/50 font-semibold text-green-500">P</Badge>
                                    <span className="font-medium">문제인식</span>
                                </div>
                                <span className="font-semibold text-green-500">92점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">통계청 800만 가구 데이터 ...</p>
                            <div className="flex items-center gap-1">
                                <Check className="w-3 text-green-500" />
                                <span className="text-[10px] text-green-500">논리 구조 완벽</span>
                            </div>
                        </Card>
                        <ArrowRight className="mx-1.5 w-20 text-neutral-400" />
                        <Card className="w-full gap-2 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-green-900/50 font-semibold text-green-500">P</Badge>
                                    <span className="font-medium">문제인식</span>
                                </div>
                                <span className="font-semibold text-green-500">92점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">통계청 800만 가구 데이터 ...</p>
                            <div className="flex items-center gap-1">
                                <Check className="w-3 text-green-500" />
                                <span className="text-[10px] text-green-500">논리 구조 완벽</span>
                            </div>
                        </Card>
                    </div>
                </Card>
                <div className="flex flex-col gap-1">
                    <Separator />
                    <Separator />
                </div>
                <div className="flex w-full gap-4">
                    {/* 문제인식 - 솔루션 - 성장전략 - 팀 빌딩 선택 후 보이는 콘텐츠 영역 */}
                    <Card className="w-3/5 p-4">
                        <div>
                            <div className="flex items-start justify-between">
                                <h2 className="text-xl font-semibold">1. 문제인식 (Problem)</h2>
                                <div className="-mt-1 flex items-center gap-1">
                                    <span className="text-[10px] text-neutral-400">PSST 프레임워크 구조화 진단</span>
                                    <ChevronRight className="w-4 text-neutral-400" />
                                    <span className="text-[10px] text-violet-400">문제인식</span>
                                    <ChevronRight className="w-4 text-neutral-400" />
                                    <Badge className="bg-green-900/50 text-[10px] text-green-500">검증 통과율 88%</Badge>
                                </div>
                            </div>
                            <p className="mt-3 text-neutral-400">
                                본 과제는 1인 가구의 불규칙한 식생활과 급증하는 식재료 폐기 문제를 해결하기 위해, 스마트 홈 가전 연동 기술과 비전 AI 모델을
                                결합한 지능형 식자재 관리 및 레시피 큐레이션 솔류션을 개발하는 것을 목표로 합니다.
                            </p>
                        </div>
                        <Separator />
                        <Card className="bg-muted/30 p-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-medium text-green-500">핵심 타깃 페르소나</span>
                                <p className="text-base font-medium">
                                    "퇴근 후 장보기 및 조리 피로도가 높으나 배달음식의 고비용&middot;건강 약화에 불만을 느끼는 2030 1인 가구 직장인"
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CornerDownRight className="w-4 text-neutral-400" />
                                <Badge variant="secondary" className="rounded-sm border border-neutral-700">
                                    국내 1인 가구 800만 (전체 34.5%)
                                </Badge>
                                <Badge variant="secondary" className="rounded-sm border border-neutral-700">
                                    월 평균 식비 중 43% 미사용 폐기
                                </Badge>
                            </div>
                        </Card>
                    </Card>
                    {/* AI 분석 레포트 영역 */}
                    <div className="w-2/5"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
