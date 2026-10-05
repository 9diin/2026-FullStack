import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Field, FieldDescription, FieldGroup, FieldLabel, Input } from "@/components/ui"

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
                            <Input id="email" type="email" placeholder="이메일을 입력하세요." required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                            <Input id="password" type="password" required placeholder="비밀번호를 입력하세요." />
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
