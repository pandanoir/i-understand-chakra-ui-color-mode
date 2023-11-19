import { Button, Heading, Select, VStack } from '@chakra-ui/react';
import { Header } from './Header';

export default function Home() {
  return (
    <VStack>
      <Heading>heading</Heading>
      <Header />
      <Button colorScheme='blue'>primary</Button>
      <Select placeholder='Select option'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
    </VStack>
  );
}
