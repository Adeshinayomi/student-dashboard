import { BriefcaseBusiness,ChevronUp,MoveRight } from 'lucide-react';

export function DashboardCard(){
    return(
        <div className='w-[300px] rounded-lg px-4 py-2 grid gap-5 text-black bg-yellow-200'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <BriefcaseBusiness className='w-4 h-4'/>
                    <h1 className='font-bold text-sm'>Course Progess</h1>
                </div>

                <button className='cursor-pointer'>...</button>
            </div>

            <div className='flex gap-2'>
                <h1 className='font-bold text-4xl'>75%</h1>
                <span className='flex place-self-end bg-white rounded-full px-2 text-[13px]'> 
                    <ChevronUp className='w-4 h-4 text-green-500'/>    
                    12%
                </span>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[10px] text-black/50 font-medium'>22 of out of 64 classes</p>

                <button className='text-sm bg-white px-4 py-2 rounded-full items-center gap-2 text-black/75 flex cursor-pointer'>
                    <span>see details</span>
                    <MoveRight className='h-4 w-4'/>
                </button>
            </div>
        </div>
    )
}