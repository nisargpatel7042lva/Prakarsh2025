import { useState, useEffect } from "react";
import "../Components/styles/EventcardStyle.css";
import CrossImg from "../assets/Cross.png";
import events from "./eventData.jsx"; // Moved event data to a separate file
import RegisterButton from "./RegisterButton";
import { NavLink } from "react-router-dom";

const eventCategories = ["All", "Tech", "NonTech", "ESports", "Workshop", "OpenR"];

export default function EventCard() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");
  const savedEventType = localStorage.getItem("eventname");

  useEffect(() => {
    const fetchData = async () => {
      setFilter(savedEventType);
      document.getElementById(savedEventType)?.focus();
      // localStorage.removeItem('eventname');
    };
    fetchData();
  }, [savedEventType]);

  const showCardDetails = (eventId) => setSelectedEvent(eventId);
  const hideCardDetails = () => setSelectedEvent(null);
  async function change(category){
    setFilter(category);
     localStorage.setItem('eventname',category);
  }
  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter);
  const selectedEventDetails = events.find((event) => event.id === selectedEvent);

  const isOpenR = selectedEventDetails?.category === "OpenR";

  return (
    <div className="container1">
      <div className="button-wrapper1">
        {eventCategories.map((category) => (
          <button key={category} id={category} onClick={() => change(category)}>
            {category.replace(/([A-Z])/g, " $1").trim()} Events
          </button>
        ))}
      </div>

      <div className="card-container">
        {filteredEvents.map((event) => (
          <div key={event.id} className={`card c${event.id} ${event.category}`} onClick={() => showCardDetails(event.id)}>
            <img alt={event.title} src={event.image} className={`img ${event.id}`} />
            <h2>{event.title}</h2>
           
          </div>
        ))}
      </div>

      {selectedEvent && selectedEventDetails && (
        <div className="cardDetails">
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box">
            <img src={CrossImg} className="cross" alt="Close" onClick={hideCardDetails} />
            {selectedEventDetails.img && <img src={selectedEventDetails.img} className={`event-${selectedEvent}`} alt="" />}
            <h3 className="event-desc">{selectedEventDetails.details}</h3>
            <p>{selectedEventDetails.discription}</p>



            <NavLink to={isOpenR ? "https://lu.ma/k7qw8bhs" : "https://konfhub.com/prakarsh-25"} target="_blank">
              <RegisterButton className="register" />
            </NavLink>

            {/* OpenR Details Section */}
            {isOpenR && (
              <div className=""><br />
                <h3 className="openr-head">OpenR Project Details</h3>
                <p className="">
                  Open R is an open project and prototype challenge focused on Smart Village Development, encouraging innovative and feasible solutions to enhance rural living.
                </p><br />
                <div className="">
                  <h4 className="openr-head">Event Criteria: </h4>
                  <p className="">
                    - Team of 4 members (min-2; max-4)
                    <br />
                    - Participants must bring their project, no extra time for in-person activity of building/coding.
                    <br />
                    - Judging based on POCs (Proof of Concept) made by participants.
                    <br />
                    - POC must include the project/prototype along with a drafted document (hardcopy).
                  </p><br />
                  <h4 className="openr-head">Project Criteria:</h4>
                  <p className="">
                    - Project/Prototype must be 70-80% implemented.
                    <br />
                    - The project must satisfy the theme "Rural Development" on all bases.
                    <br />
                    - A well-formatted document (hardcopy) is required, otherwise the project won't be considered.
                  </p>
                </div>
              </div>
            )} <br />
            {/* Display the problem statement for OpenR */}
            {isOpenR && (
              <div>
                <NavLink
                  to="https://docs.google.com/spreadsheets/d/1cC0-tgQUeavTXRqKDG6hZNZS9u72UIbJQ3xUpbEChpE/edit?usp=sharing"
                  target="_blank"
                  className="problem-statement-link"
                >
                  <h3 className="openr-head">Problem Statement</h3>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
