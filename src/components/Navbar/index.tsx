import { Flex, Image } from '@chakra-ui/react';
export default function Navbar() {
  return (
    <>
      <Flex
        w="100vw"
        h="70px"
        bg="cor.P1"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Flex>
          <Image h="50px" src="/logoBranco2.png" />
        </Flex>
      </Flex>
    </>
  );
}
