import {Search} from 'lucide-react'
export function Assignment(){
    return(
        <section className='w-1/2 mx-auto px-5 grid gap-5 content-start'>
            <header className='w-full grid mx-5'>
                <div className='w-full flex border-2 px-5 py-2 rounded-xl gap-2 items-center'>
                    <Search className='w-4 h-4'/>
                    <input type="text" placeholder="Search here..." className='focus-none outline-none'/>
                </div>
            </header>
            <div className='grid gap-2'>
                <h1 className='font-bold'>Grades & Assignment Section</h1>
                <div className='grid shadow-xl border rounded-xl px-2 py-5 gap-3'>
                    <div className='grid grid-cols-4 text-sm font-medium text-black/50 dark:text-white/50'>
                        <span >Subject</span>
                        <span >Last Grade </span>
                        <span >Avg Grade</span>
                        <span >Improvement</span>
                    </div>
                    <div className='grid grid-cols-4 text-sm place-content-center font-bold'>
                        <div className='grid gap-2 place-content-center'>
                            <h4>Mathematics</h4>
                            <h4>English</h4>
                            <h4>Science</h4>
                            <h4>Sports</h4>
                        </div>
                        <div className='grid gap-2 place-content-center'>
                            <span>A</span>
                            <span>B+</span>
                            <span>C</span>
                            <span>A</span>
                        </div>
                        <div className='grid gap-2 place-content-center'>
                            <span>B+</span>
                            <span>B+</span>
                            <span>A</span>
                            <span>A</span>
                        </div>
                        <div className='grid gap-2 place-content-center text-cyan-200'>
                            <span>Improved</span>
                            <span className='text-red-400'>Stable</span>
                            <span>Improved</span>
                            <span>Improved</span>
                        </div>
                    </div>
                </div>
                <div className='grid shadow-xl border rounded-xl px-2 py-5 gap-3 mt-10'>
                    <div className='grid grid-cols-4 text-sm place-content-center font-medium text-black/50 dark:text-white/50'>
                        <span>Subject</span>
                        <span>Task</span>
                        <span>Due Date</span>
                        <span>Status</span>
                    </div>
                    <div className='grid grid-cols-4 text-sm place-content-center font-bold'>
                        <div className='grid gap-2 place-content-between'>
                            <h4>Mathematics</h4>
                            <h4>English</h4>
                        </div>
                        <div className='grid gap-2 place-content-between'>
                            <span>Geometry builders</span>
                            <span>Character profile</span>
                        </div>
                        <div className='grid gap-2 place-content-between text-center'>
                            <span>Oct 31</span>
                            <span>Nov 06</span>
                        </div>
                        <div className='grid gap-2 place-content-between text-center text-cyan-200'>
                            <span>Completed</span>
                            <span className='text-red-400'>Pending</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}