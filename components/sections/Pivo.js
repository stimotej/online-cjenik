import Image from "next/image";
// import { pivo } from "../../lib/tableData";
import { pivo } from "../../lib/mzoTableData";
import Table from "../Table";

const Pivo = () => {
  return (
    <div className="min-h-full snap-start bg-[#1C1D22] relative" id="pivo">
      <Image
        src="/pivo.jpg"
        alt="Pivo"
        layout="fill"
        className="pointer-events-none z-0 object-left-top object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#1C1D2250]" />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl">Pivo</h2>
        <div className="h-[0.5px] bg-white" />
        <Table data={pivo} />
      </div>
    </div>
  );
};

export default Pivo;
