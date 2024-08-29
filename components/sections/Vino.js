import Image from "next/image";
import { vino } from "../../lib/tableData";
// import { vino } from "../../lib/mzoTableData";
import Table from "../Table";

const Vino = () => {
  return (
    <div className="min-h-full snap-start bg-[#14141E] relative" id="vino">
      <Image
        src="/caffe-barovi/cjenik/vino.jpg"
        alt="Vino"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-center object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#14141E50]" />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Vino</h2>
        <div className="h-[0.5px] bg-white" />
        <Table data={vino} />
      </div>
    </div>
  );
};

export default Vino;
