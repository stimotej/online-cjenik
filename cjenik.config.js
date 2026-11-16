// Jedna aplikacija, više cjenika. Koji se cjenik gradi i poslužuje određuje
// varijabla okoline CJENIK (ista vrijednost i za `next build` i za `next start`).
//
// Novi cjenik: dodati unos ovdje i datoteku s cijenama u lib/menus/.
const CJENICI = {
  "caffe-barovi": { basePath: "/caffe-barovi/cjenik" },
  "caffe-mzo": { basePath: "/caffe-mzo/cjenik" },
  "pauk-td-kino": { basePath: "/caffe-pauk-td-kino/cjenik" },
};

const ZADANI_CJENIK = "caffe-barovi";

function resolveCjenik(value) {
  const id = value || ZADANI_CJENIK;
  const cjenik = CJENICI[id];
  if (!cjenik) {
    throw new Error(
      `Nepoznat cjenik CJENIK="${id}". Dostupni: ${Object.keys(CJENICI).join(", ")}`
    );
  }
  return {
    id,
    basePath: cjenik.basePath,
    // Svaki cjenik ima svoj build direktorij pa svi mogu živjeti u istom checkoutu.
    distDir: `.next-${id}`,
  };
}

module.exports = { CJENICI, ZADANI_CJENIK, resolveCjenik };
