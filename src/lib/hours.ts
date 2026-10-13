import type { DayHours } from '../data/restaurant';

const TIMEZONE = 'Europe/Zurich';
const DAYS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

/** '24:00' s'affiche « 00:00 » dans les horaires. */
export const displayTime = (t: string) => (t === '24:00' ? '00:00' : t);

/** Jour et minute actuels à Genève, quel que soit le fuseau du visiteur. */
export function zurichNow(date: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: TIMEZONE,
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  return { day: SHORT.indexOf(parts.weekday), minute: Number(parts.hour) * 60 + Number(parts.minute) };
}

export interface OpenStatus {
  open: boolean;
  text: string;
}

export function getStatus(hours: DayHours[], date: Date): OpenStatus {
  const { day, minute } = zurichNow(date);
  const slotsFor = (d: number) => hours.find((h) => h.day === d)?.slots ?? [];
  const spoken = (t: string) => (t === '24:00' ? 'minuit' : t);

  const current = slotsFor(day).find(([a, b]) => minute >= toMinutes(a) && minute < toMinutes(b));
  if (current) return { open: true, text: `Ouvert maintenant, jusqu’à ${spoken(current[1])}` };

  const later = slotsFor(day).find(([a]) => toMinutes(a) > minute);
  if (later) return { open: false, text: `Fermé pour le moment, ouvre à ${later[0]}` };

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const next = slotsFor(d)[0];
    if (next) return { open: false, text: `Fermé, ouvre ${i === 1 ? 'demain' : DAYS[d]} à ${next[0]}` };
  }
  return { open: false, text: 'Fermé' };
}
