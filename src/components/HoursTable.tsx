import { useEffect, useState } from 'react';
import { hours } from '../data/restaurant';
import { displayTime, zurichNow } from '../lib/hours';

/** Tableau des horaires, avec le jour courant (heure de Genève) mis en évidence. */
export default function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setToday(zurichNow(new Date()).day);
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <table className="hours-table">
      <caption className="sr">Horaires d’ouverture</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = h.day === today;
          return (
            <tr key={h.day} className={isToday ? 'today' : undefined}>
              <th scope="row">
                {h.label}
                {isToday && <span className="today-tag"> aujourd’hui</span>}
              </th>
              <td>
                {h.slots.length
                  ? h.slots.map(([a, b]) => (
                      <span className="slot" key={a}>
                        {displayTime(a)} – {displayTime(b)}
                      </span>
                    ))
                  : 'Fermé'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
