import Image from "next/image";
import { alkoholnaPica } from "../../lib/tableData";
// import { alkoholnaPica } from "../../lib/mzoTableData";
import Table from "../Table";

const AlkoholnaPica = () => {
  return (
    <div
      className="min-h-full snap-start bg-[#0A0B0D] relative"
      id="alkoholna-pica"
    >
      <Image
        src="/caffe-barovi/cjenik/alkoholna-pica.jpg"
        alt="Alkoholno Piće"
        layout="fill"
        className="pointer-events-none z-0 object-left-bottom sm:object-left-top object-contain sm:object-cover"
      />
      <div className="z-20 absolute inset-0 bg-[#0A0B0D50]" />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <h2 className="font-title text-white text-4xl ">Alkoholna pića</h2>
        <div className="h-[0.5px] bg-white" />
        <Table data={alkoholnaPica} />
      </div>
    </div>
  );
};

export default AlkoholnaPica;
