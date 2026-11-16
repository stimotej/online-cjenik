// Cjenik: Caffe bar Svetice i Čajna kuhinja Svetice
// Izvor cijena: postojeći online cjenik /caffe-mzo/cjenik (MZOM Price List 2026.xlsx, cijene nepromijenjene od 31.8.2026.)
//
// price_eur        = aktualna cijena
// price_eur_anchor = cijena na dan 10.9.2026. (dodatna / sidrena cijena, Odluka Vlade RH).
//                    To je povijesni podatak: kod promjene aktualne cijene mijenja se
//                    samo price_eur, a price_eur_anchor ostaje kakav je.
// Alkoholna pića (žestoka) nisu dio cjenika 2026.

export const topliNapitci = [
  { title: "BIJELA KAVA", price_eur: 1.8, price_eur_anchor: 1.8 },
  { title: "CAPPUCCINO", price_eur: 1.7, price_eur_anchor: 1.7 },
  { title: "CAPPUCCINO INSTANT ČOKOLADA", price_eur: 1.8, price_eur_anchor: 1.8 },
  { title: "CAPPUCCINO INSTANT CLASSIC", price_eur: 1.8, price_eur_anchor: 1.8 },
  { title: "CAPPUCCINO INSTANT IRISH CREAM", price_eur: 1.8, price_eur_anchor: 1.8 },
  { title: "CAPPUCCINO INSTANT VANILIJA", price_eur: 1.8, price_eur_anchor: 1.8 },
  { title: "ČAJ LIMUN ĐUMBIR", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ BRUSNICA I NAR", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ CRNI", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ INDIJSKI", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ JABUKA CIMET", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ JAGODA VANILIJA", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ KAMILICA", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ NARANČA CIMET KURKUMA", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ ŠIPAK", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ ŠUMSKO VOĆE", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ VOĆNI", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ ZELENI", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ČAJ ZELENI S LIMUNOM", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "ICE CAFFE INSTANT", price_eur: 2, price_eur_anchor: 2 },
  { title: "INSTANT KAVA BEZ KOFEINA", price_eur: 1.8, price_eur_anchor: 1.8 },
  { title: "KAKAO", price_eur: 2, price_eur_anchor: 2 },
  { title: "KAVA ESPRESSO", price_eur: 1.2, price_eur_anchor: 1.2 },
  { title: "KAVA S MLIJEKOM MALA", price_eur: 1.3, price_eur_anchor: 1.3 },
  { title: "KAVA S MLIJEKOM VELIKA", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "KAVA S ŠLAGOM MALA", price_eur: 1.4, price_eur_anchor: 1.4 },
  { title: "KAVA S ŠLAGOM VELIKA", price_eur: 1.6, price_eur_anchor: 1.6 },
  { title: "MED ZA ČAJ", price_eur: 0.8, price_eur_anchor: 0.8 },
  { title: "MLIJEKO 1 L", price_eur: 4, price_eur_anchor: 4 },
  { title: "ŠLAG PORCIJA", price_eur: 0.8, price_eur_anchor: 0.8 },
  { title: "TOPLA ČOKOLADA", price_eur: 2.2, price_eur_anchor: 2.2 },
];

