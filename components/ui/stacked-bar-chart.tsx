"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "#e11d48", // rose-600
  },
  mobile: {
    label: "Mobile",
    color: "#f43f5e", // rose-400
  },
}

export function StackedBarChart() {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg bg-white/90">
      <CardHeader className="pb-2">
        <CardTitle className="text-rose-700 text-lg">Visitors (Stacked Bar)</CardTitle>
        <CardDescription className="text-xs">Jan - Jun 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <div className="w-full h-[180px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barCategoryGap={8}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={8}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  style={{ fontSize: 12, fill: "#a21caf" }} // rose-700
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill={chartConfig.desktop.color}
                  radius={[4, 4, 0, 0]}
                  name="Desktop"
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill={chartConfig.mobile.color}
                  radius={[0, 0, 4, 4]}
                  name="Mobile"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-xs">
        <div className="flex gap-2 font-medium leading-none text-rose-700">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default StackedBarChart;