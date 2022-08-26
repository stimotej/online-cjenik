import Image from "next/image";

const BezalkoholnaPica = () => {
  return (
    <div
      className="min-h-full snap-start bg-[#363442] relative"
      id="bezalkoholna-pica"
    >
      <Image
        src="/bezalkoholna-pica.jpg"
        alt="Topli napitci"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-center object-contain sm:object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#36344280]" />
      <div className="p-6 flex flex-col gap-4 pb-1 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Bezalkoholna pića</h2>
        <div className="h-[0.5px] bg-white" />
        <table className="text-white text-sm md:text-[16px] leading-5 sm:leading-6">
          <tbody>
            <tr>
              <td>Coca Cola</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Coca Cola Zero</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Fanta</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Sprite</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Schweppes</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Orangina</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Prirodni sok</td>
              <td className="text-right">20,00 kn</td>
              <td className="text-right">2,66 €</td>
            </tr>
            <tr>
              <td>Pago sokovi</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Cockta</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Limunada</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Red Bull</td>
              <td className="text-right">25,00 kn</td>
              <td className="text-right">3,33 €</td>
            </tr>
            <tr>
              <td>Cedevita</td>
              <td className="text-right">14,00 kn</td>
              <td className="text-right">1,86 €</td>
            </tr>
            <tr>
              <td>Mineralna voda</td>
              <td className="text-right">12,00 kn</td>
              <td className="text-right">1,60 €</td>
            </tr>
            <tr>
              <td>Mineralna voda s okusom</td>
              <td className="text-right">13,00 kn</td>
              <td className="text-right">1,73 €</td>
            </tr>
            <tr>
              <td>Romerquelle lim.trava</td>
              <td className="text-right">15,00 kn</td>
              <td className="text-right">2,00 €</td>
            </tr>
            <tr>
              <td>Jana</td>
              <td className="text-right">14,00 kn</td>
              <td className="text-right">1,86 €</td>
            </tr>
            <tr>
              <td>Jana Vitamin</td>
              <td className="text-right">15,00 kn</td>
              <td className="text-right">2,00 €</td>
            </tr>
            <tr>
              <td>Thomas Henry Tonic</td>
              <td className="text-right">22,00 kn</td>
              <td className="text-right">2,93 €</td>
            </tr>
            <tr>
              <td>Hidra</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Ledeni čaj Monin</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BezalkoholnaPica;
