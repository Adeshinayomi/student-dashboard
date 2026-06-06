import {Timer,Mic} from 'lucide-react'
import type { Activity } from '@/types/activity'
interface prop{
    data:Activity
}
export function Activity({data}:prop){
    const Icon =data.icon
    return(
        <div className='grid grid-cols-3 justify-between'>
            <div className='flex items-center gap-2 '>
                <div className={`p-3 ${data.color} rounded-full`}>
                    <Icon className="w-4 h-4 dark:text-black"/>
                </div>
                
                <h4 className='text-lg font-bold'>{data.name}</h4>
            </div>         
            
            <div className='flex items-center justify-center gap-2 '>
                <div className={`w-2 h-2 rounded-full ${data.status === 'Done'?'bg-green-500':'bg-gray-200'} bg-gray-200`}></div>

                <span>{data.status}</span>
            </div>

            <div className='flex items-center gap-2 justify-end'>
                <Timer />
                <span>
                    {data.date}
                </span>
            </div>
        </div>
    )
}