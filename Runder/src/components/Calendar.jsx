// WeekSlider.jsx
import { useMemo, useState } from "react";
import "../styles/calendar.css"; // we'll create this next

const DAY_LETTERS = ["S","M","T","W","T","F","S"];

function startOfISOWeek(d) {
  const date = new Date(d);
  const day = (date.getDay() + 6) % 7; // Mon=0 … Sun=6
  date.setDate(date.getDate() - day);
  date.setHours(0,0,0,0);
  return date;
}
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function isoWeekNumber(d) {
  const date = new Date(d);
  date.setHours(0,0,0,0);
  // Thursday in current week decides the year
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  const firstThursday = new Date(date.getFullYear(), 0, 4);
  const diff = date - startOfISOWeek(firstThursday);
  return 1 + Math.round(diff / (7 * 24 * 60 * 60 * 1000));
}
const fmt = (d, opts) => d.toLocaleDateString(undefined, opts);

export default function WeekSlider() {
  const [anchor, setAnchor] = useState(startOfISOWeek(new Date())); // Monday of shown week
  const [selected, setSelected] = useState(new Date());
  const days = useMemo(() => [...Array(7)].map((_,i)=>addDays(anchor,i)), [anchor]);

  const weekNum = isoWeekNumber(anchor);
  const rangeStr = `${fmt(days[0], { day:"2-digit", month:"short" })} – ${fmt(days[6], { day:"2-digit", month:"short", year:"numeric" })}`;

  return (
    <div className="week-slider">
      <header className="week-slider__header">
        <button className="week-slider__arrow" onClick={() => setAnchor(addDays(anchor, -7))}>‹</button>
        <div className="week-slider__title">
          <div className="week-slider__week">WEEK {weekNum}</div>
          <div className="week-slider__range">{rangeStr.toUpperCase()}</div>
        </div>
        <button className="week-slider__arrow" onClick={() => setAnchor(addDays(anchor, 7))}>›</button>
      </header>

      <div className="week-slider__days">
        {days.map((d, i) => {
          const isActive = d.toDateString() === new Date(selected).toDateString();
          return (
            <button
              key={i}
              className={`day ${isActive ? "day--active" : ""}`}
              onClick={() => setSelected(d)}
              aria-label={fmt(d, { weekday:"long", year:"numeric", month:"long", day:"numeric" })}
            >
              <span className="day__letter">{DAY_LETTERS[i]}</span>
              <span className="day__dot" />
              <span className="day__date">{fmt(d, { day:"2-digit", month:"short" }).toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
