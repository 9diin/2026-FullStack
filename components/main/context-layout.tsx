import { Badge } from "../ui"

function ContextLayout({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="flex flex-col">
            {/* 레이아웃 라벨 영역 */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    {icon}
                    <span>{label}</span>
                </div>
                {label === "참조 소스 컨텍스트" && <Badge>활성화된 파일 2개</Badge>}
            </div>
            {/* 레이아웃 콘텐츠 영역 */}
            {children}
        </div>
    )
}

export default ContextLayout
