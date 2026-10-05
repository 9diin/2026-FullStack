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
import { Eye } from "lucide-react"

function SignUpForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-semibold">회원가입</CardTitle>
                <CardDescription>비즈니스의 시작점, 회원가입하고 아이디어를 펼쳐보세요.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">이메일</FieldLabel>
                            <div className="flex items-center gap-2">
                                <Input id="email" type="email" placeholder="이메일을 입력하세요." required />
                                <Button variant="outline" className="text-neutral-400">
                                    인증번호 발송
                                </Button>
                            </div>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">인증번호</FieldLabel>
                            <div className="flex items-center gap-2">
                                <Input id="email" type="email" placeholder="인증번호를 입력하세요." required />
                                <Button variant="outline" className="text-neutral-400">
                                    인증번호 확인
                                </Button>
                            </div>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                            <div className="relative">
                                <Input id="password" type="password" required placeholder="비밀번호를 입력하세요." />
                                <Button size="icon" variant="ghost" className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-400">
                                    <Eye />
                                </Button>
                            </div>
                            <span className="text-xs text-neutral-400">영문과 숫자를 포함해 8자 이상 입력해 주세요.</span>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">비밀번호 확인</FieldLabel>
                            <div className="relative">
                                <Input id="password" type="password" required placeholder="비밀번호를 한 번 더 입력하세요." />
                                <Button size="icon" variant="ghost" className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-400">
                                    <Eye />
                                </Button>
                            </div>
                            <span className="text-xs text-neutral-400">비밀번호를 다시 입력해 주세요.</span>
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
                                    <Checkbox />
                                    <span>전체 동의</span>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <Checkbox />
                                        <div className="flex items-center gap-1">
                                            <span className="text-neutral-400">(필수)</span>
                                            <span>서비스 이용약관 동의</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox />
                                        <div className="flex items-center gap-1">
                                            <span className="text-neutral-400">(필수)</span>
                                            <span>개인정보 처리방침 동의</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox />
                                        <div className="flex items-center gap-1">
                                            <span className="text-neutral-400">(선택)</span>
                                            <span>마케팅 정보 수신 동의</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Field>
                        <Field>
                            <Button type="submit" className="bg-linear-to-br from-blue-600 via-purple-500 to-pink-500 font-medium text-white">
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
