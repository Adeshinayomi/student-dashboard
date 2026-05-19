export function Header(){
    return(
       <header className="w-[80%] ml-auto flex p-5 justify-between items-center">
            <div>
                <h1 className="text-xl">Dashboard</h1>
                <span className="text-sm">student management</span>
            </div>

            <div>
                <input type="text" placeholder="Search here..." className="w-full"/>
            </div>

            <div>
                <h2>Minthun ray</h2>
                <span>Student</span>
            </div>
       </header>
    )
}