import { useWaitForTransaction } from "wagmi";
import { Box, VStack, Divider, Heading } from "@chakra-ui/react";

export default function Mints({ hash }) {
  const { data, isLoading, isError } = useWaitForTransaction({
    hash,
  });

  if (!data) return <Box></Box>;

  return <Box>{data.from} just minted</Box>;
}
