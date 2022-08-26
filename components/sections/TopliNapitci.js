import Image from "next/image";

const TopliNapitci = () => {
  return (
    <div
      className="min-h-full snap-start bg-[#0C191F] relative"
      id="topli-napitci"
    >
      <Image
        src="/topli-napitci.jpg"
        alt="Topli napitci"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-center object-contain sm:object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#0C191F50]" />
      <div className="p-6 flex flex-col gap-4 pb-1 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Topli napitci</h2>
        <div className="h-[0.5px] bg-white" />
        <table className="text-white text-sm md:text-[16px] leading-5 sm:leading-6">
          <tbody>
            <tr>
              <td>Kava espresso</td>
              <td className="text-right">10,00 kn</td>
              <td className="text-right">1,33 €</td>
            </tr>
            <tr>
              <td>Espresso bez kof.</td>
              <td className="text-right">12,00 kn</td>
              <td className="text-right">1,60 €</td>
            </tr>
            <tr>
              <td>Kava s mlijekom</td>
              <td className="text-right">12,00 kn</td>
              <td className="text-right">1,33 €</td>
            </tr>
            <tr>
              <td>Kava s mlijekom mala</td>
              <td className="text-right">11,00 kn</td>
              <td className="text-right">1,46 €</td>
            </tr>
            <tr>
              <td>Kava s mlijekom bez kof.</td>
              <td className="text-right">13,00 kn</td>
              <td className="text-right">1,73 €</td>
            </tr>
            <tr>
              <td>Kava sa šlagom mala</td>
              <td className="text-right">10,00 kn</td>
              <td className="text-right">1,33 €</td>
            </tr>
            <tr>
              <td>Kava sa šlagom</td>
              <td className="text-right">13,00 kn</td>
              <td className="text-right">1,73 €</td>
            </tr>
            <tr>
              <td>Cappuccino</td>
              <td className="text-right">13,00 kn</td>
              <td className="text-right">1,73 €</td>
            </tr>
            <tr>
              <td>Nescafe (razni okusi )</td>
              <td className="text-right">15,00 kn</td>
              <td className="text-right">2,00 €</td>
            </tr>
            <tr>
              <td>Bijela kava</td>
              <td className="text-right">15,00 kn</td>
              <td className="text-right">2,00 €</td>
            </tr>
            <tr>
              <td>Ledena kava</td>
              <td className="text-right">16,00 kn</td>
              <td className="text-right">2,13 €</td>
            </tr>
            <tr>
              <td>Vruća čokolada</td>
              <td className="text-right">18,00 kn</td>
              <td className="text-right">2,40 €</td>
            </tr>
            <tr>
              <td>Kakao</td>
              <td className="text-right">15,00 kn</td>
              <td className="text-right">2,00 €</td>
            </tr>
            <tr>
              <td>Čaj</td>
              <td className="text-right">13,00 kn</td>
              <td className="text-right">1,73 €</td>
            </tr>
            <tr>
              <td>Čaj Superiore</td>
              <td className="text-right">15,00 kn</td>
              <td className="text-right">2,00 €</td>
            </tr>
            <tr>
              <td>Šlag</td>
              <td className="text-right">2,00 kn</td>
              <td className="text-right">0,27 €</td>
            </tr>
            <tr>
              <td>Med</td>
              <td className="text-right">2,00 kn</td>
              <td className="text-right">0,27 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopliNapitci;
