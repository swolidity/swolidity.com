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
import { useDebounce } from "use-debounce";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const CONTRACT_ADDRESS = "0xC80DC97599c64288f13f5Bb5EA3106B77F3bcAe1";

const contractConfig = {
  addressOrName: CONTRACT_ADDRESS,
  contractInterface: abiFile.abi,
};

function App() {
  const { address } = useAccount();
  const isConnected = !!address;
  const [count, setCount] = useState(1);
  const [debouncedCount] = useDebounce(count, 500);
  const { config } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
    args: [count],
    overrides: {
      gasLimit: 90000 * count,
      value: ethers.utils.parseEther((0.01 * count).toString()),
    },
  });
  const { write: mint } = useContractWrite(config);
  const [mintLoading, setMintLoading] = useState(false);

  const handleCountChange = (value) => {
    setCount(value);
  };

  return (
    <Container paddingY="10">
      <ConnectButton />

      <NumberInput
        value={count}
        min={1}
        max={20}
        mt="6"
        onChange={handleCountChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

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
