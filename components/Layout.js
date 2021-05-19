import Navbar from "./Navbar";
import Head from "next/head";

import layoutStyle from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/akhilarjun/Smart-Grid@latest/smart-framework-1.0/smart-grid.css"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Description"
          content="A Digital Branding Consultant and Marketing Specialist"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arunarjun.com/" />
        <meta property="og:title" content="Arun Arjun" />
        <meta
          property="og:description"
          content="A Digital Branding Consultant and Marketing Specialist"
        />
        <meta
          property="og:image"
          content="https://www.arunarjun.com/img/arunarjun.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.arunarjun.com/" />
        <meta property="twitter:title" content="Arun Arjun" />
        <meta
          property="twitter:description"
          content="A Digital Branding Consultant and Marketing Specialist"
        />
        <meta
          property="twitter:image"
          content="https://www.arunarjun.com/img/arunarjun.jpeg"
        />

        <script src="/js/vanilla_tilt.min.js"></script>
      </Head>
      <Navbar />
      <div className={layoutStyle.container}>
        <div className={layoutStyle.main}>{children}</div>
      </div>
    </>
  );
};
export default Layout;
