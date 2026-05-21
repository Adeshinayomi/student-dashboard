import {Timer,Mic} from 'lucide-react'
export function Activity(){
    return(
        <div className='flex justify-between '>
            <div className='flex items-center gap-2'>
                <div className='p-3 bg-purple-100 rounded-full'>
                    <Mic />
                </div>
                
                <h4 className='text-lg font-bold'>English Spoken Practice</h4>
            </div>         
            
            <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-gray-200'></div>
                <span>In progress</span>
            </div>

            <div className='flex items-center gap-2'>
                <Timer />
                <span>
                    11:00am - 12:00am
                </span>
            </div>
        </div>
    )
}