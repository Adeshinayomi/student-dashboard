export type AttendanceStatus =
  | "on-time"
  | "late"
  | "absent"
  | "holiday";

export type StudentAttendance = {
  id: number;
  name: string;
  avatar: string;
  attendance:Record<string, AttendanceStatus>;
};


 
