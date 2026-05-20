import { BriefcaseBusiness,ChartPie,Calendar,ChevronUp,MoveRight } from 'lucide-react';
import type { card } from '@/types/cards';

interface prop{
    card:card
}
export function DashboardCard({card}:prop){

    return(
        <div className={`w-[300px] rounded-lg px-4 py-2 grid gap-5 text-black ${card.bgColor}`}>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    {card.id === 1 && <BriefcaseBusiness className='w-4 h-4'/>}
                    {card.id === 2 && <ChartPie className='w-4 h-4'/>}
                    {card.id === 3 && <Calendar className='w-4 h-4'/>}
                    <h1 className='font-bold text-sm'>{card.title}</h1>
                </div>

                <button className='cursor-pointer'>...</button>
            </div>

            <div className='flex gap-2'>
                <h1 className='font-bold text-4xl'>{card.Percentage}%</h1>
                <span className='flex place-self-end bg-white rounded-full px-2 text-[13px]'> 
                    <ChevronUp className={`w-4 h-4 ${card.improvement > 0 ? 'text-green-500':'text-red-500'}`}/>    
                    {card.improvement}%
                </span>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[10px] text-black/50 font-medium'>{card.remark}</p>

                <button className='text-sm bg-white px-4 py-2 rounded-full items-center gap-2 text-black/75 flex cursor-pointer'>
                    <span>see details</span>
                    <MoveRight className='h-4 w-4'/>
                </button>
            </div>
        </div>
    )
}