export const bezalkoholnaPica = [
  { title: "CEDEVITA BAZGA LIMUN", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "CEDEVITA LIMETA", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "CEDEVITA LIMUN", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "CEDEVITA LIMUNSKA TRAVA", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "CEDEVITA MANGO ANANAS", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "CEDEVITA NARANČA", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "COCA COLA 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "COCA COLA ZERO 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "COCKTA 0,275 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "FANTA 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "HIDRA ANANAS 0,5 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "HIDRA LIMUN 0,5 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "HIDRA NARANČA 0,5 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "JAMNICA LIMUNADA 0,33 L", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "JAMNICA NARANČADA 0,33 L", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "LEDENI ČAJ BRESKVA 0,33 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "LEDENI ČAJ ŠUMSKO VOĆE 0,33 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "ORANGINA 0,25 L", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "PIPI SOK 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "RED BULL APRICOT 0,25 L", price_eur: 3.3, price_eur_anchor: 3.3 },
  { title: "RED BULL ORIGINAL 0,25 L", price_eur: 3.3, price_eur_anchor: 3.3 },
  { title: "RED BULL SUGARFREE 0,25 L", price_eur: 3.3, price_eur_anchor: 3.3 },
  { title: "ROMERQUELLE EMOTION LIMUNSKA TRAVA 0,33 L", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "SCHWEPPES BITTER LEMON 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "SCHWEPPES TANGERINA 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "SCHWEPPES TONIC 0,25 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "SCHWEPPES TONIC 1 L", price_eur: 8, price_eur_anchor: 8 },
  { title: "SOK ANANAS 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK BANANA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK BOROVNICA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK CRNI RIBIZL 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK JABUKA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK JAGODA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK KRUŠKA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK MARELICA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK NARANČA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SOK VIŠNJA 0,2 L", price_eur: 2.2, price_eur_anchor: 2.2 },
  { title: "SPRITE 0,25 L", price_eur: 2, price_eur_anchor: 2 },
];

export const voda = [
  { title: "JANA VITAMIN LIMUN 0,33 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "JANA VITAMIN PET 0,5 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "MINERALNA GAZIRANA BOCA 0,33 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "MINERALNA GAZIRANA PET 0,5 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "MINERALNA GAZIRANA BOCA 1 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "PRIRODNA IZVORSKA VODA 0,33 L", price_eur: 1.6, price_eur_anchor: 1.6 },
  { title: "PRIRODNA IZVORSKA VODA PET 0,5 L", price_eur: 1.6, price_eur_anchor: 1.6 },
  { title: "VODA SENSATION 0,25 L", price_eur: 1.8, price_eur_anchor: 1.8 },
];

export const pivo = [
  { title: "PIVO OŽUJSKO 0,5 L", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "PIVO PAN 0,5 L", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "PIVO ZLATNI PAN 0,35 L", price_eur: 2.5, price_eur_anchor: 2.5 },
];

export const vino = [
  { title: "VINO BIJELO 0,187 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "VINO BIJELO 1 L", price_eur: 18, price_eur_anchor: 18 },
  { title: "VINO BUTELJIRANO 0,75 L", price_eur: 25, price_eur_anchor: 25 },
  { title: "VINO CRNO 0,187 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "VINO CRNO 1 L", price_eur: 20, price_eur_anchor: 20 },
  { title: "VINO PJENUŠAVO 0,75 L", price_eur: 30, price_eur_anchor: 30 },
];

export const kolaci = [
  { title: "KRAFNE RAĐENE", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "KROASAN", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "PIROŠKA SA SIROM", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "BANANKO", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "KING EXTRA SLADOLED", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "KING MALINA CHEESECAKE", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "KING SLADOLED", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "KORNET ČOKOLADA", price_eur: 2, price_eur_anchor: 2 },
  { title: "KORNET MAXIMO", price_eur: 2.5, price_eur_anchor: 2.5 },
  { title: "KORNET SLADOLED", price_eur: 2, price_eur_anchor: 2 },
  { title: "KORNET ŠUMSKO VOĆE", price_eur: 2, price_eur_anchor: 2 },
  { title: "KORNET VANILIJA", price_eur: 2, price_eur_anchor: 2 },
  { title: "MACHO ČOKOLADA", price_eur: 2, price_eur_anchor: 2 },
  { title: "MACHO SLADOLED", price_eur: 2, price_eur_anchor: 2 },
  { title: "MACHO VANILIJA", price_eur: 2, price_eur_anchor: 2 },
  { title: "SLADOLED RUMENKO", price_eur: 1.5, price_eur_anchor: 1.5 },
  { title: "SNJEGULJICA SLADOLED", price_eur: 1.5, price_eur_anchor: 1.5 },
];

const menu = {
  locations: "Caffe bar Svetice i Čajna kuhinja Svetice",
  sections: [
    { type: "topli-napitci", groups: [{ title: "Topli napitci", items: topliNapitci }] },
    { type: "bezalkoholna-pica", groups: [{ title: "Bezalkoholna pića", items: bezalkoholnaPica }] },
    { type: "voda", groups: [{ title: "Voda", items: voda }] },
    { type: "pivo", groups: [{ title: "Pivo", items: pivo }] },
    { type: "vino", groups: [{ title: "Vino", items: vino }] },
    {
      type: "kolaci",
      nav: "Deserti i sladoledi",
      groups: [{ title: "Deserti i sladoledi", items: kolaci }],
    },
  ],
};

export default menu;
