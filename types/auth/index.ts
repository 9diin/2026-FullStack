// 회원가입 요청 파라미터 타입
export interface SignUpRequest {
    email: string
    password: string
    terms_agreed: boolean
    privacy_agreed: boolean
    marketing_agreed: boolean
}

export interface SignInRequest {
    email: string
    password: string
}

// 회원가입 성공 응답 타입
export interface SignUpResponse {}
