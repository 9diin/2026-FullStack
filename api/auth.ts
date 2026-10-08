import { AxiosError } from "axios"
import { httpClient } from "."
import { SignInRequest, SignUpRequest } from "@/types/auth"

// 회원가입
export const signUp = async (params: SignUpRequest) => {
    try {
        const res = await httpClient.post("/api/v1/auth/sign-up", params)
        return res.data
    } catch (error: unknown) {
        // 에러 발생 시, 컴포넌트에서 처리할 수 있도록 throw
        if (error instanceof AxiosError) {
            throw error.response?.data || { message: "회원가입 중 오류가 발생했습니다." }
        }
        throw { message: "회원가입 중 오류가 발생했습니다." }
    }
}

// 로그인
export const signIn = async (params: SignInRequest) => {
    try {
        const res = await httpClient.post("/api/v1/auth/sign-in", params)
        return res.data
    } catch (error: unknown) {
        // 에러 발생 시, 컴포넌트에서 처리할 수 있도록 throw
        if (error instanceof AxiosError) {
            throw error.response?.data || { message: "로그인 중 오류가 발생했습니다." }
        }
        throw { message: "로그인 중 오류가 발생했습니다." }
    }
}
