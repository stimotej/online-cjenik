import Image from "next/image";
import { voda } from "../../lib/tableData";
// import { voda } from "../../lib/mzoTableData";
import Table from "../Table";

const Voda = () => {
  return (
    <div className="min-h-full snap-start bg-[#1A272F] relative" id="voda">
      <Image
        src="/caffe-barovi/cjenik/voda.jpg"
        alt="Voda"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-center object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#1A272F50]" />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Voda</h2>
        <div className="h-[0.5px] bg-white" />
        <Table data={voda} />
      </div>
    </div>
  );
};

export default Voda;
