 import Link from "next/link"
export function Sidebar(){
    return(
        <section className="w-[20%] min-h-screen border-r p-5 grid ">
            <Link href={'/'}>
                School
            </Link>

            <nav className="flex flex-col gap-4">
                <h1>Main menu</h1>
                <ul className="grid gap-2 w-5/6 mx-auto">
                    <Link href={'/'}>Dahboard</Link>
                    <Link href={'/students'}>Students</Link>
                    <Link href={'/attendance'}>Attendance</Link>
                    <Link href={'/settings'}>Settings</Link>
                </ul>
            </nav>

            <button className="w-fit">Sign out</button>

        </section>
    )
}