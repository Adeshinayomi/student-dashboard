import {Calendar} from 'lucide-react'
import { Activity } from './Activity'
export function Activities(){
    return(
        <section className='w-full grid gap-5 p-5'>
            <div className='flex justify-between '>
                <h1 className='text-2xl font-bold '>Activities</h1>

                <button className='flex gap-2 bg-gray-200 px-4 py-2 rounded-full'>
                    <Calendar />
                    <span>Today</span>
                </button>
            </div>
            <Activity />
        </section>
    )
}