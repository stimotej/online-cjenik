import Image from "next/image";
import { bezalkoholnaPica } from "../../lib/tableData";
// import { bezalkoholnaPica } from "../../lib/mzoTableData";
import Table from "../Table";

const BezalkoholnaPica = () => {
  return (
    <div
      className="min-h-full snap-start bg-[#363442] relative"
      id="bezalkoholna-pica"
    >
      <Image
        src="/caffe-barovi/cjenik/bezalkoholna-pica.jpg"
        alt="Bezalkoholno piće"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-center object-contain sm:object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#36344280]" />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Bezalkoholna pića</h2>
        <div className="h-[0.5px] bg-white" />
        <Table data={bezalkoholnaPica} />
      </div>
    </div>
  );
};

export default BezalkoholnaPica;
