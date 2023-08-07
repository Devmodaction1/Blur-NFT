import Head from "next/head";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { NFTProvider } from "../context/NFTcontext";
import "../styles/globals.css";
import { Navbar, Footer } from "../components";

const App = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div
        style={{
          backgroundImage: "url('/blurBackground.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="dark:bg-nft-dark"
      >
        <Head>
          <title>pokemonmarket.com</title>
          <meta
            name="description"
            content="Market NFT where you can buy and sell new NFTs."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />

          {/* FONT */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Vithkuqi&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NextNProgress
          color="#EB1484"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
          options={{ showSpinner: false }}
        />
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  </NFTProvider>
);

export default App;
