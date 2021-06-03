import Head from "next/head";
import Header from "./navigation/Header";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Cleaners</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
