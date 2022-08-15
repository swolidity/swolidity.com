import { Box, Heading, Text, List, ListItem, Link } from "@chakra-ui/react";

export default function Gm() {
  return (
    <Box>
      <Heading as="h1" size="4xl" mb={6}>
        gm 💪
      </Heading>

      <Text mb={6}>
        I'm tokenizing my life. swolDAO is a 1000 cap ERC721a collection that
        grants you access to everything I am buidling in web3 along with the
        following other benefits:
      </Text>

      <List mb={6} spacing={3}>
        <ListItem>
          Token Gated{" "}
          <Link color="blue" href="https://discord.gg/uDgyQ4Ks">
            Discord
          </Link>{" "}
          full of some of the best swolmies web3 has to offer
        </ListItem>

        <ListItem>
          Free NFT contract launches (you pay contract creation gas cost and
          swolDAO charges 5% of mint profits)
        </ListItem>

        <ListItem>
          5% of all my future profits will be put into the swolDAO gnosis safe
          for members to vote on how best to use. 1 NFT = 1 VOTE
        </ListItem>
      </List>
    </Box>
  );
}
