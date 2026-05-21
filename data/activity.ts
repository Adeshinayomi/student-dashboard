import type { Activity } from "@/types/activity"
import {Mic,Book,IceCream,Clipboard} from 'lucide-react'
export const ActivityData:Activity[]=[
    {
     id:1,
     name:'English Spoken Practice',
     status:'in progress',
     icon:Mic,
     color:'bg-purple-100',
     date:'11:00 am - 12:00 am'
    },
    {
     id:2,
     name:'Physical Education',
     status:'Done',
     icon:Book,
     color:'bg-yellow-200',
     date:'09:00 am - 10:00 am'
    },
    {
     id:3,
     name:'Lunch and Advisory',
     status:'Done',
     icon:IceCream ,
     color:'bg-pink-100',
     date:'01:00 pm - 02:00 am'
    },
    {
     id:4,
     name:'Dance Practice',
     status:'in progress',
     icon:Clipboard,
     color:'bg-gray-100',
     date:'04:00 pm - 05:00 am'
    }
]