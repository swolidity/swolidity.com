import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";

import App from "../components/App";

const { chains, provider } = configureChains(
  [chain.mainnet], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth", // go to <https://www.ankr.com/protocol/> to get a free RPC for your network
        };
      },
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "swolDAO",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>swolidity</title>
        <meta name="description" content="swolidity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <ChakraProvider>
            <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains}>
                <App />
              </RainbowKitProvider>
            </WagmiConfig>
          </ChakraProvider>
        </div>
      </main>
    </div>
  );
}
