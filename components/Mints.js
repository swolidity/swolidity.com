import { useWaitForTransaction } from "wagmi";
import { Box, VStack, Divider, Heading } from "@chakra-ui/react";

export default function Mints({ hash }) {
  const { data, isLoading, isError } = useWaitForTransaction({
    hash,
  });

  console.log({ data });

  return <Box>{data.from} just minted</Box>;
}
