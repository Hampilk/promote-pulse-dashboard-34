
import React from "react";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface BalanceChartProps {
  chartData: Array<{
    name: string;
    value: number;
  }>;
}

const BalanceChart: React.FC<BalanceChartProps> = ({ chartData }) => {
  return (
    <div className="pt-3 px-3 pb-1">
      <div className="h-[316px] max-xl:h-[254px]">
        <ChartContainer
          config={{ 
            Green: { color: "#00A656" },
          }}
          className="h-full"
        >
          <AreaChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00A656" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#00A656" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="5 7" stroke="var(--border)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} 
              tickMargin={8}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              tickFormatter={(value) => value === 0 ? `$0` : `${value / 1000}k`}
              tickMargin={8}
            />
            <Tooltip 
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-card p-2 border shadow-sm rounded-md">
                      <p className="text-sm font-medium">{`$${payload[0].value.toLocaleString()}`}</p>
                      <p className="text-xs text-muted-foreground">{payload[0].payload.name}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#00A656" 
              strokeWidth={3}
              fill="url(#colorGreen)" 
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
