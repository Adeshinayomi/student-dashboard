import { DashboardCard } from "./component/DashboardCard";
import {cards} from '../data/cards'

export default function Home() {
  return (
    <section className="w-[80%] ml-auto p-5">
      <div className="flex gap-5">
          {cards.map((card)=>{
            return(
              <DashboardCard key={card.id} card={card}/>
            )
          })}          
      </div>

    </section>
  );
}
