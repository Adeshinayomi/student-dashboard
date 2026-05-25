import Image from "next/image";
import {Search} from 'lucide-react';
import ThemeToggle from "./ThemeToggle";
export function Header(){
    return(
       <header className="w-[80%] ml-auto flex p-5 justify-between items-center dark:bg-slate-900 dark:text-white">
            <div>
                <h1 className="text-xl">Dashboard</h1>
                <span className="text-sm text-black/50 dark:text-white/50">student management</span>
            </div>

            <div className='w-1/3 flex gap-2 bg-black/25 px-4 py-2 rounded-full'>
                <Search className='w-5 h-6'/>
                <input type="text" placeholder="Search here..." className="w-full focus-none outline-none"/>
            </div>

            <div className="flex gap-2">
                <ThemeToggle />
                <Image
                    src="/user-profile.jpg"
                    loading="eager"
                    width={50}
                    height={50}
                    alt="Image"
                    className="rounded-full"
                />
                <div>
                    <h2>Adeshinayomi</h2>
                    <span className="text-sm text-black/50 dark:text-white/50">Student</span>
                </div>        
            </div>
       </header>
    )
}