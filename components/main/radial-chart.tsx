"use client"

import { BadgeCheck, TrendingUp } from "lucide-react"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", mobile: 570, desktop: 1260 }]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

function RadialChart() {
    const totalVisitors = chartData[0].desktop + chartData[0].mobile

    return (
        <Card className="flex flex-col">
            <CardContent className="flex flex-1 flex-col items-center pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
                    <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={110}>
                        <RadialBar dataKey="mobile" fill="var(--color-mobile)" stackId="a" cornerRadius={5} className="stroke-transparent stroke-2" />
                        <RadialBar dataKey="desktop" stackId="a" cornerRadius={5} fill="var(--color-desktop)" className="stroke-transparent stroke-2" />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                                                    종합 서면 합격 지수
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
                <div className="-mt-22 flex items-center gap-1 rounded-full bg-green-900/50 px-2 py-1">
                    <BadgeCheck size={13} className="text-green-500" />
                    <span className="mt-px text-xs font-semibold text-green-500">서면 심사 통과 안정권 (상위 TOP 12%)</span>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-center justify-center gap-2 text-neutral-400">
                    <span>심사 가이드 라인 v2026. 10</span>
                    &middot;
                    <span>최근 진단: 3분 전(v1.4)</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default RadialChart
