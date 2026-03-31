import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';

const darkBg = '#0a0e1a';
const cardBg = '#111827';
const borderColor = '#1e2a3a';
const textPrimary = '#e8eaf0';
const textMuted = '#6b7a99';
const accentBlue = '#3b82f6';

const cardStyle = {
  background: cardBg,
  border: `1px solid ${borderColor}`,
  borderRadius: '12px',
  padding: '20px 24px',
};



const pieData = [
  { label: 'Group A', value: 400, color: '#3b82f6' },
  { label: 'Group B', value: 300, color: '#f59e0b' },
  { label: 'Group C', value: 300, color: '#ef4444' },
  { label: 'Group D', value: 200, color: '#10b981' },
];
const PIE_TOTAL = pieData.reduce((a, b) => a + b.value, 0);
const getArcLabel = (params) => `${((params.value / PIE_TOTAL) * 100).toFixed(0)}%`;

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

const chartSx = {
  '& .MuiChartsAxis-line': { stroke: borderColor },
  '& .MuiChartsAxis-tick': { stroke: borderColor },
  '& .MuiChartsAxis-tickLabel': { fill: textMuted, fontSize: 11 },
  '& .MuiChartsGrid-line': { stroke: borderColor, strokeDasharray: '3 3' },
  '& .MuiChartsLegend-mark': { rx: 3 },
  '& .MuiChartsLegend-label': { fill: textMuted, fontSize: 11 },
  '& .MuiChartsTooltip-root': {
    background: '#1e2a3a',
    border: `1px solid ${borderColor}`,
    borderRadius: '8px',
  },
};

export default function Dashboard() {
  return (
    <div style={{ background: darkBg, minHeight: '100vh', padding: '28px', fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: textPrimary }}>

      {/* Main content row */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>

        {/* Line Chart — wide left */}
        <div style={{ ...cardStyle, flex: 2, minWidth: '400px' }}>
            <div style={{display:'flex', gap: '16px'}}>
             {/* Metric: Total Revenue */}
          <div style={cardStyle}>
            <span style={{ fontSize: 12, color: textMuted, fontWeight: 500, letterSpacing: '0.04em' }}>TOTAL REVENUE</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <strong style={{ fontSize: 28, fontWeight: 700, color: textPrimary, letterSpacing: '-0.02em' }}>$72,400</strong>
              <svg width="80" height="28" viewBox="0 0 80 28">
                <polyline points="0,24 12,18 24,21 36,10 48,14 60,4 72,8 80,2" fill="none" stroke={accentBlue} strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: 12, color: '#10b981' }}>▲ 12.7% vs last month</span>
          </div>

          {/* Metric: Active Customers */}
          <div style={cardStyle}>
            <span style={{ fontSize: 12, color: textMuted, fontWeight: 500, letterSpacing: '0.04em' }}>ACTIVE CUSTOMERS</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <strong style={{ fontSize: 28, fontWeight: 700, color: textPrimary, letterSpacing: '-0.02em' }}>1,280</strong>
              <svg width="80" height="28" viewBox="0 0 80 28">
                <polyline points="0,18 12,14 24,18 36,8 48,12 60,6 72,4 80,8" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: 12, color: textMuted }}>Subscriptions active</span>
          </div>
           {/* Metric: New Orders */}
          <div style={cardStyle}>
            <span style={{ fontSize: 12, color: textMuted, fontWeight: 500, letterSpacing: '0.04em' }}>NEW ORDERS</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <strong style={{ fontSize: 28, fontWeight: 700, color: textPrimary, letterSpacing: '-0.02em' }}>340</strong>
              <svg width="80" height="28" viewBox="0 0 80 28">
                <polyline points="0,22 12,16 24,20 36,12 48,16 60,6 72,10 80,4" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: 12, color: '#10b981' }}>▲ 24% this period</span>
          </div>
</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: textPrimary }}>Revenue over time</span>
            <span style={{ fontSize: 11, color: textMuted, background: '#1e2a3a', borderRadius: '6px', padding: '4px 10px' }}>Absolute</span>
          </div>
          <Box sx={{ width: '100%' }}>
            <LineChart
              series={[
                { data: pData, label: 'pv', yAxisId: 'leftAxisId', color: '#f59e0b', area: true, showMark: false },
                { data: uData, label: 'uv', yAxisId: 'rightAxisId', color: accentBlue, area: true, showMark: false },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels, height: 28 }]}
              yAxis={[
                { id: 'leftAxisId', width: 50 },
                { id: 'rightAxisId', position: 'right' },
              ]}
              height={260}
              sx={{
                ...chartSx,
                '& .MuiAreaElement-root': { fillOpacity: 0.15 },
              }}
            />
          </Box>
        </div>

        {/* Right column — all 5 cards same width */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, minWidth: '280px' }}>
  {/* Pie chart — top right */}
          <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: textPrimary, alignSelf: 'flex-start', marginBottom: '4px' }}>Distribution on Jun 29</span>
            <PieChart
              series={[{ outerRadius: 75, innerRadius: 40, data: pieData, arcLabel: getArcLabel }]}
              sx={{
                ...chartSx,
                [`& .${pieArcLabelClasses.root}`]: { fill: 'white', fontSize: 11, fontWeight: 600 },
              }}
              width={220}
              height={180}
              margin={{ right: 5 }}
              hideLegend
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {pieData.map(d => (
                <span key={d.label} style={{ fontSize: 11, color: textMuted, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, display: 'inline-block' }}/>
                  {d.label}
                </span>
              ))}
            </div>
          </div>
         

        

          {/* Bar chart — daily */}
          <div style={cardStyle}>
            <span style={{ fontSize: 13, fontWeight: 600, color: textPrimary, display: 'block', marginBottom: '8px' }}>Issues opened daily</span>
            <BarChart
              xAxis={[{ data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], scaleType: 'band' }]}
              series={[{ data: [4, 3, 5, 2, 6, 1, 2], color: accentBlue }]}
              height={140}
              sx={{ ...chartSx, '& .MuiBarElement-root': { rx: 4 } }}
            />
          </div>

          {/* Bar chart — groups */}
          <div style={cardStyle}>
            <span style={{ fontSize: 13, fontWeight: 600, color: textPrimary, display: 'block', marginBottom: '8px' }}>Orders by group</span>
            <BarChart
              xAxis={[{ data: ['Group A', 'Group B', 'Group C'], scaleType: 'band' }]}
              series={[
                { data: [4, 3, 5], color: accentBlue },
                { data: [1, 6, 3], color: '#f59e0b' },
                { data: [2, 5, 6], color: '#ef4444' },
              ]}
              height={140}
              sx={{ ...chartSx, '& .MuiBarElement-root': { rx: 3 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}