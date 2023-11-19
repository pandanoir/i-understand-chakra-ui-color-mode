import { Heading, VStack } from '@chakra-ui/react';
import { Content } from '../_components/Content';

export default function Home() {
  return (
    <VStack>
      <Heading>without initial color mode</Heading>
      <Content />
    </VStack>
  );
}
