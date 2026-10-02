import { AppContext } from "@/components/common"
import { RadialChart } from "@/components/main"
import { Badge, Card, Separator, Skeleton } from "@/components/ui"
import { ArrowRight, Bot, Check, ChevronRight, CircleAlert, CircleArrowRight, CornerDownRight, TrendingUp } from "lucide-react"

// [요구 사항]
// ⭐️ 화면 명세서 => 기능 명세서 => 화면 설계서 => 컴포넌트 설계서 => 컴포넌트 구현
function Home() {
    return (
        <div className="flex h-full w-full gap-2">
            <AppContext />
            {/* 아이디어 구조화 / 사업계획서 도출 */}
            <div className="flex flex-1 flex-col gap-4 overflow-y-scroll rounded-md border border-card bg-card/50 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[16px_16px] p-4 text-card-foreground">
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
                <Card className="h-29.25 min-h-29.25 flex-row px-4">
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
                        <Card className="w-full gap-2 bg-muted/30 p-3 pb-1.25">
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
                        <Card className="w-full gap-2 bg-muted/30 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-amber-900/50 font-semibold text-amber-500">S</Badge>
                                    <span className="font-medium">실현가능성</span>
                                </div>
                                <span className="font-semibold text-amber-500">80점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">비전 AI 모델 및 온디바이스 ...</p>
                            <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 text-amber-500" />
                                <span className="text-[10px] text-amber-500">기술 타당성 높음</span>
                            </div>
                        </Card>
                        <ArrowRight className="mx-1.5 w-20 text-neutral-400" />
                        <Card className="w-full gap-2 bg-muted/30 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-rose-900/50 font-semibold text-rose-500">P</Badge>
                                    <span className="font-medium">성장전략</span>
                                </div>
                                <span className="font-semibold text-rose-500">65점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">커머스 제휴 수수료 구조 ...</p>
                            <div className="flex items-center gap-1">
                                <CircleAlert className="w-3 text-rose-500" />
                                <span className="text-[10px] text-rose-500">보완 권고 레이어</span>
                            </div>
                        </Card>
                        <ArrowRight className="mx-1.5 w-20 text-neutral-400" />
                        <Card className="w-full gap-2 bg-muted/30 p-3 pb-1.25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Badge className="aspect-square rounded-sm bg-sky-900/50 font-semibold text-sky-500">P</Badge>
                                    <span className="font-medium">팀구성</span>
                                </div>
                                <span className="font-semibold text-sky-500">75점</span>
                            </div>
                            <p className="-my-1 text-xs text-neutral-400">AI 연구인력 중원 계획 정비 ...</p>
                            <div className="flex items-center gap-1">
                                <Check className="w-3 text-sky-500" />
                                <span className="text-[10px] text-sky-500">요건 충족</span>
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
                    <Card className="w-3/5 gap-4 p-4">
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
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">&#8251; 검증된 3대 페인포인트 악순환 고리</span>
                            <div className="flex items-center gap-2">
                                <Card className="w-full gap-0 bg-muted/30 p-4">
                                    <span className="text-neutral-400">단계 &#9312; 강제구매</span>
                                    <span className="text-base font-semibold">대용량 번들 포장</span>
                                    <p className="mt-2 text-xs text-neutral-400">소포장 부재로 묶음 채소 과대 구매</p>
                                </Card>
                                <CircleArrowRight className="min-w-4.5 text-neutral-400" />
                                <Card className="w-full gap-0 bg-muted/30 p-4">
                                    <span className="text-neutral-400">단계 &#9313; 방치망각</span>
                                    <span className="text-base font-semibold">냉장고 재고 망각</span>
                                    <p className="mt-2 text-xs text-neutral-400">탐색 피로(일 평균 68분)로 방치</p>
                                </Card>
                                <CircleArrowRight className="min-w-4.5 text-neutral-400" />
                                <Card className="w-full gap-0 bg-muted/30 p-4">
                                    <span className="text-neutral-400">단계 &#9314; 폐기손실</span>
                                    <span className="text-base font-semibold text-rose-400">음식물 쓰레기화</span>
                                    <p className="mt-2 text-xs text-neutral-400">가구당 월 4.8만원 직접 손실</p>
                                </Card>
                            </div>
                        </div>
                        <Separator />

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <Bot size={18} />
                                <span className="mt-0.5 font-semibold">실시간 AI 검증 피드백 코칭</span>
                            </div>
                            <p className="text-justify text-neutral-400">
                                냉장고 사진&middot;바코드&middot;수기 입력으로 식재료와 유통기한을 구조화하고, 남은 재료를 우선 소진하는 15분 맞춤형 레시피를
                                실시간 추천합니다. 부족한 필수 식재료는 1시간 퀵커머스 장바구니로 자동 큐레이션 연결하며, 사용자
                                알레르기&middot;칼로리&middot;보유 조리도구 조건까지 반영합니다. 초기 사용자 100명 인터뷰를 통해 문제와 추천 품질을 검증하고,
                                출시 30일 내 재사용률 40% 달성을 핵심 실행 지표로 설정합니다. MVP 단계에서 식재료 인식 정확도와 주문 전환율을 주 단위로 측정해
                                서비스 타당성을 입증합니다.
                            </p>
                            <div className="flex items-start gap-1">
                                <CornerDownRight />
                                <p className="mt-1.25 text-justify font-medium">
                                    "15분 조리 시간 및 30일 내 재사용률 40% 수치 제시는 매우 우수합니다. 단, 비즈니스 모델(수익화)과의 직접 연계를 1문장 더
                                    보강하면 합격 안정권(90점대) 진입이 예상됩니다.
                                </p>
                            </div>
                        </div>
                    </Card>
                    {/* AI 분석 레포트 영역 */}
                    <Card className="w-2/5 gap-4 p-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-xl font-semibold">AI 정밀 적합도 진단 보고서</span>
                            <p className="text-neutral-400">
                                단순 임의 점수가 아닌, 중소벤처기업부 TIPS 공고 심사 평가지표 12개 항목 및{" "}
                                <strong className="text-white">2,400개 합격 사업계획서 임베딩 벡터</strong>와 비교 분석된 정량적 데이터입니다.
                            </p>
                            <RadialChart />
                        </div>
                        <Separator />
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">PSST 4대 영역별 배점 스코어카드</span>
                            <div className="flex flex-col gap-2 pb-4">
                                <Card className="flex-row items-center justify-between p-2">
                                    <div className="flex items-start gap-1">
                                        <Badge className="mt-0.5 aspect-square rounded-sm bg-violet-900/50 font-semibold text-violet-500">P</Badge>
                                        <div className="flex flex-col">
                                            <span className="font-medium">문제인식 (내재적 관점 & 외재적 관점)</span>
                                            <span className="text-xs text-neutral-400">Pain Point 데이터 실증 완료</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-xs font-medium">A</span>
                                        &middot;
                                        <span className="text-xs font-medium">81점</span>
                                    </div>
                                </Card>
                                <Card className="flex-row items-center justify-between p-2">
                                    <div className="flex items-start gap-1">
                                        <Badge className="mt-0.5 aspect-square rounded-sm bg-violet-900/50 font-semibold text-violet-500">S</Badge>
                                        <div className="flex flex-col">
                                            <span className="font-medium">실현방안 (기술 구체성 및 MVP)</span>
                                            <span className="text-xs text-neutral-400">알골즘 및 핵심 지표 설정</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-xs font-medium">S</span>
                                        &middot;
                                        <span className="text-xs font-medium">81점</span>
                                    </div>
                                </Card>
                                <Card className="flex-row items-center justify-between p-2">
                                    <div className="flex items-start gap-1">
                                        <Badge className="mt-0.5 aspect-square rounded-sm bg-violet-900/50 font-semibold text-violet-500">P</Badge>
                                        <div className="flex flex-col">
                                            <span className="font-medium">성장전략 (시장 진입 전략)</span>
                                            <span className="text-xs text-neutral-400">BM 수수료 모델 1문장 보완 필요</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-xs font-medium">A</span>
                                        &middot;
                                        <span className="text-xs font-medium">81점</span>
                                    </div>
                                </Card>
                                <Card className="flex-row items-center justify-between p-2">
                                    <div className="flex items-start gap-1">
                                        <Badge className="mt-0.5 aspect-square rounded-sm bg-violet-900/50 font-semibold text-violet-500">P</Badge>
                                        <div className="flex flex-col">
                                            <span className="font-medium">팀 구성 (기술 개발 역량)</span>
                                            <span className="text-xs text-neutral-400">Vision AI 전공 인력 프로필 양호</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-xs font-medium">A</span>
                                        &middot;
                                        <span className="text-xs font-medium">81점</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home
