import { Container, Button, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import {
  useAccount,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";
import abiFile from "../abiFile.json";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xC80DC97599c64288f13f5Bb5EA3106B77F3bcAe1";
const count = 1;

const contractConfig = {
  addressOrName: CONTRACT_ADDRESS,
  contractInterface: abiFile.abi,
};

function App() {
  const { address } = useAccount();
  const isConnected = !!address;
  const { config } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
    args: [count],
    overrides: {
      gasLimit: 90000,
      value: ethers.utils.parseEther("0.01"),
    },
  });
  const { write: mint } = useContractWrite(config);
  const [mintLoading, setMintLoading] = useState(false);

  return (
    <Container paddingY="10">
      <ConnectButton />

      <Button
        w="100%"
        marginTop="6"
        disabled={!mint}
        onClick={() => mint?.()}
        textColor="white"
        bg="blue.500"
        _hover={{
          bg: "blue.700",
        }}
      >
        💪 Mint
      </Button>
    </Container>
  );
}

export default App;
