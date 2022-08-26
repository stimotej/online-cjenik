import Layout from "../components/Layout";
import AlkoholnaPica from "../components/sections/AlkoholnaPica";
import BezalkoholnaPica from "../components/sections/BezalkoholnaPica";
import Hero from "../components/sections/Hero";
import Pivo from "../components/sections/Pivo";
import TopliNapitci from "../components/sections/TopliNapitci";
import Vino from "../components/sections/Vino";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TopliNapitci />
      <BezalkoholnaPica />
      <Pivo />
      <AlkoholnaPica />
      <Vino />
    </Layout>
  );
}
