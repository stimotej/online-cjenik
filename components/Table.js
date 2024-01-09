const Table = ({ data }) => {
  return (
    <table className="text-white text-sm md:text-[16px] leading-5 sm:leading-6 border-spacing-10">
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b-[0.5px] border-white/20 last:border-0"
          >
            <td>{item.title}</td>
            {/* <td className="text-right whitespace-nowrap p-1">
              {item.price_kn.toLocaleString()} kn
            </td> */}
            <td className="text-right whitespace-nowrap p-1">
              {item.price_eur.toLocaleString()} €
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
