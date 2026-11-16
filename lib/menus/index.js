import caffeBarovi from "./caffe-barovi";
import caffeMzo from "./caffe-mzo";
import paukTdKino from "./pauk-td-kino";

// Ključevi moraju odgovarati onima u cjenik.config.js
const MENUS = {
  "caffe-barovi": caffeBarovi,
  "caffe-mzo": caffeMzo,
  "pauk-td-kino": paukTdKino,
};

// Dan na koji se odnosi dodatna (sidrena) cijena.
export const ANCHOR_DATE = "10.9.2026.";

const isPrice = (value) =>
  typeof value === "number" && Number.isFinite(value) && value > 0;

// Zaustavlja build ako nekom artiklu nedostaje jedna od dvije cijene.
function validate(id, menu) {
  const errors = [];
  for (const section of menu.sections) {
    for (const group of section.groups) {
      if (!group.items.length) errors.push(`${group.title}: prazna grupa`);
      for (const item of group.items) {
        if (!item.title) errors.push(`${group.title}: artikl bez naziva`);
        if (!isPrice(item.price_eur))
          errors.push(`${group.title} / ${item.title}: price_eur`);
        if (!isPrice(item.price_eur_anchor))
          errors.push(`${group.title} / ${item.title}: price_eur_anchor`);
      }
    }
  }
  if (errors.length) {
    throw new Error(`Cjenik "${id}" nije ispravan:\n- ${errors.join("\n- ")}`);
  }
}

export function getMenu(id) {
  const menu = MENUS[id];
  if (!menu) throw new Error(`Nema podataka za cjenik "${id}"`);
  validate(id, menu);
  return menu;
}
