import { useEffect, useState } from 'react';
import { hours, hoursSummary } from '../data/restaurant';
import { getStatus, type OpenStatus as Status } from '../lib/hours';

/**
 * Statut « ouvert / fermé » en direct, à l'heure de Genève.
 * Rendu côté serveur avec le résumé des horaires, puis calculé dans le navigateur
 * (évite tout décalage entre l'heure du build et celle du visiteur).
 */
export default function OpenStatus() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getStatus(hours, new Date()));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="status" data-open={status ? String(status.open) : undefined}>
      {status ? status.text : hoursSummary}
    </p>
  );
}
