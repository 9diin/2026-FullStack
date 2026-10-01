import Image from "next/image"
import { Lemon } from "next/font/google"
import { Tabs, TabsList, TabsTrigger, Button } from "../ui"

const lemon = Lemon({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})

function AppHeader() {
    return (
        <header className="flex w-full">
            {/* 로고 영역 */}
            <div className="flex w-72 items-center gap-2">
                <Image src="/icons/earth.svg" alt="@LOGO" width={24} height={24} />
                <span className={lemon.className + " text-xl"}>I'deaverse</span>
            </div>

            <div className="flex flex-1 items-center justify-between">
                {/* 아이디어 구조화 & 사업계획서 도출 탭 영역 */}
                <Tabs defaultValue="idea" className="pl-2">
                    <TabsList>
                        <TabsTrigger value="idea">아이디어 구조화</TabsTrigger>
                        <TabsTrigger value="biz-plan">사업계획서 도출</TabsTrigger>
                    </TabsList>
                    {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent> */}
                </Tabs>
                {/* 버튼 영역 */}
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Image src="/icons/ai.svg" alt="@ICON" width={20} height={20} />
                        AI 연결
                    </Button>
                    <Button className="bg-linear-to-br from-blue-600 via-purple-500 to-pink-500 text-white">로그인</Button>
                </div>
            </div>
        </header>
    )
}

export default AppHeader
