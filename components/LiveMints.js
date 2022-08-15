/* eslint-disable react/display-name */
import { useEffect, useState } from "react";
import BlocknativeSdk from "bnc-sdk";
import Web3 from "web3";
import { Box, Divider } from "@chakra-ui/react";
import Mints from "./Mints";

export let LiveMints;

if (typeof window === "undefined") {
  LiveMints = () => {
    return (
      <Box>
        <Divider orientation="horizontal" my={6} />
      </Box>
    );
  };
} else {
  const web3 = new Web3(window.ethereum);

  // create options object
  const options = {
    dappId: "6d8caff6-bb6b-4ac2-841f-d6a55cc536a1",
    networkId: process.env.NEXT_PUBLIC_CHAIN == "mainnet" ? 1 : 4,
    // un-comment if you would like to log all transaction events
    // transactionHandlers: [event => console.log(event.transaction)]
  };

  // initialize and connect to the api
  const blocknative = new BlocknativeSdk(options);

  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  LiveMints = () => {
    const [txn, setTxn] = useState({});
    const [txnData, setTxnData] = useState({});
    useEffect(() => {
      const { emitter, details } = blocknative.account(address);

      emitter.on("all", (transaction) => {
        if (transaction.status === "confirmed") setTxn(transaction);
      });
    });

    console.log({ txn });

    return (
      <Box>
        <Divider orientation="horizontal" my={6} />

        {txn?.hash ? <Mints hash={txn?.hash} /> : null}
      </Box>
    );
  };
}
