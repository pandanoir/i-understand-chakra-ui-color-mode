import { Button, Select } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ColorModeToggleButton } from './ColorModeToggleButton';

export const Content = () => (
  <>
    <ColorModeToggleButton />

    <Link href='/complete' as={NextLink}>
      complete
    </Link>
    <Link href='/without-color-mode-script' as={NextLink}>
      without ColorModeScript
    </Link>
    <Link href='/without-initial-color-mode' as={NextLink}>
      without initial color mode
    </Link>

    <Button colorScheme='blue'>primary</Button>
    <Select placeholder='Select option'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  </>
);
