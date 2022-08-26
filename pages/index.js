import Layout from "../components/Layout";
import AlkoholnaPica from "../components/sections/AlkoholnaPica";
import BezalkoholnaPica from "../components/sections/BezalkoholnaPica";
import Hero from "../components/sections/Hero";
import Kolaci from "../components/sections/Kolaci";
import Pivo from "../components/sections/Pivo";
import TopliNapitci from "../components/sections/TopliNapitci";
import Vino from "../components/sections/Vino";
import Voda from "../components/sections/Voda";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TopliNapitci />
      <BezalkoholnaPica />
      <Voda />
      <Pivo />
      <AlkoholnaPica />
      <Vino />
      <Kolaci />
    </Layout>
  );
}
