import { SignInForm } from "@/components/auth"

function SignIn() {
    return (
        <div className="flex h-full w-full justify-center p-4">
            <div className="w-full max-w-sm">
                <SignInForm />
            </div>
        </div>
    )
}

export default SignIn
