import { Fragment } from "react";
import Image from "next/image";
import clsx from "clsx";
import Table from "./Table";
import { SECTION_STYLES } from "./sectionStyles";

const Section = ({ section, basePath, anchorDate }) => {
  const style = SECTION_STYLES[section.type];

  return (
    <div
      className={clsx("min-h-full snap-start relative", style.bg)}
      id={style.id}
    >
      <Image
        src={`${basePath}/${style.image}`}
        alt={style.alt}
        layout="fill"
        className={clsx("pointer-events-none z-0", style.imageClass)}
      />
      <div className={clsx("z-20 absolute inset-0", style.overlay)} />
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        {section.groups.map((group, index) => (
          <Fragment key={group.title}>
            <h2
              className={clsx(
                "font-title text-white text-4xl",
                index > 0 && "mt-12"
              )}
            >
              {group.title}
            </h2>
            <div className="h-[0.5px] bg-white" />
            <Table data={group.items} anchorDate={anchorDate} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Section;
