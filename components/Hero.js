import Image from "next/image";
import { motion } from "framer-motion";

const Hero = ({ locations, basePath, anchorDate }) => {
  return (
    <div className="h-full relative snap-start" id="vrh">
      <Image
        src={`${basePath}/hero-bg.jpg`}
        alt="Šalica kave"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none z-0 object-left-bottom sm:object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="text-white relative z-10 p-6 box-border flex justify-center h-full">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-end mt-20 whitespace-nowrap">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-title text-[5rem] sm:text-8xl"
            >
              Caffe barovi
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="uppercase font-bold tracking-wide sm:tracking-wider text-md sm:text-lg -mt-9 sm:-mt-5"
            >
              Online cjenik
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-1 items-center"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Image
                src={`${basePath}/sc-logo.svg`}
                alt="Logotip Studentskog Centra u Zagrebu"
                width={60}
                height={60}
                className="text-white"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold"
            >
              Savska cesta 25
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-xs text-white/50 md:text-white mt-4 max-w-2xl"
            >
              <p className="uppercase font-bold">
                Cijene se odnose na sljedeće lokacije:
              </p>
              <p className="mt-1">{locations}</p>
              <p className="mt-3">
                Uz aktualnu cijenu istaknuta je i cijena na dan {anchorDate}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
