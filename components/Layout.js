import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-bod h-full">
      <Head>
        <title>Online cjenik</title>
        <meta name="description" content="Caffe bar - online cjenik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="snap-y overflow-y-scroll scroll-smooth h-full min-h-full relative">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
