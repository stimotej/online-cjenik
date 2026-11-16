// Izgled pojedine vrste sekcije: sidro (id), naziv u izborniku, pozadinska slika i boje.
// Tailwind klase moraju ostati ispisane u cijelosti da ih Tailwind pronađe.
export const SECTION_STYLES = {
  "topli-napitci": {
    id: "topli-napitci",
    nav: "Topli napitci",
    image: "topli-napitci.jpg",
    alt: "Topli napitci",
    bg: "bg-[#0C191F]",
    overlay: "bg-[#0C191F50]",
    imageClass:
      "object-left-bottom sm:object-center object-contain sm:object-cover",
  },
  "bezalkoholna-pica": {
    id: "bezalkoholna-pica",
    nav: "Bezalkoholna pića",
    image: "bezalkoholna-pica.jpg",
    alt: "Bezalkoholno piće",
    bg: "bg-[#363442]",
    overlay: "bg-[#36344280]",
    imageClass:
      "object-left-bottom sm:object-center object-contain sm:object-cover",
  },
  voda: {
    id: "voda",
    nav: "Voda",
    image: "voda.jpg",
    alt: "Voda",
    bg: "bg-[#1A272F]",
    overlay: "bg-[#1A272F50]",
    imageClass: "object-left-bottom sm:object-center object-cover",
  },
  pivo: {
    id: "pivo",
    nav: "Pivo",
    image: "pivo.jpg",
    alt: "Pivo",
    bg: "bg-[#1C1D22]",
    overlay: "bg-[#1C1D2250]",
    imageClass: "object-left-top object-cover",
  },
  "alkoholna-pica": {
    id: "alkoholna-pica",
    nav: "Alkoholna pića",
    image: "alkoholna-pica.jpg",
    alt: "Alkoholno piće",
    bg: "bg-[#0A0B0D]",
    overlay: "bg-[#0A0B0D50]",
    imageClass:
      "object-left-bottom sm:object-left-top object-contain sm:object-cover",
  },
  vino: {
    id: "vino",
    nav: "Vino",
    image: "vino.jpg",
    alt: "Vino",
    bg: "bg-[#14141E]",
    overlay: "bg-[#14141E50]",
    imageClass: "object-left-bottom sm:object-center object-cover",
  },
  kolaci: {
    id: "deserti-i-sladoledi",
    nav: "Deserti i sladoledi",
    image: "kolaci.jpg",
    alt: "Kolači",
    bg: "bg-[#1C1C1C]",
    overlay: "bg-[#1C1C1C50]",
    imageClass:
      "object-left-bottom sm:object-center object-contain sm:object-cover",
  },
};
