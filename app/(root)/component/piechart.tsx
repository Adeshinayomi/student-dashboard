"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
} from "recharts";

const assignmentData = [
  { name: "Completed", value: 18,fill: '#0088FE'  },
  { name: "Pending", value: 7,fill:"#8884d8" },
];

export default function AssignmentChart() {
  return (
    <PieChart width={400} height={300}>
<Pie
  data={assignmentData}
  dataKey="value"
  labelLine={false}
  nameKey="name"
  outerRadius={120}
  label={({ percent, cx, cy, midAngle, innerRadius, outerRadius }) => {
    const radius =
      innerRadius + (outerRadius - innerRadius) * 0.5;

    const x =
      cx + radius * Math.cos(-midAngle * (Math.PI / 180));

    const y =
      cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }}
/>
        <Legend />
      <Tooltip />
    </PieChart>
  );
}

// 'use client'
// import { Pie, PieChart } from 'recharts';

// // #region Sample data
// const data = [
//   { name: 'Group A', value: 300, fill: '#0088FE' },
//   { name: 'Group B', value: 300, fill: '#00C49F' },
//   { name: 'Group C', value: 300, fill: '#FFBB28' },
//   { name: 'Group D', value: 200, fill: '#FF8042' },
// ];

// // #endregion
// export default function PieChartWithPaddingAngle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
//   return (
//     <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
//       <Pie
//         data={data}
//         innerRadius="80%"
//         outerRadius="100%"
//         // Corner radius is the rounded edge of each pie slice
//         cornerRadius="50%"
//         fill="#8884d8"
//         // padding angle is the gap between each pie slice
//         paddingAngle={5}
//         dataKey="value"
//         isAnimationActive={isAnimationActive}
//       />
      
//     </PieChart>
//   );
// }