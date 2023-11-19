import { Heading, VStack } from '@chakra-ui/react';
import { Content } from '../_components/Content';

export default function Home() {
  return (
    <VStack>
      <Heading>without ColorModeScript</Heading>
      <Content />
    </VStack>
  );
}
