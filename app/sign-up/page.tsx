import { SignUpForm } from "@/components/auth"

function SignUp() {
    return (
        <div className="flex h-full w-full justify-center p-4">
            <div className="w-full max-w-md">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp
