import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { resolveCjenik } from "../cjenik.config";
import { ANCHOR_DATE, getMenu } from "../lib/menus";

export default function Home({ menu, basePath, anchorDate }) {
  return (
    <Layout sections={menu.sections} basePath={basePath}>
      <Hero
        locations={menu.locations}
        basePath={basePath}
        anchorDate={anchorDate}
      />
      {menu.sections.map((section) => (
        <Section
          key={section.type}
          section={section}
          basePath={basePath}
          anchorDate={anchorDate}
        />
      ))}
    </Layout>
  );
}

// Cjenik se bira pri buildu, pa u stranicu ulaze samo podaci odabranog cjenika.
export async function getStaticProps() {
  const { id, basePath } = resolveCjenik(process.env.CJENIK);

  return {
    props: {
      menu: getMenu(id),
      basePath,
      anchorDate: ANCHOR_DATE,
    },
  };
}
