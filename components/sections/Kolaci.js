import Image from "next/image";
import { kolaci } from "../../lib/tableData";
import { akcija } from "../../lib/tableData";
// import { kolaci } from "../../lib/mzoTableData";
import Table from "../Table";
import { torte } from "../../lib/tableData";
import { sladoled } from "../../lib/tableData";

const Kolaci = () => {
  return (
    <div
      className="min-h-full snap-start bg-[#1C1C1C] relative"
      id="deserti-i-sladoledi"
    >
      <Image
        src="/caffe-barovi/cjenik/kolaci.jpg"
        alt="Kolači"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-center object-contain sm:object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#1C1C1C50]" />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl">Kolači</h2>
        <div className="h-[0.5px] bg-white" />
        <div className="text-xs text-white/50 sm:w-3/4">
          <p className="font-bold">
            Cijene kolača se odnose na Caffe bar SC i VIP (interno, 50%)
          </p>
        </div>
        <Table data={kolaci} />
        <h2 className="font-title text-white text-4xl">Akcija</h2>
        <Table data={akcija} />
        <h2 className="font-title text-white text-4xl">Torte</h2>
        <Table data={torte} />
        <h2 className="font-title text-white text-4xl">Sladoled</h2>
        <Table data={sladoled} />
        <div className="text-xs text-white/50 sm:w-3/4">
          <p className="font-bold">
            * Sladoledi označeni sa zvjezdicom odnose se samo na ponudu za Caffe
            bar Agronomija i šumarstvo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kolaci;
