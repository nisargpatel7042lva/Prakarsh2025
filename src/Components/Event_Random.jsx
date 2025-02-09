import { useNavigate } from "react-router";
import "../Components/styles/EventRandom.css";
import {MonitorIcon, BookOpenIcon, RocketIcon, GamepadIcon, MoreHorizontalIcon } from "lucide-react";
import { GrWorkshop } from "react-icons/gr";

const eventsTypes = [
  { id: 1, name: "Tech", category: "Tech", icon: MonitorIcon },
  { id: 2, name: "Non-Tech", category: "NonTech", icon: BookOpenIcon },
  { id: 3, name: "Workshop", category: "Workshop", icon: GrWorkshop },
  { id: 4, name: "Open R", category: "OpenR", icon: RocketIcon },
  { id: 5, name: "E-Sports", category: "ESports", icon: GamepadIcon },
  { id: 6, name: "View More...", category: "All", icon: MoreHorizontalIcon },
];

export default function EventRandom() {
  const navigate = useNavigate();

  const handleCardClick = async (category) => {
    await navigate("/events");
    localStorage.setItem("eventname", category);
  };

  return (
    <div className="p-6 min-h-screen bg-black">
      <div className="homeEventBar mb-12">
        <h1 className="events-header">EVENTS</h1>
      </div>
      
      <div className="card2-container2">
        {eventsTypes.map((event) => {
          const Icon = event.icon;
          return (
            <div
              key={event.id}
              className="card2"
              onClick={() => handleCardClick(event.category)}
            >
              <div className="icon2">
                <Icon size={48} className="text-cyan-400" />
                <h2>{event.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}