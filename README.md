# Online cjenik caffe barova SC-a

Jedna Next.js aplikacija koja poslužuje više QR cjenika. Koji se cjenik gradi i
poslužuje određuje varijabla okoline `CJENIK`.

| `CJENIK`       | Adresa                       | Lokacije                                        | Port |
| -------------- | ---------------------------- | ----------------------------------------------- | ---- |
| `caffe-barovi` | `/caffe-barovi/cjenik`       | svi caffe barovi osim niže navedenih            | 3000 |
| `caffe-mzo`    | `/caffe-mzo/cjenik`          | Caffe bar Svetice i Čajna kuhinja Svetice       | 3001 |
| `pauk-td-kino` | `/caffe-pauk-td-kino/cjenik` | Noćni klub Pauk, Caffe bar &TD i Caffe bar Kino | 3005 |

Ako `CJENIK` nije postavljen, koristi se `caffe-barovi`.

## Gdje je što

- `cjenik.config.js`: popis cjenika i njihove adrese (`basePath`).
- `lib/menus/<cjenik>.js`: artikli i cijene pojedinog cjenika te raspored sekcija.
- `components/sectionStyles.js`: izgled sekcija (pozadinska slika, boje, naziv u izborniku).
- `ecosystem.config.js`: pm2 procesi i portovi.

## Dvojno iskazivanje cijena

Svaki artikl ima dvije cijene:

- `price_eur`: aktualna cijena (lijevi stupac, podebljano)
- `price_eur_anchor`: cijena na dan 10.9.2026. (desni stupac, kurziv)

Kod promjene cijene mijenja se samo `price_eur`. `price_eur_anchor` je povijesni
podatak i ostaje isti. Build pada ako nekom artiklu nedostaje jedna od cijena.

## Novi cjenik

1. Dodati unos u `cjenik.config.js`.
2. Dodati `lib/menus/<cjenik>.js` i upisati ga u `lib/menus/index.js`.
3. Dodati proces u `ecosystem.config.js` i `Location` blok u Apache konfiguraciju.

## Razvoj

```bash
CJENIK=caffe-mzo npm run dev
```

Stranica je na `http://localhost:3000` + adresa cjenika iz tablice.

## Build i pokretanje

Svaki cjenik ima svoj build direktorij (`.next-<cjenik>`), pa svi žive u istom checkoutu.
`CJENIK` mora biti isti kod builda i kod pokretanja.

```bash
npm run build:all
pm2 start ecosystem.config.js
```

Napomena: token za Font Awesome Pro u `.npmrc` više ne vrijedi, pa `npm ci` na čistom
checkoutu ne prolazi. Na poslužitelju treba zadržati postojeći `node_modules`.
