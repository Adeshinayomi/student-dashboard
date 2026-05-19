import Image from "next/image";
import {Search} from 'lucide-react';
export function Header(){
    return(
       <header className="w-[80%] ml-auto flex p-5 justify-between items-center">
            <div>
                <h1 className="text-xl">Dashboard</h1>
                <span className="text-sm text-white/50">student management</span>
            </div>

            <div className='flex gap-2 bg-white/25 px-4 py-2 rounded-full'>
                <Search className='w-5 h-6'/>
                <input type="text" placeholder="Search here..." className="w-full focus-none outline-none"/>
            </div>

            <div className="flex gap-2">
                <Image
                    src="/user-profile.jpg"
                    width={50}
                    height={50}
                    alt="Image"
                    className="rounded-full"
                />
                <div>
                    <h2>Minthun ray</h2>
                    <span className="text-sm text-white/50">Student</span>
                </div>        
            </div>
       </header>
    )
}