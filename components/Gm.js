import { Box, Heading, Text, List, ListItem, Link } from "@chakra-ui/react";

export default function Gm() {
  return (
    <Box>
      <Heading as="h1" size="4xl" mb={6}>
        gm 💪
      </Heading>

      <Text mb={6}>
        I&apos;m tokenizing my life. swolDAO is a 1000 cap ERC721a collection
        that grants you access to everything I am buidling in web3 along with
        the following other benefits:
      </Text>

      <List mb={6} spacing={3}>
        <ListItem>
          Token Gated{" "}
          <Link color="blue" href="https://discord.gg/4vpauWMbU9">
            Discord
          </Link>{" "}
          full of some of the best swolmies web3 has to offer
        </ListItem>

        <ListItem>
          5% of all my future profits will be put into the swolDAO gnosis safe
          for members to vote on how best to use. 1 NFT = 1 VOTE
        </ListItem>
      </List>

      <Box mb={3}>
        <Link
          color="blue"
          href="https://etherscan.io/address/0xc80dc97599c64288f13f5bb5ea3106b77f3bcae1"
        >
          0xc80dc97599c64288f13f5bb5ea3106b77f3bcae1
        </Link>
      </Box>
    </Box>
  );
}
