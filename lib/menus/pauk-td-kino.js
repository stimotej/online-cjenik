// Cjenik: Noćni klub Pauk, Caffe bar &TD i Caffe bar Kino
// Izvor cijena: "CJENIK PIĆA noćni klub Pauk, TD, kino.xlsx" (PJ Ugostiteljstvo i catering, 21.9.2026.);
//               kave i topli napitci isti su kao u cjeniku caffe barova (caffe-barovi.js)
//
// price_eur        = aktualna cijena
// price_eur_anchor = cijena na dan 10.9.2026. (dodatna / sidrena cijena, Odluka Vlade RH).
//                    To je povijesni podatak: kod promjene aktualne cijene mijenja se
//                    samo price_eur, a price_eur_anchor ostaje kakav je.
//
// U Excel cjeniku postoji samo jedan stupac cijena. Prema mailu PJ Ugostiteljstvo
// ("cijene ostaju iste, samo je potrebno ubaciti dodatnu kolonu") cijena na dan
// 10.9.2026. jednaka je aktualnoj.
// Excel nema naslove grupa; naslovi sekcija ispod dodani su radi preglednosti.

import { topliNapitci } from "./caffe-barovi";

export const bezalkoholnaPica = [
  { title: "COCA - COLA ZERO 0,33 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "COCA - COLA 0,33 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "BITTER LEMON 0,33 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "TONIC 0,33 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "CAPPY NARANČA 0,33 L PET", price_eur: 3, price_eur_anchor: 3 },
  { title: "CAPPY JABUKA 0,33 L PET", price_eur: 3, price_eur_anchor: 3 },
  { title: "NARANČA CEDEVITA 0,34 L PET", price_eur: 3, price_eur_anchor: 3 },
  { title: "LIMUN CEDEVITA 0,34 L PET", price_eur: 3, price_eur_anchor: 3 },
  { title: "JAMNICA LIMUNADA 0,33 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "JAMNICA NARANČADA 0,33 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "RED BULL ORIGINAL 0,25 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "RED BULL SUGARFREE 0,25 L LIM", price_eur: 3, price_eur_anchor: 3 },
  { title: "RED BULL APRICOT - STRAWBERRY 0,25 L LIM", price_eur: 3, price_eur_anchor: 3 },
];

export const voda = [
  { title: "JAMNICA MINERALNA 0,50 L PET", price_eur: 3, price_eur_anchor: 3 },
  { title: "JAMNICA MINERALNA 1,0 L PET", price_eur: 5, price_eur_anchor: 5 },
  { title: "PRIRODNA IZVORSKA VODA JANA 0,50 L PET", price_eur: 3, price_eur_anchor: 3 },
];

export const pivo = [
  { title: "PIVO PAN TOČENO 0,50 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "CARLSBERG 0,50 L LIM.", price_eur: 3, price_eur_anchor: 3 },
  { title: "PAN RADLER 0,50 L LIM.", price_eur: 3, price_eur_anchor: 3 },
];

export const zestokaPica = [
  { title: "JACK DANIELS 0,03 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "ANTIQUE 0,03 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "VILJAMOVKA 0,03 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "TERANINO 0,03 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "GIN SAX 0,03 L", price_eur: 3, price_eur_anchor: 3 },
  { title: "PELINKOVAC 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "VODKA VIGOR 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "TRAVARICA 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "LOZOVAČA 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "ŠLJIVOVICA 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "MEDICA 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "BOROVNICA 0,03L", price_eur: 2, price_eur_anchor: 2 },
  { title: "VIŠNJEVAC 0,03 L", price_eur: 2, price_eur_anchor: 2 },
  { title: "ORAHOVAC 0,03 L", price_eur: 2, price_eur_anchor: 2 },
];

export const ostalaPica = [
  { title: "TWIST ISO LEMON 0,50 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "JABUKA SOMERSBY 0,50 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "KRUŠKA SOMERSBY 0,50 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "BOROVNICA SOMERSBY 0,50 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "PELIN SPRITZ LIMUN 0,25 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "PELIN SPRITZ NARANČA 0,25 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "OLD PILOTS GIN TONIC 0,25 L LIM", price_eur: 4, price_eur_anchor: 4 },
  { title: "OLD PILOTS VODKA SODA 0,25 L LIM", price_eur: 4, price_eur_anchor: 4 },
];

export const boce = [
  { title: "ANTIQUE 1.L + 4 SCHWEPPES BITTER LEMON 0,33 L LIM", price_eur: 90, price_eur_anchor: 90 },
  { title: "JACK DANIELS 1.L + 4 COCA COLA 0,33 L LIM", price_eur: 90, price_eur_anchor: 90 },
  { title: "GIN SAX 1.L + 4 SCHWEPPES TONIC 0,33 L LIM", price_eur: 80, price_eur_anchor: 80 },
  { title: "VODKA VIGOR 1. L + 4 RED BULL 0,25 L LIM", price_eur: 70, price_eur_anchor: 70 },
];

export const vino = [
  { title: "BIJELO VINO VEZAK GRAŠEVINA 1,0 L", price_eur: 15, price_eur_anchor: 15 },
  { title: "CRNO VINO PELJEŠAC 1,0 L", price_eur: 15, price_eur_anchor: 15 },
  { title: "GEMIŠT EVENT 0,40 L", price_eur: 4, price_eur_anchor: 4 },
  { title: "BIJELO VINO GRAŠEVINA 1,0 L + JAMNICA 1.L PET", price_eur: 18, price_eur_anchor: 18 },
];

export const ostalo = [
  { title: "ČAŠE 0,20 L PVC 50/1", price_eur: 5, price_eur_anchor: 5 },
];

const menu = {
  locations: "Noćni klub Pauk, Caffe bar &TD i Caffe bar Kino",
  sections: [
    { type: "topli-napitci", groups: [{ title: "Topli napitci", items: topliNapitci }] },
    { type: "bezalkoholna-pica", groups: [{ title: "Bezalkoholna pića", items: bezalkoholnaPica }] },
    { type: "voda", groups: [{ title: "Voda", items: voda }] },
    { type: "pivo", groups: [{ title: "Pivo", items: pivo }] },
    {
      type: "alkoholna-pica",
      nav: "Žestoka i ostala pića",
      groups: [
        { title: "Žestoka pića", items: zestokaPica },
        { title: "Ostala pića", items: ostalaPica },
        { title: "Boce", items: boce },
      ],
    },
    {
      type: "vino",
      groups: [
        { title: "Vino", items: vino },
        { title: "Ostalo", items: ostalo },
      ],
    },
  ],
};

export default menu;
