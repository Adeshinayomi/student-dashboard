import {PhoneCall,MessageCircle,PenLine,User,ArrowUpRightFromSquareIcon,UserRoundCog,Send} from 'lucide-react'
import StraightAnglePieChart from './component/piechart'
import { Assignment } from './component/Assignments'
import Image from 'next/image'

function Student(){
    return(
        <section className="w-[80%] p-5 ml-auto dark:bg-slate-900 dark:text-white flex">
            <div className='grid gap-5 w-2/3 border-r px-2'>
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <h1>
                            ID - <span>123456</span>
                        </h1>
                        <p className='text-black/50 dark:text-white/50 text-sm'>Student unique identifier</p>
                    </div>
                    <div className='flex gap-2'>
                        <PhoneCall />
                        <MessageCircle />
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src="/user-profile.jpg"
                            loading="eager"
                            width={50}
                            height={50}
                            alt="Image"
                            className="rounded-full"
                        />
                        <p>Adeshinayomi</p>
                    </div>
                    <div className='p-4 rounded-full bg-red-100 dark:text-black'>
                        <PenLine className='w-4 h-4'/>
                    </div>
                </div>
                <div className='w-full px-15 flex justify-between'>
                    <div>
                        <span className='text-black/50 dark:text-white/50 text-sm'>ID</span>
                        <p>ID-12345</p>
                    </div>
                    <div>
                        <span className='text-black/50 dark:text-white/50 text-sm'>Number</span>
                        <p>+234 90567809</p>
                    </div>
                    <div>
                        <span className='text-black/50 dark:text-white/50 text-sm'>Email</span>
                        <p>Batagbola@size42</p>
                    </div>
                </div>
                <div className='w-full flex gap-4 justify-between'>
                    <div className='flex items-center gap-2 px-4 py-2 border rounded-md w-fit dark:text-white'>
                        <User />
                        <div>
                            <h1 className='font-bold'>25 days</h1>
                            <p className='text-sm text-black/50 dark:text-white/50'>Total attendance</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 px-4 py-2 border rounded-md w-fit dark:text-white'>
                        <ArrowUpRightFromSquareIcon />
                        <div>
                            <h1 className='font-bold'>10 days</h1>
                            <p className='text-sm text-black/50 dark:text-white/50'>Last attendance</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 px-4 py-2 border rounded-md w-fit dark:text-white'>
                        <UserRoundCog className='text-red-500'/>
                        <div>
                            <h1 className='font-bold'>2 days</h1>
                            <p className='text-sm text-black/50 dark:text-white/50'>Total absents</p>
                        </div>
                    </div>                
                </div>
                <div className='w-full flex gap-4'>
                    <div className='w-1/2 bg-red-100 p-4 text-black grid gap-5 rounded-md'>
                        <h1 className='font-bold'>Parents Information</h1>
                        <div className='flex items-center gap-2 justify-between bg-white p-2 rounded-full'>
                            <div className='flex items-center gap-2'>
                                <Image src="/user-profile.jpg" alt='image' width={40} height={40} className='rounded-full'/>
                                <div>
                                    <p>Bhadmus Ade</p>
                                    <span>Father</span>
                                </div>
                            </div>

                            <Send />
                        </div>
                        <div className='flex items-center gap-2 justify-between bg-white p-2 rounded-full'>
                            <div className='flex items-center gap-2'>
                                <Image src="/user-profile.jpg" alt='image' width={40} height={40} className='rounded-full'/>
                                <div>
                                    <p>Bhadmus Oyin</p>
                                    <span>Mother</span>
                                </div>
                            </div>

                            <Send/>
                        </div>
                    </div>
                    <div className='w-1/2 bg-purple-100 grid gap-5 p-4 rounded-md text-black'>
                        <h1 className='font-bold'>Attendance summary</h1>

                        <StraightAnglePieChart />
                    </div> 
                </div>
            </div>
            <Assignment />
        </section>
    )
}

export default Student