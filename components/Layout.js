import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-bod h-full">
      <Head>
        <title>Cjenik | Caffe barovi</title>
        <meta name="description" content="Caffe barovi - online cjenik" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="snap-y overflow-y-scroll scroll-smooth h-full min-h-full relative">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
