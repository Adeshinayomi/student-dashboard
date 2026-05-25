'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { LayoutDashboard,UserRound,FileChartColumn,Settings,LogOut,School} from 'lucide-react';
export function Sidebar(){
    const pathname=usePathname()
    return(
        <section className="fixed w-[20%] min-h-screen border-r p-5 grid dark:bg-slate-900 dark:text-white">
            <Link href={'/'} className="flex gap-2">
                <School  />
                School
            </Link>

            <nav className="flex flex-col gap-4">
                <h1>Main menu</h1>
                <ul className="grid gap-2 w-5/6 mx-auto">
                    <Link href={'/'} className="flex gap-2 items-center">
                        <LayoutDashboard className="w-4 h-4"/>
                        <span className={`${pathname === '/'?'font-bold':''}`}>Dashboard</span>
                    </Link>
                    <Link href={'/students'} className="flex gap-2 items-center">
                        <UserRound className="w-4 h-4"/>
                        <span className={`${pathname === '/students'?'font-bold':''}`}>Student</span>
                    </Link>
                    <Link href={'/attendance'} className="flex gap-2 items-center">
                        <FileChartColumn className="w-4 h-4"/>
                        <span className={`${pathname === '/attendance'?'font-bold':''}`}>Attendance</span>
                    </Link>
                    <Link href={'/settings'} className="flex gap-2 items-center">
                        <Settings className="w-4 h-4"/>
                        <span className={`${pathname === '/settings'?'font-bold':''}`}>Settings</span>
                    </Link>
                </ul>
            </nav>

            <button className="w-fit flex gap-2 items-center">
                <LogOut className="w-4 h-4"/>
                <span>Log out</span>
            </button>

        </section>
    )
}