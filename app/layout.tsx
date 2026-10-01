import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { AppHeader } from "@/components/common"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" suppressHydrationWarning className={cn("antialiased", "font-sans")}>
            <body>
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col gap-2 p-4">
                        <AppHeader />
                        <main className="h-[calc(100vh-4rem)] w-full">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
