"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const gpaData = [
  { semester: "100L 1st", gpa: 3.2 },
  { semester: "100L 2nd", gpa: 3.6 },
  { semester: "200L 1st", gpa: 3.8 },
  { semester: "200L 2nd", gpa: 4.0 },
];

export default function GPAChart() {
  return (
    <BarChart
      width={440}
      height={300}
      data={gpaData}
      barCategoryGap={0}
    >
      <XAxis dataKey="semester" />

      <YAxis domain={[0, 5]} />

      <Tooltip cursor={false} />
      <Legend /> 
      <Bar dataKey="gpa" fill="#9fd418" barSize={40} radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}
// // #region Sample data
// const data = [
//   {
//     name: 'Mon 22',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Tue 23',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Wed 24',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Thur 25',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Friday 26',
//     uv: 1890,
//     pv: 4800,
//     amt: 2182,
//   },

// ];

// // #endregion
// const MixBarChart = () => {
//   const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
//   const [locked, setLocked] = useState<boolean>(false);

//   const onLegendMouseEnter = (payload: LegendPayload) => {
//     if (!locked) {
//       setFocusedDataKey(String(payload.dataKey));
//     }
//   };

//   const onLegendMouseOut = () => {
//     if (!locked) {
//       setFocusedDataKey(null);
//     }
//   };

//   const onLegendClick = (payload: LegendPayload) => {
//     if (focusedDataKey === String(payload.dataKey)) {
//       if (locked) {
//         setFocusedDataKey(null);
//         setLocked(false);
//       } else {
//         setLocked(true);
//       }
//     } else {
//       setFocusedDataKey(String(payload.dataKey));
//       setLocked(true);
//     }
//   };

//   return (
//     <BarChart
//       style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
//       responsive
//       data={data}
//       margin={{
//         top: 20,
//         right: 0,
//         left: 0,
//         bottom: 5,
//       }}
//     >
      
//       <XAxis dataKey="name" />
//       <YAxis width="auto" niceTicks="snap125" />
//       <Tooltip />
//       <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
//       <Bar dataKey="pv" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'pv' ? '#8884d8' : '#eee'} />
//       <Bar dataKey="amt" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'amt' ? '#82ca9d' : '#eee'} />
//       <Bar dataKey="uv" fill={focusedDataKey == null || focusedDataKey === 'uv' ? '#ffc658' : '#eee'} />
//     </BarChart>
//   );
// };

// export default MixBarChart;