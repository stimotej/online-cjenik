import Image from "next/image";
import { topliNapitci } from "../../lib/tableData";
// import { topliNapitci } from "../../lib/mzoTableData";
import Table from "../Table";

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
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Topli napitci</h2>
        <div className="h-[0.5px] bg-white" />
        <Table data={topliNapitci} />
      </div>
    </div>
  );
};

export default TopliNapitci;
