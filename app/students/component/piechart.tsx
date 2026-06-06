'use client'
import { Pie, PieChart,Legend } from 'recharts';

// #region Sample data
const data = [
  { name: 'Present', value: 160,fill:'#65891c' },
  { name: 'Absent', value: 20,fill:'#a41b42' },

];

// #endregion
export default function StraightAnglePieChart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '100vh', aspectRatio: 1.4 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        label
        isAnimationActive={isAnimationActive}
        
      />
      <Legend  verticalAlign='top'/>
    </PieChart>
  );
}