import Head from "next/head";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Hachem Sekki | Software Engineer</title>
      </Head>
      <NavBar />
      {props.children}
    </>
  );
};

export default Layout;
