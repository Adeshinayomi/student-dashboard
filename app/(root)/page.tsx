import { DashboardCard } from "./component/DashboardCard";
import GPAChart from "./component/chart";
import AssignmentChart from "./component/piechart";
import {cards} from '../../data/cards'
import { Activities } from "./component/Activities";

export default function Home() {
  return (
    <section className="w-[80%] ml-auto p-5 grid gap-5 dark:bg-slate-900 dark:text-white">
      <div className="flex gap-5">
          {cards.map((card)=>{
            return(
              <DashboardCard key={card.id} card={card}/>
            )
          })}          
      </div>
      <div className="flex gap-5 p-5 ">
        <div className="grid">
          <h1 className="text-center text-xl font-bold">Average GPA</h1>
          <GPAChart />
        </div>
        <div className="h-fit flex flex-col">
          <h1 className="text-center font-bold text-xl">Assignment Completion</h1>
          <AssignmentChart />
        </div>
      </div>
      <Activities />
    </section>
  );
}
