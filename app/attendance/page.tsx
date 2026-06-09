import Image from 'next/image'
import {Calendar,ChevronDown} from 'lucide-react'
import { students } from '@/data/student'
import { weekDays } from '@/data/student'
function Attendance(){
    return(
        <section className="w-[80%] ml-auto px-5">
            <div className='flex justify-between py-5'>
                <div className='flex gap-3 text-sm'>
                    <button className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full cursor-pointer'>
                        <Calendar className='w-4 h-4 '/>
                        <span>25 sept - 29 sept 2024</span>
                    </button>
                    <button className='flex py-2 px-4 items-center gap-1 bg-black/25 rounded-full dark:text-white dark:bg-white/25 cursor-pointer'>
                        September
                        <ChevronDown className='w-4 h-4'/>
                    </button>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-2 '>
                        <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                        Holiday
                    </button>
                    <button className='bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-2 '>
                        <div className='w-2 h-2 bg-purple-100 rounded-full'></div>
                        On time
                    </button>
                    <button className='bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-2 '>
                        <div className='w-2 h-2 bg-yellow-100 rounded-full'></div>
                        Late
                    </button>
                    <button className='bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-2 '>
                        <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                        Absent
                    </button>
                </div>
            </div>


            <div className='w-full flex gap-5 dark:text-white'>
                <div className='w-1/4 border-r grid items-center gap-7  '>
                    <h1 className='font-bold'>Student Profile</h1>

                    <div className='grid gap-5'>
                        
                        {students.map((student) => (
                            <div key={student.id} className='flex gap-2 items-center'>
                                <Image src={student.avatar} width={30} height={30} alt='profile-image' className='rounded-full'/>
                                <span>{student.name}</span>
                            </div>
                        ))}
                    
                    </div>
                </div>

                <div className='w-full grid grid-cols-7 justify-between text-center'>
                    {weekDays.map((day) => (
                        <div key={day.date} className='border-r grid content-start gap-2'>
                            <div>
                                <h3 className='font-bold'>{day.number}</h3>
                                <p className='text-sm text-black/50 dark:text-white/50'>{day.day}</p>
                            </div>
                            
                            <div className='grid gap-5 '>
                                {students.map((student) => (
                                <div key={student.id} className='flex items-center justify-center gap-2'>
                                    {student.attendance[day.date] === 'on-time' && <div className='w-2 h-2 bg-purple-100 rounded-full'></div>}
                                    {student.attendance[day.date] === 'absent' && <div className='w-2 h-2 bg-red-500 rounded-full'></div>}
                                    {student.attendance[day.date] === 'late' && <div className='w-2 h-2 bg-yellow-100 rounded-full'></div>}
                                    {student.attendance[day.date] === 'holiday' && <div className='w-2 h-2 bg-gray-500 rounded-full'></div>}
                                    
                                    <span>{student.attendance[day.date]}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}                                                                      
                </div>
            </div>
        </section>
    )
}

export default Attendance