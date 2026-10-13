/** '25' → '25.-' (usage suisse) ; '3.50' reste '3.50'. */
export const formatPrice = (p: string) => (p.includes('.') ? p : `${p}.-`);

/** Version lue par les lecteurs d'écran : '25' → '25 francs', '3.50' → '3 francs 50'. */
export const spokenPrice = (p: string) => {
  const [francs, cents] = p.split('.');
  return cents ? `${francs} francs ${cents}` : `${francs} francs`;
};
