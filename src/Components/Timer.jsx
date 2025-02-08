import Countdown from "react-countdown";
import { useState, useMemo, useCallback } from "react";
import "../Components/styles/Timer.css"; // Import external styles

export default function Timer() {
    const [isVisible, setIsVisible] = useState(true);
    const eventDate = useMemo(() => new Date("2025-02-28T00:00:00").getTime(), []);

    // Renderer function for Countdown component
    const renderer = useCallback(({ days, hours, minutes, seconds, completed }) => {
        if (completed) return <span className="timer-heading">Event Started!</span>;
        
        return (
            <div className="timer-grid">
                {[['Days', days], ['Hours', hours], ['Minutes', minutes], ['Seconds', seconds]].map(([label, value]) => (
                    <div key={label} className="timer-item">
                        <span className="timer-value orbitron-font">{value}</span>
                        <span className="timer-label">{label}</span>
                    </div>
                ))}
            </div>
        );
    }, []);

    return (
        <div className="timer-container" style={{ display: isVisible ? 'block' : 'none' }}>
            <button className="close-btn" onClick={() => setIsVisible(false)}>&times;</button>
            <h2 className="timer-heading">EVENT COUNTDOWN</h2>
            <Countdown date={eventDate} renderer={renderer} />
        </div>
    );
}
