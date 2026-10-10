"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Checkbox,
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    Input,
    Separator,
} from "@/components/ui"
import { Eye, EyeOff } from "lucide-react"
import { toast } from "../ui/toast"
import { signUp } from "@/api/auth"

function SignUpForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [authCode, setAuthCode] = useState<string>("") // 인증번호

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false)

    const [termsAgreed, setTermsAgreed] = useState<boolean>(false) // 서비스 이용약관 동의
    const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(false) // 개인정보 처리방침 동의
    const [marketingAgreed, setMarketingAgreed] = useState<boolean>(false) // 마케팅 광고 수신 동의

    // 입력 형식과 필수 약관 동의 여부를 계산해 가입 기능 여부를 결정
    const isEmailValid = /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email.trim())
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)
    const doPasswordMatch = password === confirmPassword && confirmPassword.length > 2
    const areRequiredTermsAgreed = termsAgreed && privacyAgreed
    const areAllAgreed = termsAgreed && privacyAgreed && marketingAgreed
    const canSubmit = isEmailValid && isPasswordValid && doPasswordMatch && areRequiredTermsAgreed

    // 필수 조건을 재검증한 뒤 API 비동기 가입을 실행
    const handleSubmit = async () => {
        if (!canSubmit) {
            toast.add({
                title: "입력 정보를 확인하고 필수 약관에 동의해 주세요.",
            })
            return
        }
        setIsLoading(true)

        try {
            const res = await signUp({ email, password, terms_agreed: termsAgreed, privacy_agreed: privacyAgreed, marketing_agreed: marketingAgreed })

            console.log(res)

            if (res.status === 201) {
                toast.add({
                    title: res.message,
                })
                router.push("/sign-in")
            }
        } catch (error: any) { 
            console.error("회원가입 실패:", error)

            // 4. 에러 메시지 토스트 출력 (백엔드 에러 메시지 우선 노출)
            toast.add({
                title: error.message || "회원가입 중 오류가 발생했습니다.",
            })
        } finally {
            // 5. 성공하든 실패하든 로딩 상태 해제
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-semibold">회원가입</CardTitle>
                <CardDescription>비즈니스의 시작점, 회원가입하고 아이디어를 펼쳐보세요.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        void handleSubmit()
                    }}
                >
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">이메일</FieldLabel>
                            <div className="flex items-center gap-2">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="이메일을 입력하세요."
                                    value={email}
                                    onChange={(event) => setEmail(event?.target.value)}
                                    required
                                />
                                <Button type="button" variant="outline" className="text-neutral-400">
                                    인증번호 발송
                                </Button>
                            </div>
                            {!isEmailValid && <span className="text-xs text-destructive">올바른 이메일 형식을 입력해주세요.</span>}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">인증번호</FieldLabel>
                            <div className="flex items-center gap-2">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="인증번호를 입력하세요."
                                    value={authCode}
                                    onChange={(event) => setAuthCode(event?.target.value)}
                                    required
                                />
                                <Button type="button" variant="outline" className="text-neutral-400">
                                    인증번호 확인
                                </Button>
                            </div>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={isPasswordVisible ? "text" : "password"}
                                    required
                                    placeholder="비밀번호를 입력하세요."
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-400"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                >
                                    {isPasswordVisible ? <EyeOff /> : <Eye />}
                                </Button>
                            </div>
                            {!isPasswordValid && <span className="text-xs text-destructive">영문과 숫자를 포함해 8자 이상 입력해 주세요.</span>}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">비밀번호 확인</FieldLabel>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    required
                                    placeholder="비밀번호를 한 번 더 입력하세요."
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event?.target.value)}
                                />
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-400"
                                    onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                >
                                    {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                                </Button>
                            </div>
                            {!doPasswordMatch && <span className="text-xs text-destructive">비밀번호가 일치하지 않습니다.</span>}
                        </Field>
                        <div className="mb-2 flex flex-col gap-1">
                            <Separator />
                            <Separator />
                        </div>
                        <Field className="relative">
                            <FieldLabel
                                htmlFor="password"
                                className="absolute -top-3 left-3 flex w-16! items-center justify-center rounded-sm bg-card px-1 py-0.5"
                            >
                                약관 동의
                            </FieldLabel>
                            <div className="rounded-md border p-4">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={areAllAgreed}
                                        onCheckedChange={(checked) => {
                                            setTermsAgreed(checked)
                                            setPrivacyAgreed(checked)
                                            setMarketingAgreed(checked)
                                        }}
                                    />
                                    <span>전체 동의</span>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <Checkbox onCheckedChange={(checked) => setTermsAgreed(checked)} />
                                        <div className="flex items-center gap-1">
                                            <span className="text-neutral-400">(필수)</span>
                                            <span>서비스 이용약관 동의</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox onCheckedChange={(checked) => setPrivacyAgreed(checked)} />
                                        <div className="flex items-center gap-1">
                                            <span className="text-neutral-400">(필수)</span>
                                            <span>개인정보 처리방침 동의</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox onCheckedChange={(checked) => setMarketingAgreed(checked)} />
                                        <div className="flex items-center gap-1">
                                            <span className="text-neutral-400">(선택)</span>
                                            <span>마케팅 정보 수신 동의</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Field>
                        <Field>
                            <Button
                                type="submit"
                                disabled={!canSubmit || isLoading}
                                className="bg-linear-to-br from-blue-600 via-purple-500 to-pink-500 font-medium text-white"
                            >
                                회원가입
                            </Button>
                            <FieldDescription className="text-center">
                                이미 계정이 있으신가요? <a href="/sign-in">로그인</a>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUpForm
