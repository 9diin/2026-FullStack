"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Field, FieldDescription, FieldGroup, FieldLabel, Input } from "@/components/ui"
import { signIn } from "@/api/auth"
import { toast } from "../ui/toast"

function SignInForm() {
    const router = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    // 필수 조건을 재검증한 뒤 API 비동기 가입을 실행
    const handleSubmit = async () => {
        try {
            const res = await signIn({ email, password })

            console.log(res)

            // res가 조회되는 데이터를 참조하여 조건을 바꿔준다.
            // Zustand or Jotai에 유저 정보를 저장 및 access_token도 저장한다.

            if (res.status === 201) {
                toast.add({
                    title: res.message,
                })
                router.push("/")
            }
        } catch (error: any) {
            console.error("로그인 실패:", error)

            // 4. 에러 메시지 토스트 출력 (백엔드 에러 메시지 우선 노출)
            toast.add({
                title: error.message || "회원가입 중 오류가 발생했습니다.",
            })
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-semibold">로그인</CardTitle>
                <CardDescription>비즈니스의 시작점, 로그인하고 아이디어를 펼쳐보세요.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">이메일</FieldLabel>
                            <Input id="email" type="email" placeholder="이메일을 입력하세요." required />
                        </Field>
                        <Field>
                            <div className="flex items-center">
                                <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                                <a href="#" className="ml-auto inline-block underline-offset-4 hover:underline">
                                    비밀번호를 잊으셨나요?
                                </a>
                            </div>
                            <Input id="password" type="password" required placeholder="비밀번호를 입력하세요." />
                        </Field>
                        <Field>
                            <Button type="submit" className="bg-linear-to-br from-blue-600 via-purple-500 to-pink-500 font-medium text-white">
                                로그인
                            </Button>
                            <Button variant="outline" type="button">
                                Google로 로그인
                            </Button>
                            <FieldDescription className="text-center">
                                계정이 없으신가요? <a href="/sign-up">가입하기</a>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignInForm
