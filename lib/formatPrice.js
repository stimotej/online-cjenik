// Uvijek isti zapis (npr. "2,50 €"), neovisno o jeziku poslužitelja ili preglednika.
const formatPrice = (value) => `${value.toFixed(2).replace(".", ",")} €`;

export default formatPrice;
