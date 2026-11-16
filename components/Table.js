import formatPrice from "../lib/formatPrice";

// Dvojno iskazivanje cijena: lijevo aktualna cijena (podebljano),
// desno cijena na dan 10.9.2026. (kurziv).
const Table = ({ data, anchorDate }) => {
  return (
    <table className="text-white text-sm md:text-[16px] leading-5 sm:leading-6 border-spacing-10">
      <thead>
        <tr className="align-bottom text-[10px] leading-3 uppercase tracking-wide">
          <th className="text-left font-normal">
            <span className="sr-only">Naziv</span>
          </th>
          <th
            scope="col"
            className="w-[1%] whitespace-nowrap text-right font-bold p-1 pl-3"
          >
            Aktualna
            <br />
            cijena
          </th>
          <th
            scope="col"
            className="w-[1%] whitespace-nowrap text-right font-normal italic p-1 pl-3"
          >
            Cijena na dan
            <br />
            {anchorDate}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b-[0.5px] border-white/20 last:border-0"
          >
            <td>{item.title}</td>
            <td className="w-[1%] text-right whitespace-nowrap font-bold p-1 pl-3">
              {formatPrice(item.price_eur)}
            </td>
            <td className="w-[1%] text-right whitespace-nowrap italic p-1 pl-3">
              {formatPrice(item.price_eur_anchor)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
