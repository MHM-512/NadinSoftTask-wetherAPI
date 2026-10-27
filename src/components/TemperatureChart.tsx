
import {
  Box,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const temperatureData = [
  { month: "Jan", temperature: 16 },
  { month: "Feb", temperature: 27 },
  { month: "Mar", temperature: 20 },
  { month: "Apr", temperature: 23 },
  { month: "May", temperature: 27 },
  { month: "Jun", temperature: 22 },
  { month: "Jul", temperature: 37 },
  { month: "Aug", temperature: 29 },
  { month: "Sep", temperature: 39 },
  { month: "Oct", temperature: 25 },
  { month: "Nov", temperature: 31 },
  { month: "Dec", temperature: 25 },
  { month: "Dec", temperature: 32 },
];

export default function TemperatureChart() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      elevation={0}
      sx={{
        width: "750px",
        minWidth: 0,
        height: '280px',
        p: "10px 12px",
        borderRadius: "18px",
        bgcolor: isDark ? "#263442" : "#E0E9EF",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          fontSize: 18,
          color: isDark ? "#DDE8FF" : "#243875",
          mb: 0.5,
        }}
      >
        Average Monthly Temperature
      </Typography>

      <Box sx={{ width: "100%", height: "220px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={temperatureData.slice(0, 12)}
            margin={{
              top: 12,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="temperatureLineGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#27D3DC" />
                <stop offset="100%" stopColor="#7957FF" />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke={isDark ? "#526170" : "#B9C9D3"}
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 16,
                fill: isDark ? "#FFFFFF" : "#263746",
              }}
              interval={0}
              tickMargin={5}
            />

            <YAxis
              domain={[0, 40]}
              ticks={[10, 20, 30, 40]}
              tickFormatter={(value) => `${value}°C`}
              axisLine={false}
              tickLine={false}
              width={42}
              tick={{
                fontSize: 16,
                fill: isDark ? "#FFFFFF" : "#263746",
              }}
            />

            <Tooltip
              formatter={(value) => [`${value}°C`, "Temperature"]}
              contentStyle={{
                backgroundColor: isDark ? "#263442" : "#FFFFFF",
                border: "1px solid #B9C9D3",
                borderRadius: 8,
                fontSize: 12 ,
              }}
            />

            <Line
              type="linear"
              dataKey="temperature"
              stroke="url(#temperatureLineGradient)"
              strokeWidth={1.7}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#7957FF",
                stroke: "#FFFFFF",
                strokeWidth: 1,
              }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
